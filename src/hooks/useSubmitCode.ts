import { useState } from "react";

export function useSubmitCode(
  slug: string,
  code: string,
  setResults: (results: any[] | null, finalResult?: string) => void,
  setSubmissionResult: (result: any) => void
) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    setResults(null);
    setSubmissionResult(null);

    try {
      // Lấy thông tin bài tập để lấy EID từ slug
      const exRes = await fetch(`/api/exercise/${slug}`);
      if (!exRes.ok) throw new Error("Không tìm thấy bài tập");
      const exData = await exRes.json();
      const exercise = exData.exercise;
      const eid = exercise.EID;

      // Tạo submission mới để lấy SID
      const subRes = await fetch('/api/submissions/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, eid }),
      });
      const subData = await subRes.json();
      const SID = subData.submission?.SID;

      // Lấy testcases
      const tcRes = await fetch(`/api/testcases/by-exercise/${eid}`);
      const tcData = await tcRes.json();
      const tcs = tcData.testcases;

      // Gửi code lên PistonAPI cho từng testcase
      const runResults: (any | null)[] = [];
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
      for (let tc of tcs) {
        try {
          const pistonRes = await fetch("https://emkc.org/api/v2/piston/execute", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              language: "c",
              version: "10.2.0",
              files: [{ name: "main.c", content: code }],
              stdin: tc.Input,
            }),
          });
          const pistonData = await pistonRes.json();
          runResults.push(pistonData);
        } catch {
          runResults.push(null);
        }
        await sleep(100);
      }

      // Xử lý kết quả
      const resultsData = await Promise.all(
        tcs.map(async (tc: any, idx: number) => {
          const runData = runResults[idx]?.run || {};
          const expected = (tc.ExpectedOutput || "").trim();
          const stderr = (runData.stderr || "").trim();
          const actual = (runData.output || "").trim();

          let result = "Wrong";
          if (runData.code !== 0 || stderr) result = "Error";
          else if (actual === expected) result = "Correct";

          // Gửi kết quả testcase lên server
          await fetch(`/api/testcaseresult/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              SID,
              TCID: tc.TCID,
              ActualOutput: actual || stderr || "Error",
              Result: result,
            }),
          });

          return {
            TCRID: idx + 1, // Temporary ID for local use
            TCID: tc.TCID,
            ActualOutput: actual || stderr || "Error",
            Result: result,
            testcase: tc,
          };
        })
      );

      const allCorrect = resultsData.every((row) => row.Result === "Correct");
      const finalResult = allCorrect ? "Pass" : "Fail";
      setResults(resultsData, finalResult);

      //cập nhật submission kết quả tổng thể
      await fetch(`/api/submissions/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          SID,
          Result: finalResult,
        }),
      });
    } catch (err) {
      console.error("Submit error:", err);
      setResults([]);
      setSubmissionResult("Fail");
    }

    setSubmitting(false);
  };

  return { handleSubmit, submitting };
}