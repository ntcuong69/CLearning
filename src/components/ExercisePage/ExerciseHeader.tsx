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
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  CircularProgress,
  Select,
  FormControl,
  InputLabel,
  Tooltip,
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
  CheckCircle,
  RadioButtonUnchecked,
  Folder,
  ArrowBack,
  Close,
  Pending,
  AccountCircle as AccountCircleIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useSubmitCode } from "@/hooks/useSubmitCode";
import ExerciseStatusBadge from "./ExerciseStatusBadge";

/**
 * ExerciseHeader Component
 * Header chính của trang bài tập với menu sidebar và chức năng submit code
 */
export default function ExerciseHeader({
  exerciseTitle = "Bài tập",
  currentExerciseSlug,
  topicId,
  code,
  setCode,
  exercise,
  setExercise,
  setResults,
  setSubmissionResult,
  setSubmissions,
}: any) {
  const router = useRouter();

  // ======================
  // STATE MANAGEMENT
  // ======================
  
  // User và UI states
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [image, setImage] = useState<string>("");

  // Topic và Exercise states
  const [topics, setTopics] = useState<any[]>([]);
  const [selectedTopicId, setSelectedTopicId] = useState<number | string>(topicId || "");
  const [topicExercises, setTopicExercises] = useState<any[]>([]);
  const [allExercises, setAllExercises] = useState<any[]>([]);

  // Loading states
  const [loadingTopics, setLoadingTopics] = useState(false);
  const [loadingExercises, setLoadingExercises] = useState(false);
  const [isFetchingExercises, setIsFetchingExercises] = useState(false);

  // Navigation states
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(-1);
  const [hasPreviousExercise, setHasPreviousExercise] = useState(false);
  const [hasNextExercise, setHasNextExercise] = useState(false);

  // ======================
  // HOOKS
  // ======================
  
  // Hook xử lý submit code
  const { handleSubmit, submitting } = useSubmitCode(
    String(currentExerciseSlug || ""),
    code,
    async (results: any[] | null, finalResult?: string) => {
      setResults(results);
      
      // Cập nhật submissions sau khi submit
      if (exercise) {
        const subRes = await fetch(`/api/submissions/by-exercise/${exercise.EID}`);
        if (subRes.ok) {
          const subData = await subRes.json();
          setSubmissions(subData.submissions || []);
        }
        
        // Cập nhật trạng thái exercise
        if (finalResult === "Pass") {
          // Cập nhật progress thành Solved
          try {
            await fetch(`/api/exercise/${exercise.Slug}/progress`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ status: "Solved" }),
            });
            setExercise({ ...exercise, status: "Solved" });
            
            // Refresh danh sách exercises để cập nhật trạng thái trong menu
            if (selectedTopicId) {
              refreshExercises();
            }
          } catch (error) {
            console.error("Error updating exercise progress:", error);
          }
        } else if (finalResult === "Fail") {
          // Cập nhật progress thành Attempting (nếu chưa có thì tạo mới, nếu có rồi thì cập nhật)
          try {
            await fetch(`/api/exercise/${exercise.Slug}/progress`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ status: "Attempting" }),
            });
            setExercise({ ...exercise, status: "Attempting" });
            
            // Refresh danh sách exercises để cập nhật trạng thái trong menu
            if (selectedTopicId) {
              refreshExercises();
            }
          } catch (error) {
            console.error("Error updating exercise progress:", error);
          }
        }
      }
    },
    setSubmissionResult
  );

  // ======================
  // EFFECTS
  // ======================
  
  // Mount component
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch user info
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/me");
        if (res.ok) {
          const data = await res.json();
          setUsername(data.user.Username);
          setImage(data.user.Image || data.user.image || "");
        }
      } catch (error) {
        setUsername("");
        setImage("");
      }
    };
    fetchUser();
  }, []);

  // Fetch topics và exercises khi component mount
  useEffect(() => {
    fetchTopicsAndExercises();
  }, []);

  // Cập nhật selectedTopicId khi topicId prop thay đổi
  useEffect(() => {
    if (topicId) {
      setSelectedTopicId(topicId);
    }
  }, [topicId]);

  // Fetch exercises khi selectedTopicId thay đổi
  useEffect(() => {
    if (selectedTopicId && !isFetchingExercises) {
      fetchTopicExercises();
    }
  }, [selectedTopicId]);

  // Fetch exercises khi mở menu (chỉ khi chưa có data hoặc cần refresh)
  useEffect(() => {
    if (menuOpen && selectedTopicId && topicExercises.length === 0 && !isFetchingExercises) {
      fetchTopicExercises();
    }
  }, [menuOpen, selectedTopicId]);

  // Refresh exercises khi menu mở để đảm bảo trạng thái được cập nhật
  useEffect(() => {
    if (menuOpen && selectedTopicId && topicExercises.length > 0 && !isFetchingExercises) {
      // Refresh sau 500ms để đảm bảo có đủ thời gian cho các API calls khác hoàn thành
      const timer = setTimeout(() => {
        refreshExercises();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  // Cập nhật navigation khi currentExerciseSlug thay đổi
  useEffect(() => {
    if (selectedTopicId && currentExerciseSlug && topicExercises.length > 0) {
      updateNavigationState();
    }
  }, [currentExerciseSlug, topicExercises, selectedTopicId]);

  // ======================
  // API FUNCTIONS
  // ======================
  
  /**
   * Fetch tất cả topics và exercises
   */
  const fetchTopicsAndExercises = async () => {
    setLoadingTopics(true);
    try {
      // Fetch topics
      const topicsRes = await fetch("/api/topics/list");
      if (topicsRes.ok) {
        const topicsData = await topicsRes.json();
        setTopics(topicsData.topics || []);
      }

      // Fetch exercises
      const exercisesRes = await fetch("/api/exercise/list");
      if (exercisesRes.ok) {
        const exercisesData = await exercisesRes.json();
        setAllExercises(exercisesData.exercises || []);
      }
    } catch (error) {
      console.error("Error fetching topics and exercises:", error);
    } finally {
      setLoadingTopics(false);
    }
  };

  /**
   * Fetch exercises của topic được chọn
   */
  const fetchTopicExercises = async () => {
    if (!selectedTopicId || isFetchingExercises) return;
    
    setIsFetchingExercises(true);
    setLoadingExercises(true);
    try {
      const topicRes = await fetch(`/api/topics/${selectedTopicId}`);
      if (topicRes.ok) {
        const topicData = await topicRes.json();
        const exercises = topicData.topic.exercise || [];
        setTopicExercises(exercises);
      }
    } catch (error) {
      console.error("Error fetching topic exercises:", error);
    } finally {
      setLoadingExercises(false);
      setIsFetchingExercises(false);
    }
  };

  /**
   * Refresh exercises (force fetch)
   */
  const refreshExercises = async () => {
    if (!selectedTopicId) return;
    
    setIsFetchingExercises(true);
    setLoadingExercises(true);
    try {
      const topicRes = await fetch(`/api/topics/${selectedTopicId}`);
      if (topicRes.ok) {
        const topicData = await topicRes.json();
        const exercises = topicData.topic.exercise || [];
        setTopicExercises(exercises);
      }
    } catch (error) {
      console.error("Error refreshing topic exercises:", error);
    } finally {
      setLoadingExercises(false);
      setIsFetchingExercises(false);
    }
  };

  // ======================
  // EVENT HANDLERS
  // ======================
  
  /**
   * Xử lý khi chọn topic mới
   */
  const handleTopicChange = (event: any) => {
    const newTopicId = event.target.value;
    setSelectedTopicId(newTopicId);
    // Chỉ cập nhật danh sách bài tập, không tự động chuyển hướng
  };

  /**
   * Xử lý khi click vào bài tập
   */
  const handleExerciseClick = (exerciseSlug: string) => {
    if (mounted) {
      router.push(`/exercises/${exerciseSlug}`);
      setMenuOpen(false);
    }
  };

  /**
   * Xử lý navigation - bài tập trước
   */
  const handlePreviousExercise = () => {
    if (hasPreviousExercise && currentExerciseIndex > 0) {
      const previousExercise = topicExercises[currentExerciseIndex - 1];
      router.push(`/exercises/${previousExercise.Slug}`);
    }
  };

  /**
   * Xử lý navigation - bài tập tiếp theo
   */
  const handleNextExercise = () => {
    if (hasNextExercise && currentExerciseIndex < topicExercises.length - 1) {
      const nextExercise = topicExercises[currentExerciseIndex + 1];
      router.push(`/exercises/${nextExercise.Slug}`);
    }
  };

  /**
   * Xử lý menu user dropdown
   */
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProfile = () => {
    router.push("/profile");
    handleMenuClose();
  };
  const handleSettings = () => {
    router.push("/settings");
    handleMenuClose();
  };
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" });
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
    }
    handleMenuClose();
  };

  // ======================
  // UTILITY FUNCTIONS
  // ======================
  
  /**
   * Cập nhật trạng thái navigation
   */
  const updateNavigationState = () => {
    const currentIndex = topicExercises.findIndex((ex: any) => ex.Slug === currentExerciseSlug);
    setCurrentExerciseIndex(currentIndex);
    
    if (currentIndex !== -1) {
      setHasPreviousExercise(currentIndex > 0);
      setHasNextExercise(currentIndex < topicExercises.length - 1);
    } else {
      setHasPreviousExercise(false);
      setHasNextExercise(false);
    }
  };

  /**
   * Lấy trạng thái bài tập
   */
  const getExerciseStatus = (exercise: any) => {
    const status = exercise.status || 'Unattempted';
    switch (status) {
      case 'Solved':
        return "completed";
      case 'Attempting':
        return "attempting";
      case 'Unattempted':
      default:
        return "not-started";
    }
  };

  /**
   * Lấy icon trạng thái
   */
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle sx={{ color: "#10b981", fontSize: 20 }} />;
      case "attempting":
        return <Pending sx={{ color: "#f59e0b", fontSize: 20 }} />;
      case "not-started":
      default:
        return <RadioButtonUnchecked sx={{ color: "#9ca3af", fontSize: 20 }} />;
    }
  };

  /**
   * Lấy text trạng thái
   */
  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Hoàn thành";
      case "attempting":
        return "Đang làm";
      case "not-started":
      default:
        return "Chưa làm";
    }
  };

  /**
   * Lấy tên topic được chọn
   */
  const getSelectedTopicName = () => {
    const selectedTopic = topics.find(t => t.TpID === Number(selectedTopicId));
    return selectedTopic ? selectedTopic.Name : "Chọn chủ đề";
  };

  // ======================
  // RENDER
  // ======================
  
  // Không render cho đến khi mounted để tránh hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Main AppBar */}
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
          {/* Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
            sx={{
              color: "#374151",
              mr: 2,
              "&:hover": { background: "#f3f4f6" },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Exercise Title */}
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

          {/* Navigation Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
            <IconButton
              onClick={handlePreviousExercise}
              disabled={!hasPreviousExercise}
              sx={{
                color: hasPreviousExercise ? "#374151" : "#d1d5db",
                "&:hover": {
                  background: hasPreviousExercise ? "#f3f4f6" : "transparent",
                },
                "&.Mui-disabled": { color: "#d1d5db" },
              }}
            >
              <NavigateBefore />
            </IconButton>
            <IconButton
              onClick={handleNextExercise}
              disabled={!hasNextExercise}
              sx={{
                color: hasNextExercise ? "#374151" : "#d1d5db",
                "&:hover": {
                  background: hasNextExercise ? "#f3f4f6" : "transparent",
                },
                "&.Mui-disabled": { color: "#d1d5db" },
              }}
            >
              <NavigateNext />
            </IconButton>
          </Box>

          {/* Submit Button */}
          <Button
            variant="contained"
            onClick={handleSubmit}
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
              "&:hover": { background: "#2563eb" },
              "&:disabled": { background: "#9ca3af" },
            }}
          >
            {submitting ? "Đang nộp..." : "Nộp bài"}
          </Button>

          {/* User Menu */}
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
                  width: 32,
                  height: 32,
                  bgcolor: "#F0F4F8",
                  color: "#1a1a1a",
                  border: "none",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                src={image || undefined}
              >
                {!image && <AccountCircleIcon sx={{ fontSize: 20, color: "#4A4A4A" }} />}
              </Avatar>
              <Box sx={{ ml: 1, display: { xs: "none", md: "block" } }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    color: "#1a1a1a",
                    fontSize: "0.9rem",
                    lineHeight: 1.2,
                  }}
                >
                  {username || "Chưa đăng nhập"}
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
            {/* User Dropdown Menu giống Header */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              disableScrollLock
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  mt: 1,
                  minWidth: 170,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                  borderRadius: "10px",
                  border: "1px solid #f0f0f0",
                  overflow: "hidden",
                },
              }}
            >
              <MenuItem
                onClick={handleProfile}
                sx={{
                  py: 1.2,
                  px: 1.5,
                  borderRadius: "8px",
                  transition: "background 0.15s",
                  backgroundColor: "transparent !important",
                  "&:hover": {
                    backgroundColor: "#e3f0ff !important",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "transparent !important",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "transparent !important",
                  },
                  "&.MuiMenuItem-root:hover": {
                    backgroundColor: "#e3f0ff !important",
                  },
                }}
              >
                <AccountCircleIcon sx={{ mr: 2, color: "#666", fontSize: 20 }} />
                <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#333" }}>Trang cá nhân</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleSettings}
                sx={{
                  py: 1.2,
                  px: 1.5,
                  borderRadius: "8px",
                  transition: "background 0.15s",
                  backgroundColor: "transparent !important",
                  "&:hover": {
                    backgroundColor: "#e3f0ff !important",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "transparent !important",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "transparent !important",
                  },
                  "&.MuiMenuItem-root:hover": {
                    backgroundColor: "#e3f0ff !important",
                  },
                }}
              >
                <SettingsIcon sx={{ mr: 2, color: "#666", fontSize: 20 }} />
                <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#333" }}>Cài đặt</Typography>
              </MenuItem>
              <Divider sx={{ my: 1 }} />
              <MenuItem
                onClick={handleLogout}
                sx={{
                  py: 1.2,
                  px: 1.5,
                  color: "#d32f2f",
                  borderRadius: "8px",
                  transition: "background 0.15s",
                  backgroundColor: "transparent !important",
                  "&:hover": {
                    backgroundColor: "#ffeaea !important",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "transparent !important",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "transparent !important",
                  },
                  "&.MuiMenuItem-root:hover": {
                    backgroundColor: "#ffeaea !important",
                  },
                }}
              >
                <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
                <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#d32f2f" }}>Đăng xuất</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Menu */}
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
          {/* Header */}
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

          {/* Topic Selection */}
          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth size="small">
              <InputLabel 
                id="topic-select-label"
                sx={{ 
                  color: "#6b7280",
                  fontSize: "0.875rem",
                }}
              >
                Chọn chủ đề
              </InputLabel>
              <Select
                labelId="topic-select-label"
                value={selectedTopicId}
                label="Chọn chủ đề"
                onChange={handleTopicChange}
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#d1d5db",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#9ca3af",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#3b82f6",
                  },
                }}
              >
                {loadingTopics ? (
                  <MenuItem disabled>
                    <CircularProgress size={20} sx={{ mr: 1 }} />
                    Đang tải...
                  </MenuItem>
                ) : (
                  topics.map((topic) => (
                    <MenuItem key={topic.TpID} value={topic.TpID}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Folder sx={{ fontSize: 18, color: "#6b7280" }} />
                        {topic.Name}
                      </Box>
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Box>

          {/* Selected Topic Name */}
          {selectedTopicId && (
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#374151",
                  fontWeight: 600,
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Folder sx={{ fontSize: 20, color: "#3b82f6" }} />
                {getSelectedTopicName()}
              </Typography>
            </Box>
          )}
          
          {/* Exercise List */}
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
                            component="span"
                            label={exercise.Difficulty === 'Easy' ? 'Dễ' : exercise.Difficulty === 'Medium' ? 'Vừa' : exercise.Difficulty === 'Hard' ? 'Khó' : exercise.Difficulty}
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
          ) : selectedTopicId ? (
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
          ) : (
            <Typography
              variant="body2"
              sx={{
                color: "#6b7280",
                textAlign: "center",
                py: 4,
              }}
            >
              Vui lòng chọn một chủ đề để xem danh sách bài tập.
            </Typography>
          )}
        </Box>
      </Drawer>
    </>
  );
} 