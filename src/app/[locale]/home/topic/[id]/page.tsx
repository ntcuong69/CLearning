"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Typography, Card, CardContent, Stack, Box, CircularProgress } from "@mui/material";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Topic1 from "@/components/Lectures/topic1";
import Topic2 from "@/components/Lectures/topic2";
import Topic3 from "@/components/Lectures/topic3";
import Topic4 from "@/components/Lectures/topic4";
import Topic5 from "@/components/Lectures/topic5";
import Topic6 from "@/components/Lectures/topic6";
import Topic7 from "@/components/Lectures/topic7";
import Topic8 from "@/components/Lectures/topic8";
import Topic9 from "@/components/Lectures/topic9";
import Topic10 from "@/components/Lectures/topic10";
import Topic11 from "@/components/Lectures/topic11";

import { Topic, Exercise } from "@/types/model";

function renderLectureComponent(tpID: number) {
  switch (tpID) {
    case 1:
      return <Topic1 />;
    case 2:
      return <Topic2 />;
    case 3:
      return <Topic3 />;
    case 4:
      return <Topic4 />;
    case 5:
      return <Topic5 />;
    case 6:
      return <Topic6 />;
    case 7:
      return <Topic7 />;
    case 8:
      return <Topic8 />;
    case 9:
      return <Topic9 />;
    case 10:
      return <Topic10 />;
    case 11:
      return <Topic11 />;
    default:
      return <div>Chưa có nội dung bài giảng cho chủ đề này.</div>;
  }
}

export default function TopicDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [loading, setLoading] = useState(true);

  const currentId = parseInt(id as string, 10);

  useEffect(() => {
    axios
      .get(`/api/topics/${id}`)
      .then((res) => {
        setTopic(res.data.topic); // Dữ liệu trả về được gán vào state topic
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={100} sx={{ color: "#cc2b5e" }} />
      </Box>
    );

  if (!topic) return <Typography>Topic not found.</Typography>;

  const handlePreviousLecture = () => {
    const previousId = currentId - 1;
    if (previousId > 0) {
      router.push(`/home/topic/${previousId}`);
    }
  };

  const handleNextLecture = () => {
    const nextId = currentId + 1;
    router.push(`/home/topic/${nextId}`);
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <NavBar />
      <Box sx={{ maxWidth: 900, mx: "auto", px: { xs: 2, sm: 6, md: 10 }, py: 6 }}>
        <Box mb={4}>{renderLectureComponent(topic.TpID)}</Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          {/* Nút Bài giảng trước */}
          <Box
            component="button"
            onClick={currentId > 1 ? handlePreviousLecture : undefined} // Chỉ gọi hàm nếu có bài giảng trước
            sx={{
              px: 3,
              py: 1,
              bgcolor: currentId === 1 ? "#e0e0e0" : "#f3f4f6", // Màu nền khi không thể nhấn
              color: currentId === 1 ? "#9e9e9e" : "#cc2b5e", // Màu chữ khi không thể nhấn
              border: "1px solid #cc2b5e",
              borderRadius: "4px",
              cursor: currentId === 1 ? "not-allowed" : "pointer", // Con trỏ khi không thể nhấn
              "&:hover": {
                bgcolor: currentId === 1 ? "#e0e0e0" : "#cc2b5e", // Hiệu ứng hover khi có thể nhấn
                color: currentId === 1 ? "#9e9e9e" : "#fff",
              },
            }}
          >
            Bài giảng trước
          </Box>

          {/* Nút Bài giảng tiếp theo */}
          <Box
            component="button"
            onClick={currentId < 11 ? handleNextLecture : undefined} // Chỉ gọi hàm nếu có bài giảng tiếp theo
            sx={{
              px: 3,
              py: 1,
              bgcolor: currentId === 11 ? "#e0e0e0" : "#f3f4f6", // Màu nền khi không thể nhấn
              color: currentId === 11 ? "#9e9e9e" : "#cc2b5e", // Màu chữ khi không thể nhấn
              border: "1px solid #cc2b5e",
              borderRadius: "4px",
              cursor: currentId === 11 ? "not-allowed" : "pointer", // Con trỏ khi không thể nhấn
              "&:hover": {
                bgcolor: currentId === 11 ? "#e0e0e0" : "#cc2b5e", // Hiệu ứng hover khi có thể nhấn
                color: currentId === 11 ? "#9e9e9e" : "#fff",
              },
            }}
          >
            Bài giảng tiếp theo
          </Box>
        </Box>
        <Typography variant="h5" fontWeight="bold" mb={2} mt={6}>
          Exercises
        </Typography>
        <Stack direction="row" spacing={2} mb={2}>
          {topic.exercise.slice(0, 10).map((ex, idx) => (
            <Link
              key={ex.EID}
              href={`/home/topic/${topic.TpID}/exercise/${ex.EID}`}
              passHref
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "#f3f4f6",
                  color: "#cc2b5e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  border: "2px solid #cc2b5e",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#cc2b5e",
                    color: "#fff",
                  },
                }}
              >
                {idx + 1}
              </Box>
            </Link>
          ))}
        </Stack>
        <Stack spacing={2}>
          {topic.exercise.length === 0 && <Typography>No exercises.</Typography>}
          {topic.exercise.map((ex) => (
            <Card key={ex.EID} variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {ex.Content}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Difficulty: {ex.Difficulty}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}