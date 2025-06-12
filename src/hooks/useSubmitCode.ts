import { useState } from "react";
import axios from "axios";

// Import các types từ model.ts
import { Testcase, TestcaseResult, TestcaseResultResult, SubmissionResult } from "@/types/model";

export function useSubmitCode(
  eid: string,
  code: string,
  setResults: (results: TestcaseResult[] | null) => void,
  setSubmissionResult: (result: SubmissionResult | null) => void
) {
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

      const resultsData = await Promise.all(
        tcs.map(async (tc, idx) => {
          const runData = runResults[idx]?.data?.run || {};
          const expected = tc.ExpectedOutput.trim();
          const stderr = runData.stderr?.trim() || "";
          const actual = runData.output?.trim() || "";

          let result: TestcaseResultResult = TestcaseResultResult.Wrong;
          if (runData.code !== 0 || stderr) result = TestcaseResultResult.Error;
          else if (actual === expected) result = TestcaseResultResult.Correct;
          else if (actual.includes(expected)) result = TestcaseResultResult.Partial;

          await axios.post(`/api/testcaseresult/create`, {
            SID,
            TCID: tc.TCID,
            ActualOutput: actual || stderr || "Error",
            Result: result,
          });

          return {
            TCRID: idx + 1, // Temporary ID for local use
            SID,
            TCID: tc.TCID,
            ActualOutput: actual || stderr || "Error",
            Result: result,
            testcase: tc,
          };
        })
      );

      setResults(resultsData);

      const allCorrect = resultsData.every((row) => row.Result === TestcaseResultResult.Correct);
      const finalResult: SubmissionResult = allCorrect ? SubmissionResult.Pass : SubmissionResult.Fail;
      setSubmissionResult(finalResult);

      await axios.put(`/api/submissions/update`, {
        SID,
        Result: finalResult,
      });
    } catch (err) {
      console.error("Submit error:", err);
      setResults([]);
      setSubmissionResult(SubmissionResult.Fail);
    }

    setSubmitting(false);
  };

  return { handleSubmit, submitting };
}