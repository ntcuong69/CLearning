"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NavBar from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, Divider, CircularProgress, Alert, Avatar, IconButton, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const ExerciseListItem = ({ ex, spiid }: { ex: any, spiid: number }) => {
  const solved = ex.status === 'Solved';
  let difficultyColor = '#43a047';
  if (ex.Difficulty === 'Medium') difficultyColor = '#ffa726';
  if (ex.Difficulty === 'Hard') difficultyColor = '#e53935';
  return (
    <ListItem
      sx={{ pl: 2, cursor: 'pointer', '&:hover': { bgcolor: '#f5f5f5' } }}
      onClick={() => window.location.href = `/exercises/${ex.Slug}`}
      secondaryAction={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            component="span"
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              bgcolor: difficultyColor,
              color: '#fff',
              fontWeight: 600,
              fontSize: 13,
              minWidth: 60,
              textAlign: 'center',
            }}
          >
            {ex.Difficulty}
          </Box>
        </Box>
      }
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 32 }}>
        {solved ? (
          <CheckCircleIcon sx={{ color: '#43a047' }} />
        ) : (
          <RadioButtonUncheckedIcon sx={{ color: '#bdbdbd' }} />
        )}
      </Box>
      <ListItemText
        primary={ex.Name}
        secondary={`SPIID: ${spiid}`}
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
        }}
      >
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>
        ) : plan ? (
          <>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 4, textAlign: 'center' }}>
              {plan.Name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: '#666' }}>
              {plan.Description}
            </Typography>
            {plan.studyplanitem.length > 0 && (
              <Box sx={{ width: '100%' }}>
                {plan.studyplanitem.map((item: any, idx: number) => (
                  <Box key={item.SPIID} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', mb: 0 }}>
                    {/* Progress indicator */}
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: 32,
                      pt: 2.5,
                      mr: 4,
                    }}>
                      {/* Circle */}
                      <Box sx={{
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        border: '2px solid #bdbdbd',
                        zIndex: 1,
                      }} />
                      {/* Line (except last item) */}
                      {idx < plan.studyplanitem.length - 1 && (
                        <Box sx={{
                          width: '1px',
                          flex: 1,
                          minHeight: 48,
                          bgcolor: '#bdbdbd',
                          mt: '0px',
                          mb: '-15px',
                        }} />
                      )}
                    </Box>
                    {/* Studyplanitem card */}
                    <Box sx={{ flex: 1 }}>
                      <Paper
                        elevation={3}
                        sx={{
                          borderRadius: 3,
                          p: 0,
                          bgcolor: '#fff',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                          mb: 4,
                          overflow: 'hidden',
                        }}
                      >
                        <Box sx={{ px: 3, pt: 2, pb: 1 }}>
                          <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#222', fontSize: 18, mb: 0 }}>
                            {item.Name}
                          </Typography>
                        </Box>
                        <List sx={{ px: 2, pb: 2 }}>
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
