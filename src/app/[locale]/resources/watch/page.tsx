"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  Grid,
  Chip,
  IconButton,
  Avatar,
  LinearProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  Badge,
  CircularProgress,
  Container,
  Fade,
  Slide,
  Grow,
} from "@mui/material";

import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/Header";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { useVideoData } from "@/hooks/useVideoData";

// Video data structure - matches database exactly
interface Video {
  VID: number;
  PID: number;
  Title: string;
  Description: string | null;
  VideoUrl: string;
}

// Helper function to extract video ID from YouTube URL
const extractVideoId = (url: string): string => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
  return match ? match[1] : '';
};

const WatchPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  
  // Use the custom hook to fetch data from database
  const { playlists, videos, loading, error, fetchVideosByPlaylist, fetchAllVideos } = useVideoData();

  // Transform playlists to match the expected format
  const videoCategories = playlists.map(playlist => ({
    id: playlist.PID.toString(),
    name: playlist.Name,
    description: `Playlist with ${playlist.video.length} videos`,
    icon: <SchoolIcon />,
    color: "#667eea",
    instructor: "Various Instructors",
    videos: playlist.video.length,
    duration: "N/A",
  }));

  // Filter videos based on selected category
  const filteredVideos = selectedCategory === "all" 
    ? videos 
    : videos.filter(video => video.PID.toString() === selectedCategory);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleCategorySelect = async (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedVideo(null); // Reset selected video when changing category
    
    try {
      if (categoryId === "all") {
        await fetchAllVideos();
      } else {
        await fetchVideosByPlaylist(categoryId);
      }
    } catch (error) {
      console.error('Error selecting category:', error);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px", bgcolor: "background.default" }}>
      <NavBar />
      <Sidebar />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, ml: { md: "290px" } }}>
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {/* Header Section */}
          <Fade in timeout={800}>
            <Box sx={{ mb: 6, textAlign: "center" }}>
              <Typography 
                variant="h3" 
                fontWeight="bold" 
                sx={{ 
                  mb: 2,
                  background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "2rem", md: "3rem" }
                }}
              >
                Học qua Video
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: 600, 
                  mx: "auto",
                  lineHeight: 1.6,
                  fontSize: { xs: "1rem", md: "1.25rem" }
                }}
              >
                Khám phá các bài giảng video chất lượng cao để nâng cao kỹ năng lập trình của bạn
              </Typography>
            </Box>
          </Fade>

          {/* Loading State */}
          {loading && (
            <Fade in timeout={500}>
              <Box sx={{ 
                display: "flex", 
                flexDirection: "column",
                justifyContent: "center", 
                alignItems: "center", 
                py: 8,
                gap: 2
              }}>
                <CircularProgress size={60} thickness={4} />
                <Typography variant="h6" color="text.secondary">
                  Đang tải dữ liệu...
                </Typography>
              </Box>
            </Fade>
          )}

          {/* Error State */}
          {error && (
            <Slide direction="down" in timeout={500}>
              <Card sx={{ 
                mb: 4, 
                p: 3, 
                bgcolor: "error.light", 
                borderRadius: 3,
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
              }}>
                <Typography variant="h6" color="error.contrastText" sx={{ fontWeight: 600 }}>
                  Lỗi: {error}
                </Typography>
              </Card>
            </Slide>
          )}

          {/* No Playlists State */}
          {!loading && !error && playlists.length === 0 && (
            <Slide direction="up" in timeout={500}>
              <Card sx={{ 
                mb: 4, 
                p: 4, 
                bgcolor: "warning.light", 
                borderRadius: 3,
                textAlign: "center",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
              }}>
                <VideoLibraryIcon sx={{ fontSize: 60, color: "warning.dark", mb: 2 }} />
                <Typography variant="h6" color="warning.dark" sx={{ fontWeight: 600 }}>
                  Không có danh sách phát nào được tìm thấy.
                </Typography>
              </Card>
            </Slide>
          )}

          {/* Categories */}
          {!loading && !error && playlists.length > 0 && (
            <Slide direction="up" in timeout={600}>
              <Box sx={{ mb: 6 }}>
                <Typography 
                  variant="h5" 
                  fontWeight="bold" 
                  gutterBottom 
                  sx={{ 
                    mb: 3,
                    textAlign: { xs: "center", md: "left" }
                  }}
                >
                  Danh sách phát
                </Typography>
                <Box sx={{ 
                  display: "flex", 
                  gap: 2, 
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" }
                }}>
                  <Chip
                    label="Tất cả"
                    onClick={() => handleCategorySelect("all")}
                    color={selectedCategory === "all" ? "primary" : "default"}
                    variant={selectedCategory === "all" ? "filled" : "outlined"}
                    sx={{
                      px: 2,
                      py: 1,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      }
                    }}
                  />
                  {videoCategories.map((category, index) => (
                    <Grow in timeout={700 + index * 100} key={category.id}>
                      <Chip
                        label={`${category.name} (${category.videos} video)`}
                        onClick={() => handleCategorySelect(category.id)}
                        color={selectedCategory === category.id ? "primary" : "default"}
                        variant={selectedCategory === category.id ? "filled" : "outlined"}
                        icon={category.icon}
                        sx={{
                          px: 2,
                          py: 1,
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                          }
                        }}
                      />
                    </Grow>
                  ))}
                </Box>
              </Box>
            </Slide>
          )}

          {/* Main Content */}
          {!loading && !error && (
            <Grow in timeout={800}>
              <Box sx={{ 
                display: "flex", 
                gap: 4, 
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "flex-start"
              }}>
                {/* Video Player Section */}
                <Box sx={{ 
                  flex: { lg: "0 0 65%" },
                  width: "100%"
                }}>
                  {selectedVideo ? (
                    <Card sx={{ 
                      borderRadius: 4,
                      overflow: "hidden",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                      transition: "all 0.3s ease"
                    }}>
                      {/* Video Player */}
                      <Box sx={{ position: "relative", backgroundColor: "#000" }}>
                        {extractVideoId(selectedVideo.VideoUrl) ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${extractVideoId(selectedVideo.VideoUrl)}?rel=0&modestbranding=1`}
                            style={{ 
                              width: "100%", 
                              height: "450px", 
                              border: "none"
                            }}
                            title={selectedVideo.Title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            frameBorder="0"
                          />
                        ) : (
                          <Box sx={{ 
                            width: "100%", 
                            height: "450px", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center",
                            color: "white",
                            bgcolor: "grey.800"
                          }}>
                            <Typography variant="h6">
                              Không thể tải video. Vui lòng kiểm tra lại URL.
                            </Typography>
                          </Box>
                        )}
                      </Box>

                      {/* Video Info */}
                      <Box sx={{ p: 4 }}>
                        <Typography 
                          variant="h4" 
                          fontWeight="bold" 
                          gutterBottom
                          sx={{ 
                            mb: 3,
                            lineHeight: 1.3,
                            fontSize: { xs: "1.5rem", md: "2rem" }
                          }}
                        >
                          {selectedVideo.Title}
                        </Typography>

                        <Typography 
                          variant="body1" 
                          color="text.secondary" 
                          sx={{ 
                            lineHeight: 1.8,
                            wordBreak: 'break-word',
                            fontSize: "1.1rem",
                            whiteSpace: "pre-wrap"
                          }}
                        >
                          {selectedVideo.Description || "Không có mô tả"}
                        </Typography>
                      </Box>
                    </Card>
                  ) : (
                    <Card sx={{ 
                      height: 450, 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      borderRadius: 4,
                      bgcolor: "background.paper",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
                    }}>
                      <Box sx={{ textAlign: "center", p: 4 }}>
                        <PlayCircleIcon sx={{ 
                          fontSize: 120, 
                          color: "primary.main", 
                          mb: 3,
                          opacity: 0.7
                        }} />
                        <Typography variant="h5" color="text.secondary" sx={{ mb: 2, fontWeight: 600 }}>
                          Chọn video để bắt đầu học
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Khám phá các bài giảng video từ danh sách bên cạnh
                        </Typography>
                      </Box>
                    </Card>
                  )}
                </Box>

                {/* Video List Section */}
                <Box sx={{ 
                  flex: { lg: "0 0 35%" },
                  width: "100%"
                }}>
                  <Card sx={{ 
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                    height: "fit-content"
                  }}>
                    <Box sx={{ 
                      p: 3, 
                      borderBottom: 1, 
                      borderColor: "divider",
                      bgcolor: "background.paper"
                    }}>
                      <Typography variant="h6" fontWeight="bold" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <VideoLibraryIcon color="primary" />
                        Danh sách video ({filteredVideos.length})
                      </Typography>
                    </Box>
                    
                    <List sx={{ p: 0, maxHeight: 600, overflow: "auto" }}>
                      {filteredVideos.length > 0 ? (
                        filteredVideos.map((video, index) => (
                          <Grow in timeout={500 + index * 100} key={video.VID}>
                            <ListItem
                              sx={{
                                borderBottom: 1,
                                borderColor: "divider",
                                cursor: "pointer",
                                bgcolor: selectedVideo?.VID === video.VID ? "primary.light" : "transparent",
                                transition: "all 0.3s ease",
                                "&:hover": { 
                                  bgcolor: selectedVideo?.VID === video.VID ? "primary.light" : "action.hover",
                                  transform: "translateX(8px)"
                                },
                                "&:last-child": {
                                  borderBottom: "none"
                                }
                              }}
                              onClick={() => handleVideoSelect(video)}
                            >
                              <ListItemIcon sx={{ minWidth: 140 }}>
                                <Box sx={{ position: "relative" }}>
                                  <img
                                    src={`https://img.youtube.com/vi/${extractVideoId(video.VideoUrl)}/maxresdefault.jpg`}
                                    alt={video.Title}
                                    style={{
                                      width: 140,
                                      height: 80,
                                      objectFit: "cover",
                                      borderRadius: 8,
                                    }}
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = `https://img.youtube.com/vi/${extractVideoId(video.VideoUrl)}/maxresdefault.jpg`;
                                    }}
                                  />
                                  <Box sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    bgcolor: "rgba(0,0,0,0.7)",
                                    borderRadius: "50%",
                                    p: 0.5
                                  }}>
                                    <PlayCircleIcon sx={{ color: "white", fontSize: 20 }} />
                                  </Box>
                                </Box>
                              </ListItemIcon>
                              
                              <ListItemText
                                primary={
                                  <Typography
                                    variant="body2"
                                    fontWeight="medium"
                                    sx={{
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      display: "-webkit-box",
                                      WebkitLineClamp: 2,
                                      WebkitBoxOrient: "vertical",
                                      lineHeight: 1.4,
                                      fontSize: "0.9rem"
                                    }}
                                  >
                                    {video.Title}
                                  </Typography>
                                }
                                sx={{ ml: 1 }}
                              />
                            </ListItem>
                          </Grow>
                        ))
                      ) : (
                        <Box sx={{ p: 4, textAlign: "center" }}>
                          <VideoLibraryIcon sx={{ fontSize: 48, color: "text.secondary", mb: 2, opacity: 0.5 }} />
                          <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                            {selectedCategory === "all" 
                              ? "Không có video nào trong hệ thống" 
                              : "Không có video nào trong danh sách này"}
                          </Typography>
                        </Box>
                      )}
                    </List>
                  </Card>
                </Box>
              </Box>
            </Grow>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default WatchPage;
