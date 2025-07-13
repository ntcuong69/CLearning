"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { 
  Box, 
  Card, 
  CardContent, 
  CircularProgress, 
  Typography, 
  Stack, 
  Grid,
  Avatar,
  Chip,
  LinearProgress,
  IconButton,
  Button
} from "@mui/material";
import { useTranslations } from "next-intl";
import NavBar from "@/components/Header";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TimelineIcon from '@mui/icons-material/Timeline';

interface Topic {
  TpID: number;
  Name: string;
  Description: string | null;
}

interface DashboardStats {
  totalExercises: number;
  completedExercises: number;
  currentStreak: number;
  totalStudyTime: number;
  averageScore: number;
  rank: number;
}

interface RecentActivity {
  id: number;
  type: 'completed' | 'started' | 'bookmarked';
  exerciseName: string;
  topic: string;
  timestamp: string;
  score?: number;
}

export default function HomePage() {
  const t2 = useTranslations("HomePage");
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    totalExercises: 150,
    completedExercises: 87,
    currentStreak: 12,
    totalStudyTime: 45,
    averageScore: 92,
    rank: 5
  });
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([
    {
      id: 1,
      type: 'completed',
      exerciseName: 'Tìm số lớn nhất trong mảng',
      topic: 'Mảng một chiều',
      timestamp: '2 giờ trước',
      score: 95
    },
    {
      id: 2,
      type: 'started',
      exerciseName: 'Sắp xếp mảng tăng dần',
      topic: 'Thuật toán sắp xếp',
      timestamp: '4 giờ trước'
    },
    {
      id: 3,
      type: 'bookmarked',
      exerciseName: 'Tìm kiếm nhị phân',
      topic: 'Thuật toán tìm kiếm',
      timestamp: '1 ngày trước'
    },
    {
      id: 4,
      type: 'completed',
      exerciseName: 'Tính tổng các phần tử chẵn',
      topic: 'Mảng một chiều',
      timestamp: '2 ngày trước',
      score: 88
    }
  ]);

  useEffect(() => {
    axios
      .get("/api/topics/list")
      .then((res) => {
        setTopics(res.data.topics);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={100} sx={{ color: "#667eea" }} />
      </Box>
    );

  const completionRate = (stats.completedExercises / stats.totalExercises) * 100;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px" }}>
      <NavBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: "290px" },
          px: { xs: 2, sm: 6, md: 10 },
          py: 6,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Header Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Box sx={{
              width: 4,
              height: 32,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
            }} />
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '28px', md: '36px' }
            }}>
              Dashboard
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ 
            color: '#64748b', 
            fontWeight: 500,
            fontSize: '18px'
          }}>
            Chào mừng trở lại! Hãy tiếp tục hành trình học tập của bạn.
          </Typography>
        </Box>

        {/* Statistics Cards */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 3, 
          mb: 6 
        }}>
          <Card sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              opacity: 0.3
            }
          }}>
            <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffff' }}>
                  {stats.completedExercises}
                </Typography>
                <Avatar sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.2)', 
                  width: 48, 
                  height: 48 
                }}>
                  <CheckCircleIcon sx={{ color: '#ffffff' }} />
                </Avatar>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>
                Bài tập đã hoàn thành
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {completionRate.toFixed(1)}% tổng số bài tập
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(240, 147, 251, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffff' }}>
                  {stats.currentStreak}
                </Typography>
                <Avatar sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.2)', 
                  width: 48, 
                  height: 48 
                }}>
                  <TrendingUpIcon sx={{ color: '#ffffff' }} />
                </Avatar>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>
                Ngày học liên tiếp
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Kỷ lục: 15 ngày
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(79, 172, 254, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffff' }}>
                  {stats.averageScore}%
                </Typography>
                <Avatar sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.2)', 
                  width: 48, 
                  height: 48 
                }}>
                  <EmojiEventsIcon sx={{ color: '#ffffff' }} />
                </Avatar>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>
                Điểm trung bình
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Xuất sắc!
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(67, 233, 123, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#ffffff' }}>
                  #{stats.rank}
                </Typography>
                <Avatar sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.2)', 
                  width: 48, 
                  height: 48 
                }}>
                  <StarIcon sx={{ color: '#ffffff' }} />
                </Avatar>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>
                Xếp hạng
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Top 5% người học
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Progress Section */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
          gap: 4, 
          mb: 6 
        }}>
          <Card sx={{
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0',
            overflow: 'hidden'
          }}>
            <Box sx={{
              p: 3,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#ffffff'
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Tiến độ học tập
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {stats.completedExercises} / {stats.totalExercises} bài tập đã hoàn thành
              </Typography>
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Tổng thể
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#667eea' }}>
                    {completionRate.toFixed(1)}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={completionRate}
                  sx={{
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: '#e2e8f0',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: 6
                    }
                  }}
                />
              </Box>
              
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 2
              }}>
                {topics.slice(0, 4).map((topic, index) => {
                  const topicProgress = Math.random() * 100;
                  return (
                    <Box key={topic.TpID} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '14px' }}>
                          {topic.Name}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#667eea', fontSize: '14px' }}>
                          {topicProgress.toFixed(0)}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={topicProgress}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: '#f1f5f9',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: 4
                          }
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            </CardContent>
          </Card>

          <Card sx={{
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid #e2e8f0',
            height: 'fit-content'
          }}>
            <Box sx={{
              p: 3,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#ffffff'
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Hoạt động gần đây
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Những bài tập bạn đã làm gần đây
              </Typography>
            </Box>
            <CardContent sx={{ p: 2 }}>
              <Stack spacing={2}>
                {recentActivities.map((activity) => (
                  <Box key={activity.id} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    bgcolor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: '#f1f5f9',
                      transform: 'translateX(4px)'
                    }
                  }}>
                    <Avatar sx={{
                      width: 32,
                      height: 32,
                      bgcolor: activity.type === 'completed' ? '#4caf50' : 
                              activity.type === 'started' ? '#ff9800' : '#9c27b0'
                    }}>
                      {activity.type === 'completed' ? <CheckCircleIcon sx={{ fontSize: 16 }} /> :
                       activity.type === 'started' ? <PlayArrowIcon sx={{ fontSize: 16 }} /> :
                       <BookmarkIcon sx={{ fontSize: 16 }} />}
                    </Avatar>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="body2" sx={{ 
                        fontWeight: 600, 
                        fontSize: '13px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {activity.exerciseName}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#64748b', fontSize: '11px' }}>
                        {activity.topic} • {activity.timestamp}
                      </Typography>
                      {activity.score && (
                        <Chip 
                          label={`${activity.score}%`} 
                          size="small" 
                          sx={{ 
                            mt: 0.5,
                            bgcolor: activity.score >= 90 ? '#4caf50' : 
                                    activity.score >= 70 ? '#ff9800' : '#f44336',
                            color: '#ffffff',
                            fontSize: '10px',
                            height: 20
                          }} 
                        />
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* Topics Section */}
        <Card sx={{
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <Box sx={{
            p: 3,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#ffffff'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Chủ đề học tập
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Khám phá các chủ đề lập trình C
            </Typography>
          </Box>
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3
            }}>
              {topics.map((topic) => (
                <Card key={topic.TpID} sx={{
                  borderRadius: 3,
                  border: '2px solid #e2e8f0',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(102, 126, 234, 0.2)',
                    borderColor: '#667eea'
                  }
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar sx={{
                        bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        width: 40,
                        height: 40
                      }}>
                        <SchoolIcon sx={{ color: '#ffffff' }} />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ 
                          fontWeight: 700, 
                          fontSize: '16px',
                          color: '#1a1a1a'
                        }}>
                          {topic.Name}
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#64748b',
                          fontSize: '13px'
                        }}>
                          {topic.Description || 'Chủ đề lập trình C'}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Chip 
                        label="Bắt đầu học" 
                        size="small"
                        sx={{
                          bgcolor: '#667eea',
                          color: '#ffffff',
                          fontWeight: 600,
                          '&:hover': {
                            bgcolor: '#5a67d8'
                          }
                        }}
                      />
                      <Typography variant="caption" sx={{ color: '#64748b' }}>
                        {Math.floor(Math.random() * 20) + 5} bài tập
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
