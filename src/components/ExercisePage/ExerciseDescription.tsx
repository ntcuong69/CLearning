import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, IconButton, Tooltip } from "@mui/material";
import { TaskAlt, Favorite, FavoriteBorder, Pending } from "@mui/icons-material";
import ExerciseStatusBadge from "./ExerciseStatusBadge";

export default function ExerciseDescription({ exercise, testcases, onExerciseUpdate }: any) {
  const [isLiked, setIsLiked] = useState(exercise.isLiked || false);
  const [likeCount, setLikeCount] = useState(exercise.likeCount || 0);
  const [isLiking, setIsLiking] = useState(false);

  // Đồng bộ state khi exercise prop thay đổi
  useEffect(() => {
    setIsLiked(exercise.isLiked || false);
    setLikeCount(exercise.likeCount || 0);
  }, [exercise.isLiked, exercise.likeCount]);

  /**
   * Xử lý like/unlike exercise
   */
  const handleLike = async () => {
    if (isLiking) return;
    
    setIsLiking(true);
    try {
      const res = await fetch(`/api/exercise/${exercise.Slug}/like`, {
        method: "POST",
      });
      
      if (res.ok) {
        const data = await res.json();
        setIsLiked(data.liked);
        setLikeCount(data.likeCount);
        
        // Cập nhật exercise state nếu có callback
        if (onExerciseUpdate) {
          onExerciseUpdate({
            ...exercise,
            isLiked: data.liked,
            likeCount: data.likeCount,
          });
        }
      }
    } catch (error) {
      console.error("Error liking exercise:", error);
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <>
      <Typography
        variant="h6"
        fontWeight={700}
        mb={1}
        sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}
      >
        {exercise.Name}
        <ExerciseStatusBadge 
          status={exercise.status || 'Unattempted'} 
          showIcon={true} 
          showText={true} 
          size="small"
        />
      </Typography>
      
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
        {/* Difficulty Badge */}
        {exercise.Difficulty === "Easy" && (
          <Box
            sx={{
              px: 1,
              border: "2px solid #43a047",
              color: "#388e3c",
              bgcolor: "#e8f5e9",
              fontSize: 14,
              borderRadius: 5,
              display: "inline-block",
            }}
          >
            Dễ
          </Box>
        )}
        {exercise.Difficulty === "Medium" && (
          <Box
            sx={{
              px: 1,
              border: "2px solid #fb8c00",
              color: "#ef6c00",
              bgcolor: "#fff3e0",
              fontSize: 14,
              borderRadius: 5,
              display: "inline-block",
            }}
          >
            Vừa
          </Box>
        )}
        {exercise.Difficulty === "Hard" && (
          <Box
            sx={{
              px: 1,
              border: "2px solid #e53935",
              color: "#b71c1c",
              bgcolor: "#ffebee",
              fontSize: 14,
              borderRadius: 5,
              display: "inline-block",
            }}
          >
            Khó
          </Box>
        )}

        {/* Like Button */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
          <Tooltip title={isLiked ? "Hủy thích" : "Thích bài tập"}>
            <IconButton
              onClick={handleLike}
              disabled={isLiking}
              sx={{
                color: isLiked ? "#e91e63" : "#9e9e9e",
                "&:hover": {
                  color: isLiked ? "#c2185b" : "#e91e63",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s ease",
              }}
            >
              {isLiked ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </Tooltip>
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              fontWeight: 500,
              minWidth: "20px",
              textAlign: "center",
            }}
          >
            {likeCount}
          </Typography>
        </Box>
      </Box>
      
      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
        {exercise.Content}
      </Typography>
      
      {testcases.length > 0 && (
        <Box mt={4}>
          {testcases
            .filter((tc: any) => !tc.isHidden)
            .slice(0, 2)
            .map((tc: any, idx: number) => (
              <Paper key={tc.TCID} sx={{ mb: 2, borderRadius: 2, boxShadow: "0 1px 4px rgba(0,0,0,0.07)", p: 1 }}>
                <Box sx={{ fontWeight: 700, fontSize: 16, px: 1, pt: 1 }}>Ví dụ {idx + 1}:</Box>
                <Box sx={{ bgcolor: "#f8f9fa", borderRadius: 2, px: 1, py: 1, m: 1 }}>
                  <div style={{ fontWeight: 700, marginBottom: 2 }}>
                    <span style={{ fontWeight: 700 }}>Input:</span> <span style={{ fontWeight: 350 }}>{tc.Input}</span>
                  </div>
                  <div style={{ fontWeight: 700 }}>
                    <span style={{ fontWeight: 700 }}>Output:</span> <span style={{ fontWeight: 350 }}>{tc.ExpectedOutput}</span>
                  </div>
                </Box>
              </Paper>
            ))}
        </Box>
      )}
    </>
  );
} 