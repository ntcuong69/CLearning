"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Link as MuiLink,
  Paper,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import OverviewOfCProgramming from "@/components/Lessons/OverviewOfCProgramming";
import BasicStructure from "@/components/Lessons/BasicStructure";
import { CompileAndRun } from "@/components/Lessons/CompileAndRun";
import BasicDataTypes from "@/components/Lessons/BasicDataTypes";
import VariablesAndConstants from "@/components/Lessons/VariablesAndConstants";
import OperatorsInC from "@/components/Lessons/OperatorsInC";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NavBar from "@/components/Header";
import IfStatements from "@/components/Lessons/IfStatements";
import SwitchCase from "@/components/Lessons/SwitchCase";
import ForLoop from "@/components/Lessons/ForLoop";
import WhileDoWhile from "@/components/Lessons/WhileDoWhile";
import BreakContinue from "@/components/Lessons/BreakContinue";
import OneDimensionalArrays from "@/components/Lessons/OneDimensionalArrays";
import TwoDimensionalArrays from "@/components/Lessons/TwoDimensionalArrays";
import CharacterStrings from "@/components/Lessons/CharacterStrings";
import BasicInputOutput from "@/components/Lessons/BasicInputOutput";
import StringHandlingFunctions from "@/components/Lessons/StringHandlingFunctions";
import FunctionDeclaration from "@/components/Lessons/FunctionDeclaration";
import PassByValueAndReference from "@/components/Lessons/PassByValueAndReference";
import Recursion from "@/components/Lessons/Recursion";
import PointerBasics from "@/components/Lessons/PointerBasics";
import PointerArrays from "@/components/Lessons/PointerArrays";
import PointerFunctions from "@/components/Lessons/PointerFunctions";
import PointerToPointer from "@/components/Lessons/PointerToPointer";
import MemoryAllocation from "@/components/Lessons/MemoryAllocation";
import StructAndTypedef from "@/components/Lessons/StructAndTypedef";
import ArrayNestedStructs from "@/components/Lessons/ArrayNestedStructs";
import FileOpenClose from "@/components/Lessons/FileOpenClose";
import TextFiles from "@/components/Lessons/TextFiles";
import BinaryFiles from "@/components/Lessons/BinaryFiles";
import DebugErrorHandling from "@/components/Lessons/DebugErrorHandling";
import OptimizationCleanCode from "@/components/Lessons/OptimizationCleanCode";
import BasicAlgorithms from "@/components/Lessons/BasicAlgorithms";
import CommentDialog from '@/components/CommentDialog';

