import { useEffect, useState } from "react";
import axios from "axios";

// Import các types từ model.ts
import { TestcaseResult, SubmissionResult, Testcase } from "@/types/model";

export function useSubmission(eid: string) {
  const [code, setCode] = useState<string>("");
  const [results, setResults] = useState<TestcaseResult[] | null>(null); // Sử dụng type TestcaseResult từ model.ts
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null); // Sử dụng type SubmissionResult từ model.ts

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        // Fetch exercise template
        const exerciseRes = await axios.get(`/api/exercise/${eid}`);
        const templateCode =
          exerciseRes.data.exercise?.template ||
          `#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}`;
        setCode(templateCode);

        // Fetch submissions
        const res = await axios.get(`/api/submissions/by-exercise/${eid}`);
        const submissions = res.data.submissions;

        if (submissions.length > 0) {
          const latest = submissions[0];
          setCode(latest.Code || templateCode);

          const tcrRes = await axios.get(`/api/testcaseresult/${latest.SID}`);
          const rows: TestcaseResult[] = tcrRes.data.testcaseresults.map((tcr: any) => ({
            TCRID: tcr.TCRID,
            SID: tcr.SID,
            TCID: tcr.TCID,
            ActualOutput: tcr.ActualOutput || "",
            Result: tcr.Result || "Pending",
            ExecutionTime: tcr.ExecutionTime || null,
            submission: tcr.submission,
            testcase: tcr.testcase as Testcase,
          }));
          setResults(rows);

          const allCorrect = rows.every((row) => row.Result === "Correct");
          setSubmissionResult(allCorrect ? SubmissionResult.Pass : SubmissionResult.Fail);
        }
      } catch {
        setCode(`#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}`);
        setResults(null);
        setSubmissionResult(null);
      }
    };
    fetchSubmission();
  }, [eid]);

  return { code, setCode, results, submissionResult, setResults, setSubmissionResult };
}