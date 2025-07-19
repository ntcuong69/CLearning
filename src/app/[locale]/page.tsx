"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Chip,
  Box,
  Container,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BookIcon from "@mui/icons-material/Book";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { blue, green, orange, red } from "@mui/material/colors";
import { CLearningLogo } from "../../components/CLearningLogo";
import { useRouter } from "next/navigation";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter/dist/esm';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function HomePage() {
  const router = useRouter();
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Header */}
      <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderBottom: 1, borderColor: "divider" }}>
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 64 }}>
          <CLearningLogo />
          <Stack direction="row" spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
            <MuiLink href="#courses" underline="none" color="text.secondary" sx={{ fontWeight: 500, "&:hover": { color: blue[600] } }}>Khóa học</MuiLink>
            <MuiLink href="#practice" underline="none" color="text.secondary" sx={{ fontWeight: 500, "&:hover": { color: blue[600] } }}>Luyện tập</MuiLink>
            <MuiLink href="#about" underline="none" color="text.secondary" sx={{ fontWeight: 500, "&:hover": { color: blue[600] } }}>Giới thiệu</MuiLink>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => router.push("/auth")} variant="text" sx={{ display: { xs: "none", sm: "inline-flex" } }}>Đăng nhập</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box component="main" flex={1}>
        {/* Hero Section */}
        <Box sx={{ bgcolor: "linear-gradient(135deg, #e3f0ff 0%, #fff 60%, #f3e8ff 100%)", py: { xs: 8, lg: 14 } }}>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 8,
                alignItems: "center",
              }}
            >
              <Box>
                <Stack spacing={4}>
                  <Chip label="🚀 Học lập trình căn bản" sx={{ bgcolor: blue[50], color: blue[700], fontWeight: 600, width: "fit-content" }} />
                  <Typography variant="h2" fontWeight={600} color="text.primary" gutterBottom>
                    Thành thạo <Box component="span" color={blue[600]}>C</Box> từ con số 0
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Khóa học lập trình C toàn diện với hàng trăm bài tập thực hành, từ cơ bản đến nâng cao. Học theo lộ trình khoa học.
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <Button onClick={() => router.push("/home")} size="large" variant="contained" startIcon={<PlayArrowIcon />} sx={{ bgcolor: blue[600], px: 4, fontSize: 18, ":hover": { bgcolor: blue[700] } }}>
                      Bắt đầu ngay
                    </Button>
                  </Stack>
                </Stack>
              </Box>
              <Box>
                <Box sx={{ position: "relative", maxWidth: 480, mx: "auto" }}>
                  <Box sx={{ bgcolor: "#222", borderRadius: 4, p: 3, boxShadow: 6 }}>
                    <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                      <Box width={12} height={12} borderRadius={6} bgcolor={red[500]} />
                      <Box width={12} height={12} borderRadius={6} bgcolor={orange[500]} />
                      <Box width={12} height={12} borderRadius={6} bgcolor={green[500]} />
                      <Typography color="gray" fontSize={14} ml={2}>main.c</Typography>
                    </Stack>
                    <SyntaxHighlighter language="c" style={vscDarkPlus} customStyle={{ borderRadius: 8, fontSize: 15, margin: 0, fontFamily: 'Fira Mono, monospace', background: '#222', padding: 0 }}>
{`#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    printf("Chào mừng đến với C!\\n");
    return 0;
}`}
                    </SyntaxHighlighter>
                  </Box>
                  <Box sx={{ position: "absolute", bottom: -24, right: -24, bgcolor: blue[600], color: "white", p: 2, borderRadius: 2, boxShadow: 4 }}>
                    <CheckCircleIcon fontSize="large" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 12, bgcolor: "white" }}>
          <Container maxWidth="lg">
            <Box textAlign="center" mb={8}>
              <Typography variant="h3" fontWeight={700} gutterBottom>Tại sao nên chọn C-Learning?</Typography>
              <Typography variant="h6" color="text.secondary" maxWidth={600} mx="auto">
                Tài liệu, bài tập đa dạng, học theo lộ trình khoa học
              </Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 4,
              }}
            >
              {[{
                icon: <BookIcon sx={{ bgcolor: blue[50], color: blue[600], p: 1, borderRadius: 2, fontSize: 32 }} />, title: "Lộ trình khoa học", desc: "Từ cơ bản đến nâng cao, được thiết kế phù hợp cho người mới bắt đầu"
              }, {
                icon: <CodeIcon sx={{ bgcolor: green[50], color: green[600], p: 1, borderRadius: 2, fontSize: 32 }} />, title: "Thực hành nhiều", desc: "Hàng trăm bài tập từ dễ đến khó, tự động chấm điểm"
              }, {
                icon: <PlayArrowIcon sx={{ bgcolor: red[50], color: red[600], p: 1, borderRadius: 2, fontSize: 32 }} />, title: "Học mọi lúc", desc: "Truy cập 24/7, học theo tốc độ của riêng bạn"
              }].map((f, i) => (
                <Card key={i} elevation={4} sx={{ borderRadius: 4, transition: "box-shadow 0.2s", ":hover": { boxShadow: 8 } }}>
                  <CardHeader
                    avatar={f.icon}
                    title={<Typography variant="h6">{f.title}</Typography>}
                    subheader={<Typography color="text.secondary">{f.desc}</Typography>}
                  />
                </Card>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Course Curriculum */}
        <Box id="courses" sx={{ py: 12, bgcolor: "#f8fafc" }}>
          <Container maxWidth="lg">
            <Box textAlign="center" mb={8}>
              <Typography variant="h3" fontWeight={700} gutterBottom>Chương trình học</Typography>
              <Typography variant="h6" color="text.secondary">Lộ trình học từ cơ bản đến nâng cao</Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
              }}
            >
              {/* Cơ bản */}
              <Card elevation={4} sx={{ borderRadius: 4 }}>
                <CardHeader
                  avatar={<Chip label="Cơ bản" sx={{ bgcolor: green[50], color: green[700], fontWeight: 600 }} />}
                  title={<Typography variant="h5">Nền tảng C Programming</Typography>}
                  subheader={<Typography color="text.secondary">Học các khái niệm cơ bản và cú pháp của ngôn ngữ C</Typography>}
                />
                <CardContent>
                  <Stack spacing={2}>
                    {["Cú pháp cơ bản của C", "Kiểu dữ liệu, biến, hằng, toán tử", "Cấu trúc rẽ nhánh - Câu điều kiện", "Vòng lặp", "Mảng và chuỗi", "Hàm và phạm vi biến"].map((txt, idx) => (
                      <Stack key={idx} direction="row" spacing={1} alignItems="center">
                        <CheckCircleIcon color="success" />
                        <Typography>{txt}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
              {/* Nâng cao */}
              <Card elevation={4} sx={{ borderRadius: 4 }}>
                <CardHeader
                  avatar={<Chip label="Nâng cao" sx={{ bgcolor: blue[50], color: blue[700], fontWeight: 600 }} />}
                  title={<Typography variant="h5">C Programming Nâng cao</Typography>}
                  subheader={<Typography color="text.secondary">Khám phá các tính năng nâng cao và kỹ thuật lập trình</Typography>}
                />
                <CardContent>
                  <Stack spacing={2}>
                    {["Mảng 2 chiều", "Đệ quy", "Cấp phát bộ nhớ động", "Con trỏ", "Cấu trúc"].map((txt, idx) => (
                      <Stack key={idx} direction="row" spacing={1} alignItems="center">
                        <CheckCircleIcon color="primary" />
                        <Typography>{txt}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>

        {/* Practice Section */}
        <Box id="practice" sx={{ py: 12, bgcolor: "white" }}>
          <Container maxWidth="lg">
            <Box textAlign="center" mb={8}>
              <Typography variant="h3" fontWeight={700} gutterBottom>Luyện tập thực hành</Typography>
              <Typography variant="h6" color="text.secondary">Hàng trăm bài tập được phân loại theo độ khó</Typography>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 4,
              }}
            >
              {/* Dễ */}
              <Card elevation={3} sx={{ borderRadius: 4, border: `2px solid ${green[100]}`, transition: "border-color 0.2s", ":hover": { borderColor: green[300] } }}>
                <CardHeader
                  avatar={<Box sx={{ width: 56, height: 56, bgcolor: green[50], borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Typography variant="h4" color={green[600]}>1</Typography></Box>}
                  title={<Typography variant="h6" color={green[700]}>Dễ</Typography>}
                  subheader={<Typography color="text.secondary">150+ bài tập cơ bản</Typography>}
                />
                <CardContent>
                  <Typography color="text.secondary" mb={2}>Phù hợp cho người mới bắt đầu</Typography>
                  <Button variant="contained" fullWidth sx={{ bgcolor: green[600], ":hover": { bgcolor: green[700] } }}>Bắt đầu luyện tập</Button>
                </CardContent>
              </Card>
              {/* Trung bình */}
              <Card elevation={3} sx={{ borderRadius: 4, border: `2px solid ${orange[100]}`, transition: "border-color 0.2s", ":hover": { borderColor: orange[300] } }}>
                <CardHeader
                  avatar={<Box sx={{ width: 56, height: 56, bgcolor: orange[50], borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Typography variant="h4" color={orange[600]}>2</Typography></Box>}
                  title={<Typography variant="h6" color={orange[700]}>Trung bình</Typography>}
                  subheader={<Typography color="text.secondary">200+ bài tập nâng cao</Typography>}
                />
                <CardContent>
                  <Typography color="text.secondary" mb={2}>Cho những ai đã có kiến thức cơ bản</Typography>
                  <Button variant="contained" fullWidth sx={{ bgcolor: orange[600], ":hover": { bgcolor: orange[700] } }}>Thử thách bản thân</Button>
                </CardContent>
              </Card>
              {/* Khó */}
              <Card elevation={3} sx={{ borderRadius: 4, border: `2px solid ${red[100]}`, transition: "border-color 0.2s", ":hover": { borderColor: red[300] } }}>
                <CardHeader
                  avatar={<Box sx={{ width: 56, height: 56, bgcolor: red[50], borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Typography variant="h4" color={red[600]}>3</Typography></Box>}
                  title={<Typography variant="h6" color={red[700]}>Khó</Typography>}
                  subheader={<Typography color="text.secondary">100+ bài tập chuyên sâu</Typography>}
                />
                <CardContent>
                  <Typography color="text.secondary" mb={2}>Dành cho lập trình viên có kinh nghiệm</Typography>
                  <Button variant="contained" fullWidth sx={{ bgcolor: red[600], ":hover": { bgcolor: red[700] } }}>Chinh phục đỉnh cao</Button>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{
        bgcolor: "#f3f4f6",
        color: "#374151",
        py: 2,
        textAlign: "center",
        fontSize: 15,
        borderTop: "1px solid #e5e7eb",
      }}>
        © {new Date().getFullYear()} CodeC Platform. Made with <Box component="span" sx={{ color: "#fb7185", fontWeight: 700, display: "inline" }}>♥</Box> for C learners.
      </Box>
    </Box>
  );
}
