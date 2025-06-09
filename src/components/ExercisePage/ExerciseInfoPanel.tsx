import React from "react";
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

interface Exercise {
  EID: number;
  Content: string;
  Difficulty: string;
}

interface Testcase {
  TCID: number;
  Input: string;
  ExpectedOutput: string;
}

interface ExerciseInfoPanelProps {
  exercise: Exercise;
  testcases: Testcase[] | null;
}

export default function ExerciseInfoPanel({ exercise, testcases }: ExerciseInfoPanelProps) {
  return (
    <Paper sx={{ flex: 1, p: 4, borderRadius: 0, minWidth: 0, backgroundColor: "inherit", boxShadow: "none" }}>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
        {exercise.Content}
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={2}>
        Độ khó: {exercise.Difficulty}
      </Typography>

      {testcases && testcases.length > 0 && (
        <Box mt={4}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Ví dụ
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Input</TableCell>
                <TableCell>Output</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testcases.slice(0, 2).map((tc, idx) => (
                <TableRow key={tc.TCID}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>
                    <pre>{tc.Input}</pre>
                  </TableCell>
                  <TableCell>
                    <pre>{tc.ExpectedOutput}</pre>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </Paper>
  );
}