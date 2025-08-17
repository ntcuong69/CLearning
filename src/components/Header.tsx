"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { signOut } from "next-auth/react";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeToggleButton from "./ThemeToggleButton";
import { CLearningLogo } from "./CLearningLogo";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) => {
        setUsername(res.data.user.Username);
        setImage(res.data.user.Image || res.data.user.image || "");
      })
      .catch(() => {
        setUsername("");
        setImage("");
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
    signOut({ callbackUrl: '/auth' });
    handleClose();
  };

  const isActive = (path: string) => pathname.includes(path);

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        background: "#F7F9FA",
        width: "100vw",
        left: 0,
        top: 0,
        zIndex: 1300,
        boxSizing: "border-box",
        boxShadow: "inset 0 -1px #ccc",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: 70,
          px: 4,
          width: "100%",
          maxWidth: "100vw",
          boxSizing: "border-box",
        }}
      >
        {/* Left Section - Logo và Tên web */}
        <CLearningLogo />

        {/* Right Section - Theme Toggle, Locale Switcher, Notifications and User Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Theme Toggle Button */}
          {/* <ThemeToggleButton /> */}

          {/* Locale Switcher */}
          {/* <LocaleSwitcher /> */}

          {/* Notifications */}

          {/* User Profile */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                cursor: "pointer",
                p: 0,
                borderRadius: 0,
                border: "none",
                backgroundColor: "transparent",
                transition: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  transform: "none",
                  boxShadow: "none",
                },
              }}
              onClick={handleAvatarClick}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "#F0F4F8",
                  color: "#1a1a1a",
                  border: "none",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                src={image || undefined}
              >
                {!image && <AccountCircleIcon sx={{ fontSize: 24, color: "#4A4A4A" }} />}
              </Avatar>

              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    color: "#1a1a1a",
                    fontSize: "0.9rem",
                    lineHeight: 1.2,
                  }}
                >
                  {username || "Chưa đăng nhập"}
                </Typography>
              </Box>

              <KeyboardArrowDownIcon
                sx={{
                  color: "#666",
                  fontSize: 18,
                  transition: "none",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </Box>
          </Box>

          {/* User Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableScrollLock
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 170,
                boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                borderRadius: "10px",
                border: "1px solid #f0f0f0",
                overflow: "hidden",
              },
            }}
          >
            <MenuItem
              onClick={handleProfile}
              sx={{
                py: 1.2,
                px: 1.5,
                borderRadius: "8px",
                transition: "background 0.15s",
                backgroundColor: "transparent !important",
                "&:hover": {
                  backgroundColor: "#e3f0ff !important",
                },
                "&.Mui-selected": {
                  backgroundColor: "transparent !important",
                },
                "&.Mui-focusVisible": {
                  backgroundColor: "transparent !important",
                },
                "&.MuiMenuItem-root:hover": {
                  backgroundColor: "#e3f0ff !important",
                },
              }}
            >
              <AccountCircleIcon sx={{ mr: 2, color: "#666", fontSize: 20 }} />
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#333" }}>Trang cá nhân</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleSettings}
              sx={{
                py: 1.2,
                px: 1.5,
                borderRadius: "8px",
                transition: "background 0.15s",
                backgroundColor: "transparent !important",
                "&:hover": {
                  backgroundColor: "#e3f0ff !important",
                },
                "&.Mui-selected": {
                  backgroundColor: "transparent !important",
                },
                "&.Mui-focusVisible": {
                  backgroundColor: "transparent !important",
                },
                "&.MuiMenuItem-root:hover": {
                  backgroundColor: "#e3f0ff !important",
                },
              }}
            >
              <SettingsIcon sx={{ mr: 2, color: "#666", fontSize: 20 }} />
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#333" }}>Cài đặt</Typography>
            </MenuItem>
            <Divider sx={{ my: 1 }} />
            <MenuItem
              onClick={handleLogout}
              sx={{
                py: 1.2,
                px: 1.5,
                color: "#d32f2f",
                borderRadius: "8px",
                transition: "background 0.15s",
                backgroundColor: "transparent !important",
                "&:hover": {
                  backgroundColor: "#ffeaea !important",
                },
                "&.Mui-selected": {
                  backgroundColor: "transparent !important",
                },
                "&.Mui-focusVisible": {
                  backgroundColor: "transparent !important",
                },
                "&.MuiMenuItem-root:hover": {
                  backgroundColor: "#ffeaea !important",
                },
              }}
            >
              <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#d32f2f" }}>Đăng xuất</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
