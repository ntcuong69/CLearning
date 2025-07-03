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
  Chip,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
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
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeToggleButton from "./ThemeToggleButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// Styled search input
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 24,
  backgroundColor: "#ffffff",
  border: "1px solid #e8e8e8",
  "&:hover": {
    border: "1px solid #d0d0d0",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },
  "&:focus-within": {
    border: "1px solid #1a1a1a",
    boxShadow: "0 0 0 3px rgba(26, 26, 26, 0.1)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  transition: "all 0.2s ease",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#999",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#333",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "0.9rem",
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      width: "24ch",
    },
    "&::placeholder": {
      color: "#999",
      opacity: 1,
    },
  },
}));

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) => {
        setUsername(res.data.user.Username);
      })
      .catch(() => {
        setUsername("");
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
        <Box
          className="flex items-center mr-8"
          sx={{
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onClick={() => router.push("/home")}
        >
          <img src="/code-logo.png" alt="Code Forge" className="w-15 h-15" />
          <Box>
            <Typography variant="h6" className="font-bold text-gray-900 text-lg leading-tight">
              CodeForge
            </Typography>
          </Box>
        </Box>

        {/* Right Section - Theme Toggle, Locale Switcher, Notifications and User Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Theme Toggle Button */}
          <ThemeToggleButton />

          {/* Locale Switcher */}
          <LocaleSwitcher />

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
                  width: 48,
                  height: 48,
                  bgcolor: "#F0F4F8",
                  color: "#1a1a1a",
                  border: "none",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AccountCircleIcon sx={{ fontSize: 32, color: "#4A4A4A" }} />
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
                "&:hover": {
                  backgroundColor: "#e3f0ff",
                },
              }}
            >
              <AccountCircleIcon sx={{ mr: 2, color: "#666", fontSize: 20 }} />
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>Trang cá nhân</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleSettings}
              sx={{
                py: 1.2,
                px: 1.5,
                borderRadius: "8px",
                transition: "background 0.15s",
                "&:hover": {
                  backgroundColor: "#e3f0ff",
                },
              }}
            >
              <SettingsIcon sx={{ mr: 2, color: "#666", fontSize: 20 }} />
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>Cài đặt</Typography>
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
                "&:hover": {
                  backgroundColor: "#ffeaea",
                },
              }}
            >
              <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
              <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>Đăng xuất</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
