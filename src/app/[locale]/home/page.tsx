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
import React from "react";
import "react-calendar-heatmap/dist/styles.css";
import SubmissionHeatmap from "./SubmissionHeatmap";

interface Topic {
  TpID: number;
  Name: string;
  Description: string | null;
}

interface DashboardStats {
  totalExercises: number;
  completedExercises: number;
  totalSubmissions: number;
  averageAttemptsPerExercise: number;
  firstAttemptCorrect: number;
  solvedByDifficulty?: {
    Easy: number;
    Medium: number;
    Hard: number;
  };
}

interface RecentActivity {
  id: number;
  type: 'completed' | 'started' | 'bookmarked';
  exerciseName: string;
  topic: string;
  timestamp: string;
  score?: number;
}

const mockData = [
  { date: '2025-06-10', count: 1 },
  { date: '2025-06-11', count: 2 },
  { date: '2025-06-12', count: 3 },
  { date: '2025-06-14', count: 1 },
  { date: '2025-06-30', count: 2 },
  { date: '2026-07-01', count: 1 },
];

export default function HomePage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    totalExercises: 0,
    completedExercises: 0,
    totalSubmissions: 0,
    averageAttemptsPerExercise: 0,
    firstAttemptCorrect: 0
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
  const [heatmapData, setHeatmapData] = useState<{ date: string; count: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch topics
        const topicsResponse = await axios.get("/api/topics/list");
        setTopics(topicsResponse.data.topics);
        
        // Fetch user stats
        const statsResponse = await axios.get("/api/me/stats");
        setStats(statsResponse.data.stats);
        setHeatmapData(statsResponse.data.stats.submissionHeatmap || []);
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
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
          mx: "auto",
        }}
      >
        {/* Header Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Box sx={{
              width: 4,
              height: 32,
              background: '#667eea',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.12)'
            }} />
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              color: '#222',
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
          {/* Bài tập đã hoàn thành */}
          <Card sx={{
            background: '#f8fafc',
            borderRadius: 4,
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.06)',
            border: '1px solid #e2e8f0',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#374151' }}>
                  {stats.completedExercises}
                </Typography>
                <Avatar sx={{ 
                  bgcolor: '#e0e7ff', 
                  width: 48, 
                  height: 48 
                }}>
                  <CheckCircleIcon sx={{ color: '#2563eb' }} />
                </Avatar>
              </Box>
              <Typography variant="body2" sx={{ color: '#374151', fontWeight: 600 }}>
                Bài tập đã hoàn thành
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b' }}>
                {completionRate.toFixed(1)}% tổng số bài tập
              </Typography>
            </CardContent>
          </Card>

          {/* Tổng số lượt nộp */}
          <Card sx={{
            background: '#f8fafc',
            borderRadius: 4,
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.06)',
            border: '1px solid #e2e8f0',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#2563eb' }}>{stats.totalSubmissions}</Typography>
                <Avatar sx={{ 
                  bgcolor: '#e0e7ff', 
                  width: 48, 
                  height: 48 
                }}>
                  <PlayArrowIcon sx={{ color: '#2563eb' }} />
                </Avatar>
              </Box>
              <Typography variant="body2" sx={{ color: '#374151', fontWeight: 600 }}>
                Tổng số lượt nộp
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b' }}>
                Tổng số lần bạn đã gửi bài
              </Typography>
            </CardContent>
          </Card>

          {/* Số lần nộp trung bình mỗi bài */}
          <Card sx={{
            background: '#f8fafc',
            borderRadius: 4,
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.06)',
            border: '1px solid #e2e8f0',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#f59e42' }}>{stats.averageAttemptsPerExercise}</Typography>
                <Avatar sx={{ 
                  bgcolor: '#fff7ed', 
                  width: 48, 
                  height: 48 
                }}>
                  <TimelineIcon sx={{ color: '#f59e42' }} />
                </Avatar>
              </Box>
              <Typography variant="body2" sx={{ color: '#374151', fontWeight: 600 }}>
                Số lần nộp trung bình mỗi bài
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b' }}>
                Trước khi đúng
              </Typography>
            </CardContent>
          </Card>

          {/* Số bài đúng ngay lần đầu (1AC) */}
          <Card sx={{
            background: '#f8fafc',
            borderRadius: 4,
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.06)',
            border: '1px solid #e2e8f0',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <CardContent sx={{ p: 3, position: 'relative', zIndex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#22c55e' }}>{stats.firstAttemptCorrect}</Typography>
                <Avatar sx={{ 
                  bgcolor: '#dcfce7', 
                  width: 48, 
                  height: 48 
                }}>
                  <StarIcon sx={{ color: '#22c55e' }} />
                </Avatar>
              </Box>
              <Typography variant="body2" sx={{ color: '#374151', fontWeight: 600 }}>
                Số bài đúng ngay lần đầu (1AC)
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b' }}>
                Đúng ngay lần nộp đầu tiên
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Submission Heatmap Section */}
        <SubmissionHeatmap data={heatmapData} />

        {/* Skills & Difficulty Section */}
        <Card sx={{ borderRadius: 4, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0', background: '#fff', mb: 6 }}>
          <Box sx={{ p: 3, bgcolor: '#f3f4f6', color: '#222' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Kỹ năng & mức độ
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Đánh giá tổng quan về kỹ năng giải bài và chủ đề
            </Typography>
          </Box>
          <CardContent sx={{ p: 3 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
              <Box>
                <Typography variant="subtitle2" color="text.secondary" mb={1}>Số bài đã giải theo độ khó</Typography>
                <Stack direction="row" spacing={2}>
                  <Box textAlign="center">
                    <Typography variant="h5" sx={{ color: '#22c55e', fontWeight: 700 }}>{stats.solvedByDifficulty?.Easy ?? 0}</Typography>
                    <Typography variant="body2" color="text.secondary">Dễ</Typography>
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h5" sx={{ color: '#f59e42', fontWeight: 700 }}>{stats.solvedByDifficulty?.Medium ?? 0}</Typography>
                    <Typography variant="body2" color="text.secondary">Trung bình</Typography>
                  </Box>
                  <Box textAlign="center">
                    <Typography variant="h5" sx={{ color: '#ef4444', fontWeight: 700 }}>{stats.solvedByDifficulty?.Hard ?? 0}</Typography>
                    <Typography variant="body2" color="text.secondary">Khó</Typography>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary" mb={1}>Chủ đề mạnh nhất</Typography>
                <Card sx={{ bgcolor: '#e0f2fe', p: 2, borderRadius: 2, boxShadow: 'none' }}>
                  <Typography variant="body1" sx={{ color: '#2563eb', fontWeight: 700 }}>Mảng một chiều</Typography>
                  <Typography variant="body2" color="text.secondary">Hoàn thành 95%, tỉ lệ đúng 92%</Typography>
                </Card>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary" mb={1}>Chủ đề yếu nhất</Typography>
                <Card sx={{ bgcolor: '#fee2e2', p: 2, borderRadius: 2, boxShadow: 'none' }}>
                  <Typography variant="body1" sx={{ color: '#ef4444', fontWeight: 700 }}>Con trỏ & bộ nhớ</Typography>
                  <Typography variant="body2" color="text.secondary">Hoàn thành 40%, tỉ lệ đúng 55%</Typography>
                </Card>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        {/* Progress Section */}
        <Box sx={{ 
          display: 'grid', 
          // gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
          gap: 4, 
          mb: 6 
        }}>
          <Card sx={{
            borderRadius: 4,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            background: '#fff'
          }}>
            <Box sx={{
              p: 3,
              bgcolor: '#f3f4f6',
              color: '#222'
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
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#2563eb' }}>
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
                      background: '#2563eb',
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
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#2563eb', fontSize: '14px' }}>
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
                            background: '#2563eb',
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

          {/* <Card sx={{
            borderRadius: 4,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            border: '1px solid #e2e8f0',
            height: 'fit-content',
            background: '#fff'
          }}>
            <Box sx={{
              p: 3,
              bgcolor: '#f3f4f6',
              color: '#222'
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
          </Card> */}
        </Box>

        {/* Topics Section */}
        <Card sx={{
          borderRadius: 4,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
          border: '1px solid #e2e8f0',
          overflow: 'hidden',
          background: '#fff'
        }}>
          <Box sx={{
            p: 3,
            bgcolor: '#f3f4f6',
            color: '#222'
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
                  background: '#f8fafc',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(102, 126, 234, 0.08)',
                    borderColor: '#2563eb'
                  }
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar sx={{
                        bgcolor: '#e0e7ff',
                        width: 40,
                        height: 40
                      }}>
                        <SchoolIcon sx={{ color: '#2563eb' }} />
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
                          bgcolor: '#2563eb',
                          color: '#ffffff',
                          fontWeight: 600,
                          '&:hover': {
                            bgcolor: '#1d4ed8'
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
