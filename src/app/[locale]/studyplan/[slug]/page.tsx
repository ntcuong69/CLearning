"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import NavBar from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, Divider, CircularProgress, Alert, Avatar, IconButton, Paper, Chip, LinearProgress, Snackbar } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import Linkify from 'linkify-react';

const ExerciseListItem = ({ ex, spiid }: { ex: any, spiid: number }) => {
  const router = useRouter();
  const solved = ex.status === 'Solved';
  const attempting = ex.status === 'Attempting';
  
  let difficultyColor = '#4caf50';
  let difficultyBg = '#e8f5e8';
  if (ex.Difficulty === 'Medium') {
    difficultyColor = '#ff9800';
    difficultyBg = '#fff3e0';
  }
  if (ex.Difficulty === 'Hard') {
    difficultyColor = '#f44336';
    difficultyBg = '#ffebee';
  }

  return (
    <ListItem
      sx={{ 
        pl: 2, 
        cursor: 'pointer', 
        borderRadius: 2,
        mb: 1,
        '&:hover': { 
          bgcolor: '#f8f9fa'
        }
      }}
      onClick={() => {
        // Get the studyplan slug from the current URL
        const pathSegments = window.location.pathname.split('/');
        const studyplanSlug = pathSegments[pathSegments.length - 1];
        
        // Find the studyplan SPID by slug
        fetch('/api/studyplan/list')
          .then(async (res) => {
            if (!res.ok) throw new Error('Lỗi khi tải lộ trình học');
            const data = await res.json();
            const found = data.find((p: any) => p.Slug === studyplanSlug);
            if (!found) throw new Error('Không tìm thấy lộ trình học');
            return found.SPID;
          })
          .then((spid) => {
            const url = `/exercises/${ex.Slug}?source=studyplan&id=${spid}`;
            router.push(url);
          })
          .catch((error) => {
            console.error('Error getting studyplan ID:', error);
            // Fallback to regular exercise URL
            router.push(`/exercises/${ex.Slug}`);
          });
      }}
      secondaryAction={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip
            label={ex.Difficulty}
            size="small"
            sx={{
              bgcolor: difficultyBg,
              color: difficultyColor,
              fontWeight: 600,
              fontSize: 12,
              border: `1px solid ${difficultyColor}20`,
            }}
          />
        </Box>
      }
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 32 }}>
        {solved ? (
          <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 20 }} />
        ) : attempting ? (
          <RadioButtonUncheckedIcon sx={{ color: '#ff9800', fontSize: 20 }} />
        ) : (
          <RadioButtonUncheckedIcon sx={{ color: '#bdbdbd', fontSize: 20 }} />
        )}
      </Box>
      <ListItemText
        primary={
          <Typography variant="body1" sx={{ 
            fontWeight: solved ? 600 : 400,
            color: solved ? '#2e7d32' : '#333',
          }}>
            {ex.Name}
          </Typography>
        }
        secondary={
          <Typography variant="caption" sx={{ color: '#666', fontSize: 11 }}>
            {solved ? 'Đã hoàn thành' : attempting ? 'Đang làm' : 'Chưa làm'}
          </Typography>
        }
        sx={{ ml: 1 }}
      />
    </ListItem>
  );
};

const StudyPlanDetailPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [plan, setPlan] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(null);
    // First, fetch all plans to find SPID by slug
    fetch('/api/studyplan/list')
      .then(async (res) => {
        if (!res.ok) throw new Error('Lỗi khi tải lộ trình học');
        const data = await res.json();
        const found = data.find((p: any) => p.Slug === slug);
        if (!found) throw new Error('Không tìm thấy lộ trình học');
        return found.SPID;
      })
      .then((spid) => fetch(`/api/studyplan/${spid}`))
      .then(async (res) => {
        if (!res.ok) throw new Error('Lỗi khi tải chi tiết lộ trình');
        const data = await res.json();
        setPlan(data);
        
        // Kiểm tra xem có cần đánh dấu hoàn thành không
        const allExercises = data.studyplanitem.flatMap((item: any) => item.exercise);
        const completedExercises = allExercises.filter((ex: any) => ex.status === 'Solved');
        
        if (completedExercises.length === allExercises.length && allExercises.length > 0) {
          // Tất cả bài tập đã hoàn thành, đánh dấu study plan hoàn thành
          try {
            await fetch('/api/studyplan/progress', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                SPID: data.SPID,
                action: 'complete'
              }),
            });
          } catch (error) {
            console.error('Error completing study plan:', error);
          }
        }
      })
      .catch((err) => {
        setError(err.message || 'Lỗi không xác định');
      })
      .finally(() => setLoading(false));
  }, [slug]);

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
          background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
          minHeight: '100vh',
        }}
      >
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
        ) : plan ? (
          <>
                                       {/* Header Section */}
              <Box sx={{ 
                mb: 4,
                background: '#ffffff',
                borderRadius: 2,
                p: 3,
                boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
                border: '1px solid #f0f0f0'
              }}>
                {/* Title and Description */}
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Box sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    bgcolor: '#f8f9fa',
                    mb: 1.5
                  }}>
                    <SchoolIcon sx={{ fontSize: 22, color: '#6c757d' }} />
                  </Box>
                  <Typography variant="h5" fontWeight={600} sx={{ 
                    mb: 1.5, 
                    color: '#2c3e50',
                    lineHeight: 1.2
                  }}>
                    {plan.Name}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#6c757d',
                    maxWidth: 500,
                    mx: 'auto',
                    lineHeight: 1.5
                  }}>
                    {plan.Description}
                  </Typography>
                </Box>
                
                {/* Action Button */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  mb: 3
                }}>
                 {plan.studyPlanStatus === 'NotStarted' && (
                   <Box
                     sx={{
                       display: 'flex',
                       alignItems: 'center',
                       gap: 1,
                       py: 2,
                       px: 4,
                       borderRadius: 2,
                       bgcolor: '#007bff',
                       color: 'white',
                       fontWeight: 600,
                       fontSize: 15,
                       cursor: 'pointer',
                       transition: 'all 0.2s ease',
                       '&:hover': {
                         bgcolor: '#0056b3',
                         transform: 'translateY(-1px)',
                         boxShadow: '0 4px 12px rgba(0,123,255,0.3)',
                       }
                     }}
                     onClick={async () => {
                       try {
                         await fetch('/api/studyplan/progress', {
                           method: 'POST',
                           headers: {
                             'Content-Type': 'application/json',
                           },
                           body: JSON.stringify({
                             SPID: plan.SPID,
                             action: 'start'
                           }),
                         });
                         router.refresh();
                       } catch (error) {
                         console.error('Error starting study plan:', error);
                       }
                     }}
                   >
                     <PlayArrowIcon sx={{ fontSize: 20 }} />
                     Bắt đầu học
                   </Box>
                 )}
                 
                 {plan.studyPlanStatus === 'InProgress' && (
                   <Box
                     sx={{
                       display: 'flex',
                       alignItems: 'center',
                       gap: 1,
                       py: 2,
                       px: 4,
                       borderRadius: 2,
                       bgcolor: '#28a745',
                       color: 'white',
                       fontWeight: 600,
                       fontSize: 15,
                       cursor: 'pointer',
                       transition: 'all 0.2s ease',
                       '&:hover': {
                         bgcolor: '#1e7e34',
                         transform: 'translateY(-1px)',
                         boxShadow: '0 4px 12px rgba(40,167,69,0.3)',
                       }
                     }}
                     onClick={async () => {
                       // Kiểm tra xem tất cả bài tập đã hoàn thành chưa
                       const allExercises = plan.studyplanitem.flatMap((item: any) => item.exercise);
                       const completedExercises = allExercises.filter((ex: any) => ex.status === 'Solved');
                       
                       if (completedExercises.length === allExercises.length && allExercises.length > 0) {
                         // Tất cả bài tập đã hoàn thành, cho phép đánh dấu hoàn thành
                         try {
                           await fetch('/api/studyplan/progress', {
                             method: 'POST',
                             headers: {
                               'Content-Type': 'application/json',
                             },
                             body: JSON.stringify({
                               SPID: plan.SPID,
                               action: 'complete'
                             }),
                           });
                           router.refresh();
                         } catch (error) {
                           console.error('Error completing study plan:', error);
                           setSnackbarMessage('Có lỗi xảy ra khi đánh dấu hoàn thành');
                           setSnackbarOpen(true);
                         }
                       } else {
                         // Chưa hoàn thành hết bài tập, hiển thị thông báo
                         setSnackbarMessage('Bạn cần hoàn thành tất cả bài tập trước khi đánh dấu hoàn thành khóa học');
                         setSnackbarOpen(true);
                       }
                     }}
                   >
                     <CheckCircleIcon sx={{ fontSize: 20 }} />
                     Đánh dấu hoàn thành
                   </Box>
                 )}
                 
                                   {plan.studyPlanStatus === 'Completed' && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        py: 2,
                        px: 4,
                        borderRadius: 2,
                        bgcolor: '#4caf50',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: 15
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 20 }} />
                      Đã hoàn thành khóa học
                    </Box>
                  )}
                  
                  {/* Reminder message for users who completed all exercises but haven't marked as complete */}
                  {plan.studyPlanStatus === 'InProgress' && (() => {
                    const allExercises = plan.studyplanitem.flatMap((item: any) => item.exercise);
                    const completedExercises = allExercises.filter((ex: any) => ex.status === 'Solved');
                    const allCompleted = completedExercises.length === allExercises.length && allExercises.length > 0;
                    
                    return allCompleted ? (
                      <Box
                        sx={{
                          mt: 2,
                          p: 2,
                          bgcolor: '#fff3cd',
                          border: '1px solid #ffeaa7',
                          borderRadius: 2,
                          textAlign: 'center'
                        }}
                      >
                        <Typography variant="body2" sx={{ 
                          color: '#856404',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1
                        }}>
                          <CheckCircleIcon sx={{ fontSize: 18 }} />
                          Chúc mừng! Bạn đã hoàn thành tất cả bài tập. Hãy nhấn "Đánh dấu hoàn thành" ở trên để hoàn tất khóa học.
                        </Typography>
                      </Box>
                    ) : null;
                  })()}
               </Box>
               
                               {/* Progress Overview */}
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                  gap: 2,
                  mb: 2
                }}>
                  <Box sx={{ 
                    textAlign: 'center', 
                    p: 2, 
                    bgcolor: '#f8f9fa', 
                    borderRadius: 1.5,
                    border: '1px solid #e9ecef'
                  }}>
                    <Typography variant="h4" fontWeight={700} sx={{ 
                      color: '#495057',
                      mb: 0.5
                    }}>
                      {plan.studyplanitem.length}
                    </Typography>
                    <Typography variant="caption" sx={{ 
                      color: '#6c757d',
                      fontWeight: 500
                    }}>
                      Chương học
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    textAlign: 'center', 
                    p: 2, 
                    bgcolor: '#f8f9fa', 
                    borderRadius: 1.5,
                    border: '1px solid #e9ecef'
                  }}>
                    <Typography variant="h4" fontWeight={700} sx={{ 
                      color: '#495057',
                      mb: 0.5
                    }}>
                      {plan.studyplanitem.reduce((acc: number, item: any) => acc + item.exercise.length, 0)}
                    </Typography>
                    <Typography variant="caption" sx={{ 
                      color: '#6c757d',
                      fontWeight: 500
                    }}>
                      Bài tập
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    textAlign: 'center', 
                    p: 2, 
                    bgcolor: '#f8f9fa', 
                    borderRadius: 1.5,
                    border: '1px solid #e9ecef'
                  }}>
                    <Typography variant="h4" fontWeight={700} sx={{ 
                      color: '#495057',
                      mb: 0.5
                    }}>
                      {plan.studyplanitem.filter((item: any) => item.isCompleted).length}
                    </Typography>
                    <Typography variant="caption" sx={{ 
                      color: '#6c757d',
                      fontWeight: 500
                    }}>
                      Đã hoàn thành
                    </Typography>
                  </Box>
                </Box>
               
                               {/* Study Plan Timeline */}
                {(plan.startTime || plan.endTime) && (
                  <Box sx={{ 
                    p: 2, 
                    bgcolor: '#f8f9fa', 
                    borderRadius: 1.5,
                    border: '1px solid #e9ecef'
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      mb: 2, 
                      color: '#495057', 
                      fontWeight: 600,
                      textAlign: 'center'
                    }}>
                      Thời gian học tập
                    </Typography>
                    <Box sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fit, minmax(180px, 1fr))' },
                      gap: 2
                    }}>
                                           {plan.startTime && (
                        <Box sx={{ 
                          textAlign: 'center',
                          p: 1.5,
                          bgcolor: 'white',
                          borderRadius: 1.5,
                          border: '1px solid #dee2e6'
                        }}>
                          <Typography variant="caption" sx={{ 
                            color: '#6c757d', 
                            mb: 0.5,
                            fontWeight: 500
                          }}>
                            Ngày bắt đầu
                          </Typography>
                          <Typography variant="body2" sx={{ 
                            color: '#495057', 
                            fontWeight: 600
                          }}>
                            {new Date(plan.startTime).toLocaleDateString('vi-VN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </Typography>
                        </Box>
                      )}
                      {plan.endTime && (
                        <Box sx={{ 
                          textAlign: 'center',
                          p: 1.5,
                          bgcolor: 'white',
                          borderRadius: 1.5,
                          border: '1px solid #dee2e6'
                        }}>
                          <Typography variant="caption" sx={{ 
                            color: '#6c757d', 
                            mb: 0.5,
                            fontWeight: 500
                          }}>
                            Ngày hoàn thành
                          </Typography>
                          <Typography variant="body2" sx={{ 
                            color: '#495057', 
                            fontWeight: 600
                          }}>
                            {new Date(plan.endTime).toLocaleDateString('vi-VN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </Typography>
                        </Box>
                      )}
                      {plan.startTime && plan.endTime && (
                        <Box sx={{ 
                          textAlign: 'center',
                          p: 1.5,
                          bgcolor: 'white',
                          borderRadius: 1.5,
                          border: '1px solid #dee2e6'
                        }}>
                          <Typography variant="caption" sx={{ 
                            color: '#6c757d', 
                            mb: 0.5,
                            fontWeight: 500
                          }}>
                            Thời gian học
                          </Typography>
                          <Typography variant="body2" sx={{ 
                            color: '#495057', 
                            fontWeight: 600
                          }}>
                            {(() => {
                              const start = new Date(plan.startTime);
                              const end = new Date(plan.endTime);
                              const diffTime = Math.abs(end.getTime() - start.getTime());
                              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                              const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
                              
                              if (diffDays > 1) {
                                return `${diffDays} ngày`;
                              } else if (diffHours > 1) {
                                return `${diffHours} giờ`;
                              } else {
                                const diffMinutes = Math.ceil(diffTime / (1000 * 60));
                                return `${diffMinutes} phút`;
                              }
                            })()}
                          </Typography>
                        </Box>
                      )}
                   </Box>
                 </Box>
               )}
             </Box>
            {plan.studyplanitem.length > 0 && (
              <Box sx={{ width: '100%' }}>
                {plan.studyplanitem.map((item: any, idx: number) => (
                  <Box key={item.SPIID} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', mb: 0 }}>
                    {/* Progress indicator */}
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: 40,
                      pt: 2.5,
                      mr: 4,
                    }}>
                      {/* Circle or Checkmark */}
                      {item.isCompleted ? (
                        <Box sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          bgcolor: '#4caf50',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(76, 175, 80, 0.4)',
                          animation: 'pulse 2s infinite',
                          '@keyframes pulse': {
                            '0%': { transform: 'scale(1)' },
                            '50%': { transform: 'scale(1.05)' },
                            '100%': { transform: 'scale(1)' },
                          }
                        }}>
                          <CheckCircleIcon sx={{ color: 'white', fontSize: 18 }} />
                        </Box>
                      ) : (
                        <Box sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          border: '3px solid #e0e0e0',
                          bgcolor: '#fafafa',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <Typography variant="caption" sx={{ 
                            color: '#999', 
                            fontWeight: 600,
                            fontSize: 12
                          }}>
                            {idx + 1}
                          </Typography>
                        </Box>
                      )}
                      {/* Line (except last item) */}
                      {idx < plan.studyplanitem.length - 1 && (
                        <Box sx={{
                          width: '2px',
                          flex: 1,
                          minHeight: 60,
                          background: item.isCompleted ? 
                            'linear-gradient(to bottom, #4caf50, #e0e0e0)' : 
                            '#e0e0e0',
                          mt: '8px',
                          mb: '-8px',
                          borderRadius: 1,
                        }} />
                      )}
                    </Box>
                    {/* Studyplanitem card */}
                    <Box sx={{ flex: 1 }}>
                      <Paper
                        elevation={item.isCompleted ? 8 : 3}
                        sx={{
                          borderRadius: 4,
                          p: 0,
                          bgcolor: item.isCompleted ? '#f8fff8' : '#fff',
                          boxShadow: item.isCompleted ? 
                            '0 8px 32px rgba(76, 175, 80, 0.15)' : 
                            '0 4px 20px rgba(0,0,0,0.08)',
                          mb: 4,
                          overflow: 'hidden',
                          border: item.isCompleted ? '2px solid #4caf50' : '2px solid transparent',
                        }}
                      >
                        {/* Header */}
                        <Box sx={{ 
                          px: 4, 
                          py: 3, 
                          background: item.isCompleted ? 
                            'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)' : 
                            'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                          color: item.isCompleted ? 'white' : '#333',
                          position: 'relative',
                          overflow: 'hidden'
                        }}>
                          {item.isCompleted && (
                            <Box sx={{
                              position: 'absolute',
                              top: -20,
                              right: -20,
                              width: 60,
                              height: 60,
                              borderRadius: '50%',
                              bgcolor: 'rgba(255,255,255,0.1)',
                            }} />
                          )}
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box>
                              <Typography variant="h6" fontWeight={700} sx={{ 
                                mb: 1,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                              }}>
                                {item.isCompleted && <StarIcon sx={{ fontSize: 20 }} />}
                                {item.Name}
                              </Typography>
                              {item.Description && (
                                <Box sx={{ 
                                  display: 'flex', 
                                  alignItems: 'flex-start', 
                                  gap: 1, 
                                  mb: 1,
                                  width: '100%'
                                }}>
                                  <InfoIcon sx={{ 
                                    fontSize: 16, 
                                    mt: 0.2,
                                    opacity: item.isCompleted ? 0.8 : 0.6
                                  }} />
                                  <Typography variant="body2" sx={{ 
                                    lineHeight: 1.4,
                                    background: item.isCompleted ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                    px: 2,
                                    py: 1,
                                    borderRadius: 2,
                                    border: item.isCompleted ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.1)',
                                    width: '100%'
                                  }}>
                                    <Linkify
                                      options={{
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                        format: (value, type) => type === 'url' ? 'Đi đến' : value,
                                        className: () => 'text-blue-600'
                                      }}
                                    >
                                      {item.Description}
                                    </Linkify>
                                  </Typography>
                                </Box>
                              )}
                              <Typography variant="body2" sx={{ 
                                opacity: item.isCompleted ? 0.9 : 0.7,
                                fontWeight: 400
                              }}>
                                {item.exercise.length} bài tập
                              </Typography>
                            </Box>
                            <Box sx={{ textAlign: 'right', width: '15%' }}>
                              <Typography variant="h4" fontWeight={700} sx={{ 
                                color: item.isCompleted ? 'white' : '#4caf50'
                              }}>
                                {item.exercise.filter((ex: any) => ex.status === 'Solved').length}/{item.exercise.length}
                              </Typography>
                              <Typography variant="caption" sx={{ 
                                opacity: 0.8,
                                fontWeight: 500
                              }}>
                                Hoàn thành
                              </Typography>
                            </Box>
                          </Box>
                          
                          {/* Progress Bar */}
                          <Box sx={{ mt: 2 }}>
                            <LinearProgress
                              variant="determinate"
                              value={(item.exercise.filter((ex: any) => ex.status === 'Solved').length / item.exercise.length) * 100}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                bgcolor: item.isCompleted ? 'rgba(255,255,255,0.3)' : '#e0e0e0',
                                '& .MuiLinearProgress-bar': {
                                  borderRadius: 4,
                                  background: item.isCompleted ? 
                                    'linear-gradient(90deg, #fff 0%, #e8f5e8 100%)' : 
                                    'linear-gradient(90deg, #4caf50 0%, #66bb6a 100%)',
                                }
                              }}
                            />
                          </Box>
                        </Box>
                        
                        {/* Exercise List */}
                        <List sx={{ px: 2, py: 2 }}>
                          {item.exercise.map((ex: any) => (
                            <ExerciseListItem key={ex.EID} ex={ex} spiid={item.SPIID} />
                          ))}
                        </List>
                      </Paper>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </>
        ) : null}
        
        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          sx={{
            '& .MuiSnackbarContent-root': {
              bgcolor: '#f44336',
              fontWeight: 500,
            }
          }}
        >
          <Alert 
            onClose={() => setSnackbarOpen(false)} 
            severity="warning" 
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default StudyPlanDetailPage;
