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
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Rating,
  Badge,
} from "@mui/material";

import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/Header";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";

// Video data structure
interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  instructor: string;
  views: number;
  likes: number;
  rating: number;
  completed: boolean;
  bookmarked: boolean;
  liked: boolean;
}

// Video categories by language and playlists
const videoCategories = [
  // Language Categories
  {
    id: "english",
    name: "Tiếng Anh",
    description: "Video hướng dẫn bằng tiếng Anh",
    icon: <SchoolIcon />,
    color: "#667eea",
    type: "language",
  },
  {
    id: "vietnamese",
    name: "Tiếng Việt",
    description: "Video hướng dẫn bằng tiếng Việt",
    icon: <SchoolIcon />,
    color: "#f093fb",
    type: "language",
  },
  
  // English Playlists
  {
    id: "freecodecamp-english",
    name: "freeCodeCamp C Course",
    description: "Complete C programming course by freeCodeCamp",
    icon: <SchoolIcon />,
    color: "#4facfe",
    type: "playlist",
    language: "english",
    instructor: "freeCodeCamp.org",
    videos: 1,
    duration: "3:46:13",
  },
  {
    id: "mosh-english",
    name: "Programming with Mosh",
    description: "C programming full course for beginners",
    icon: <SchoolIcon />,
    color: "#43e97b",
    type: "playlist",
    language: "english",
    instructor: "Programming with Mosh",
    videos: 1,
    duration: "4:05:42",
  },
  {
    id: "thenewboston-english",
    name: "thenewboston C Tutorials",
    description: "Complete C programming tutorial series",
    icon: <SchoolIcon />,
    color: "#fa709a",
    type: "playlist",
    language: "english",
    instructor: "thenewboston",
    videos: 18,
    duration: "3:15:00",
  },
  
  // Vietnamese Playlists
  {
    id: "khanh-nguyen-vietnamese",
    name: "Khánh Nguyễn C Programming",
    description: "Khóa học lập trình C cơ bản đến nâng cao",
    icon: <SchoolIcon />,
    color: "#ffecd2",
    type: "playlist",
    language: "vietnamese",
    instructor: "Khánh Nguyễn",
    videos: 15,
    duration: "2:30:00",
  },
  {
    id: "tech-academy-vietnamese",
    name: "Tech Academy C Course",
    description: "Hướng dẫn lập trình C từ A đến Z",
    icon: <SchoolIcon />,
    color: "#667eea",
    type: "playlist",
    language: "vietnamese",
    instructor: "Tech Academy",
    videos: 12,
    duration: "2:00:00",
  },
  {
    id: "code-learn-vietnamese",
    name: "Code Learn C Programming",
    description: "Series học lập trình C cho người mới bắt đầu",
    icon: <SchoolIcon />,
    color: "#f093fb",
    type: "playlist",
    language: "vietnamese",
    instructor: "Code Learn",
    videos: 20,
    duration: "3:45:00",
  },
];

