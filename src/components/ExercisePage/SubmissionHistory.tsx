import React from "react";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export default function SubmissionHistory({ submissions, onViewHistory }: any) {
  return (
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
            <TableRow key={s.SID} hover sx={{ transition: "background 0.2s", cursor: "pointer" }} onClick={() => onViewHistory(s)}>
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
  );
} 