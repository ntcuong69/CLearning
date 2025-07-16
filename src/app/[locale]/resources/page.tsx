"use client";

import React from "react";
import { Box, Card, Typography, Button, Grid, Chip, IconButton, Avatar, LinearProgress, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/Header";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import BookIcon from "@mui/icons-material/Book";
import CodeIcon from "@mui/icons-material/Code";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const resourceCategories = [
  {
    id: "lectures",
    title: "Bài giảng lý thuyết",
    description: "Học lý thuyết lập trình C từ cơ bản đến nâng cao",
    icon: <BookIcon sx={{ fontSize: 40, color: "#667eea" }} />,
    image: "/images/lectures.jpg",
    href: "/resources/lectures/overview-of-c-programming",
    color: "#667eea",
    bgColor: "rgba(102, 126, 234, 0.1)",
    items: 30,
    duration: "8 giờ",
    level: "Cơ bản - Nâng cao",
  },
  {
    id: "videos",
    title: "Video hướng dẫn",
    description: "Xem video thực hành và hướng dẫn chi tiết",
    icon: <PlayCircleIcon sx={{ fontSize: 40, color: "#f093fb" }} />,
    image: "/images/watchandlearn.jpg",
    href: "/resources/watch",
    color: "#f093fb",
    bgColor: "rgba(240, 147, 251, 0.1)",
    items: 25,
    duration: "15 giờ",
    level: "Thực hành",
  },
  {
    id: "code",
    title: "Code mẫu",
    description: "Thư viện code mẫu và ví dụ thực tế",
    icon: <CodeIcon sx={{ fontSize: 40, color: "#4facfe" }} />,
    image: "/images/sample-code.jpg",
    href: "/resources/sample-code",
    color: "#4facfe",
    bgColor: "rgba(79, 172, 254, 0.1)",
    items: 50,
    duration: "N/A",
    level: "Tham khảo",
  },
];

const ResourcesPage = () => {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px" }}>
      <NavBar />
      <Sidebar />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, ml: { md: "290px" } }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: { xs: 2, sm: 4, md: 6 },
            py: 4,
            minHeight: "calc(100vh - 70px)",
          }}
        >
          {/* Hero Section */}
          <Box
            sx={{
              textAlign: "center",
              mb: 6,
              p: 4,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: 3,
              color: "white",
            }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Tài liệu học tập
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
              Khám phá bộ sưu tập bài giảng, video hướng dẫn và code mẫu chất lượng cao
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
              <Chip icon={<SchoolIcon />} label="30+ Bài giảng" sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }} />
              <Chip icon={<PlayCircleIcon />} label="25+ Video" sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }} />
              <Chip icon={<CodeIcon />} label="50+ Code mẫu" sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }} />
            </Box>
          </Box>

          {/* Resource Categories */}
          <Box sx={{ display: "flex", gap: 3, mb: 6, flexWrap: "wrap" }}>
            {resourceCategories.map((category) => (
              <Card
                key={category.id}
                sx={{
                  width: { xs: "100%", md: "calc(33.33% - 16px)" },
                  height: 320,
                  position: "relative",
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                }}
                onClick={() => router.push(category.href)}
              >
                {/* Icon Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {category.icon}
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    color: "white",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                    {category.description}
                  </Typography>

                  {/* Stats */}
                  <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
                    <Chip label={`${category.items} bài`} size="small" sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }} />
                    <Chip label={category.duration} size="small" sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }} />
                    <Chip label={category.level} size="small" sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white" }} />
                  </Box>

                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.9)",
                      color: "#333",
                      "&:hover": { bgcolor: "white" },
                      fontWeight: 600,
                    }}
                  >
                    Khám phá
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>

          {/* Stats Section */}
          
        </Box>
      </Box>
    </Box>
  );
};

export default ResourcesPage;
