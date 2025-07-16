"use client";
import { Box, Typography } from "@mui/material";
import { Code as CodeIcon } from "@mui/icons-material";

export function CLearningLogo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            p: 0.75,
            background: "linear-gradient(135deg, #2563EB 0%, #9333EA 100%)",
            borderRadius: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          }}
        >
          <CodeIcon
            sx={{
              fontSize: 20,
              color: "white",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: -4,
            right: -4,
            width: 12,
            height: 12,
            background: "linear-gradient(135deg, #FBBF24 0%, #F97316 100%)",
            borderRadius: "50%",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            "@keyframes pulse": {
              "0%, 100%": {
                opacity: 1,
              },
              "50%": {
                opacity: 0.5,
              },
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "1.125rem",
            fontWeight: 700,
            background: "linear-gradient(90deg, #2563EB 0%, #9333EA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1.25,
          }}
        >
          C-Learning
        </Typography>
        <Typography
          sx={{
            fontSize: "0.75rem",
            color: "#6B7280",
            fontWeight: 500,
          }}
        >
          Code • Learn • Grow
        </Typography>
      </Box>
    </Box>
  );
} 