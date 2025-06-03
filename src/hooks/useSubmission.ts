import { useEffect, useState } from "react";
import axios from "axios";

interface ResultRow {
  index: number;
  expected: string;
  actual: string;
  result: string;
}

export function useSubmission(eid: string) {
  const [code, setCode] = useState<string>(`#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}`);
  const [results, setResults] = useState<ResultRow[] | null>(null);
  const [submissionResult, setSubmissionResult] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        const res = await axios.get(`/api/submissions/by-exercise/${eid}`);
        const submissions = res.data.submissions;

        if (submissions.length > 0) {
          const latest = submissions[0];
          setCode(latest.Code || "");

          const tcrRes = await axios.get(`/api/testcaseresult/${latest.SID}`);
          const rows: ResultRow[] = tcrRes.data.testcaseresults.map((tcr: any, idx: number) => ({
            index: idx + 1,
            expected: tcr.testcase?.ExpectedOutput || "",
            actual: tcr.ActualOutput || "",
            result: tcr.Result || "N/A",
          }));
          setResults(rows);

          const allCorrect = rows.every((row) => row.result === "Correct");
          setSubmissionResult(allCorrect ? "Pass" : "Fail");
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