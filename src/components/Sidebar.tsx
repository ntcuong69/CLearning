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
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BarChartIcon from "@mui/icons-material/BarChart";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsIcon from "@mui/icons-material/Settings";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
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
        width: 250,
        bgcolor: "#F7F9FA",
        borderRight: "1px solid #E1F0FF",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 65,
        left: 0,
        height: "calc(100vh - 80px)",
        zIndex: 1200,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
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
                  bgcolor: "#2C5AA0",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(44, 90, 160, 0.25)"
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
                  color: "#2D3748",
                  "& .MuiListItemIcon-root": {
                    color: normalizedPathname === item.href ? "#2C5AA0" : "#718096",
                    minWidth: 44,
                    fontSize: "1.25rem",
                  },
                  "& .MuiListItemText-primary": {
                    fontWeight: normalizedPathname === item.href ? 600 : 400,
                    fontSize: "0.9rem",
                    color: normalizedPathname === item.href ? "#1A202C" : "#000000",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#E8F4FF",
                    color: "#1A202C",
                    border: "1px solid #B8D4F0",
                    "&:hover": {
                      backgroundColor: "#D8ECFF",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "#F0F8FF",
                    color: "#1A202C",
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
    </Box>
  );
}
