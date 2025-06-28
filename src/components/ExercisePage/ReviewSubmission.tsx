import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

interface ReviewSubmissionProps {
  reviewSubmission: any;
  reviewResults: any[] | null;
  testcases: any[];
}

export default function ReviewSubmission({ reviewSubmission, reviewResults, testcases }: ReviewSubmissionProps) {
  if (!reviewSubmission) return null;

  return (
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
  );
} 