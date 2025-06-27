"use client";

import { 
  Box, 
  Divider, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Typography,
  Tooltip
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BarChartIcon from "@mui/icons-material/BarChart";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsIcon from "@mui/icons-material/Settings";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { 
    text: "Dashboard", 
    icon: <DashboardIcon />, 
    href: "/home",
    description: "Tổng quan học tập"
  },
  { 
    text: "Lộ trình học", 
    icon: <SchoolIcon />, 
    href: "/studyplan",
    description: "Lộ trình học tập"
  },
  { 
    text: "Bài tập", 
    icon: <CodeIcon />, 
    href: "/exercises",
    description: "Thực hành lập trình"
  },
  { 
    text: "Tài liệu", 
    icon: <LibraryBooksIcon />, 
    href: "/resources",
    description: "Tài liệu học tập"
  },
  { 
    text: "Thống kê", 
    icon: <BarChartIcon />, 
    href: "/statistics",
    description: "Tiến độ học tập"
  },
  { 
    text: "Bài kiểm tra", 
    icon: <QuizIcon />, 
    href: "/quizzes",
    description: "Kiểm tra kiến thức"
  },
  { 
    text: "Cài đặt", 
    icon: <SettingsIcon />, 
    href: "/settings",
    description: "Tùy chỉnh hệ thống"
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/^\/[a-z]{2}\//, "/");

  return (
    <Box
      sx={{
        width: 280,
        bgcolor: "#ffffff",
        borderRight: "1px solid #e8e8e8",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 69,
        left: 0,
        height: "calc(100vh - 80px)",
        zIndex: 1200,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
      }}
    >
      {/* Navigation Menu */}
      <Box sx={{ flex: 1, overflow: "auto", py: 2 }}>
        <List sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <Tooltip 
              key={item.text} 
              title={item.description}
              placement="right"
              arrow
              sx={{
                "& .MuiTooltip-tooltip": {
                  bgcolor: "#1a1a1a",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                }
              }}
            >
              <ListItemButton
                component={Link}
                href={item.href}
                selected={normalizedPathname === item.href}
                sx={{
                  borderRadius: "12px",
                  mb: 0.5,
                  color: "#666",
                  "& .MuiListItemIcon-root": {
                    color: normalizedPathname === item.href ? "#1a1a1a" : "#999",
                    minWidth: 44,
                    fontSize: "1.25rem",
                  },
                  "& .MuiListItemText-primary": {
                    fontWeight: normalizedPathname === item.href ? 700 : 600,
                    fontSize: "0.9rem",
                    color: normalizedPathname === item.href ? "#1a1a1a" : "#666",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#f8f8f8",
                    color: "#1a1a1a",
                    border: "1px solid #e0e0e0",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "#fafafa",
                    color: "#333",
                    transform: "translateX(4px)",
                  },
                  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                }}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Tooltip>
          ))}
        </List>
      </Box>

      {/* Footer Section */}
      <Box sx={{ 
        p: 3, 
        borderTop: "1px solid #f0f0f0",
        bgcolor: "#fafafa"
      }}>
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 2,
          p: 2.5,
          bgcolor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #e8e8e8",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
        }}>
          <Box sx={{ 
            width: 40, 
            height: 40, 
            borderRadius: "10px",
            bgcolor: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <SchoolIcon sx={{ color: "#ffffff", fontSize: 20 }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: "#999", 
                display: "block",
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                mb: 0.5
              }}
            >
              Chuỗi học tập
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 700, 
                color: "#1a1a1a",
                fontSize: "0.9rem"
              }}
            >
              {Math.floor(Math.random() * 7) + 1} ngày liên tiếp
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
