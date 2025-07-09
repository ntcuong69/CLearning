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
  const [editMode, setEditMode] = useState(false);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('/api/me')
      .then((res) => {
        setUser(res.data.user);
        setEditName(res.data.user.Username);
        setEditEmail(res.data.user.Email);
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
                <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
                  {user.Username}
                </Typography>
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
                  {!editMode ? (
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      fullWidth
                      sx={{
                        borderRadius: 2,
                        py: 1.5,
                        borderColor: '#cc2b5e',
                        color: '#cc2b5e',
                        '&:hover': {
                          borderColor: '#753a88',
                          bgcolor: 'rgba(204, 43, 94, 0.05)',
                        }
                      }}
                      onClick={() => setEditMode(true)}
                    >
                      Cập nhật thông tin
                    </Button>
                  ) : (
                    <Box component="form" onSubmit={async (e) => {
                      e.preventDefault();
                      setSaving(true);
                      setSaveError(null);
                      try {
                        const res = await axios.put('/api/me', { Username: editName, Email: editEmail });
                        setUser((prev) => prev ? { ...prev, Username: editName, Email: editEmail } : prev);
                        setEditMode(false);
                      } catch (err: any) {
                        setSaveError(err?.response?.data?.error || 'Cập nhật thất bại');
                      }
                      setSaving(false);
                    }} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Typography variant="subtitle1" fontWeight={600}>Cập nhật thông tin</Typography>
                      <input
                        type="text"
                        value={editName}
                        onChange={e => setEditName(e.target.value)}
                        placeholder="Tên người dùng"
                        style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', fontSize: 16 }}
                        required
                      />
                      <input
                        type="email"
                        value={editEmail}
                        onChange={e => setEditEmail(e.target.value)}
                        placeholder="Email"
                        style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', fontSize: 16 }}
                        required
                      />
                      {saveError && <Typography color="error">{saveError}</Typography>}
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button type="submit" variant="contained" color="primary" disabled={saving} sx={{ minWidth: 100 }}>
                          {saving ? 'Đang lưu...' : 'Lưu'}
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={() => setEditMode(false)} sx={{ minWidth: 100 }}>
                          Hủy
                        </Button>
                      </Box>
                    </Box>
                  )}
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
                      <Typography variant="body2" fontWeight={500}>{user.Username}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                    <EmailIcon sx={{ color: '#cc2b5e', fontSize: 24 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">Email</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {editMode ? (
                          <input
                            type="email"
                            value={editEmail}
                            onChange={e => setEditEmail(e.target.value)}
                            style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc', fontSize: 16, minWidth: 180 }}
                            required
                          />
                        ) : (
                          <Typography variant="body2" fontWeight={500}>
                            {user.Email}
                          </Typography>
                        )}
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

            {/* Learning Statistics */}
            <Card sx={{ borderRadius: 3, mb: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#333' }}>
                  Thống kê học tập
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap', gap: 3 }}>
                  <Box sx={{ width: { xs: '100%', sm: '50%', md: '25%' } }}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" fontWeight={700} color="#cc2b5e">24</Typography>
                      <Typography variant="body2" color="text.secondary">Bài tập đã làm</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: { xs: '100%', sm: '50%', md: '25%' } }}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" fontWeight={700} color="#667eea">87%</Typography>
                      <Typography variant="body2" color="text.secondary">Tỷ lệ hoàn thành</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: { xs: '100%', sm: '50%', md: '25%' } }}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" fontWeight={700} color="#f093fb">15</Typography>
                      <Typography variant="body2" color="text.secondary">Ngày liên tiếp</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ width: { xs: '100%', sm: '50%', md: '25%' } }}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h4" fontWeight={700} color="#4facfe">4.8</Typography>
                      <Typography variant="body2" color="text.secondary">Đánh giá trung bình</Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" fontWeight={500}>Tiến độ học tập</Typography>
                    <Typography variant="body2" color="text.secondary">75%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={75} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      bgcolor: '#f0f0f0',
                      '& .MuiLinearProgress-bar': {
                        background: 'linear-gradient(45deg, #cc2b5e, #753a88)',
                        borderRadius: 4,
                      }
                    }} 
                  />
                </Box>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#333' }}>
                  Hoạt động gần đây
                </Typography>
                <Stack spacing={2}>
                  {[
                    { icon: <AssignmentIcon />, text: 'Hoàn thành bài tập "Tính tổng hai số"', time: '2 giờ trước', color: '#cc2b5e' },
                    { icon: <SchoolIcon />, text: 'Xem bài giảng "Cấu trúc dữ liệu"', time: '5 giờ trước', color: '#667eea' },
                    { icon: <StarIcon />, text: 'Nhận 5 sao cho bài tập "Tìm số nguyên tố"', time: '1 ngày trước', color: '#f093fb' },
                    { icon: <TrendingUpIcon />, text: 'Tăng level từ 3 lên 4', time: '2 ngày trước', color: '#4facfe' },
                  ].map((activity, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f8f9fa', borderRadius: 2, transition: 'all 0.2s', '&:hover': { bgcolor: '#f0f0f0' } }}>
                      <Box sx={{ color: activity.color, display: 'flex', alignItems: 'center' }}>
                        {activity.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" fontWeight={500}>{activity.text}</Typography>
                        <Typography variant="caption" color="text.secondary">{activity.time}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
