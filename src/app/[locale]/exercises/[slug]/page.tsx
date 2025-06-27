"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Button, Typography, Paper, Table, TableHead, TableRow, Tabs, Tab, TableCell, TableBody, CircularProgress, Alert } from "@mui/material";
import { TaskAlt } from "@mui/icons-material";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { useSubmitCode } from "@/hooks/useSubmitCode";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Chip from "@mui/material/Chip";
import CodeEditor from "@/components/ExercisePage/CodeEditor";

export default function ExerciseDetailPage() {
  const { slug } = useParams();
  const [exercise, setExercise] = useState<any>(null);
  const [testcases, setTestcases] = useState<any[]>([]);
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<any[] | null>(null);
  const [submissionResult, setSubmissionResult] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [leftTab, setLeftTab] = useState(0);
  const [rightTab, setRightTab] = useState(0); // 0: Code, 1: Xem lại
  const [reviewSubmission, setReviewSubmission] = useState<any | null>(null);
  const [reviewResults, setReviewResults] = useState<any[] | null>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);

  const { handleSubmit, submitting } = useSubmitCode(
    String(slug || ""),
    code,
    async (results: any[] | null, finalResult?: string) => {
      setResults(results);
      // Sau khi submit xong, cập nhật lại danh sách submissions
      if (exercise) {
        const subRes = await fetch(`/api/submissions/by-exercise/${exercise.EID}`);
        if (subRes.ok) {
          const subData = await subRes.json();
          setSubmissions(subData.submissions || []);
        }
        // Cập nhật trạng thái exercise nếu pass hoặc fail
        if (finalResult === "Pass") {
          setExercise({ ...exercise, status: "Solved" });
        } else if (finalResult === "Fail") {
          setExercise({ ...exercise, status: "" });
        }
      }
    },
    setSubmissionResult
  );

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`/api/exercise/${slug}`);
        if (!res.ok) throw new Error("Không tìm thấy bài tập");
        const data = await res.json();
        setExercise(data.exercise);
        // Lấy submission gần nhất của user và toàn bộ lịch sử
        const subRes = await fetch(`/api/submissions/by-exercise/${data.exercise.EID}`);
        let latestSubmission = null;
        let latestResults = null;
        if (subRes.ok) {
          const subData = await subRes.json();
          setSubmissions(subData.submissions || []);
          if (subData.submissions && subData.submissions.length > 0) {
            latestSubmission = subData.submissions[0];
            setCode(latestSubmission.Code || data.exercise.template || "");
            // Lấy testcase result của submission gần nhất
            const tcrRes = await fetch(`/api/testcaseresult/${latestSubmission.SID}`);
            if (tcrRes.ok) {
              const tcrData = await tcrRes.json();
              latestResults = tcrData.testcaseresults || [];
              setResults(latestResults);
            } else {
              setResults(null);
            }
          } else {
            setCode(data.exercise.template || "");
            setResults(null);
          }
        } else {
          setCode(data.exercise.template || "");
          setResults(null);
        }
        // Lấy testcases
        const tcRes = await fetch(`/api/testcases/by-exercise/${data.exercise.EID}`);
        const tcData = await tcRes.json();
        setTestcases(tcData.testcases || []);
      } catch (e: any) {
        setError(e.message || "Lỗi tải dữ liệu");
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchData();
  }, [slug]);

  // Hàm xem lại submission
  const handleViewHistory = async (submission: any) => {
    setReviewSubmission(submission);
    setRightTab(1);
    // Lấy testcase result của submission này
    const tcrRes = await fetch(`/api/testcaseresult/${submission.SID}`);
    if (tcrRes.ok) {
      const tcrData = await tcrRes.json();
      setReviewResults(tcrData.testcaseresults || []);
    } else {
      setReviewResults([]);
    }
  };

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Alert severity="error" sx={{ mt: 4 }}>
        {error}
      </Alert>
    );
  if (!exercise) return null;

  return (
    <Box sx={{ display: "flex", height: "calc(100vh - 70px)", pt: 2, px: 2, gap: 1 }}>
      {/* Left: Tabs panel */}
      <ResizableBox
        width={400}
        height={Infinity}
        axis="x"
        resizeHandles={["e"]}
        minConstraints={[260, Infinity]}
        maxConstraints={[600, Infinity]}
        style={{
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid #e5e7eb",
          background: "linear-gradient(135deg, #f8fafc 0%, #e3e9f7 100%)",
          borderRadius: 16,
          padding: 0,
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          overflowY: "auto",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        {/* Custom drag handle for left panel */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 12,
            height: "100%",
            background: "#e0e7ef",
            borderRadius: 6,
            cursor: "col-resize",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 4px #b0b0b0",
            pointerEvents: "none",
          }}
        >
          <div style={{ width: 4, height: 40, background: "#90caf9", borderRadius: 2 }} />
        </div>
        <Tabs
          value={leftTab}
          onChange={(_, v) => setLeftTab(v)}
          variant="fullWidth"
          sx={{
            minHeight: 36,
            background: "#f8fafc",
            borderRadius: 2,
            ".MuiTabs-indicator": { display: "none" },
          }}
        >
          <Tab
            label="Mô tả"
            sx={{
              textTransform: "capitalize",
              minHeight: 36,
              fontWeight: leftTab === 0 ? 700 : 500,
              color: leftTab === 0 ? "#232b38" : "#6b7280",
              borderRadius: 2,
              mx: 0.5,
              transition: "all 0.2s",
            }}
          />
          <Tab
            label="Trợ giúp"
            sx={{
              textTransform: "capitalize",
              minHeight: 36,
              fontWeight: leftTab === 1 ? 700 : 500,
              color: leftTab === 1 ? "#232b38" : "#6b7280",
              borderRadius: 2,
              mx: 0.5,
              transition: "all 0.2s",
            }}
          />
          <Tab
            label="Lịch sử"
            sx={{
              textTransform: "capitalize",
              minHeight: 36,
              fontWeight: leftTab === 2 ? 700 : 500,
              color: leftTab === 2 ? "#232b38" : "#6b7280",
              borderRadius: 2,
              mx: 0.5,
              transition: "all 0.2s",
            }}
          />
        </Tabs>
        <Box sx={{ flex: 1, p: 3, overflow: "auto" }}>
          {leftTab === 0 && (
            <>
              <Typography
                variant="h6"
                fontWeight={700}
                mb={1}
                sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}
              >
                {exercise.Name}
                {exercise.status === "Solved" && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: 2 }}>
                    <span style={{ color: "#2e7d32", fontSize: 14, fontWeight: 700 }}>Solved</span>
                    <TaskAlt fontSize="small" sx={{ color: "#2e7d32" }} />
                  </Box>
                )}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                {exercise.Difficulty === "Easy" && (
                  <Box
                    sx={{
                      px: 1,
                      border: "2px solid #43a047",
                      color: "#388e3c",
                      bgcolor: "#e8f5e9",
                      fontSize: 14,
                      borderRadius: 5,
                      display: "inline-block",
                    }}
                  >
                    Easy
                  </Box>
                )}
                {exercise.Difficulty === "Medium" && (
                  <Box
                    sx={{
                      px: 1,
                      border: "2px solid #fb8c00",
                      color: "#ef6c00",
                      bgcolor: "#fff3e0",
                      fontSize: 14,
                      borderRadius: 5,
                      display: "inline-block",
                    }}
                  >
                    Medium
                  </Box>
                )}
                {exercise.Difficulty === "Hard" && (
                  <Box
                    sx={{
                      px: 1,
                      border: "2px solid #e53935",
                      color: "#b71c1c",
                      bgcolor: "#ffebee",
                      fontSize: 14,
                      borderRadius: 5,
                      display: "inline-block",
                    }}
                  >
                    Hard
                  </Box>
                )}
              </Box>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {exercise.Content}
              </Typography>
              {testcases.length > 0 && (
                <Box mt={4}>
                  {testcases
                    .filter((tc: any) => !tc.isHidden)
                    .slice(0, 2)
                    .map((tc: any, idx: number) => (
                      <Paper key={tc.TCID} sx={{ mb: 2, borderRadius: 2, boxShadow: "0 1px 4px rgba(0,0,0,0.07)", p: 1 }}>
                        <Box sx={{ fontWeight: 700, fontSize: 16, px: 1, pt: 1 }}>Ví dụ {idx + 1}:</Box>
                        <Box sx={{ bgcolor: "#f8f9fa", borderRadius: 2, px: 1, py: 1, m: 1}}>
                          <div style={{ fontWeight: 700, marginBottom: 2 }}>
                            <span style={{ fontWeight: 700 }}>Input:</span> <span style={{ fontWeight: 350 }}>{tc.Input}</span>
                          </div>
                          <div style={{ fontWeight: 700 }}>
                            <span style={{ fontWeight: 700 }}>Output:</span> <span style={{ fontWeight: 350 }}>{tc.ExpectedOutput}</span>
                          </div>
                        </Box>
                      </Paper>
                    ))}
                </Box>
              )}
            </>
          )}
          {leftTab === 1 && (
            <Box>
              <Typography variant="h6">Trợ giúp</Typography>
              <Typography>Hãy hỏi AI hoặc xem hướng dẫn để giải quyết lỗi.</Typography>
            </Box>
          )}
          {leftTab === 2 && (
            <Box>
              <Typography variant="h6" mb={2} fontWeight={700} color="#232b38">
                Lịch sử nộp bài
              </Typography>
              <Table size="small" sx={{ background: "#fff", borderRadius: 3, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", overflow: "hidden" }}>
                <TableHead sx={{ background: "#f3f6fa" }}>
                  <TableRow>
                    <TableCell>Kết quả</TableCell>
                    <TableCell>Ngày nộp</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {submissions.map((s: any) => (
                    <TableRow key={s.SID} hover sx={{ transition: "background 0.2s", cursor: "pointer" }} onClick={() => handleViewHistory(s)}>
                      <TableCell>
                        {s.Result === "Pass" ? (
                          <span style={{ color: "#2e7d32", fontWeight: 700 }}>Pass</span>
                        ) : s.Result === "Fail" ? (
                          <span style={{ color: "#d32f2f", fontWeight: 700 }}>Fail</span>
                        ) : (
                          <span style={{ color: "#6b7280", fontWeight: 700 }}>{s.Result}</span>
                        )}
                      </TableCell>
                      <TableCell sx={{ color: "#555", fontSize: 14 }}>{s.CreatedAt ? new Date(s.CreatedAt).toLocaleString() : ""}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}
        </Box>
      </ResizableBox>
      {/* Right: Code editor + Testcase results + Review tab */}
      <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <Tabs
          value={rightTab}
          onChange={(_, v) => setRightTab(v)}
          sx={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            minHeight: 36,
            background: "#f8fafc",
            ".MuiTabs-indicator": { display: "none" },
          }}
        >
          <Tab
            label="Code"
            sx={{
              textTransform: "capitalize",
              minHeight: 36,
              fontWeight: rightTab === 0 ? 700 : 500,
              color: rightTab === 0 ? "#232b38" : "#6b7280",
              borderRadius: 2,
              mx: 0.5,
              transition: "all 0.2s",
            }}
          />
          {reviewSubmission && (
            <Tab
              label={
                <Box sx={{ display: "flex", alignItems: "center", textTransform: "capitalize" }}>
                  Xem lại
                  <Box
                    onClick={(e) => {
                      e.stopPropagation();
                      setReviewSubmission(null);
                      setReviewResults(null);
                      setRightTab(0);
                    }}
                    sx={{ ml: 1, cursor: "pointer", fontWeight: 700 }}
                  >
                    ×
                  </Box>
                </Box>
              }
              sx={{
                textTransform: "capitalize",
                minHeight: 36,
                fontWeight: rightTab === 1 ? 700 : 500,
                bgcolor: rightTab === 1 ? "#e3e9f7" : "transparent",
                color: rightTab === 1 ? "#232b38" : "#6b7280",
                borderRadius: 2,
                mx: 0.5,
                transition: "all 0.2s",
              }}
            />
          )}
        </Tabs>
        {rightTab === 0 && (
          <ResizableBox
            width={Infinity}
            height={340}
            axis="y"
            resizeHandles={["s"]}
            minConstraints={[Infinity, 180]}
            maxConstraints={[Infinity, 600]}
            style={{
              background: "#fff",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              marginBottom: 8,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Custom drag handle for code editor */}
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                height: 12,
                borderRadius: 6,
                cursor: "row-resize",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 4px #b0b0b0",
                pointerEvents: "none",
              }}
            >
              <div style={{ height: 4, width: 40, background: "#90caf9", borderRadius: 2 }} />
            </div>
            <Box sx={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
              <CodeEditor code={code} setCode={setCode} />
            </Box>
            <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end", background: "transparent" }}>
              <Button variant="contained" color="primary" onClick={handleSubmit} disabled={submitting} sx={{ minWidth: 120, fontWeight: 700 }}>
                {submitting ? "Đang nộp..." : "Nộp bài"}
              </Button>
            </Box>
          </ResizableBox>
        )}
        {rightTab === 0 && (
          <Paper sx={{ flex: 1, p: 2, borderRadius: 2, minHeight: 120, overflow: "auto" }}>
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Kết quả Testcase
            </Typography>
            {!results && <Typography color="text.secondary">Nộp bài để xem kết quả test case.</Typography>}
            {results && (
              <Table size="small">
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
                  {results.map((r: any, idx: number) => {
                    const tc = testcases.find((t: any) => t.TCID === r.TCID);
                    if (!tc || tc.isHidden) return null;
                    return (
                      <TableRow key={r.TCID}>
                        <TableCell>{idx + 1}</TableCell>
                        <TableCell>
                          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", margin: 0 }}>{tc.Input}</pre>
                        </TableCell>
                        <TableCell>
                          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", margin: 0 }}>{tc.ExpectedOutput}</pre>
                        </TableCell>
                        <TableCell>
                          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", margin: 0 }}>{r.ActualOutput}</pre>
                        </TableCell>
                        <TableCell>
                          {r.Result === "Correct" && (
                            <Box sx={{ display: "flex", alignItems: "center", color: "green", fontWeight: 700 }}>
                              <CheckCircleIcon fontSize="small" sx={{ mr: 1 }} /> Correct
                            </Box>
                          )}
                          {r.Result === "Wrong" && (
                            <Box sx={{ display: "flex", alignItems: "center", color: "red", fontWeight: 700 }}>
                              <CancelIcon fontSize="small" sx={{ mr: 1 }} /> Wrong
                            </Box>
                          )}
                          {r.Result === "Error" && (
                            <Box sx={{ display: "flex", alignItems: "center", color: "orange", fontWeight: 700 }}>
                              <ErrorIcon fontSize="small" sx={{ mr: 1 }} /> Error
                            </Box>
                          )}
                          {r.Result === "Partial" && (
                            <Box sx={{ display: "flex", alignItems: "center", color: "#1976d2", fontWeight: 700 }}>
                              <InfoIcon fontSize="small" sx={{ mr: 1 }} /> Partial
                            </Box>
                          )}
                          {r.Result === "Pending" && (
                            <Box sx={{ display: "flex", alignItems: "center", color: "gray", fontWeight: 700 }}>
                              <HourglassEmptyIcon fontSize="small" sx={{ mr: 1 }} /> Pending
                            </Box>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </Paper>
        )}
        {rightTab === 1 && reviewSubmission && (
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
            <Paper sx={{ p: 2, mb: 2, borderRadius: 0, background: "#f8fafc" }}>
              <Typography variant="subtitle1" fontWeight={700} mb={1}>
                Code đã nộp
              </Typography>
              <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 2 }}>
                <Chip
                  label={reviewSubmission.Result === "Pass" ? "Đạt" : reviewSubmission.Result === "Fail" ? "Chưa đạt" : reviewSubmission.Result}
                  color={reviewSubmission.Result === "Pass" ? "success" : reviewSubmission.Result === "Fail" ? "error" : "default"}
                  sx={{ fontWeight: 700, fontSize: 15, px: 2, borderRadius: 2, height: 32 }}
                />
              </Box>
              <SyntaxHighlighter language="c" customStyle={{ borderRadius: 8, fontSize: 15, padding: 16 }}>
                {reviewSubmission.Code || ""}
              </SyntaxHighlighter>
            </Paper>
            <Paper sx={{ flex: 1, p: 2, borderRadius: 2, minHeight: 120, overflow: "auto" }}>
              <Typography variant="subtitle1" fontWeight={700} mb={1}>
                Kết quả Testcase
              </Typography>
              {!reviewResults && <Typography color="text.secondary">Không có kết quả test case.</Typography>}
              {reviewResults && (
                <Table size="small">
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
                    {reviewResults.map((r: any, idx: number) => {
                      const tc = testcases.find((t: any) => t.TCID === r.TCID);
                      if (!tc || tc.isHidden) return null;
                      return (
                        <TableRow key={r.TCID}>
                          <TableCell>{idx + 1}</TableCell>
                          <TableCell>
                            <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", margin: 0 }}>{tc.Input}</pre>
                          </TableCell>
                          <TableCell>
                            <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", margin: 0 }}>{tc.ExpectedOutput}</pre>
                          </TableCell>
                          <TableCell>
                            <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{r.ActualOutput}</pre>
                          </TableCell>
                          <TableCell>
                            {r.Result === "Correct" && (
                              <Box sx={{ display: "flex", alignItems: "center", color: "green", fontWeight: 700 }}>
                                <CheckCircleIcon fontSize="small" sx={{ mr: 1 }} /> Correct
                              </Box>
                            )}
                            {r.Result === "Wrong" && (
                              <Box sx={{ display: "flex", alignItems: "center", color: "red", fontWeight: 700 }}>
                                <CancelIcon fontSize="small" sx={{ mr: 1 }} /> Wrong
                              </Box>
                            )}
                            {r.Result === "Error" && (
                              <Box sx={{ display: "flex", alignItems: "center", color: "orange", fontWeight: 700 }}>
                                <ErrorIcon fontSize="small" sx={{ mr: 1 }} /> Error
                              </Box>
                            )}
                            {r.Result === "Partial" && (
                              <Box sx={{ display: "flex", alignItems: "center", color: "#1976d2", fontWeight: 700 }}>
                                <InfoIcon fontSize="small" sx={{ mr: 1 }} /> Partial
                              </Box>
                            )}
                            {r.Result === "Pending" && (
                              <Box sx={{ display: "flex", alignItems: "center", color: "gray", fontWeight: 700 }}>
                                <HourglassEmptyIcon fontSize="small" sx={{ mr: 1 }} /> Pending
                              </Box>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </Paper>
          </Box>
        )}
      </Box>
    </Box>
  );
}
