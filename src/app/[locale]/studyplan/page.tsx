"use client";
import React, { useEffect, useState } from "react";
import NavBar from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Box, Typography, Card, CardContent, Collapse, IconButton, List, ListItem, ListItemText, Divider, CircularProgress, Alert, Grid, Paper, Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from 'next/navigation';

const StudyPlanPage = () => {
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openPlan, setOpenPlan] = useState<number | null>(null);
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
        <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
          Lộ trình học
        </Typography>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>
        ) : (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
            {plans.map((plan, idx) => {
              let icon = <ChatBubbleOutlineIcon fontSize="large" />;
              if (idx === 1) icon = <TrackChangesIcon fontSize="large" />;
              if (idx === 2) icon = <FavoriteBorderIcon fontSize="large" />;
              return (
                <Paper
                  key={plan.SPID}
                  elevation={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    bgcolor: '#fff',
                    borderRadius: 3,
                    p: 3,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-6px) scale(1.03)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
                    },
                    minHeight: 120,
                    maxWidth: 350,
                    width: '100%',
                    flex: '1 1 320px',
                  }}
                  onClick={() => router.push(`/studyplan/${plan.Slug}`)}
                >
                  <Avatar
                    sx={{
                      bgcolor: idx === 0 ? '#1ec9a4' : idx === 1 ? '#2979ff' : '#a259e6',
                      width: 56,
                      height: 56,
                      mr: 2,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                    }}
                  >
                    {icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={700} sx={{ color: '#222', mb: 0.5 }}>
                      {plan.Name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {plan.Description}
                    </Typography>
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
