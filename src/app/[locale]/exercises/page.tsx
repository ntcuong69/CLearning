"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import NavBar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ExerciseStatusBadge from "@/components/ExercisePage/ExerciseStatusBadge";
import {
  Box,
  Typography,
  Chip,
  Paper,
  Card,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Button,
  CircularProgress,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import PendingIcon from "@mui/icons-material/Pending";
import axios from "axios";

const ExercisesPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [topics, setTopics] = useState<any[]>([]);
  const [problems, setProblems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Lazy loading states
  const [displayedProblems, setDisplayedProblems] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const initialLoadCount = 50;
  const loadMoreCount = 20;

  // Ref cho intersection observer
  const loadingRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    Promise.all([axios.get("/api/topics/list"), axios.get("/api/exercise/list")])
      .then(async ([topicsRes, exercisesRes]) => {
        const fetchedTopics = topicsRes.data.topics || [];
        const allTopic = { TpID: "all", Name: "Tất cả" };
        setTopics([allTopic, ...fetchedTopics]);
        const exercises = exercisesRes.data.exercises || [];
        setProblems(exercises);
      })
      .finally(() => setLoading(false));
  }, []);

  // Lọc bài tập theo chủ đề và từ khóa tìm kiếm
  const filteredProblems = (selectedTopic === "all" ? problems : problems.filter((p) => p.TpID === Number(selectedTopic)))
    .filter((p) => p.Name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Cập nhật displayedProblems khi selectedTopic, problems, initialLoadCount hoặc searchTerm thay đổi
  useEffect(() => {
    setCurrentPage(1);
    setDisplayedProblems(filteredProblems.slice(0, initialLoadCount));
    setHasMore(filteredProblems.length > initialLoadCount);
  }, [selectedTopic, problems, initialLoadCount, searchTerm]);

  // Load more function
  const loadMore = useCallback(() => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = (nextPage - 1) * loadMoreCount;
      const endIndex = startIndex + loadMoreCount;
      const newProblems = filteredProblems.slice(startIndex, endIndex);
      
      setDisplayedProblems((prev) => [...prev, ...newProblems]);
      setCurrentPage(nextPage);
      setHasMore(endIndex < filteredProblems.length);
      setLoadingMore(false);
    }, 500); // Delay để tạo hiệu ứng loading
  }, [currentPage, filteredProblems, loadMoreCount, loadingMore, hasMore]);

  // Intersection Observer để detect khi scroll xuống cuối
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [loadMore, hasMore, loadingMore]);

  // Hàm đếm số bài tập theo trạng thái
  const getStatusCounts = (problems: any[]) =>
    problems.reduce(
      (acc, p) => {
        const status = p.status || 'Unattempted';
        if (status === 'Solved') acc.solved++;
        else if (status === 'Attempting') acc.attempting++;
        else acc.unattempted++;
        return acc;
      },
      { solved: 0, attempting: 0, unattempted: 0 }
    );

  // Tính trước statusCounts để dùng lại
  const statusCounts = getStatusCounts(problems);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px" }}>
      <NavBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: "280px" },
          px: { xs: 2, sm: 6, md: 10 },
          py: 6,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        
        {/* Thanh chọn chủ đề */}
        <Box className="mb-6">
          <Box className="flex flex-wrap gap-3">
            {topics.map((topic) => {
              // Đếm số bài theo trạng thái cho từng chủ đề
              let topicProblems = [];
              if (topic.TpID === "all") {
                topicProblems = problems;
              } else {
                topicProblems = problems.filter((p) => p.TpID === Number(topic.TpID || topic.id));
              }
              
              const statusCounts = getStatusCounts(topicProblems);
              const totalCount = topicProblems.length;
              
              return (
                <Chip
                  key={topic.TpID}
                  label={
                    <Box className="flex items-center gap-2">
                      <span>{topic.Name}</span>
                      <Box className="bg-white bg-opacity-50 rounded-full px-2 py-0.5">
                        <Typography variant="caption" className="font-semibold">
                          {`${statusCounts.solved}/${totalCount}`}
                        </Typography>
                      </Box>
                    </Box>
                  }
                  onClick={() => setSelectedTopic(String(topic.TpID))}
                  className={`${
                    topic.TpID === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  } cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedTopic === String(topic.TpID) ? "ring-2 ring-blue-500 ring-opacity-50" : ""
                  }`}
                  sx={{
                    height: "auto",
                    padding: "8px 4px",
                    "& .MuiChip-label": {
                      padding: "4px 8px",
                    },
                  }}
                />
              );
            })}
          </Box>
        </Box>

        {/* Thống kê tổng quan */}
        {selectedTopic === "all" && (
          <Box sx={{ mb: 4, p: 3, bgcolor: "#f8f9fa", borderRadius: 2, display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircleIcon sx={{ color: "#4CAF50", fontSize: 20 }} />
              <Typography variant="body2">
                Đã giải: <strong>{statusCounts.solved}</strong>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PendingIcon sx={{ color: "#FF9800", fontSize: 20 }} />
              <Typography variant="body2">
                Đang làm: <strong>{statusCounts.attempting}</strong>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <RadioButtonUncheckedIcon sx={{ color: "#bdbdbd", fontSize: 20 }} />
              <Typography variant="body2">
                Chưa làm: <strong>{statusCounts.unattempted}</strong>
              </Typography>
            </Box>
          </Box>
        )}

        {/* Thống kê hiển thị */}
        <Box sx={{ mb: 3, display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Hiển thị {displayedProblems.length} / {filteredProblems.length} bài tập
          </Typography>
          {hasMore && (
            <Typography variant="body2" color="primary">
              Cuộn xuống để xem thêm
            </Typography>
          )}
        </Box>

        {/* Thanh tìm kiếm tên bài tập */}
        <Box sx={{ mb: 3, mt: 1 }}>
          <input
            type="text"
            placeholder="Tìm kiếm tên bài tập..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 8,
              border: '1px solid #d1d5db',
              fontSize: 16,
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: 4,
            }}
          />
        </Box>

        {/* Danh sách bài tập */}
        <Card className="border border-gray-200 shadow-lg">
          <TableContainer component={Paper} className="rounded-xl">
            <Table>
              <TableHead className="bg-gray-50">
                <TableRow>
                  <TableCell className="font-semibold text-gray-900">Trạng thái</TableCell>
                  <TableCell className="font-semibold text-gray-900">Tên bài tập</TableCell>
                  <TableCell className="font-semibold text-gray-900">Độ khó</TableCell>
                  <TableCell className="font-semibold text-gray-900">Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedProblems.map((problem) => {
                  return (
                    <TableRow key={problem.EID} className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
                      <TableCell>
                        <ExerciseStatusBadge status={problem.status || 'Unattempted'} />
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Typography 
                            variant="body2" 
                            className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer"
                          >
                            {problem.Name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          className={`font-medium ${
                            (problem.Difficulty || "") === "Easy"
                              ? "text-green-500"
                              : (problem.Difficulty || "") === "Medium"
                              ? "text-yellow-500"
                              : (problem.Difficulty || "") === "Hard"
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {problem.Difficulty === 'Easy' ? 'Dễ' : problem.Difficulty === 'Medium' ? 'Vừa' : problem.Difficulty === 'Hard' ? 'Khó' : problem.Difficulty}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Button
                          href={`/exercises/${problem.Slug}`}
                          size="small"
                          variant="contained"
                          startIcon={<PlayArrowIcon />}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          sx={{
                            bgcolor: problem.status === 'Solved' ? "#4CAF50" : 
                                    problem.status === 'Attempting' ? "#FF9800" : "#3b82f6",
                            "&:hover": {
                              bgcolor: problem.status === 'Solved' ? "#388E3C" : 
                                      problem.status === 'Attempting' ? "#F57C00" : "#2563eb",
                            }
                          }}
                        >
                          {problem.status === 'Solved' ? 'Xem lại' : 
                           problem.status === 'Attempting' ? 'Tiếp tục' : 'Giải bài'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

        {/* Loading indicator */}
        {hasMore && (
          <Box
            ref={loadingRef}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 4,
              mt: 2,
            }}
          >
            {loadingMore ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <CircularProgress size={24} />
                <Typography variant="body2" color="text.secondary">
                  Đang tải thêm bài tập...
                </Typography>
              </Box>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Cuộn xuống để xem thêm
              </Typography>
            )}
          </Box>
        )}

        {/* End message */}
        {!hasMore && displayedProblems.length > 0 && (
          <Box sx={{ textAlign: "center", py: 4, mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Đã hiển thị tất cả {filteredProblems.length} bài tập
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ExercisesPage;
