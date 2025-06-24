import React from "react";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

import { TestcaseResult, Testcase } from "@/types/model";

interface TestcaseResultTableProps {
  results: TestcaseResult[] | null; // Sử dụng type TestcaseResult từ model.ts
  testcases: Testcase[] | null; // Sử dụng type Testcase từ model.ts
}

export default function TestcaseResultTable({ results, testcases }: TestcaseResultTableProps) {
  if (!results) return null;

  return (
    <Box mt={4}>
      <Typography variant="h6" mb={2}>
        Testcase
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
            .filter((_, idx) => testcases?.[idx]?.isHidden === false) // Lọc các test case không bị ẩn
            .map((result: TestcaseResult, idx: number) => (
              <TableRow key={result.TCRID}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>
                  <pre>{testcases?.[idx].Input}</pre>
                </TableCell>
                <TableCell>
                  <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                    {testcases?.[idx].ExpectedOutput}
                  </pre>
                </TableCell>
                <TableCell>
                  <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                    {result.ActualOutput}
                  </pre>
                </TableCell>
                <TableCell>
                  <span
                    style={{
                      color: result.Result === "Correct" ? "green" : result.Result === "Wrong" ? "red" : "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {result.Result}
                  </span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Box>
  );
}