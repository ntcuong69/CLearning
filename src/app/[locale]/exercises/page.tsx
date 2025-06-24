'use client';
import React, { useState } from 'react';
import NavBar from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Box, Typography, Stack, Chip, useTheme, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const exerciseTopics = [
  { id: 'all', title: 'All', description: '' },
  { id: 1, title: 'Toán học cơ bản', description: 'Tính tổng, hiệu, tích, chia, luỹ thừa, GCD, LCM, số nguyên tố, số hoàn hảo...' },
  { id: 2, title: 'Vòng lặp – Dãy số', description: 'In dãy số, bảng cửu chương, số Fibonacci, tam giác sao, hình học đơn giản...' },
  { id: 3, title: 'Rẽ nhánh – Điều kiện', description: 'Kiểm tra chẵn/lẻ, chia hết, điểm học sinh, giải phương trình...' },
  { id: 4, title: 'Xử lý chuỗi (string)', description: 'Đếm ký tự, từ, kiểm tra chuỗi đối xứng, chuyển hoa – thường, nối chuỗi...' },
  { id: 5, title: 'Mảng 1 chiều', description: 'Nhập/xuất mảng, tìm max/min, tổng, trung bình, sắp xếp, tìm kiếm...' },
  { id: 6, title: 'Mảng 2 chiều (ma trận)', description: 'Tổng hàng/cột, đường chéo, in hình ma trận, xoay ma trận, tìm phần tử đặc biệt...' },
  { id: 7, title: 'Hàm (function)', description: 'Tách logic thành hàm: kiểm tra số nguyên tố, tính tổng, gọi đệ quy...' },
  { id: 8, title: 'Đệ quy (recursion)', description: 'Tính giai thừa, dãy Fibonacci, tìm UCLN, bài toán tháp Hà Nội...' },
  { id: 9, title: 'Con trỏ (pointer)', description: 'Truy cập biến, hoán vị, duyệt mảng bằng con trỏ, dùng con trỏ với hàm...' },
  { id: 10, title: 'Struct (cấu trúc)', description: 'Quản lý sinh viên: nhập, in, tìm kiếm, sắp xếp theo điểm hoặc tên...' },
  { id: 11, title: 'Quản lý danh sách', description: 'Danh sách sinh viên, sản phẩm, điểm số, xử lý dữ liệu dạng mảng struct...' },
  { id: 12, title: 'Tìm kiếm – Sắp xếp', description: 'Linear search, binary search, bubble sort, selection sort, insertion sort...' },
  { id: 13, title: 'Ứng dụng thực tế đơn giản', description: 'Tính tiền điện, máy tính đơn giản, chuyển đổi tiền tệ, quản lý điểm sinh viên...' },
  { id: 14, title: 'Bài toán logic – tư duy', description: 'Số may mắn, ma trận xoắn ốc, đồng hồ điện tử, tìm mảng con lớn nhất...' },
  { id: 15, title: 'Bài tập tổng hợp', description: '' },
];

// Giả lập một số bài tập
const allProblems = [
  { id: 101, title: 'Tính tổng hai số', topicId: 1, difficulty: 'Easy', rating: 4 },
  { id: 102, title: 'Tìm số nguyên tố', topicId: 1, difficulty: 'Medium', rating: 5 },
  { id: 201, title: 'In dãy Fibonacci', topicId: 2, difficulty: 'Easy', rating: 3 },
  { id: 202, title: 'Bảng cửu chương', topicId: 2, difficulty: 'Easy', rating: 2 },
  { id: 301, title: 'Kiểm tra số chẵn lẻ', topicId: 3, difficulty: 'Easy', rating: 4 },
  { id: 401, title: 'Đếm số ký tự trong chuỗi', topicId: 4, difficulty: 'Easy', rating: 3 },
  { id: 501, title: 'Tìm max trong mảng', topicId: 5, difficulty: 'Easy', rating: 5 },
  { id: 601, title: 'Tổng đường chéo ma trận', topicId: 6, difficulty: 'Medium', rating: 4 },
  { id: 701, title: 'Kiểm tra số nguyên tố (hàm)', topicId: 7, difficulty: 'Medium', rating: 4 },
  { id: 801, title: 'Tính giai thừa (đệ quy)', topicId: 8, difficulty: 'Medium', rating: 5 },
  { id: 901, title: 'Hoán vị hai số (con trỏ)', topicId: 9, difficulty: 'Medium', rating: 2 },
  { id: 1001, title: 'Quản lý sinh viên', topicId: 10, difficulty: 'Hard', rating: 5 },
  { id: 1101, title: 'Danh sách sản phẩm', topicId: 11, difficulty: 'Medium', rating: 3 },
  { id: 1201, title: 'Bubble Sort', topicId: 12, difficulty: 'Easy', rating: 4 },
  { id: 1301, title: 'Tính tiền điện', topicId: 13, difficulty: 'Easy', rating: 3 },
  { id: 1401, title: 'Ma trận xoắn ốc', topicId: 14, difficulty: 'Hard', rating: 5 },
  { id: 1501, title: 'Tổng hợp bài tập C cơ bản', topicId: 15, difficulty: 'Medium', rating: 4 },
];

const ExercisesPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const theme = useTheme();

  // Lọc bài tập theo chủ đề
  const filteredProblems = selectedTopic === 'all'
    ? allProblems
    : allProblems.filter((p) => p.topicId === Number(selectedTopic));

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
        <Paper elevation={0} sx={{ display: 'flex', gap: 1.5, overflowX: 'auto', mb: 4, pb: 1, bgcolor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.03)', borderRadius: 3, px: 2, py: 1 }}>
          {exerciseTopics.map((topic) => (
            <Chip
              key={topic.id}
              label={topic.title}
              clickable
              color={selectedTopic === String(topic.id) ? 'primary' : 'default'}
              onClick={() => setSelectedTopic(String(topic.id))}
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                px: 2.5,
                fontSize: '1rem',
                bgcolor: selectedTopic === String(topic.id)
                  ? theme.palette.primary.light
                  : '#f5f6fa',
                color: selectedTopic === String(topic.id)
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
                boxShadow: selectedTopic === String(topic.id) ? 2 : 0,
                transition: 'all 0.2s',
                height: 40,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                // Không đặt maxWidth, không ellipsis, không overflow hidden
                '& .MuiChip-label': {
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  textOverflow: 'unset',
                  px: 1.5,
                },
                '&:hover': {
                  bgcolor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                },
              }}
            />
          ))}
        </Paper>
        {/* Danh sách bài tập */}
        <Stack spacing={0} sx={{ bgcolor: '#fff', borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', p: 0, mb: 2 }}>
          {filteredProblems.length === 0 ? (
            <Typography color="text.secondary" sx={{ p: 3 }}>Không có bài tập nào cho chủ đề này.</Typography>
          ) : (
            filteredProblems.map((problem, idx) => (
              <Box
                key={problem.id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 3,
                  py: 2,
                  borderBottom: idx === filteredProblems.length - 1 ? 'none' : '1px solid #f0f0f0',
                  borderRadius: idx === 0 ? '12px 12px 0 0' : idx === filteredProblems.length - 1 ? '0 0 12px 12px' : 0,
                  transition: 'background 0.2s',
                  bgcolor: idx % 2 === 0 ? '#fff' : '#f5f6fa',
                  '&:hover': { bgcolor: '#e9eaf3' },
                  gap: 2,
                }}
              >
                <Typography sx={{ width: 36, color: '#888', fontWeight: 600 }}>{idx + 1}</Typography>
                <Typography sx={{ flex: 2, minWidth: 180, fontWeight: 600, color: '#753a88', pr: 2 }}>{problem.title}</Typography>
                <Typography sx={{ width: 100, color: '#888', fontWeight: 500, textAlign: 'center' }}>{(Math.random() * 40 + 40).toFixed(1)}%</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7, width: 110, justifyContent: 'center', mr: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} fontSize="small" sx={{ color: i < problem.rating ? '#FFD600' : '#e0e0e0' }} />
                  ))}
                </Box>
                <Chip
                  label={problem.difficulty}
                  size="small"
                  sx={{
                    bgcolor:
                      problem.difficulty === 'Easy'
                        ? '#e0f7fa'
                        : problem.difficulty === 'Medium'
                        ? '#fff3e0'
                        : '#fce4ec',
                    color:
                      problem.difficulty === 'Easy'
                        ? '#0097a7'
                        : problem.difficulty === 'Medium'
                        ? '#ef6c00'
                        : '#c2185b',
                    fontWeight: 600,
                    minWidth: 60,
                  }}
                />
              </Box>
            ))
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default ExercisesPage;
