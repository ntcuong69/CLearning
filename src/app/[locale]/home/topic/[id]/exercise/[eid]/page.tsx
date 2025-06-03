"use client";

import { Box, CircularProgress, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import ExerciseInfoPanel from "@/components/ExercisePage/ExerciseInfoPanel";
import CodeEditor from "@/components/ExercisePage/CodeEditor";
import SubmissionButton from "@/components/ExercisePage/SubmissionButton";
import SubmissionResultDisplay from "@/components/ExercisePage/SubmissionResultDisplay";
import TestcaseResultTable from "@/components/ExercisePage/TestcaseResultTable";
import { useExercise } from "@/hooks/useExercise";
import { useTestcases } from "@/hooks/useTestcases";
import { useSubmission } from "@/hooks/useSubmission";
import { useSubmitCode } from "@/hooks/useSubmitCode";

export default function ExercisePage() {
  const { id, eid } = useParams();
  const { exercise, loading } = useExercise(id, eid);
  const { testcases } = useTestcases(eid);
  const { code, setCode, results, submissionResult, setResults, setSubmissionResult } = useSubmission(eid);
  const { handleSubmit, submitting } = useSubmitCode(eid, code, setResults, setSubmissionResult);

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
        <ExerciseInfoPanel exercise={exercise} testcases={testcases} />
      </ResizableBox>

      <Box sx={{ flex: 1, p: 4, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <CodeEditor code={code} setCode={setCode} />
        <SubmissionButton handleSubmit={handleSubmit} submitting={submitting} />
        <SubmissionResultDisplay submissionResult={submissionResult} />
        <TestcaseResultTable results={results} testcases={testcases} />
      </Box>
    </Box>
  );
}
