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

interface TopicProgress {
  TpID: number;
  Name: string;
  totalExercises: number;
  completedExercises: number;
  progressPercentage: number;
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
  topicProgress?: TopicProgress[];
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
              {/* <Box>
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
              </Box> */}
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
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 2
              }}>
                {stats.topicProgress && stats.topicProgress.length > 0 ? (
                  stats.topicProgress.map((topic) => (
                    <Box key={topic.TpID} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '14px' }}>
                          {topic.Name}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#2563eb', fontSize: '14px' }}>
                          {topic.progressPercentage}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={topic.progressPercentage}
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
                      <Typography variant="caption" sx={{ color: '#64748b', fontSize: '11px' }}>
                        {topic.completedExercises}/{topic.totalExercises} bài tập
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Box sx={{ gridColumn: '1 / -1', textAlign: 'center', py: 4 }}>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      Chưa có dữ liệu tiến độ học tập
                    </Typography>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