// Custom hook quản lý state và logic bình luận
function useComments(currentLesson: any) {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentUID, setCurrentUID] = useState(null);
  const [likedComments, setLikedComments] = useState<any>({});

  useEffect(() => {
    if (!currentLesson) return;
    setLoading(true);
    setComments([]);
    fetch(`/api/resources/lectures/${currentLesson.Slug}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments || []);
        if (data.likedComments) setLikedComments(data.likedComments);
      })
      .catch(() => setComments([]))
      .finally(() => setLoading(false));
  }, [currentLesson?.Slug]);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.user?.UID) setCurrentUID(data.user.UID);
      });
  }, []);

  // Like/unlike logic
  const handleLike = async (coid: any) => {
    if (!currentUID) return;
    const alreadyLiked = likedComments[coid];
    // Optimistic update
    setLikedComments((prev: any) => ({ ...prev, [coid]: !alreadyLiked }));
    setComments((prev) => prev.map((c: any) => c.CoID === coid ? { ...c, likeCount: (c.likeCount || 0) + (alreadyLiked ? -1 : 1) } : c));
    try {
      const res = await fetch(`/api/comments/${coid}/like`, { method: "POST" });
      // Optionally, re-fetch or handle error
    } catch {}
  };

  return { comments, setComments, loading, error, setError, currentUID, likedComments, handleLike };
}

const LessonPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [chapters, setChapters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [allLessons, setAllLessons] = useState<any[]>([]);
  const [commentInput, setCommentInput] = useState("");
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState("");
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");
  const [openCommentsDialog, setOpenCommentsDialog] = useState(false);

  useEffect(() => {
    const fetchChapters = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/resources/lectures/list");
        const data = await res.json();
        if (data.chapters) {
          setChapters(data.chapters);
          const flat = data.chapters.flatMap((chapter: any) =>
            chapter.lesson.map((lesson: any) => ({
              ...lesson,
              chapterName: chapter.Name,
              chapterIndex: chapter.ChapterIndex,
            }))
          );
          setAllLessons(flat);
        }
      } catch (e) {
        setChapters([]);
        setAllLessons([]);
      }
      setLoading(false);
    };
    fetchChapters();
  }, []);

  const currentLesson = allLessons.find((lesson: any) => lesson.Slug === slug);
  const currentIndex = allLessons.findIndex((lesson: any) => lesson.Slug === slug);
  const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  // Bình luận hook
  const {
    comments,
    setComments,
    loading: loadingComments,
    currentUID,
    likedComments,
    handleLike,
  } = useComments(currentLesson);

  // Gửi bình luận mới
  const handlePostComment = async (e: any) => {
    e.preventDefault();
    if (!commentInput.trim() || !currentLesson) return;
    setPosting(true);
    setPostError("");
    setNotLoggedIn(false);
    try {
      const res = await fetch(`/api/resources/lectures/${currentLesson.Slug}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Content: commentInput }),
      });
      const data = await res.json();
      if (res.status === 401) {
        setNotLoggedIn(true);
        setPostError("Bạn cần đăng nhập để bình luận");
      } else if (res.ok && data.comment) {
        setComments((prev: any[]) => [...prev, data.comment]);
        setCommentInput("");
      } else {
        setPostError(data.error || "Gửi bình luận thất bại");
      }
    } catch (err) {
      setPostError("Gửi bình luận thất bại");
    }
    setPosting(false);
  };

  // Chỉnh sửa bình luận
  const handleEditComment = async (CoID: any) => {
    if (!editInput.trim()) return;
    try {
      const res = await fetch(`/api/comments/${CoID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Content: editInput }),
      });
      const data = await res.json();
      if (res.ok && data.comment) {
        setComments((prev: any[]) => prev.map((c: any) => (c.CoID === CoID ? { ...c, Content: data.comment.Content } : c)));
        setEditingId(null);
      }
    } catch {}
  };

  // Xóa bình luận
  const handleDeleteComment = async (CoID: any) => {
    try {
      const res = await fetch(`/api/comments/${CoID}/delete`, { method: "DELETE" });
      if (res.ok) {
        setComments((prev: any[]) => prev.filter((c: any) => c.CoID !== CoID));
      }
    } catch {}
  };

  const totalComments = comments.length;

  const handleLessonClick = (slug: any) => {
    router.push(`/resources/lectures/${slug}`);
  };

  const renderContent = () => {
    switch (slug) {
      case "overview-of-c-programming":
        return <OverviewOfCProgramming />;
      case "basic-structure":
        return <BasicStructure />;
      case "compile-and-run":
        return <CompileAndRun />;
      case "basic-input-output":
        return <BasicInputOutput />;
      case "basic-data-types":
        return <BasicDataTypes />;
      case "variables-and-constants":
        return <VariablesAndConstants />;
      case "operators-in-c":
        return <OperatorsInC />;
      case "if-statements":
        return <IfStatements />;
      case "switch-case":
        return <SwitchCase />;
      case "for-loop":
        return <ForLoop />;
      case "while-do-while":
        return <WhileDoWhile />;
      case "break-continue":
        return <BreakContinue />;
      case "1d-arrays":
        return <OneDimensionalArrays />;
      case "2d-arrays":
        return <TwoDimensionalArrays />;
      case "character-strings":
        return <CharacterStrings />;
      case "string-functions":
        return <StringHandlingFunctions />;
      case "function-declaration":
        return <FunctionDeclaration />;
      case "pass-by-value-reference":
        return <PassByValueAndReference />;
      case "recursion":
        return <Recursion />;
      case "pointer-basics":
        return <PointerBasics />;
      case "pointers-arrays":
        return <PointerArrays />;
      case "pointers-functions":
        return <PointerFunctions />;
      case "pointer-to-pointer":
        return <PointerToPointer />;
      case "memory-allocation":
        return <MemoryAllocation />;
      case "struct-typedef":
        return <StructAndTypedef />;
      case "array-nested-structs":
        return <ArrayNestedStructs />;
      case "file-open-close":
        return <FileOpenClose />;
      case "text-files":
        return <TextFiles />;
      case "binary-files":
        return <BinaryFiles />;
      case "debug-error-handling":
        return <DebugErrorHandling />;
      case "optimization-clean-code":
        return <OptimizationCleanCode />;
      case "basic-algorithms":
        return <BasicAlgorithms />;
      default:
        return (
          <Typography variant="h6" color="error">
            Lesson not found.
          </Typography>
        );
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px" }}>
      <NavBar />
      {/* Sidebar Left */}
      <Paper
        elevation={3}
        sx={{
          width: 280,
          minWidth: 220,
          bgcolor: "#f5f6fa",
          borderRadius: 3,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          p: 2,
          position: "fixed",
          top: 70,
          left: 0,
          height: "calc(100vh - 75px)",
          m: 0,
          overflowY: "auto",
          zIndex: 1100,
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#753a88" }}>
          Mục lục bài giảng
        </Typography>
        {loading ? (
          <Typography variant="body2">Đang tải...</Typography>
        ) : (
          chapters.map((chapter: any) => (
            <Box key={chapter.CID}>
              <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 2, mb: 1, color: "#cc2b5e" }}>
                Chương {chapter.ChapterIndex}: {chapter.Name}
              </Typography>
              <List dense disablePadding>
                {chapter.lesson.map((lesson: any) => (
                  <ListItemButton
                    key={lesson.LID}
                    onClick={() => handleLessonClick(lesson.Slug)}
                    selected={slug === lesson.Slug}
                    sx={{
                      pl: 2,
                      borderRadius: 2,
                      mb: 0.5,
                      bgcolor: slug === lesson.Slug ? "linear-gradient(90deg, #cc2b5e22, #753a8822)" : "transparent",
                      color: slug === lesson.Slug ? "#cc2b5e" : "#333",
                      fontWeight: slug === lesson.Slug ? 700 : 500,
                      transition: "all 0.2s",
                      "&:hover": {
                        bgcolor: "#f3e8ff",
                        color: "#753a88",
                      },
                    }}
                  >
                    <ListItemText primary={`${chapter.ChapterIndex}.${lesson.LessonIndex} ${lesson.Title}`} />
                  </ListItemButton>
                ))}
              </List>
              <Divider sx={{ my: 2 }} />
            </Box>
          ))
        )}
      </Paper>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, mx: 2, display: "flex", flexDirection: "column", ml: "280px", mr: "280px" }}>
        {/* Main Lesson Content */}
        <Paper
          elevation={3}
          sx={{
            borderRadius: 4,
            p: { xs: 2, md: 5 },
            bgcolor: "#f5f6fa",
            boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
            minHeight: 400,
            mb: 1,
            mt: 0,
            width: 900,
            mx: "auto",
          }}
        >
          {/* Điều hướng và tiêu đề bài học */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
              gap: 2,
              flexWrap: "wrap",
              position: "sticky",
              top: 70,
              zIndex: 2,
              bgcolor: "#f5f6fa",
              py: 2,
            }}
          >
            <Button
              variant="outlined"
              startIcon={<ArrowBackIosNewIcon />}
              disabled={!previousLesson}
              onClick={() => previousLesson && router.push(`/resources/lectures/${previousLesson.Slug}`)}
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                px: 2,
                minWidth: 120,
                bgcolor: !previousLesson ? "#f3f3f3" : "#fff",
              }}
            >
              Bài trước
            </Button>
            <Typography variant="h6" fontWeight="bold" color="#753a88" sx={{ textAlign: "center", flex: 1 }}>
              {currentLesson ? currentLesson.Title : "Bài học"}
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIosIcon />}
              disabled={!nextLesson}
              onClick={() => nextLesson && router.push(`/resources/lectures/${nextLesson.Slug}`)}
              sx={{
                borderRadius: 2,
                fontWeight: 600,
                px: 2,
                minWidth: 120,
                bgcolor: !nextLesson ? "#f3f3f3" : "#fff",
              }}
            >
              Bài tiếp
            </Button>
          </Box>
          {renderContent()}
        </Paper>
      </Box>

      {/* Sidebar Right: Bình luận */}
      <Paper
        elevation={3}
        sx={{
          width: 280,
          minWidth: 220,
          bgcolor: "#f5f6fa",
          borderRadius: 3,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          p: 3,
          position: "fixed",
          top: 70,
          right: 0,
          m: 0,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          zIndex: 1100,
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#753a88" }}>
          Bình luận bài học
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Có {totalComments} bình luận
        </Typography>
        <Button variant="outlined" onClick={() => setOpenCommentsDialog(true)}>
          Xem tất cả bình luận
        </Button>
      </Paper>

      {/* Dialog hiển thị tất cả bình luận */}
      <CommentDialog
        open={openCommentsDialog}
        onClose={() => setOpenCommentsDialog(false)}
        comments={comments}
        currentUID={currentUID}
        loading={loadingComments}
        currentLesson={currentLesson}
        commentInput={commentInput}
        setCommentInput={setCommentInput}
        posting={posting}
        notLoggedIn={notLoggedIn}
        postError={postError}
        handlePostComment={handlePostComment}
        editingId={editingId}
        editInput={editInput}
        setEditInput={setEditInput}
        handleEditComment={handleEditComment}
        setEditingId={setEditingId}
        handleDeleteComment={handleDeleteComment}
        setComments={setComments}
        likedComments={likedComments}
        handleLike={handleLike}
      />
    </Box>
  );
};

export default LessonPage;
