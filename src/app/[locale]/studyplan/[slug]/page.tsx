"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NavBar from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, Divider, CircularProgress, Alert, Avatar, IconButton, Paper, Chip, LinearProgress } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';

const ExerciseListItem = ({ ex, spiid }: { ex: any, spiid: number }) => {
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
            window.location.href = url;
          })
          .catch((error) => {
            console.error('Error getting studyplan ID:', error);
            // Fallback to regular exercise URL
            window.location.href = `/exercises/${ex.Slug}`;
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
            {solved ? 'Đã hoàn thành' : attempting ? 'Đang thực hiện' : 'Chưa bắt đầu'}
          </Typography>
        }
        sx={{ ml: 1 }}
      />
    </ListItem>
  );
};

const StudyPlanDetailPage = () => {
  const { slug } = useParams();
  const [plan, setPlan] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
                {plan.Name}
              </Typography>
              <Typography variant="h6" sx={{ 
                mb: 3, 
                opacity: 0.9,
                fontWeight: 300,
                maxWidth: 600,
                mx: 'auto'
              }}>
                {plan.Description}
              </Typography>
              
              {/* Action Buttons */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 2, 
                mt: 3,
                flexWrap: 'wrap'
              }}>
                {plan.studyPlanStatus === 'NotStarted' && (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      py: 1.5,
                      px: 3,
                      borderRadius: 3,
                      bgcolor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.3)',
                        transform: 'scale(1.05)',
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
                        // Reload page to update status
                        window.location.reload();
                      } catch (error) {
                        console.error('Error starting study plan:', error);
                      }
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 18 }} />
                    Bắt đầu học
                  </Box>
                )}
                
                {plan.studyPlanStatus === 'InProgress' && (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      py: 1.5,
                      px: 3,
                      borderRadius: 3,
                      bgcolor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.3)',
                        transform: 'scale(1.05)',
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
                            action: 'complete'
                          }),
                        });
                        // Reload page to update status
                        window.location.reload();
                      } catch (error) {
                        console.error('Error completing study plan:', error);
                      }
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 18 }} />
                    Đánh dấu hoàn thành
                  </Box>
                )}
                
                {plan.studyPlanStatus === 'Completed' && (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      py: 1.5,
                      px: 3,
                      borderRadius: 3,
                      bgcolor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.3)',
                        transform: 'scale(1.05)',
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
                            action: 'restart'
                          }),
                        });
                        // Reload page to update status
                        window.location.reload();
                      } catch (error) {
                        console.error('Error restarting study plan:', error);
                      }
                    }}
                  >
                    <PlayArrowIcon sx={{ fontSize: 18 }} />
                    Học lại
                  </Box>
                )}
              </Box>
              
              {/* Progress Overview */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 4, 
                mt: 3,
                flexWrap: 'wrap'
              }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" fontWeight={700} sx={{ color: '#fff' }}>
                    {plan.studyplanitem.length}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Chương học
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" fontWeight={700} sx={{ color: '#fff' }}>
                    {plan.studyplanitem.reduce((acc: number, item: any) => acc + item.exercise.length, 0)}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Bài tập
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" fontWeight={700} sx={{ color: '#fff' }}>
                    {plan.studyplanitem.filter((item: any) => item.isCompleted).length}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Đã hoàn thành
                  </Typography>
                </Box>
              </Box>
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
                              <Typography variant="body2" sx={{ 
                                opacity: item.isCompleted ? 0.9 : 0.7,
                                fontWeight: 400
                              }}>
                                {item.exercise.length} bài tập
                              </Typography>
                            </Box>
                            <Box sx={{ textAlign: 'right' }}>
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
      </Box>
    </Box>
  );
};

export default StudyPlanDetailPage;
