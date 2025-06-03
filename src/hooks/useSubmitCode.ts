import { useState } from "react";
import axios from "axios";

interface Testcase {
  TCID: number;
  Input: string;
  ExpectedOutput: string;
}

interface ResultRow {
  index: number;
  expected: string;
  actual: string;
  result: string;
}

export function useSubmitCode(eid: string, code: string, setResults: (results: ResultRow[] | null) => void, setSubmissionResult: (result: string | null) => void) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    setResults(null);
    setSubmissionResult(null);

    try {
      const submissionRes = await axios.post(`/api/submissions/create`, { eid: parseInt(eid, 10), code });
      const SID = submissionRes.data.submission.SID;

      const tcRes = await axios.get(`/api/testcases/by-exercise/${eid}`);
      const tcs: Testcase[] = tcRes.data.testcases;

      const runResults: (any | null)[] = [];
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

      for (let tc of tcs) {
        try {
          const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
            language: "c",
            version: "10.2.0",
            files: [{ name: "main.c", content: code }],
            stdin: tc.Input,
          });
          runResults.push(res);
        } catch {
          runResults.push(null);
        }
        await sleep(100);
      }

      const resultsData: ResultRow[] = await Promise.all(
        tcs.map(async (tc, idx) => {
          const runData = runResults[idx]?.data?.run || {};
          const expected = tc.ExpectedOutput.trim();
          const stderr = runData.stderr?.trim() || "";
          const actual = runData.output?.trim() || "";

          let result = "Wrong";
          if (runData.code !== 0 || stderr) result = "Error";
          else if (actual === expected) result = "Correct";
          else if (actual.includes(expected)) result = "Partial";

          await axios.post(`/api/testcaseresult/create`, {
            SID,
            TCID: tc.TCID,
            ActualOutput: actual || stderr || "Error",
            Result: result,
          });

          return {
            index: idx + 1,
            expected,
            actual: result === "Error" ? stderr || "Có lỗi xảy ra." : actual,
            result,
          };
        })
      );

      setResults(resultsData);

      const allCorrect = resultsData.every((row) => row.result === "Correct");
      const finalResult = allCorrect ? "Pass" : "Fail";
      setSubmissionResult(finalResult);

      await axios.put(`/api/submissions/update`, {
        SID,
        Result: finalResult,
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