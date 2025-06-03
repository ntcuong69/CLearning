"use client";

import { AppBar, Toolbar, Typography, IconButton, Box, Avatar, Tooltip, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { signOut } from "next-auth/react";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
  const handleLogout = () => {
    signOut();
    handleClose();
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Bên trái: trống để đẩy icon ra giữa */}
        <Box sx={{ width: 120 }} />
        {/* Giữa: các biểu tượng */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Tooltip title="Trang chủ">
            <IconButton color={pathname.includes("/home") ? "primary" : "default"} onClick={() => router.push("/home")} size="large">
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Bạn bè">
            <IconButton color={pathname.includes("/friends") ? "primary" : "default"} onClick={() => router.push("/friends")} size="large">
              <GroupIcon />
            </IconButton>
          </Tooltip>
        </Box>
        {/* Bên phải: avatar, tên, mũi tên */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            position: "relative",
          }}
        >
          <Box sx={{ position: "relative", cursor: "pointer" }} onClick={handleAvatarClick}>
            <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>
              {avatar ? (
                <img
                  src={avatar}
                  alt={username}
                  style={{
                    width: 32,
                    height: 32,
                    objectFit: "cover",
                  }}
                />
              ) : username ? (
                username[0].toUpperCase()
              ) : (
                "?"
              )}
            </Avatar>
            <KeyboardArrowDownIcon
              sx={{
                position: "absolute",
                right: -8,
                bottom: -8,
                fontSize: 18,
                bgcolor: "background.paper",
                borderRadius: "50%",
                boxShadow: 1,
                color: "text.secondary",
              }}
            />
          </Box>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {username || "Chưa đăng nhập"}
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleProfile}>Xem trang cá nhân</MenuItem>
            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
