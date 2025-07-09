"use client";
import React, { useEffect, useState } from "react";
import NavBar from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Box, Typography, CircularProgress, Alert, Paper, LinearProgress } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useRouter } from 'next/navigation';

const StudyPlanPage = () => {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [startingPlan, setStartingPlan] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('/api/studyplan/list')
      .then(async (res) => {
        if (!res.ok) throw new Error('Lỗi khi tải lộ trình học');
        const data = await res.json();
        setPlans(data);
      })
      .catch((err) => {
        setError(err.message || 'Lỗi không xác định');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleStartStudyPlan = async (plan: any) => {
    // Chỉ gọi API khi trạng thái là NotStarted
    if (plan.studyPlanStatus === 'NotStarted') {
      setStartingPlan(plan.SPID);
      try {
        // Gọi API để bắt đầu study plan
        const response = await fetch('/api/studyplan/progress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            SPID: plan.SPID,
            action: 'start'
          }),
        });

        if (response.ok) {
          // Cập nhật trạng thái local
          setPlans(prevPlans => 
            prevPlans.map(p => 
              p.SPID === plan.SPID 
                ? { ...p, studyPlanStatus: 'InProgress' }
                : p
            )
          );
        }
      } catch (error) {
        console.error('Error starting study plan:', error);
      } finally {
        setStartingPlan(null);
      }
    }
    
    // Chuyển đến trang chi tiết study plan
    router.push(`/studyplan/${plan.Slug}`);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', pt: '70px' }}>
      <NavBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: '280px' },
          px: { xs: 2, sm: 6, md: 10 },
          py: 6,
          maxWidth: 1200,
          mx: 'auto',
          minHeight: '100vh',
        }}
      >
        {/* Header Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 4,
          p: 4,
          color: 'white',
          boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
        }}>
          <SchoolIcon sx={{ fontSize: 48, mb: 2, opacity: 0.9 }} />
          <Typography variant="h3" fontWeight={700} sx={{ mb: 2, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Lộ trình học
          </Typography>
          <Typography variant="h6" sx={{ 
            opacity: 0.9,
            fontWeight: 300,
            maxWidth: 600,
            mx: 'auto'
          }}>
            Chọn lộ trình phù hợp với mục tiêu học tập của bạn
          </Typography>
        </Box>
        {loading ? (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            mt: 8,
            gap: 3
          }}>
            <Box sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': { transform: 'scale(1)', opacity: 1 },
                '50%': { transform: 'scale(1.1)', opacity: 0.7 },
                '100%': { transform: 'scale(1)', opacity: 1 },
              }
            }}>
              <SchoolIcon sx={{ fontSize: 40, color: 'white' }} />
            </Box>
            <Typography variant="h6" sx={{ color: '#666', fontWeight: 500 }}>
              Đang tải lộ trình học...
            </Typography>
            <CircularProgress size={24} sx={{ color: '#667eea' }} />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>
        ) : (
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3 
          }}>
            {plans.map((plan, idx) => {
              const gradients = [
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
              ];
              
              const icons = [
                <SchoolIcon key="school" />,
                <TrendingUpIcon key="trending" />,
                <StarIcon key="star" />,
                <ChatBubbleOutlineIcon key="chat" />,
                <TrackChangesIcon key="track" />,
                <FavoriteBorderIcon key="favorite" />
              ];

              return (
                <Paper
                  key={plan.SPID}
                    elevation={4}
                    sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      height: '100%',
                      minHeight: 280,
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                      }
                    }}
                  >
                    {/* Header with gradient */}
                    <Box sx={{
                      background: gradients[idx % gradients.length],
                      p: 3,
                      textAlign: 'center',
                      color: 'white',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <Box sx={{
                        position: 'absolute',
                        top: -20,
                        right: -20,
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.1)',
                      }} />
                      <Box sx={{
                        position: 'absolute',
                        bottom: -30,
                        left: -30,
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.05)',
                      }} />
                      <Box sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        backdropFilter: 'blur(10px)',
                      }}>
                        {React.cloneElement(icons[idx % icons.length], { 
                          sx: { fontSize: 32, color: 'white' } 
                        })}
                      </Box>
                      <Typography variant="h5" fontWeight={700} sx={{ 
                        mb: 1,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}>
                        {plan.Name}
                      </Typography>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="body2" sx={{ 
                        color: '#666', 
                        mb: 3,
                        flex: 1,
                        lineHeight: 1.6
                      }}>
                        {plan.Description}
                      </Typography>



                      {/* Progress indicator */}
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="caption" sx={{ color: '#666', fontWeight: 500 }}>
                            Tiến độ
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#666' }}>
                            {plan.progress?.percentage || 0}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={plan.progress?.percentage || 0}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            bgcolor: '#f0f0f0',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              background: gradients[idx % gradients.length],
                            }
                          }}
                        />
                        <Typography variant="caption" sx={{ 
                          color: '#999', 
                          fontSize: 11,
                          mt: 0.5,
                          display: 'block',
                          textAlign: 'center'
                        }}>
                          {plan.progress?.completed || 0}/{plan.progress?.total || 0} bài tập
                        </Typography>
                      </Box>

                      {/* Action button */}
                      <Box sx={{
                        mt: 'auto',
                        pt: 2,
                        borderTop: '1px solid #f0f0f0'
                      }}>
                        <Box 
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                            py: 1.5,
                            px: 2,
                            borderRadius: 2,
                            bgcolor: plan.studyPlanStatus === 'Completed' ? '#4caf50' : plan.studyPlanStatus === 'InProgress' ? '#2196f3' : '#f8f9fa',
                            color: plan.studyPlanStatus === 'Completed' || plan.studyPlanStatus === 'InProgress' ? 'white' : '#333',
                            fontWeight: 600,
                            fontSize: 14,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              bgcolor: plan.studyPlanStatus === 'Completed' ? '#45a049' : plan.studyPlanStatus === 'InProgress' ? '#1976d2' : '#e9ecef',
                              transform: 'scale(1.02)',
                            }
                          }}
                          onClick={() => handleStartStudyPlan(plan)}
                        >
                          {startingPlan === plan.SPID ? (
                            <CircularProgress size={16} sx={{ color: 'inherit' }} />
                          ) : plan.studyPlanStatus === 'Completed' ? (
                            <>
                              <CheckCircleIcon sx={{ fontSize: 18 }} />
                              Xem lại
                            </>
                          ) : plan.studyPlanStatus === 'InProgress' ? (
                            <>
                              <PlayArrowIcon sx={{ fontSize: 18 }} />
                              Tiếp tục học
                            </>
                          ) : (
                            <>
                              <PlayArrowIcon sx={{ fontSize: 18 }} />
                              Bắt đầu học
                            </>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
              );
            })}
          </Box>
        )}
        {/* Chi tiết lộ trình khi mở */}
        {/* (Ẩn phần Collapse chi tiết lộ trình, vì giờ sẽ chuyển sang trang chi tiết) */}
      </Box>
    </Box>
  );
};

export default StudyPlanPage;
