"use client";
import React from "react";
import NavBar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { 
  Box, 
  Typography, 
  Paper, 
  Card, 
  CardContent, 
  CardActionArea,
  CardActions,
  Button
} from "@mui/material";
import TopicIcon from "@mui/icons-material/Topic";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BookIcon from "@mui/icons-material/Book";
import Link from "next/link";

export default function AdminPage() {
  const adminCards = [
    {
      title: "Quản lý chủ đề",
      description: "Quản lý các chủ đề học tập và nội dung bài giảng",
      icon: <TopicIcon sx={{ fontSize: 48, color: "#2C5AA0" }} />,
      href: "/admin/topics",
      color: "#E8F4FF"
    },
    {
      title: "Quản lý bài tập",
      description: "Quản lý các bài tập lập trình và test cases",
      icon: <AssignmentIcon sx={{ fontSize: 48, color: "#2C5AA0" }} />,
      href: "/admin/exercises",
      color: "#F0F8FF"
    },
    {
      title: "Quản lý khóa học",
      description: "Quản lý các khóa học và lộ trình học tập",
      icon: <BookIcon sx={{ fontSize: 48, color: "#2C5AA0" }} />,
      href: "/admin/studyplans",
      color: "#E8F4FF"
    }
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px" }}>
      <NavBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: "250px" },
          px: { xs: 2, sm: 6, md: 10 },
          py: 6,
          mx: "auto",
          maxWidth: 1200,
        }}
      >
        <Paper sx={{ mb: 4, p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Quản trị hệ thống
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Chào mừng đến với trang quản trị. Vui lòng chọn chức năng bạn muốn quản lý.
          </Typography>
        </Paper>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {adminCards.map((card, index) => (
            <Card 
              key={index}
              sx={{ 
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                }
              }}
            >
              <CardActionArea 
                component={Link}
                href={card.href}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch'
                }}
              >
                <CardContent 
                  sx={{ 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 4,
                    backgroundColor: card.color
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {card.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    component="h2" 
                    gutterBottom
                    sx={{ fontWeight: 600, color: '#1A202C' }}
                  >
                    {card.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button 
                    variant="contained" 
                    size="small"
                    sx={{ 
                      backgroundColor: '#2C5AA0',
                      '&:hover': {
                        backgroundColor: '#1E3A8A'
                      }
                    }}
                  >
                    Truy cập
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
