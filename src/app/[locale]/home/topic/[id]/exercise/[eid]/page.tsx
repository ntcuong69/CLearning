"use client";

import { Box, CircularProgress, Typography, Button, Tabs, Tab, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import ExerciseInfoPanel from "@/components/ExercisePage/ExerciseInfoPanel";
import CodeEditor from "@/components/ExercisePage/CodeEditor";
import SubmissionButton from "@/components/ExercisePage/SubmissionButton";
import SubmissionResultDisplay from "@/components/ExercisePage/SubmissionResultDisplay";
import TestcaseResultTable from "@/components/ExercisePage/TestcaseResultTable";
import Submissions from "@/components/ExercisePage/Submissions";
import { useExercise } from "@/hooks/useExercise";
import { useTestcases } from "@/hooks/useTestcases";
import { useSubmission } from "@/hooks/useSubmission";
import { useSubmitCode } from "@/hooks/useSubmitCode";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close"; // Import biểu tượng "x"

export default function ExercisePage() {
  const { id, eid } = useParams();
  const router = useRouter();
  const { exercise, loading } = useExercise(String(id), String(eid));
  const { testcases } = useTestcases(String(eid));
  const { code, setCode, results, submissionResult, setResults, setSubmissionResult } = useSubmission(String(eid));
  const { handleSubmit, submitting } = useSubmitCode(String(eid), code, setResults, setSubmissionResult);

  type Exercise = { EID: number; [key: string]: any };
  type TestcaseResult = { TCRID: number; testcase: { Input: string; ExpectedOutput: string }; ActualOutput: string; Result: string };
  type Submission = { SID: number; Code: string; [key: string]: any };
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const exercisesPerPage = 10;
  const [activeTab, setActiveTab] = useState(0); // State để quản lý tab đang được chọn
  const [historyTab, setHistoryTab] = useState(false);
  const [historyData, setHistoryData] = useState<{ submission: Submission; testcases: TestcaseResult[] } | null>(null);
  const [rightPanelTab, setRightPanelTab] = useState(0); // State để quản lý tab trong right panel

  useEffect(() => {
    // Fetch exercises from API
    const fetchExercises = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/topics/${id}`);
        const data = await response.json();
        setExercises(data.topic.exercise);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      }
    };

    fetchExercises();
  }, [id]);

  const handleNavigate = (exerciseId: number) => {
    router.push(`/home/topic/${id}/exercise/${exerciseId}`);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * exercisesPerPage < exercises.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleViewHistory = (submission: Submission, testcases: TestcaseResult[]) => {
    setHistoryTab(true);
    setHistoryData({ submission, testcases });
    setRightPanelTab(1); // Chuyển sang tab Lịch sử submit
  };

  const handleRightPanelTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setRightPanelTab(newValue);
  };

  const handleCloseHistoryTab = () => {
    setHistoryTab(false); 
    setRightPanelTab(0);
  };

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={100} sx={{ color: "#cc2b5e" }} />
      </Box>
    );
  }

  if (!exercise) return <Typography>Bài tập không tồn tại.</Typography>;

  const startExercise = currentPage * exercisesPerPage;
  const endExercise = Math.min(startExercise + exercisesPerPage, exercises.length);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", gap: 2, p: 2 }}>
      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #e5e7eb",
          bgcolor: "background.paper",
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </Button>
        <Box sx={{ display: "flex", gap: 1, mx: 2 }}>
          {exercises.slice(startExercise, endExercise).map((exercise, index) => {
            const displayNumber = startExercise + index + 1;
            return (
              <Button
                key={exercise.EID}
                variant={exercise.EID === parseInt(String(eid)) ? "contained" : "outlined"}
                onClick={() => handleNavigate(exercise.EID)}
              >
                {displayNumber}
              </Button>
            );
          })}
        </Box>
        <Button onClick={handleNextPage} disabled={endExercise === exercises.length}>
          Next
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{ display: "flex", flex: 1, gap: 2 }}>
        {/* Left Panel */}
        <ResizableBox
          width={450}
          height={Infinity}
          axis="x"
          resizeHandles={["e"]}
          minConstraints={[200, Infinity]}
          maxConstraints={[600, Infinity]}
          style={{
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid #e5e7eb",
            overflow: "hidden",
            borderRadius: "4px",
            padding: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Tabs */}
          <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
            <Tab label="Description" />
            <Tab label="Help" />
            <Tab label="Submissions" />
          </Tabs>

          {/* Tab Content */}
          {activeTab === 0 && (
            <Box sx={{ flex: 1, overflow: "auto" }}>
              <ExerciseInfoPanel exercise={exercise} testcases={testcases} />
            </Box>
          )}
          {activeTab === 1 && (
            <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
              <Typography variant="h6">Help</Typography>
              <Typography>Ask for hints or get help with errors from AI.</Typography>
            </Box>
          )}
          {activeTab === 2 && (
            <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
              <Submissions eid={String(eid)} onViewHistory={handleViewHistory} />
            </Box>
          )}
        </ResizableBox>

        {/* Right Panel */}
        <Box
          sx={{
            flex: 1,
            p: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            border: "1px solid #e5e7eb",
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          {/* Tabs for Right Panel */}
          <Tabs value={rightPanelTab} onChange={handleRightPanelTabChange} indicatorColor="primary" textColor="primary" sx={{ mb: 2 }}>
            <Tab label="Code" />
            {historyTab && (
              <Tab
                label={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Lịch sử submit
                    <Box
                      onClick={(e) => {
                        e.stopPropagation(); // tránh trigger Tab change
                        handleCloseHistoryTab();
                      }}
                      sx={{
                        ml: 1,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </Box>
                  </Box>
                }
              />
            )}
          </Tabs>

          {/* Tab Content */}
          {rightPanelTab === 0 && (
            <>
              <Box sx={{ height: 450 }}>
                <CodeEditor code={code} setCode={setCode} />
              </Box>
              <SubmissionButton handleSubmit={handleSubmit} submitting={submitting} />
              <SubmissionResultDisplay submissionResult={submissionResult} />
              <TestcaseResultTable results={results} testcases={testcases} />
            </>
          )}
          {rightPanelTab === 1 && historyTab && (
            <Box>
              <Typography variant="h6" mb={2}>
                Lịch sử Submission
              </Typography>
              <Typography variant="body1" mb={2}>
                <strong>Code:</strong>
              </Typography>
              <pre
                style={{
                  background: "#f5f5f5",
                  padding: "10px",
                  borderRadius: "4px",
                  overflowX: "auto",
                }}
              >
                {historyData?.submission.Code}
              </pre>
              <Typography variant="body1" mt={4} mb={2}>
                <strong>Kết quả Testcase:</strong>
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
                  {historyData?.testcases.map((result, index) => (
                    <TableRow key={result.TCRID}>
                      <TableCell><pre>{index + 1}</pre></TableCell>
                      <TableCell><pre>{result.testcase.Input}</pre></TableCell>
                      <TableCell><pre>{result.testcase.ExpectedOutput}</pre></TableCell>
                      <TableCell><pre>{result.ActualOutput}</pre></TableCell>
                      <TableCell><pre>{result.Result}</pre></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
