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
  Tooltip,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function TestcaseResults({ results, testcases }: any) {
  return (
    <Paper sx={{ flex: 1, p: 2, borderRadius: 2, minHeight: 120, overflow: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Typography variant="subtitle1" fontWeight={700}>
          Kết quả Testcase
        </Typography>
        <Tooltip
          title={
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Mỗi bài tập bao gồm nhiều test case, trong đó có test case hiển thị (có thể xem) và test case ẩn (không hiển thị).
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
      {!results && <Typography color="text.secondary">Nộp bài để xem kết quả test case.</Typography>}
      {results && (
        <>
          {/* Thông báo tổng kết kết quả testcase */}
          <Box sx={{ mb: 2 }}>
            {results.length > 0 && results.every((r: any) => r.Result === 'Correct') ? (
              <Typography color="success.main" fontWeight={600}>
                Chúc mừng bạn đã vượt qua tất cả các testcase
              </Typography>
            ) : (
              <Typography color="warning.main" fontWeight={600}>
                Bạn cần phải vượt qua toàn bộ testcase để được tính là hoàn thành bài.
              </Typography>
            )}
          </Box>
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
        </>
      )}
    </Paper>
  );
} 