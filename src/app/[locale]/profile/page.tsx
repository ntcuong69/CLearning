"use client";

import React, { useEffect, useState } from 'react';
import NavBar from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Stack, 
  Avatar, 
  Chip, 
  CircularProgress, 
  Paper, 
  Button, 
  LinearProgress,
  Divider,
  IconButton,
  Tooltip
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import axios from 'axios';

interface User {
  UID: string;
  Username: string;
  Email: string;
  Role: string;
  CreatedAt: string;
  isVerified?: boolean;
}

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editNameMode, setEditNameMode] = useState(false);
  const [editName, setEditName] = useState("");
  const [savingName, setSavingName] = useState(false);
  const [saveNameError, setSaveNameError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('/api/me')
      .then((res) => {
        setUser(res.data.user);
        setEditName(res.data.user.Username);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching user data:', err);
        setError('Không thể tải thông tin người dùng');
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh', pt: '70px', justifyContent: 'center', alignItems: 'center'}}>
        <NavBar />
        <CircularProgress size={60} sx={{ color: '#cc2b5e' }} />
      </Box>
    );
  }

  if (error || !user) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh', pt: '70px', justifyContent: 'center', alignItems: 'center'}}>
        <NavBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: '100%',
            maxWidth: 900,
            mx: 'auto',
            px: { xs: 2, sm: 4, md: 6 },
            py: 6,
            borderRadius: 4,
            boxShadow: { xs: 'none', md: '0 4px 32px rgba(0,0,0,0.07)' },
          }}
        >
          <Typography variant="h5" color="error" sx={{ textAlign: 'center', mt: 4 }}>
            {error || 'Không tìm thấy thông tin người dùng'}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', pt: '70px', justifyContent: 'center', alignItems: 'center' }}>
      <NavBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, sm: 4, md: 6 },
          py: 6,
        }}
      >
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 2, background: 'linear-gradient(45deg, #cc2b5e, #753a88)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Hồ sơ cá nhân
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quản lý thông tin cá nhân và cài đặt tài khoản
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {/* Left Column - Profile Info */}
          <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
            {/* Profile Card */}
            <Card sx={{ 
              borderRadius: 3, 
              mb: 3, 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Box sx={{ 
                position: 'absolute', 
                top: -50, 
                right: -50, 
                width: 100, 
                height: 100, 
                borderRadius: '50%', 
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)'
              }} />
              <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 3,
                    bgcolor: 'rgba(255,255,255,0.2)',
                    fontSize: '3rem',
                    fontWeight: 700,
                    border: '4px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: 100, color: 'white', opacity: 0.9 }} />
                </Avatar>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                  <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
                    {user.Username}
                  </Typography>
                </Box>
                {saveNameError && <Typography color="error" sx={{ fontSize: 14, mb: 1 }}>{saveNameError}</Typography>}
                <Chip
                  label={user.Role}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)',
                  }}
                />
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card sx={{ borderRadius: 3, mb: 3 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#333' }}>
                  Quản lý tài khoản
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant="outlined"
                    startIcon={<LockIcon />}
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      borderColor: '#667eea',
                      color: '#667eea',
                      '&:hover': {
                        borderColor: '#764ba2',
                        bgcolor: 'rgba(102, 126, 234, 0.05)',
                      }
                    }}
                  >
                    Đổi mật khẩu
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<SecurityIcon />}
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      borderColor: '#f093fb',
                      color: '#f093fb',
                      '&:hover': {
                        borderColor: '#f5576c',
                        bgcolor: 'rgba(240, 147, 251, 0.05)',
                      }
                    }}
                  >
                    Quên mật khẩu
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>

          {/* Right Column - Details & Stats */}
          <Box sx={{ width: { xs: '100%', md: '66.67%' } }}>
            {/* Personal Information */}
            <Card sx={{ borderRadius: 3, mb: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#333' }}>
                  Thông tin cá nhân
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                    <BadgeIcon sx={{ color: '#f093fb', fontSize: 24 }} />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="caption" color="text.secondary">ID người dùng (UID)</Typography>
                      <Typography variant="body2" fontWeight={500} fontFamily="monospace">{user.UID}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                    <PersonIcon sx={{ color: '#753a88', fontSize: 24 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">Tên người dùng</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {editNameMode ? (
                          <form
                            onSubmit={async (e) => {
                              e.preventDefault();
                              setSavingName(true);
                              setSaveNameError(null);
                              try {
                                const res = await axios.put('/api/me', { Username: editName });
                                setUser((prev) => prev ? { ...prev, Username: editName } : prev);
                                setEditNameMode(false);
                              } catch (err: any) {
                                setSaveNameError(err?.response?.data?.error || 'Cập nhật thất bại');
                              }
                              setSavingName(false);
                            }}
                            style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                          >
                            <input
                              type="text"
                              value={editName}
                              onChange={e => setEditName(e.target.value)}
                              style={{
                                padding: 6,
                                borderRadius: 6,
                                border: '1px solid #ccc',
                                fontSize: 16,
                                fontWeight: 500,
                                minWidth: 120,
                                marginRight: 8
                              }}
                              required
                            />
                            <Button type="submit" variant="contained" color="primary" size="small" disabled={savingName} sx={{ minWidth: 40, px: 2 }}>
                              {savingName ? <CircularProgress size={18} /> : 'Lưu'}
                            </Button>
                            <Button variant="outlined" color="secondary" size="small" onClick={() => { setEditNameMode(false); setEditName(user.Username); }} sx={{ minWidth: 40, px: 2 }}>
                              Hủy
                            </Button>
                          </form>
                        ) : (
                          <>
                            <Typography variant="body2" fontWeight={500}>{user.Username}</Typography>
                            <Tooltip title="Đổi tên">
                              <IconButton size="small" sx={{ ml: 1, color: '#753a88' }} onClick={() => setEditNameMode(true)}>
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </>
                        )}
                      </Box>
                      {saveNameError && <Typography color="error" sx={{ fontSize: 14, mt: 0.5 }}>{saveNameError}</Typography>}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                    <EmailIcon sx={{ color: '#cc2b5e', fontSize: 24 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">Email</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" fontWeight={500}>
                          {user.Email}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                    <CalendarTodayIcon sx={{ color: '#667eea', fontSize: 24 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">Ngày tham gia</Typography>
                      <Typography variant="body2" fontWeight={500}>{formatDate(user.CreatedAt)}</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
