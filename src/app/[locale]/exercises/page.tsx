'use client';
import React, { useState, useRef, useEffect } from 'react';
import NavBar from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Box, Typography, Stack, Chip, useTheme, Paper, Card, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Tooltip, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import axios from 'axios';

const ExercisesPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [topics, setTopics] = useState<any[]>([]);
  const [problems, setProblems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submissionsMap, setSubmissionsMap] = useState<Record<string, any[]>>({});

  useEffect(() => {
    setLoading(true);
    Promise.all([
      axios.get('/api/topics/list'),
      axios.get('/api/exercise/list')
    ])
      .then(async ([topicsRes, exercisesRes]) => {
        const fetchedTopics = topicsRes.data.topics || [];
        const allTopic = { TpID: 'all', Name: 'Tất cả' };
        setTopics([allTopic, ...fetchedTopics]);
        const exercises = exercisesRes.data.exercises || [];
        setProblems(exercises);
        // Gọi API submissions cho từng bài
        const submissionsResults = await Promise.all(
          exercises.map(async (ex: any) => {
            try {
              const res = await axios.get(`/api/submissions/by-exercise/${ex.EID}`);
              return { eid: ex.EID, submissions: res.data.submissions || [] };
            } catch {
              return { eid: ex.EID, submissions: [] };
            }
          })
        );
        // Tạo map eid -> submissions
        const map: Record<string, any[]> = {};
        submissionsResults.forEach(({ eid, submissions }) => {
          map[eid] = submissions;
        });
        setSubmissionsMap(map);
      })
      .finally(() => setLoading(false));
  }, []);

  // Lọc bài tập theo chủ đề
  const filteredProblems = selectedTopic === 'all'
    ? problems
    : problems.filter((p) => p.TpID === Number(selectedTopic));

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', pt: '70px' }}>
      <NavBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: '280px' },
          px: { xs: 2, sm: 6, md: 10 },
          py: 6,
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
          Danh sách bài tập
        </Typography>
        {/* Thanh chọn chủ đề */}
        <Box className="mb-6">
          <Typography variant="h6" className="font-semibold text-gray-900 mb-4">
            Chủ đề
          </Typography>
          <Box className="flex flex-wrap gap-3">
            {topics.map((topic) => {
              // Đếm số bài đã giải và tổng số bài cho từng chủ đề
              let solvedCount = 0;
              let totalCount = 0;
              if (topic.TpID === 'all') {
                totalCount = problems.length;
                solvedCount = problems.filter((p) => p.status === 'Solved').length;
              } else {
                const topicProblems = problems.filter((p) => p.TpID === Number(topic.TpID || topic.id));
                totalCount = topicProblems.length;
                solvedCount = topicProblems.filter((p) => p.status === 'Solved').length;
              }
              return (
                <Chip
                  key={topic.TpID}
                  label={
                    <Box className="flex items-center gap-2">
                      <span>{topic.Name}</span>
                      <Box className="bg-white bg-opacity-50 rounded-full px-2 py-0.5">
                        <Typography variant="caption" className="font-semibold">
                          {`${solvedCount}/${totalCount}`}
                        </Typography>
                      </Box>
                    </Box>
                  }
                  onClick={() => setSelectedTopic(String(topic.TpID))}
                  className={`${(topic.TpID) === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} cursor-pointer transition-all duration-200 hover:shadow-md ${
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
        {/* Danh sách bài tập */}
        <Card className="border border-gray-200 shadow-lg">
          <TableContainer component={Paper} className="rounded-xl">
            <Table>
              <TableHead className="bg-gray-50">
                <TableRow>
                  <TableCell className="font-semibold text-gray-900">Trạng thái</TableCell>
                  <TableCell className="font-semibold text-gray-900">Tên bài tập</TableCell>
                  <TableCell className="font-semibold text-gray-900">Độ khó</TableCell>
                  <TableCell className="font-semibold text-gray-900">Tỷ lệ Pass</TableCell>
                  <TableCell className="font-semibold text-gray-900">Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProblems.map((problem) => (
                  <TableRow key={problem.EID} className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
                    <TableCell>
                      <Tooltip
                        title={
                          problem.status === 'Solved'
                            ? 'Đã giải'
                            : 'Chưa làm'
                        }
                      >
                        {problem.status === 'Solved' ? (
                          <CheckCircleIcon fontSize="small" sx={{ color: '#4CAF50' }} />
                        ) : (
                          <RadioButtonUncheckedIcon fontSize="small" sx={{ color: '#bdbdbd' }} />
                        )}
                      </Tooltip>
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
                          (problem.Difficulty || '') === 'Easy'
                            ? 'text-green-500'
                            : (problem.Difficulty || '') === 'Medium'
                            ? 'text-yellow-500'
                            : (problem.Difficulty || '') === 'Hard'
                            ? 'text-red-500'
                            : ''
                        }`}
                      >
                        {problem.Difficulty}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box className="flex items-center gap-2">
                        <Typography variant="body2" className="font-medium text-gray-900">
                          {(() => {
                            const submissions = submissionsMap[problem.EID] || [];
                            const total = submissions.length;
                            const pass = submissions.filter((s) => s.Result === 'Pass').length;
                            return total > 0 ? `${((pass / total) * 100).toFixed(1)}%` : '0.0%';
                          })()}
                        </Typography>
                        <Box className="w-16 bg-gray-200 rounded-full h-1.5">
                          <Box className="bg-green-500 h-1.5 rounded-full" style={{ width: `${(() => {
                            const submissions = submissionsMap[problem.EID] || [];
                            const total = submissions.length;
                            const pass = submissions.filter((s) => s.Result === 'Pass').length;
                            return total > 0 ? (pass / total) * 100 : 0;
                          })()}%` }} />
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Button
                        href={`/exercises/${problem.Slug}`}
                        size="small"
                        variant="contained"
                        startIcon={<PlayArrowIcon />}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Giải bài
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </Box>
  );
};

export default ExercisesPage;
