"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch, Box } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ThemeToggleSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 1.5,
        py: 0.5,
        borderRadius: 10,
        backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        transition: "all 0.3s ease",
        width: "fit-content",
      }}
    >
      {isDark ? <DarkMode sx={{ color: "#90caf9", transition: "0.3s" }} /> : <LightMode sx={{ color: "#fbc02d", transition: "0.3s" }} />}
      <Switch
        checked={isDark}
        onChange={() => setTheme(isDark ? "light" : "dark")}
        color="default"
        sx={{
          "& .MuiSwitch-thumb": {
            backgroundColor: isDark ? "#fff" : "#000",
          },
        }}
      />
    </Box>
  );
}
