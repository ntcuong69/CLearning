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
  Tooltip,
  IconButton,
} from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function ReviewSubmission({ reviewSubmission, reviewResults, testcases }: any) {
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
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Typography variant="subtitle1" fontWeight={700}>
            Kết quả Testcase
          </Typography>
          <Tooltip
            title={
              <Box>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Mỗi bài tập bao gồm nhiều test case, trong đó có cả test case hiển thị (được công khai) và test case ẩn (không hiển thị).
                </Typography>
                <Typography variant="body2">
                  Để được tính là hoàn thành bài, bạn cần vượt qua toàn bộ các test case.
                </Typography>
              </Box>
            }
            arrow
            placement="right"
            componentsProps={{
              tooltip: {
                sx: {
                  maxWidth: "600px",
                  wordWrap: "break-word",
                  backgroundColor: "rgba(97, 97, 97, 0.92)",
                  color: "white",
                  padding: "12px 16px",
                }
              }
            }}
          >
            <IconButton
              size="small"
              sx={{
                ml: 1,
                color: "#6b7280",
                "&:hover": {
                  color: "#374151",
                  backgroundColor: "#f3f4f6",
                },
              }}
            >
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        {!reviewResults && <Typography color="text.secondary">Không có kết quả test case.</Typography>}
        {reviewResults && (
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell width="10%">STT</TableCell>
                <TableCell width="20%">Input</TableCell>
                <TableCell width="30%">Output mong đợi</TableCell>
                <TableCell width="30%">Output thực tế</TableCell>
                <TableCell width="10%">Kết quả</TableCell>
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