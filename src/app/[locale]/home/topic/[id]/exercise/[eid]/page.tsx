"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Button, Paper, CircularProgress, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import Editor from "@monaco-editor/react";
import axios, { AxiosResponse } from "axios";
import { useParams } from "next/navigation";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

// Interfaces
interface Exercise {
  EID: number;
  Content: string;
  Difficulty: string;
}

interface Testcase {
  TCID: number;
  Input: string;
  ExpectedOutput: string;
  isHidden: boolean;
}

interface ResultRow {
  index: number;
  expected: string;
  actual: string;
  result: string;
}

export default function ExercisePage() {
  const { id, eid } = useParams();

  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState<string>(`#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}`);
  const [submitting, setSubmitting] = useState(false);
  const [results, setResults] = useState<ResultRow[] | null>(null);
  const [testcases, setTestcases] = useState<Testcase[] | null>(null);
  const [submissionResult, setSubmissionResult] = useState<string | null>(null); // Thêm state cho kết quả bài tập

  // Fetch exercise info
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const res = await axios.get(`/api/topics/${id}/exercise/${eid}`);
        setExercise(res.data.exercise);
      } finally {
        setLoading(false);
      }
    };
    fetchExercise();
  }, [id, eid]);

  // Fetch testcases
  useEffect(() => {
    axios
      .get(`/api/topics/${id}/exercise/${eid}/testcase`)
      .then((res) => setTestcases(res.data.testcases))
      .catch(() => setTestcases([]));
  }, [id, eid]);

  // Load latest submission + results
  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        const res = await axios.get(`/api/topics/${id}/exercise/${eid}/submission/get`);
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

          // Cập nhật submissionResult dựa trên kết quả testcase
          const allCorrect = rows.every((row) => row.result === "Correct");
          setSubmissionResult(allCorrect ? "Pass" : "Fail");
        }
      } catch {
        setCode(`#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}`);
        setResults(null);
        setSubmissionResult(null); // Reset kết quả nếu không có submission
      }
    };
    fetchSubmission();
  }, [id, eid]);

  // Submit code to API and check result
  const handleSubmit = async () => {
    setSubmitting(true);
    setResults(null);
    setSubmissionResult(null); // Reset kết quả trước khi submit

    try {
      const submissionRes = await axios.post(`/api/topics/${id}/exercise/${eid}/submission/create`, { code });
      const SID = submissionRes.data.submission.SID;

      const tcRes = await axios.get(`/api/topics/${id}/exercise/${eid}/testcase`);
      const tcs: Testcase[] = tcRes.data.testcases;
      setTestcases(tcs);

      const runResults: (AxiosResponse | null)[] = [];
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
        await sleep(500);
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

      // Cập nhật submissionResult dựa trên kết quả testcase
      const allCorrect = resultsData.every((row) => row.result === "Correct");
      const finalResult = allCorrect ? "Pass" : "Fail";
      setSubmissionResult(finalResult);

      // Gửi kết quả lên backend để cập nhật submission result
      await axios.put(`/api/submission/update`, {
        SID,
        Result: finalResult,
      });
    } catch (err) {
      console.error("Submit error:", err);
      setResults([]);
      setSubmissionResult("Fail"); // Nếu có lỗi, coi như thất bại
    }

    setSubmitting(false);
  };

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={100} sx={{ color: "#cc2b5e" }} />
      </Box>
    );
  }

  if (!exercise) return <Typography>Bài tập không tồn tại.</Typography>;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <ResizableBox
        width={400}
        height={Infinity}
        axis="x"
        resizeHandles={["e"]}
        minConstraints={[200, Infinity]}
        maxConstraints={[600, Infinity]}
        style={{ display: "flex", flexDirection: "column", borderRight: "1px solid #e5e7eb", overflow: "hidden" }}
      >
        <Paper elevation={2} sx={{ flex: 1, p: 4, borderRadius: 0, minWidth: 0 }}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Bài tập #{exercise.EID}
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {exercise.Content}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={2}>
            Độ khó: {exercise.Difficulty}
          </Typography>

          {testcases && testcases.length > 0 && (
            <Box mt={4}>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Ví dụ
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Input</TableCell>
                    <TableCell>Output</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {testcases.slice(0, 2).map(
                    (
                      tc,
                      idx // Chỉ lấy 2 testcase đầu tiên
                    ) => (
                      <TableRow key={tc.TCID}>
                        <TableCell>{idx + 1}</TableCell>
                        <TableCell>
                          <pre>{tc.Input}</pre>
                        </TableCell>
                        <TableCell>
                          <pre>{tc.ExpectedOutput}</pre>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </Box>
          )}
        </Paper>
      </ResizableBox>

      <Box sx={{ flex: 1, p: 4, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <Editor
          height="350px"
          defaultLanguage="c"
          value={code}
          onChange={(value) => setCode(value ?? "")}
          theme="vs-dark"
          options={{ fontSize: 16, minimap: { enabled: false }, fontFamily: "Fira Mono, monospace" }}
        />

        <Button variant="contained" color="primary" sx={{ mt: 3, minWidth: 120 }} onClick={handleSubmit} disabled={submitting}>
          {submitting ? "Đang gửi..." : "Submit"}
        </Button>

        {submissionResult && (
          <Typography variant="h6" sx={{ mt: 2, color: submissionResult === "Pass" ? "green" : "red", fontWeight: "bold" }}>
            Kết quả: {submissionResult}
          </Typography>
        )}

        {results && (
          <Box mt={4}>
            <Typography variant="h6" mb={2}>
              Kết quả Testcase
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell>Input</TableCell>
                  <TableCell>Output mong đợi</TableCell>
                  <TableCell>Output thực tế</TableCell>
                  <TableCell>Kết quả</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results
                  .filter((_, idx) => testcases?.[idx]?.isHidden === false) // Lọc testcase có isHidden = 0
                  .map((row: ResultRow, idx: number) => (
                    <TableRow key={row.index}>
                      <TableCell>{row.index}</TableCell>
                      <TableCell>
                        <pre>{testcases?.[idx].Input}</pre>
                      </TableCell>
                      <TableCell>
                        <pre>{row.expected}</pre>
                      </TableCell>
                      <TableCell sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                        <pre>{row.actual}</pre>
                      </TableCell>
                      <TableCell>
                        <span
                          style={{
                            color: row.result === "Correct" ? "green" : row.result === "Wrong" ? "red" : "orange",
                            fontWeight: "bold",
                          }}
                        >
                          {row.result}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Box>
        )}
      </Box>
    </Box>
  );
}
