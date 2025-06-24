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
    text: "Bài tập", 
    icon: <FitnessCenterIcon />, 
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
        bgcolor: "#f5f6fa",
        borderRight: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 70,
        left: 10,
        height: "calc(100vh - 86px)",
        bottom: 10,
        borderRadius: 2,
        zIndex: 1200,
        boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header Section đã chuyển lên Header.tsx */}

      {/* Navigation Menu */}
      <Box sx={{ flex: 1, overflow: "auto", py: 2 }}>
        <List sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <Tooltip 
              key={item.text} 
              title={item.description}
              placement="right"
              arrow
            >
              <ListItemButton
                component={Link}
                href={item.href}
                selected={normalizedPathname === item.href}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  color: "#555",
                  "& .MuiListItemIcon-root": {
                    color: normalizedPathname === item.href ? "#cc2b5e" : "#666",
                    minWidth: 40,
                  },
                  "& .MuiListItemText-primary": {
                    fontWeight: normalizedPathname === item.href ? 600 : 500,
                    fontSize: "1.05rem",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "rgba(204, 43, 94, 0.1)",
                    color: "#cc2b5e",
                    "&:hover": {
                      backgroundColor: "rgba(204, 43, 94, 0.15)",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    color: "#333",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <ListItemIcon sx={{ fontSize: "1.2rem" }}>
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
          p: 2,
          bgcolor: "#ffffff",
          borderRadius: 2,
          border: "1px solid #e0e0e0"
        }}>
          <SchoolIcon sx={{ color: "#cc2b5e", fontSize: 20 }} />
          <Box>
            <Typography variant="caption" sx={{ color: "#666", display: "block" }}>
              Học tập liên tục
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, color: "#333" }}>
              {Math.floor(Math.random() * 7) + 1} ngày liên tiếp
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