// Sample video data organized by playlists
const sampleVideos: Video[] = [
  // English Videos - freeCodeCamp
  {
    id: "1",
    title: "C Programming Tutorial for Beginners",
    description: "Learn C programming from scratch with this comprehensive tutorial. Perfect for absolute beginners who want to start their programming journey.",
    duration: "3:46:13",
    thumbnail: "https://img.youtube.com/vi/KJgsSFOSQv0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/KJgsSFOSQv0",
    category: "freecodecamp-english",
    level: "beginner",
    instructor: "freeCodeCamp.org",
    views: 12500000,
    likes: 450000,
    rating: 4.9,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  
  // English Videos - Programming with Mosh
  {
    id: "2",
    title: "C Programming Full Course for Beginners - Learn C in 2022",
    description: "Complete C programming course for beginners. Learn C programming fundamentals, syntax, and best practices.",
    duration: "4:05:42",
    thumbnail: "https://img.youtube.com/vi/8PopR3x-VMY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/8PopR3x-VMY",
    category: "mosh-english",
    level: "beginner",
    instructor: "Programming with Mosh",
    views: 3200000,
    likes: 120000,
    rating: 4.8,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  
  // English Videos - thenewboston Series
  {
    id: "3",
    title: "C Programming Tutorial - 1 - Introduction",
    description: "Introduction to C programming language. Learn about the history, features, and why C is still relevant today.",
    duration: "9:21",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI",
    category: "thenewboston-english",
    level: "beginner",
    instructor: "thenewboston",
    views: 1800000,
    likes: 45000,
    rating: 4.7,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "4",
    title: "C Programming Tutorial - 2 - Variables",
    description: "Learn about variables in C programming. Understanding data types, declaration, and initialization.",
    duration: "8:42",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=561",
    category: "thenewboston-english",
    level: "beginner",
    instructor: "thenewboston",
    views: 1200000,
    likes: 35000,
    rating: 4.6,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "5",
    title: "C Programming Tutorial - 3 - Data Types",
    description: "Comprehensive guide to data types in C: int, float, char, double, and their memory usage.",
    duration: "10:15",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=1023",
    category: "thenewboston-english",
    level: "beginner",
    instructor: "thenewboston",
    views: 980000,
    likes: 28000,
    rating: 4.5,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "6",
    title: "C Programming Tutorial - 4 - Constants",
    description: "Learn about constants in C programming and how to use them effectively in your programs.",
    duration: "7:33",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=1445",
    category: "thenewboston-english",
    level: "beginner",
    instructor: "thenewboston",
    views: 750000,
    likes: 22000,
    rating: 4.4,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "7",
    title: "C Programming Tutorial - 5 - If Statements",
    description: "Learn about if statements and conditional logic in C programming.",
    duration: "9:18",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=1878",
    category: "thenewboston-english",
    level: "beginner",
    instructor: "thenewboston",
    views: 1100000,
    likes: 32000,
    rating: 4.6,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "8",
    title: "C Programming Tutorial - 6 - While Loops",
    description: "Understanding while loops and how to use them for repetitive tasks in C programming.",
    duration: "8:55",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=2335",
    category: "thenewboston-english",
    level: "beginner",
    instructor: "thenewboston",
    views: 950000,
    likes: 28000,
    rating: 4.5,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "9",
    title: "C Programming Tutorial - 7 - For Loops",
    description: "Learn about for loops and their syntax. Perfect for iterating through data structures.",
    duration: "7:42",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=2757",
    category: "thenewboston-english",
    level: "beginner",
    instructor: "thenewboston",
    views: 880000,
    likes: 26000,
    rating: 4.4,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "10",
    title: "C Programming Tutorial - 8 - Switch Statement",
    description: "Learn about switch statements and how they provide an alternative to multiple if-else statements.",
    duration: "6:28",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=3100",
    category: "thenewboston-english",
    level: "intermediate",
    instructor: "thenewboston",
    views: 720000,
    likes: 21000,
    rating: 4.3,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "11",
    title: "C Programming Tutorial - 9 - Functions",
    description: "Learn about functions in C programming. How to create, call, and use functions effectively.",
    duration: "11:45",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=3428",
    category: "thenewboston-english",
    level: "intermediate",
    instructor: "thenewboston",
    views: 1300000,
    likes: 38000,
    rating: 4.7,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "12",
    title: "C Programming Tutorial - 10 - Function Parameters",
    description: "Understanding function parameters, arguments, and how to pass data between functions.",
    duration: "9:12",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=4005",
    category: "thenewboston-english",
    level: "intermediate",
    instructor: "thenewboston",
    views: 1050000,
    likes: 31000,
    rating: 4.6,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "13",
    title: "C Programming Tutorial - 11 - Return Values",
    description: "Learn about return values in functions and how to use them to get data back from functions.",
    duration: "8:33",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=4533",
    category: "thenewboston-english",
    level: "intermediate",
    instructor: "thenewboston",
    views: 920000,
    likes: 27000,
    rating: 4.5,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "14",
    title: "C Programming Tutorial - 12 - Arrays",
    description: "Learn about arrays in C programming. How to declare, initialize, and work with arrays.",
    duration: "10:28",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=5028",
    category: "thenewboston-english",
    level: "intermediate",
    instructor: "thenewboston",
    views: 1150000,
    likes: 34000,
    rating: 4.6,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "15",
    title: "C Programming Tutorial - 13 - Multidimensional Arrays",
    description: "Understanding 2D arrays and multidimensional arrays in C programming.",
    duration: "8:45",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=5568",
    category: "thenewboston-english",
    level: "intermediate",
    instructor: "thenewboston",
    views: 850000,
    likes: 25000,
    rating: 4.4,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "16",
    title: "C Programming Tutorial - 14 - Array Functions",
    description: "Learn how to pass arrays to functions and work with arrays in function parameters.",
    duration: "9:15",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=6015",
    category: "thenewboston-english",
    level: "intermediate",
    instructor: "thenewboston",
    views: 780000,
    likes: 23000,
    rating: 4.3,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "17",
    title: "C Programming Tutorial - 15 - Pointers",
    description: "Introduction to pointers in C programming. Understanding memory addresses and pointer basics.",
    duration: "12:33",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=6450",
    category: "thenewboston-english",
    level: "advanced",
    instructor: "thenewboston",
    views: 1400000,
    likes: 42000,
    rating: 4.8,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "18",
    title: "C Programming Tutorial - 16 - Pointer Arithmetic",
    description: "Learn about pointer arithmetic and how to manipulate pointers in C programming.",
    duration: "10:18",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=7098",
    category: "thenewboston-english",
    level: "advanced",
    instructor: "thenewboston",
    views: 950000,
    likes: 28000,
    rating: 4.5,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "19",
    title: "C Programming Tutorial - 17 - Pointers and Arrays",
    description: "Understanding the relationship between pointers and arrays in C programming.",
    duration: "11:42",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=7662",
    category: "thenewboston-english",
    level: "advanced",
    instructor: "thenewboston",
    views: 1100000,
    likes: 33000,
    rating: 4.6,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "20",
    title: "C Programming Tutorial - 18 - Dynamic Memory Allocation",
    description: "Learn about malloc, calloc, realloc, and free functions for dynamic memory management.",
    duration: "13:25",
    thumbnail: "https://img.youtube.com/vi/2NWeucMKrLI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2NWeucMKrLI?start=8305",
    category: "thenewboston-english",
    level: "advanced",
    instructor: "thenewboston",
    views: 1250000,
    likes: 37000,
    rating: 4.7,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  
  // Vietnamese Videos - Khánh Nguyễn Series
  {
    id: "21",
    title: "Lập trình C - Bài 1: Giới thiệu ngôn ngữ C",
    description: "Bài học đầu tiên về ngôn ngữ lập trình C. Tìm hiểu lịch sử, đặc điểm và ứng dụng của C.",
    duration: "15:30",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "khanh-nguyen-vietnamese",
    level: "beginner",
    instructor: "Khánh Nguyễn",
    views: 250000,
    likes: 8500,
    rating: 4.8,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "22",
    title: "Lập trình C - Bài 2: Cài đặt môi trường",
    description: "Hướng dẫn cài đặt compiler và IDE để bắt đầu lập trình C.",
    duration: "12:45",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "khanh-nguyen-vietnamese",
    level: "beginner",
    instructor: "Khánh Nguyễn",
    views: 180000,
    likes: 6200,
    rating: 4.7,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "23",
    title: "Lập trình C - Bài 3: Biến và kiểu dữ liệu",
    description: "Tìm hiểu về biến, các kiểu dữ liệu cơ bản trong C.",
    duration: "18:20",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "khanh-nguyen-vietnamese",
    level: "beginner",
    instructor: "Khánh Nguyễn",
    views: 220000,
    likes: 7800,
    rating: 4.9,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  
  // Vietnamese Videos - Tech Academy Series
  {
    id: "24",
    title: "Học lập trình C từ A-Z - Bài 1",
    description: "Khóa học lập trình C toàn diện cho người mới bắt đầu.",
    duration: "20:15",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "tech-academy-vietnamese",
    level: "beginner",
    instructor: "Tech Academy",
    views: 150000,
    likes: 5200,
    rating: 4.6,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "25",
    title: "Học lập trình C từ A-Z - Bài 2",
    description: "Tiếp tục khóa học với các khái niệm nâng cao.",
    duration: "18:45",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "tech-academy-vietnamese",
    level: "beginner",
    instructor: "Tech Academy",
    views: 120000,
    likes: 4100,
    rating: 4.5,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  
  // Vietnamese Videos - Code Learn Series
  {
    id: "26",
    title: "Code Learn C - Bài 1: Nhập môn",
    description: "Series học lập trình C cho người mới bắt đầu.",
    duration: "16:30",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "code-learn-vietnamese",
    level: "beginner",
    instructor: "Code Learn",
    views: 180000,
    likes: 6300,
    rating: 4.7,
    completed: false,
    bookmarked: false,
    liked: false,
  },
  {
    id: "27",
    title: "Code Learn C - Bài 2: Cấu trúc cơ bản",
    description: "Học về cấu trúc cơ bản của chương trình C.",
    duration: "14:20",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "code-learn-vietnamese",
    level: "beginner",
    instructor: "Code Learn",
    views: 140000,
    likes: 4800,
    rating: 4.6,
    completed: false,
    bookmarked: false,
    liked: false,
  },
];

const WatchPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [comment, setComment] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const filteredVideos = selectedCategory === "all" 
    ? sampleVideos 
    : selectedCategory === "english"
    ? sampleVideos.filter(video => {
        const category = videoCategories.find(cat => cat.id === video.category);
        return category?.language === "english";
      })
    : selectedCategory === "vietnamese"
    ? sampleVideos.filter(video => {
        const category = videoCategories.find(cat => cat.id === video.category);
        return category?.language === "vietnamese";
      })
    : sampleVideos.filter(video => video.category === selectedCategory);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  const toggleBookmark = (videoId: string) => {
    const updatedVideos = sampleVideos.map(video => 
      video.id === videoId ? { ...video, bookmarked: !video.bookmarked } : video
    );
    // In a real app, you would update the state here
  };

  const toggleLike = (videoId: string) => {
    const updatedVideos = sampleVideos.map(video => 
      video.id === videoId ? { ...video, liked: !video.liked, likes: video.liked ? video.likes - 1 : video.likes + 1 } : video
    );
    // In a real app, you would update the state here
  };

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
          {/* Header */}

          {/* Categories */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Danh mục học tập
            </Typography>
            
            {/* Language Categories */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Ngôn ngữ
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Chip
                  label="Tất cả"
                  onClick={() => setSelectedCategory("all")}
                  color={selectedCategory === "all" ? "primary" : "default"}
                  variant={selectedCategory === "all" ? "filled" : "outlined"}
                />
                {videoCategories.filter(cat => cat.type === "language").map((category) => (
                  <Chip
                    key={category.id}
                    label={category.name}
                    onClick={() => setSelectedCategory(category.id)}
                    color={selectedCategory === category.id ? "primary" : "default"}
                    variant={selectedCategory === category.id ? "filled" : "outlined"}
                    icon={category.icon}
                  />
                ))}
              </Box>
            </Box>
            
            {/* Playlist Categories */}
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Danh sách phát
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {videoCategories.filter(cat => cat.type === "playlist").map((category) => (
                  <Chip
                    key={category.id}
                    label={`${category.name} (${category.videos} video)`}
                    onClick={() => setSelectedCategory(category.id)}
                    color={selectedCategory === category.id ? "primary" : "default"}
                    variant={selectedCategory === category.id ? "filled" : "outlined"}
                    icon={category.icon}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 3, flexDirection: { xs: "column", lg: "row" } }}>
            {/* Video Player Section */}
            <Box sx={{ flex: { lg: "0 0 66.666667%" } }}>
              {selectedVideo ? (
                <Card sx={{ mb: 3 }}>
                  {/* Video Player */}
                  <Box sx={{ position: "relative", backgroundColor: "#000" }}>
                    <iframe
                      src={selectedVideo.videoUrl}
                      style={{ 
                        width: "100%", 
                        height: "400px", 
                        border: "none",
                        borderRadius: "8px 8px 0 0"
                      }}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Box>

                  {/* Video Info */}
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {selectedVideo.title}
                    </Typography>
                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {selectedVideo.views.toLocaleString()} lượt xem
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedVideo.duration}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <StarIcon sx={{ fontSize: 16, color: "#ffc107" }} />
                        <Typography variant="body2">{selectedVideo.rating}</Typography>
                      </Box>
                    </Box>

                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {selectedVideo.description}
                    </Typography>

                    {/* Action Buttons */}
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      <Button
                        variant="contained"
                        startIcon={selectedVideo.liked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                        onClick={() => toggleLike(selectedVideo.id)}
                      >
                        {selectedVideo.likes} Thích
                      </Button>
                      
                      <Button
                        variant="outlined"
                        startIcon={selectedVideo.bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                        onClick={() => toggleBookmark(selectedVideo.id)}
                      >
                        {selectedVideo.bookmarked ? "Đã lưu" : "Lưu"}
                      </Button>
                      
                      <Button
                        variant="outlined"
                        startIcon={<ShareIcon />}
                      >
                        Chia sẻ
                      </Button>
                      
                      <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                      >
                        Tải xuống
                      </Button>
                    </Box>
                  </Box>
                </Card>
              ) : (
                <Card sx={{ height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Box sx={{ textAlign: "center" }}>
                    <PlayCircleIcon sx={{ fontSize: 80, color: "text.secondary", mb: 2 }} />
                    <Typography variant="h6" color="text.secondary">
                      Chọn video để bắt đầu học
                    </Typography>
                  </Box>
                </Card>
              )}

              {/* Video Details Tabs */}
              {selectedVideo && (
                <Card>
                  <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
                    <Tab label="Mô tả" />
                    <Tab label="Bình luận" />
                    <Tab label="Tài liệu" />
                  </Tabs>
                  
                  <Box sx={{ p: 3 }}>
                    {activeTab === 0 && (
                      <Typography variant="body1">
                        {selectedVideo.description}
                      </Typography>
                    )}
                    
                    {activeTab === 1 && (
                      <Box>
                        <TextField
                          fullWidth
                          multiline
                          rows={3}
                          placeholder="Viết bình luận..."
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          sx={{ mb: 2 }}
                        />
                        <Button variant="contained">Gửi bình luận</Button>
                      </Box>
                    )}
                    
                    {activeTab === 2 && (
                      <Typography variant="body1">
                        Tài liệu tham khảo và code mẫu sẽ được cung cấp ở đây.
                      </Typography>
                    )}
                  </Box>
                </Card>
              )}
            </Box>

            {/* Video List Section */}
            <Box sx={{ flex: { lg: "0 0 33.333333%" } }}>
              <Card>
                <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
                  <Typography variant="h6" fontWeight="bold">
                    Danh sách video ({filteredVideos.length})
                  </Typography>
                </Box>
                
                <List sx={{ p: 0, maxHeight: 600, overflow: "auto" }}>
                  {filteredVideos.map((video) => (
                    <ListItem
                      key={video.id}
                      sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        cursor: "pointer",
                        bgcolor: selectedVideo?.id === video.id ? "action.selected" : "transparent",
                        "&:hover": { bgcolor: "action.hover" },
                      }}
                      onClick={() => handleVideoSelect(video)}
                    >
                      <ListItemIcon>
                        <Box sx={{ position: "relative" }}>
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            style={{
                              width: 120,
                              height: 68,
                              objectFit: "cover",
                              borderRadius: 4,
                            }}
                          />
                          {video.completed && (
                            <CheckCircleIcon
                              sx={{
                                position: "absolute",
                                top: -5,
                                right: -5,
                                color: "success.main",
                                bgcolor: "white",
                                borderRadius: "50%",
                              }}
                            />
                          )}
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
                            }}
                          >
                            {video.title}
                          </Typography>
                        }
                        secondaryTypographyProps={{
                          component: "div",
                        }}
                        secondary={
                          <Box>
                            <Typography variant="caption" color="text.secondary">
                              {video.instructor} • {video.duration}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                              <Typography variant="caption" color="text.secondary">
                                {video.views.toLocaleString()} lượt xem
                              </Typography>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                <StarIcon sx={{ fontSize: 12, color: "#ffc107" }} />
                                <Typography variant="caption">{video.rating}</Typography>
                              </Box>
                            </Box>
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WatchPage;
