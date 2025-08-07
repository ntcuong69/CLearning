"use client";

import { 
  Box, 
  Divider, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Typography,
  Tooltip,
  Collapse
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import TopicIcon from "@mui/icons-material/Topic";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BookIcon from "@mui/icons-material/Book";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const menuItems = [
  { 
    text: "Tổng quan", 
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
  }
];

const adminSubItems = [
  {
    text: "Quản lý chủ đề",
    icon: <TopicIcon />,
    href: "/admin/topics",
    description: "Quản lý các chủ đề học tập"
  },
  {
    text: "Quản lý bài tập", 
    icon: <AssignmentIcon />,
    href: "/admin/exercises",
    description: "Quản lý các bài tập lập trình"
  },
  {
    text: "Quản lý khóa học",
    icon: <BookIcon />,
    href: "/admin/studyplans", 
    description: "Quản lý các khóa học"
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/^\/[a-z]{2}\//, "/");
  const [adminExpanded, setAdminExpanded] = useState(false);

  // Hàm kiểm tra xem pathname có match với href không (bao gồm cả trang con)
  const isPathActive = (href: string, currentPath: string) => {
    if (href === "/home") {
      return currentPath === "/home";
    }
    // Đặc biệt xử lý cho admin - chỉ highlight khi đúng path
    if (href === "/admin") {
      return currentPath === "/admin";
    }
    if (href.startsWith("/admin/")) {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };

  // Lấy role từ API /api/me
  const [role, setRole] = useState<string | null>(null);
  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await axios.get('/api/me');
        setRole(res.data?.user.Role || null);
      } catch {
        setRole(null);
      }
    };
    fetchRole();
  }, []);

  // Auto expand admin section if currently on admin page
  useEffect(() => {
    if (normalizedPathname.startsWith("/admin")) {
      setAdminExpanded(true);
    }
  }, [normalizedPathname]);

  const handleAdminClick = () => {
    setAdminExpanded(!adminExpanded);
  };

  // Hàm kiểm tra xem có đang ở trang admin nào không
  const isAnyAdminPage = (currentPath: string) => {
    return currentPath.startsWith("/admin");
  };

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
          {menuItems.map((item) => {
            const isActive = isPathActive(item.href, normalizedPathname);
            return (
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
                  selected={isActive}
                  sx={{
                    borderRadius: "12px",
                    mb: 0.5,
                    color: "#2D3748",
                    "& .MuiListItemIcon-root": {
                      color: isActive ? "#2C5AA0" : "#718096",
                      minWidth: 44,
                      fontSize: "1.25rem",
                    },
                    "& .MuiListItemText-primary": {
                      fontWeight: isActive ? 600 : 400,
                      fontSize: "0.9rem",
                      color: isActive ? "#1A202C" : "#000000",
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
            );
          })}
          
          {/* Admin Section - chỉ hiển thị nếu là Admin */}
          {role === 'Admin' && (
            <>
              <Tooltip 
                title="Quản trị hệ thống"
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
                   onClick={handleAdminClick}
                   selected={isAnyAdminPage(normalizedPathname)}
                   sx={{
                     borderRadius: "12px",
                     color: "#2D3748",
                     "& .MuiListItemIcon-root": {
                       color: isAnyAdminPage(normalizedPathname) ? "#2C5AA0" : "#718096",
                       minWidth: 44,
                       fontSize: "1.25rem",
                     },
                     "& .MuiListItemText-primary": {
                       fontWeight: isAnyAdminPage(normalizedPathname) ? 600 : 400,
                       fontSize: "0.9rem",
                       color: isAnyAdminPage(normalizedPathname) ? "#1A202C" : "#000000",
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
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Admin" />
                  {adminExpanded ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </Tooltip>
              
              {/* Admin Submenu */}
               <Collapse in={adminExpanded} timeout="auto" unmountOnExit>
                 <List component="div" disablePadding sx={{ pl: 3, pt: 1 }}>
                  {adminSubItems.map((item) => {
                    const isActive = isPathActive(item.href, normalizedPathname);
                    return (
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
                          selected={isActive}
                          sx={{
                            borderRadius: "8px",
                            mb: 0.5,
                            color: "#2D3748",
                            "& .MuiListItemIcon-root": {
                              color: isActive ? "#2C5AA0" : "#718096",
                              minWidth: 36,
                              fontSize: "1.1rem",
                            },
                            "& .MuiListItemText-primary": {
                              fontWeight: isActive ? 600 : 400,
                              fontSize: "0.85rem",
                              color: isActive ? "#1A202C" : "#000000",
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
                    );
                  })}
                </List>
              </Collapse>
            </>
          )}
        </List>
      </Box>

      {/* Footer Section */}
    </Box>
  );
}
