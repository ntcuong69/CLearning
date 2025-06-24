"use client";

import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Box, 
  Avatar, 
  Tooltip, 
  Menu, 
  MenuItem, 
  Badge,
  InputBase,
  Divider,
  Button,
  Chip
} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { signOut } from "next-auth/react";

// Styled search input
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  border: '1px solid #e0e0e0',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#666',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationCount, setNotificationCount] = useState(3);
  const open = Boolean(anchorEl);

  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) => {
        setUsername(res.data.user.Username);
        setAvatar(res.data.user.Avatar || "");
      })
      .catch(() => {
        setUsername("");
        setAvatar("");
      });
  }, []);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleProfile = () => {
    router.push("/profile");
    handleClose();
  };

  const handleSettings = () => {
    router.push("/settings");
    handleClose();
  };

  const handleLogout = () => {
    signOut();
    handleClose();
  };

  const isActive = (path: string) => pathname.includes(path);

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        backgroundColor: '#f5f6fa',
        borderBottom: '1px solid #e0e0e0',
        backdropFilter: 'blur(10px)',
        width: '100vw',
        left: 0,
        top: 0,
        zIndex: 1300,
        boxSizing: 'border-box',
      }}
    >
      <Toolbar sx={{
        display: "flex",
        justifyContent: "space-between",
        minHeight: 70,
        px: 3,
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
      }}>
        {/* Left Section - Logo, Tên web và Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* Logo và tên web */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src="/code-logo.png" alt="Code Forge" style={{ width: 40, height: 40 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #cc2b5e, #753a88)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: { xs: 'none', sm: 'block' },
                cursor: 'pointer',
              }}
              onClick={() => router.push('/home')}
            >
              Code Forge
            </Typography>
          </Box>
        </Box>

        {/* Center Section - Search */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Tìm kiếm bài tập, tài liệu..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        {/* Right Section - Notifications and User Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Notifications */}
          <Tooltip title="Thông báo">
            <IconButton 
              size="large"
              sx={{ 
                color: "#666",
                "&:hover": { backgroundColor: "rgba(204, 43, 94, 0.1)" }
              }}
            >
              <Badge badgeContent={notificationCount} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* User Profile */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Chip
              label={`Level ${Math.floor(Math.random() * 10) + 1}`}
              size="small"
              sx={{
                backgroundColor: "rgba(204, 43, 94, 0.1)",
                color: "#cc2b5e",
                fontWeight: 600,
                fontSize: "0.75rem"
              }}
            />
            
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 1,
                cursor: "pointer",
                p: 1,
                borderRadius: 2,
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
              }} 
              onClick={handleAvatarClick}
            >
              <Avatar 
                sx={{ 
                  width: 36, 
                  height: 36,
                  border: "2px solid #e0e0e0",
                  bgcolor: username ? "#cc2b5e" : "#666"
                }}
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt={username}
                    style={{
                      width: 36,
                      height: 36,
                      objectFit: "cover",
                    }}
                  />
                ) : username ? (
                  username[0].toUpperCase()
                ) : (
                  "?"
                )}
              </Avatar>
              
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#333" }}>
                  {username || "Chưa đăng nhập"}
                </Typography>
                <Typography variant="caption" sx={{ color: "#666" }}>
                  {username ? "Student" : "Guest"}
                </Typography>
              </Box>
              
              <KeyboardArrowDownIcon sx={{ color: "#666", fontSize: 20 }} />
            </Box>
          </Box>

          {/* User Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 200,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                borderRadius: 2,
              }
            }}
          >
            <MenuItem onClick={handleProfile} sx={{ py: 1.5 }}>
              <AccountCircleIcon sx={{ mr: 2, color: "#666" }} />
              <Typography>Trang cá nhân</Typography>
            </MenuItem>
            <MenuItem onClick={handleSettings} sx={{ py: 1.5 }}>
              <SettingsIcon sx={{ mr: 2, color: "#666" }} />
              <Typography>Cài đặt</Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout} sx={{ py: 1.5, color: "#d32f2f" }}>
              <LogoutIcon sx={{ mr: 2 }} />
              <Typography>Đăng xuất</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
