import React from "react";
import { Typography } from "@mui/material";

interface SubmissionResultDisplayProps {
  submissionResult: string | null;
}

export default function SubmissionResultDisplay({ submissionResult }: SubmissionResultDisplayProps) {
  if (!submissionResult) return null;

  return (
    <Typography
      variant="h6"
      sx={{
        mt: 2,
        color: submissionResult === "Pass" ? "green" : "red",
        fontWeight: "bold",
      }}
    >
      Kết quả: {submissionResult}
    </Typography>
  );
}