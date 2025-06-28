import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { TaskAlt } from "@mui/icons-material";

interface ExerciseDescriptionProps {
  exercise: any;
  testcases: any[];
}

export default function ExerciseDescription({ exercise, testcases }: ExerciseDescriptionProps) {
  return (
    <>
      <Typography
        variant="h6"
        fontWeight={700}
        mb={1}
        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}
      >
        {exercise.Name}
        {exercise.status === "Solved" && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: 2 }}>
            <span style={{ color: "#2e7d32", fontSize: 14, fontWeight: 700 }}>Solved</span>
            <TaskAlt fontSize="small" sx={{ color: "#2e7d32" }} />
          </Box>
        )}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        {exercise.Difficulty === "Easy" && (
          <Box
            sx={{
              px: 1,
              border: "2px solid #43a047",
              color: "#388e3c",
              bgcolor: "#e8f5e9",
              fontSize: 14,
              borderRadius: 5,
              display: "inline-block",
            }}
          >
            Easy
          </Box>
        )}
        {exercise.Difficulty === "Medium" && (
          <Box
            sx={{
              px: 1,
              border: "2px solid #fb8c00",
              color: "#ef6c00",
              bgcolor: "#fff3e0",
              fontSize: 14,
              borderRadius: 5,
              display: "inline-block",
            }}
          >
            Medium
          </Box>
        )}
        {exercise.Difficulty === "Hard" && (
          <Box
            sx={{
              px: 1,
              border: "2px solid #e53935",
              color: "#b71c1c",
              bgcolor: "#ffebee",
              fontSize: 14,
              borderRadius: 5,
              display: "inline-block",
            }}
          >
            Hard
          </Box>
        )}
      </Box>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
        {exercise.Content}
      </Typography>
      {testcases.length > 0 && (
        <Box mt={4}>
          {testcases
            .filter((tc: any) => !tc.isHidden)
            .slice(0, 2)
            .map((tc: any, idx: number) => (
              <Paper key={tc.TCID} sx={{ mb: 2, borderRadius: 2, boxShadow: "0 1px 4px rgba(0,0,0,0.07)", p: 1 }}>
                <Box sx={{ fontWeight: 700, fontSize: 16, px: 1, pt: 1 }}>Ví dụ {idx + 1}:</Box>
                <Box sx={{ bgcolor: "#f8f9fa", borderRadius: 2, px: 1, py: 1, m: 1 }}>
                  <div style={{ fontWeight: 700, marginBottom: 2 }}>
                    <span style={{ fontWeight: 700 }}>Input:</span> <span style={{ fontWeight: 350 }}>{tc.Input}</span>
                  </div>
                  <div style={{ fontWeight: 700 }}>
                    <span style={{ fontWeight: 700 }}>Output:</span> <span style={{ fontWeight: 350 }}>{tc.ExpectedOutput}</span>
                  </div>
                </Box>
              </Paper>
            ))}
        </Box>
      )}
    </>
  );
} 