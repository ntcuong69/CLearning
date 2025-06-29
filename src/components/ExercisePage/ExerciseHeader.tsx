"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import {
  Menu as MenuIcon,
  NavigateBefore,
  NavigateNext,
  PlayArrow,
  Person,
  Settings,
  Help,
  ExitToApp,
  KeyboardArrowDown,
  Assignment,
  CheckCircle,
  RadioButtonUnchecked,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function ExerciseHeader({
  exerciseTitle = "Bài tập",
  onMenuToggle,
  onPreviousExercise,
  onNextExercise,
  onSubmit,
  submitting = false,
  hasPrevious = false,
  hasNext = false,
  currentExerciseSlug,
  topicId,
}: {
  exerciseTitle?: string;
  onMenuToggle: (open: boolean) => void;
  onPreviousExercise: () => void;
  onNextExercise: () => void;
  onSubmit: () => void;
  submitting?: boolean;
  hasPrevious?: boolean;
  hasNext?: boolean;
  currentExerciseSlug?: string;
  topicId?: number;
}) {
  const [user, setUser] = useState<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [topicExercises, setTopicExercises] = useState<any[]>([]);
  const [loadingExercises, setLoadingExercises] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Lấy thông tin user hiện tại
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  // Fetch exercises from current topic when menu opens
  useEffect(() => {
    if (menuOpen && topicId) {
      fetchTopicExercises();
    }
  }, [menuOpen, topicId]);

  const fetchTopicExercises = async () => {
    if (!topicId) return;
    
    setLoadingExercises(true);
    try {
      // Fetch topic with exercises
      const topicRes = await fetch(`/api/topics/${topicId}`);
      if (topicRes.ok) {
        const topicData = await topicRes.json();
        const exercises = topicData.topic.exercise || [];
        setTopicExercises(exercises);
      }
    } catch (error) {
      console.error("Error fetching topic exercises:", error);
    } finally {
      setLoadingExercises(false);
    }
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    onMenuToggle(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" });
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleExerciseClick = (exerciseSlug: string) => {
    if (mounted) {
      router.push(`/exercises/${exerciseSlug}`);
      setMenuOpen(false);
      onMenuToggle(false);
    }
  };

  const getExerciseStatus = (exercise: any) => {
    return exercise.status === "Solved" ? "completed" : "not-started";
  };

  const getStatusIcon = (status: string) => {
    return status === "completed" 
      ? <CheckCircle sx={{ color: "#10b981", fontSize: 20 }} />
      : <RadioButtonUnchecked sx={{ color: "#9ca3af", fontSize: 20 }} />;
  };

  const getStatusText = (status: string) => {
    return status === "completed" ? "Hoàn thành" : "Chưa làm";
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          height: 64,
        }}
      >
        <Toolbar sx={{ px: 2, height: "100%" }}>
          {/* Menu hamburger */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
            sx={{
              color: "#374151",
              mr: 2,
              "&:hover": {
                background: "#f3f4f6",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Exercise title */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#111827",
              fontWeight: 600,
              fontSize: "1.125rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {exerciseTitle}
          </Typography>

          {/* Navigation buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
            <IconButton
              onClick={onPreviousExercise}
              disabled={!hasPrevious}
              sx={{
                color: hasPrevious ? "#374151" : "#d1d5db",
                "&:hover": {
                  background: hasPrevious ? "#f3f4f6" : "transparent",
                },
                "&.Mui-disabled": {
                  color: "#d1d5db",
                },
              }}
            >
              <NavigateBefore />
            </IconButton>
            <IconButton
              onClick={onNextExercise}
              disabled={!hasNext}
              sx={{
                color: hasNext ? "#374151" : "#d1d5db",
                "&:hover": {
                  background: hasNext ? "#f3f4f6" : "transparent",
                },
                "&.Mui-disabled": {
                  color: "#d1d5db",
                },
              }}
            >
              <NavigateNext />
            </IconButton>
          </Box>

          {/* Submit button */}
          <Button
            variant="contained"
            onClick={onSubmit}
            disabled={submitting}
            startIcon={<PlayArrow />}
            sx={{
              mr: 2,
              background: "#3b82f6",
              color: "#fff",
              fontWeight: 600,
              textTransform: "none",
              px: 3,
              py: 1,
              borderRadius: 2,
              "&:hover": {
                background: "#2563eb",
              },
              "&:disabled": {
                background: "#9ca3af",
              },
            }}
          >
            {submitting ? "Đang nộp..." : "Nộp bài"}
          </Button>

          {/* User menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            
            
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 1.5,
                cursor: "pointer",
                p: 1.5,
                borderRadius: '16px',
                border: '1px solid #f0f0f0',
                backgroundColor: '#fafafa',
                transition: 'all 0.2s ease',
                "&:hover": { 
                  backgroundColor: "#f0f0f0",
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }
              }} 
              onClick={handleMenuClick}
            >
              <Avatar 
                sx={{ 
                  width: 40, 
                  height: 40,
                  border: "3px solid #ffffff",
                  bgcolor: user?.Username ? "#1a1a1a" : "#666",
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  fontSize: '1rem',
                  fontWeight: 700,
                }}
              >
                {user?.Username ? user.Username.charAt(0).toUpperCase() : "U"}
              </Avatar>
              
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 700, 
                    color: "#1a1a1a",
                    fontSize: '0.9rem',
                    lineHeight: 1.2,
                  }}
                >
                  {user?.Username || "User"}
                </Typography>
              </Box>
              
              <KeyboardArrowDown 
                sx={{ 
                  color: "#666", 
                  fontSize: 18,
                  transition: 'transform 0.2s ease',
                  transform: Boolean(anchorEl) ? 'rotate(180deg)' : 'rotate(0deg)',
                }} 
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* User dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoFocus={false}
        disableAutoFocusItem={true}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
          },
        }}
      >
        <MenuItem onClick={handleMenuClose} sx={{ 
          py: 1.5,
          "&:hover": { 
            backgroundColor: "#f5f5f5" 
          },
          "&.Mui-focusVisible": {
            backgroundColor: "transparent"
          }
        }}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Hồ sơ"
            secondary={user?.Email}
            primaryTypographyProps={{ fontSize: "0.875rem", fontWeight: 500 }}
            secondaryTypographyProps={{ fontSize: "0.75rem" }}
          />
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ 
          py: 1.5,
          "&:hover": { 
            backgroundColor: "#f5f5f5" 
          },
          "&.Mui-focusVisible": {
            backgroundColor: "transparent"
          }
        }}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Cài đặt"
            primaryTypographyProps={{ fontSize: "0.875rem" }}
          />
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ 
          py: 1.5,
          "&:hover": { 
            backgroundColor: "#f5f5f5" 
          },
          "&.Mui-focusVisible": {
            backgroundColor: "transparent"
          }
        }}>
          <ListItemIcon>
            <Help fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Trợ giúp"
            primaryTypographyProps={{ fontSize: "0.875rem" }}
          />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ 
          py: 1.5,
          "&:hover": { 
            backgroundColor: "#f5f5f5" 
          },
          "&.Mui-focusVisible": {
            backgroundColor: "transparent"
          }
        }}>
          <ListItemIcon>
            <ExitToApp fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Đăng xuất"
            primaryTypographyProps={{ fontSize: "0.875rem" }}
          />
        </MenuItem>
      </Menu>

      {/* Left sidebar menu */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={handleMenuToggle}
        PaperProps={{
          sx: {
            width: 420,
            background: "#f8fafc",
            borderRight: "1px solid #e5e7eb",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#111827",
              fontWeight: 600,
              mb: 3,
            }}
          >
            Danh sách bài tập
          </Typography>
          
          {loadingExercises ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
              <CircularProgress />
            </Box>
          ) : topicExercises.length > 0 ? (
            <List sx={{ p: 0 }}>
              {topicExercises.map((exercise) => {
                const status = getExerciseStatus(exercise);
                const isCurrentExercise = exercise.Slug === currentExerciseSlug;
                
                return (
                  <ListItemButton
                    key={exercise.EID}
                    onClick={() => handleExerciseClick(exercise.Slug)}
                    sx={{
                      borderRadius: 2,
                      mb: 1,
                      backgroundColor: isCurrentExercise ? "#e3e9f7" : "transparent",
                      border: isCurrentExercise ? "1px solid #90caf9" : "1px solid transparent",
                      "&:hover": {
                        backgroundColor: isCurrentExercise ? "#d1e7ff" : "#f3f4f6",
                      },
                    }}
                  >
                    <ListItemIcon>
                      {getStatusIcon(status)}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: isCurrentExercise ? 700 : 500,
                            color: isCurrentExercise ? "#1e40af" : "#374151",
                          }}
                        >
                          {exercise.Name}
                        </Typography>
                      }
                      secondary={
                        <span style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                          <Chip
                            label={exercise.Difficulty}
                            size="small"
                            sx={{
                              fontSize: "0.7rem",
                              height: 20,
                              backgroundColor: 
                                exercise.Difficulty === "Easy" ? "#dcfce7" :
                                exercise.Difficulty === "Medium" ? "#fef3c7" : "#fee2e2",
                              color: 
                                exercise.Difficulty === "Easy" ? "#166534" :
                                exercise.Difficulty === "Medium" ? "#92400e" : "#991b1b",
                            }}
                          />
                          <Typography
                            variant="caption"
                            component="span"
                            sx={{
                              color: "#6b7280",
                              fontSize: "0.75rem",
                            }}
                          >
                            {getStatusText(status)}
                          </Typography>
                        </span>
                      }
                    />
                  </ListItemButton>
                );
              })}
            </List>
          ) : (
            <Typography
              variant="body2"
              sx={{
                color: "#6b7280",
                textAlign: "center",
                py: 4,
              }}
            >
              Không có bài tập nào trong chủ đề này.
            </Typography>
          )}
        </Box>
      </Drawer>
    </>
  );
} 