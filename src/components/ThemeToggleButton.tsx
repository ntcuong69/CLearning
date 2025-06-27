"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ThemeToggleSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Tooltip title={isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"} arrow>
      <IconButton
        onClick={handleToggle}
        sx={{
          width: 44,
          height: 44,
          borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
          color: isDark ? '#ffffff' : '#666',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)',
            transform: 'translateY(-2px)',
            boxShadow: isDark 
              ? '0 8px 25px rgba(255, 255, 255, 0.15)' 
              : '0 8px 25px rgba(0, 0, 0, 0.15)',
          },
          '&:active': {
            transform: 'translateY(0px)',
          }
        }}
      >
        {isDark ? (
          <LightMode 
            sx={{ 
              fontSize: 20,
              transition: 'all 0.3s ease',
              color: '#fbc02d',
            }} 
          />
        ) : (
          <DarkMode 
            sx={{ 
              fontSize: 20,
              transition: 'all 0.3s ease',
              color: '#666',
            }} 
          />
        )}
      </IconButton>
    </Tooltip>
  );
}
