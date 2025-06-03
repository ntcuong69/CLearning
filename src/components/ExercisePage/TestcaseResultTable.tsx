import React from "react";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

interface Testcase {
  Input: string;
  ExpectedOutput: string;
  isHidden: boolean;
}

interface ResultRow {
  index: number;
  expected: string;
  actual: string;
  result: string;
}

interface TestcaseResultTableProps {
  results: ResultRow[] | null;
  testcases: Testcase[] | null;
}

export default function TestcaseResultTable({ results, testcases }: TestcaseResultTableProps) {
  if (!results) return null;

  return (
    <Box mt={4}>
      <Typography variant="h6" mb={2}>
        Kết quả Testcase
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
          {results
            .filter((_, idx) => testcases?.[idx]?.isHidden === false)
            .map((row: ResultRow, idx: number) => (
              <TableRow key={row.index}>
                <TableCell>{row.index}</TableCell>
                <TableCell>
                  <pre>{testcases?.[idx].Input}</pre>
                </TableCell>
                <TableCell>
                  <pre>{row.expected}</pre>
                </TableCell>
                <TableCell sx={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                  <pre>{row.actual}</pre>
                </TableCell>
                <TableCell>
                  <span
                    style={{
                      color: row.result === "Correct" ? "green" : row.result === "Wrong" ? "red" : "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {row.result}
                  </span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Box>
  );
}