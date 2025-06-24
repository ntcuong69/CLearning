"use client";

import { Box, CircularProgress, Typography, Button, Tabs, Tab} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

import { Exercise, Testcase, TestcaseResult, Submission } from "@/types/model";

export default function ExercisePage() {
  const { id, eid } = useParams();
  const router = useRouter();

  const { exercise, loading } = useExercise(String(id), String(eid));
  const { testcases } = useTestcases(String(eid));
  const { code, setCode, results, submissionResult, setResults, setSubmissionResult } = useSubmission(String(eid));
  const { handleSubmit, submitting } = useSubmitCode(String(eid), code, setResults, setSubmissionResult);

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [historyTab, setHistoryTab] = useState(false);
  const [historyData, setHistoryData] = useState<{
    submission: Submission;
    testcases: TestcaseResult[];
  } | null>(null);
  const [rightPanelTab, setRightPanelTab] = useState(0);

  const exercisesPerPage = 10;

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(`/api/topics/${id}`);
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

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleRightPanelTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setRightPanelTab(newValue);
  };

  const handleViewHistory = (submission: Submission, testcases: TestcaseResult[]) => {
    setHistoryTab(true);
    setHistoryData({ submission, testcases });
    setRightPanelTab(1);
  };

  const handleCloseHistoryTab = () => {
    setHistoryTab(false);
    setRightPanelTab(0);
  };

  const startExercise = currentPage * exercisesPerPage;
  const endExercise = Math.min(startExercise + exercisesPerPage, exercises.length);

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={100} sx={{ color: "#cc2b5e" }} />
      </Box>
    );
  }

  if (!exercise) return <Typography>Bài tập không tồn tại.</Typography>;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", gap: 2, p: 2 }}>
      {/* Navigation between exercises */}
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
        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} disabled={currentPage === 0}>
          Previous
        </Button>
        <Box sx={{ display: "flex", gap: 1, mx: 2 }}>
          {exercises.slice(startExercise, endExercise).map((exercise, index) => (
            <Button
              key={exercise.EID}
              variant={exercise.EID === parseInt(String(eid)) ? "contained" : "outlined"}
              onClick={() => handleNavigate(exercise.EID)}
            >
              {startExercise + index + 1}
            </Button>
          ))}
        </Box>
        <Button
          onClick={() => setCurrentPage((prev) => ((prev + 1) * exercisesPerPage < exercises.length ? prev + 1 : prev))}
          disabled={endExercise === exercises.length}
        >
          Next
        </Button>
      </Box>

      {/* Main layout */}
      <Box sx={{ display: "flex", flex: 1, gap: 2 }}>
        {/* Left Panel: Tabs */}
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
          <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth">
            <Tab label="Description" />
            <Tab label="Help" />
            <Tab label="Submissions" />
          </Tabs>

          <Box sx={{ flex: 1, overflow: "auto", p: activeTab === 0 ? 0 : 2 }}>
            {activeTab === 0 && <ExerciseInfoPanel exercise={exercise} testcases={testcases} />}
            {activeTab === 1 && (
              <>
                <Typography variant="h6">Help</Typography>
                <Typography>Ask for hints or get help with errors from AI.</Typography>
              </>
            )}
            {activeTab === 2 && <Submissions eid={String(eid)} onViewHistory={handleViewHistory} />}
          </Box>
        </ResizableBox>

        {/* Right Panel: Code Editor & Result */}
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
          <Tabs value={rightPanelTab} onChange={handleRightPanelTabChange} sx={{ mb: 2 }}>
            <Tab label="Code" />
            {historyTab && (
              <Tab
                label={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    Lịch sử submit
                    <Box
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseHistoryTab();
                      }}
                      sx={{ ml: 1, cursor: "pointer" }}
                    >
                      <CloseIcon fontSize="small" />
                    </Box>
                  </Box>
                }
              />
            )}
          </Tabs>

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

          {rightPanelTab === 1 && historyTab && historyData && (
            <Box>
              <SubmissionResultDisplay submissionResult={historyData.submission.Result ?? null} />
              <Typography variant="body1" mb={2}>
                <strong>Code:</strong>
              </Typography>
              <SyntaxHighlighter language="c" style={vscDarkPlus}>
                {historyData.submission.Code || ""}
              </SyntaxHighlighter>
              {/* Sử dụng lại TestcaseResultTable */}
              <TestcaseResultTable results={historyData.testcases} testcases={historyData.testcases.map(tc => tc.testcase).filter((tc): tc is Testcase => !!tc)} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
