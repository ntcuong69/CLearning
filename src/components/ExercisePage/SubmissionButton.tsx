import React from "react";
import { Button } from "@mui/material";

interface SubmissionButtonProps {
  handleSubmit: () => void;
  submitting: boolean;
}

export default function SubmissionButton({ handleSubmit, submitting }: SubmissionButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ mt: 3, minWidth: 120 }}
      onClick={handleSubmit}
      disabled={submitting}
    >
      {submitting ? "Đang gửi..." : "Submit"}
    </Button>
  );
}