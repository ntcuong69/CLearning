import React from "react";
import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import PendingIcon from "@mui/icons-material/Pending";

interface ExerciseStatusBadgeProps {
  status: "Solved" | "Attempting";
  showIcon?: boolean;
  showText?: boolean;
  size?: "small" | "medium" | "large";
}

export default function ExerciseStatusBadge({ 
  status, 
  showIcon = true, 
  showText = false,
  size = "medium" 
}: ExerciseStatusBadgeProps) {
  const getStatusInfo = () => {
    switch (status) {
      case "Solved":
        return {
          icon: <CheckCircleIcon fontSize={size} sx={{ color: "#4CAF50" }} />,
          color: "#4CAF50",
          text: "Đã giải",
        };
      case "Attempting":
        return {
          icon: <PendingIcon fontSize={size} sx={{ color: "#FF9800" }} />,
          color: "#FF9800",
          text: "Đang làm",
        };
      default:
        return {
          icon: <RadioButtonUncheckedIcon fontSize={size} sx={{ color: "#bdbdbd" }} />,
          color: "#bdbdbd",
          text: "Chưa làm",
        };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      {showIcon && statusInfo.icon}
      {showText && (
        <span
          style={{
            color: statusInfo.color,
            fontSize: size === "small" ? 12 : size === "large" ? 16 : 14,
            fontWeight: 700,
          }}
        >
          {statusInfo.text}
        </span>
      )}
    </Box>
  );
}
