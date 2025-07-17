"use client";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import {
  Box,
  Button,
  Tabs,
  Tab,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import CodeEditor from "@/components/ExercisePage/CodeEditor";
import ExerciseDescription from "@/components/ExercisePage/ExerciseDescription";
import ExerciseHelp from "@/components/ExercisePage/ExerciseHelp";
import SubmissionHistory from "@/components/ExercisePage/SubmissionHistory";
import CommentSection from "@/components/ExercisePage/CommentSection";
import TestcaseResults from "@/components/ExercisePage/TestcaseResults";
import ReviewSubmission from "@/components/ExercisePage/ReviewSubmission";
import ExerciseHeader from "@/components/ExercisePage/ExerciseHeader";

export default function ExerciseDetailPage() {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const source = searchParams.get('source'); // 'all', 'list', 'studyplan'
  const sourceId = searchParams.get('id'); // LID for list, SPIID for studyplan
  const [exercise, setExercise] = useState<any>(null);
  const [testcases, setTestcases] = useState<any[]>([]);
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<any[] | null>(null);
  const [submissionResult, setSubmissionResult] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [leftTab, setLeftTab] = useState(0);
  const [rightTab, setRightTab] = useState(0); // 0: Code, 1: Xem lại
  const [reviewSubmission, setReviewSubmission] = useState<any | null>(null);
  const [reviewResults, setReviewResults] = useState<any[] | null>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);
  // ======================
  // State cho hệ thống bình luận
  // ======================
  const [comments, setComments] = useState<any[]>([]); // Danh sách tất cả bình luận (bao gồm cả reply)
  const [commentInput, setCommentInput] = useState<string>(""); // Nội dung nhập bình luận hoặc phản hồi
  const [posting, setPosting] = useState<boolean>(false); // Trạng thái gửi bình luận
  const [postError, setPostError] = useState<string>(""); // Lỗi khi gửi bình luận
  const [notLoggedIn, setNotLoggedIn] = useState<boolean>(false); // Trạng thái chưa đăng nhập
  const [editingId, setEditingId] = useState<number | null>(null); // ID bình luận đang chỉnh sửa
  const [editInput, setEditInput] = useState<string>(""); // Nội dung chỉnh sửa bình luận
  const [deleteDialogId, setDeleteDialogId] = useState<number | null>(null); // ID bình luận đang xác nhận xóa
  const [sortType, setSortType] = useState<"newest" | "mostLiked">("newest"); // Kiểu sắp xếp bình luận
  const [currentUID, setCurrentUID] = useState<string | null>(null); // UID user hiện tại
  const [likedComments, setLikedComments] = useState<{ [coid: number]: boolean }>({}); // Map các bình luận đã like

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`/api/exercise/${slug}`);
        if (!res.ok) throw new Error("Không tìm thấy bài tập");
        const data = await res.json();
        setExercise(data.exercise);
        // Lấy submission gần nhất của user và toàn bộ lịch sử
        const subRes = await fetch(`/api/submissions/by-exercise/${data.exercise.EID}`);
        let latestSubmission = null;
        let latestResults = null;
        if (subRes.ok) {
          const subData = await subRes.json();
          setSubmissions(subData.submissions || []);
          if (subData.submissions && subData.submissions.length > 0) {
            latestSubmission = subData.submissions[0];
            setCode(latestSubmission.Code || data.exercise.template || "");
            // Lấy testcase result của submission gần nhất
            const tcrRes = await fetch(`/api/testcaseresult/${latestSubmission.SID}`);
            if (tcrRes.ok) {
              const tcrData = await tcrRes.json();
              latestResults = tcrData.testcaseresults || [];
              setResults(latestResults);
            } else {
              setResults(null);
            }
          } else {
            setCode(data.exercise.template || "");
            setResults(null);
          }
        } else {
          setCode(data.exercise.template || "");
          setResults(null);
        }
        // Lấy testcases
        const tcRes = await fetch(`/api/testcases/by-exercise/${data.exercise.EID}`);
        const tcData = await tcRes.json();
        setTestcases(tcData.testcases || []);
        // Lấy comments của bài tập
        const commentRes = await fetch(`/api/exercise/${slug}/comments`);
        if (commentRes.ok) {
          const commentData = await commentRes.json();
          setComments(commentData.comments || []);
          if (commentData.likedComments) setLikedComments(commentData.likedComments);
        }
        // Lấy thông tin user hiện tại
        const userRes = await fetch("/api/me");
        if (userRes.ok) {
          const userData = await userRes.json();
          if (userData.user?.UID) setCurrentUID(userData.user.UID);
        }
      } catch (e: any) {
        setError(e.message || "Lỗi tải dữ liệu");
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchData();
  }, [slug]);

  // Gửi bình luận mới
  const handlePostComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!commentInput.trim() || !exercise) return;
    
    setPosting(true);
    setPostError("");
    setNotLoggedIn(false);
    try {
      const res = await fetch(`/api/exercise/${exercise.Slug}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Content: commentInput }),
      });
      const data = await res.json();
      if (res.status === 401) {
        setNotLoggedIn(true);
        setPostError("Bạn cần đăng nhập để bình luận");
      } else if (res.ok && data.comment) {
        setComments((prev) => [data.comment, ...prev]);
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
  const handleEditComment = async (CoID: number) => {
    if (!editInput.trim()) return;
    try {
      const res = await fetch(`/api/comments/${CoID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Content: editInput }),
      });
      const data = await res.json();
      if (res.ok && data.comment) {
        setComments((prev) => prev.map((c) => (c.CoID === CoID ? { ...c, Content: data.comment.Content } : c)));
        setEditingId(null);
      }
    } catch {}
  };

  // Xóa bình luận
  const handleDeleteComment = async (CoID: number) => {
    try {
      const res = await fetch(`/api/comments/${CoID}/delete`, { method: "DELETE" });
      
      if (res.ok) {
        // Xóa bình luận khỏi state
        setComments((prev) => prev.filter((c) => c.CoID !== CoID));
        
        // Xóa khỏi likedComments state
        setLikedComments((prev) => {
          const newLikedComments = { ...prev };
          delete newLikedComments[CoID];
          return newLikedComments;
        });
      } else {
        const errorData = await res.json();
        alert("Không thể xóa bình luận: " + (errorData.error || "Lỗi không xác định"));
      }
      setDeleteDialogId(null);
    } catch (error) {
      alert("Lỗi khi xóa bình luận");
    }
  };

  // Like/unlike comment
  const handleLike = async (coid: number) => {
    if (!currentUID) return;
    const alreadyLiked = likedComments[coid];
    setLikedComments((prev) => ({ ...prev, [coid]: !alreadyLiked }));
    setComments((prev) => prev.map((c) => (c.CoID === coid ? { ...c, likeCount: (c.likeCount || 0) + (alreadyLiked ? -1 : 1) } : c)));
    try {
      const res = await fetch(`/api/comments/${coid}/like`, { method: "POST" });
    } catch {}
  };

  // Hàm xem lại submission
  const handleViewHistory = async (submission: any) => {
    setReviewSubmission(submission);
    setRightTab(1);
    // Lấy testcase result của submission này
    const tcrRes = await fetch(`/api/testcaseresult/${submission.SID}`);
    if (tcrRes.ok) {
      const tcrData = await tcrRes.json();
      setReviewResults(tcrData.testcaseresults || []);
    } else {
      setReviewResults([]);
    }
  };

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  
  // Kiểm tra nếu bài tập đã bị xóa
  if (exercise.isDeleted) {
    return (
      <Box sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        minHeight: "100vh",
        textAlign: "center",
        px: 3
      }}>
        <Box sx={{ 
          maxWidth: 500, 
          p: 4, 
          borderRadius: 3, 
          bgcolor: "#fff", 
          boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
          border: "1px solid #e2e8f0"
        }}>
          <Alert severity="error" sx={{ mb: 3, fontSize: "1.1rem" }}>
            Bài tập đã bị xóa
          </Alert>
          <Typography variant="h6" sx={{ mb: 2, color: "#374151" }}>
            Bài tập "{exercise.Name}" không còn khả dụng
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#6b7280" }}>
            Bài tập này đã bị xóa khỏi hệ thống. Vui lòng quay lại trang danh sách bài tập để tìm bài tập khác.
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => window.location.href = "/exercises"}
            sx={{ 
              px: 3, 
              py: 1.5, 
              borderRadius: 2,
              fontWeight: 600
            }}
          >
            Quay lại danh sách bài tập
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <ExerciseHeader
        exerciseTitle={exercise.Title}
        currentExerciseSlug={exercise.Slug}
        topicId={exercise.TpID}
        code={code}
        setCode={setCode}
        exercise={exercise}
        setExercise={setExercise}
        setResults={setResults}
        setSubmissionResult={setSubmissionResult}
        setSubmissions={setSubmissions}
        source={source}
        sourceId={sourceId}
      />
      <Box sx={{ display: "flex", height: "calc(100vh - 64px)", py: 1, px: 2, gap: 1 }}>
        {/* Left: Tabs panel */}
        <ResizableBox
          width={420}
          height={Infinity}
          axis="x"
          resizeHandles={["e"]}
          minConstraints={[260, Infinity]}
          maxConstraints={[600, Infinity]}
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#f8fafc",
            borderRadius: 16,
            padding: 0,
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            overflowY: "auto",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          {/* Custom drag handle for left panel */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 12,
              height: "100%",
              background: "#f8fafc",
              borderRadius: 6,
              cursor: "col-resize",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div style={{ width: 4, height: 40, background: "#90caf9", borderRadius: 2 }} />
          </div>
          <Tabs
            value={leftTab}
            onChange={(_, v) => setLeftTab(v)}
            variant="fullWidth"
            sx={{
              minHeight: 36,
              background: "#f8fafc",
              borderRadius: 2,
              ".MuiTabs-indicator": { display: "none" },
            }}
          >
            <Tab
              label="Mô tả"
              sx={{
                textTransform: "capitalize",
                minHeight: 36,
                fontWeight: leftTab === 0 ? 700 : 500,
                color: leftTab === 0 ? "#232b38" : "#6b7280",
                borderRadius: 2,
                transition: "all 0.2s",
              }}
            />
            <Tab
              label="Trợ giúp"
              sx={{
                textTransform: "capitalize",
                minHeight: 36,
                fontWeight: leftTab === 1 ? 700 : 500,
                color: leftTab === 1 ? "#232b38" : "#6b7280",
                borderRadius: 2,
                transition: "all 0.2s",
              }}
            />
            <Tab
              label="Lịch sử"
              sx={{
                textTransform: "capitalize",
                minHeight: 36,
                fontWeight: leftTab === 2 ? 700 : 500,
                color: leftTab === 2 ? "#232b38" : "#6b7280",
                borderRadius: 2,
                transition: "all 0.2s",
              }}
            />
            <Tab
              label="Bình luận"
              sx={{
                textTransform: "capitalize",
                minHeight: 36,
                fontWeight: leftTab === 3 ? 700 : 500,
                color: leftTab === 3 ? "#232b38" : "#6b7280",
                borderRadius: 2,
                transition: "all 0.2s",
              }}
            />
          </Tabs>
          <Box sx={{ flex: 1, p: 3, overflow: "auto" }}>
            {leftTab === 0 && <ExerciseDescription exercise={exercise} testcases={testcases} onExerciseUpdate={setExercise} />}
            {leftTab === 1 && <ExerciseHelp />}
            {leftTab === 2 && <SubmissionHistory submissions={submissions} onViewHistory={handleViewHistory} />}
            {leftTab === 3 && (
              <CommentSection
                comments={comments}
                sortType={sortType}
                setSortType={setSortType}
                commentInput={commentInput}
                setCommentInput={setCommentInput}
                posting={posting}
                postError={postError}
                notLoggedIn={notLoggedIn}
                editingId={editingId}
                editInput={editInput}
                setEditInput={setEditInput}
                deleteDialogId={deleteDialogId}
                currentUID={currentUID}
                likedComments={likedComments}
                onPostComment={handlePostComment}
                onEditComment={handleEditComment}
                onDeleteComment={handleDeleteComment}
                onLike={handleLike}
                onSetEditingId={setEditingId}
                onSetDeleteDialogId={setDeleteDialogId}
              />
            )}
          </Box>
        </ResizableBox>
        {/* Right: Code editor + Testcase results + Review tab */}
        <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
          <Tabs
            value={rightTab}
            onChange={(_, v) => setRightTab(v)}
            sx={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              minHeight: 36,
              background: "#f8fafc",
              ".MuiTabs-indicator": { display: "none" },
            }}
          >
            <Tab
              label="Code"
              sx={{
                textTransform: "capitalize",
                minHeight: 36,
                fontWeight: rightTab === 0 ? 700 : 500,
                color: rightTab === 0 ? "#232b38" : "#6b7280",
                borderRadius: 2,
                mx: 0.5,
                transition: "all 0.2s",
              }}
            />
            {reviewSubmission && (
              <Tab
                label={
                  <Box sx={{ display: "flex", alignItems: "center", textTransform: "capitalize" }}>
                    Xem lại
                    <Box
                      onClick={(e) => {
                        e.stopPropagation();
                        setReviewSubmission(null);
                        setReviewResults(null);
                        setRightTab(0);
                      }}
                      sx={{ ml: 1, cursor: "pointer", fontWeight: 700 }}
                    >
                      ×
                    </Box>
                  </Box>
                }
                sx={{
                  textTransform: "capitalize",
                  minHeight: 36,
                  fontWeight: rightTab === 1 ? 700 : 500,
                  bgcolor: rightTab === 1 ? "#e3e9f7" : "transparent",
                  color: rightTab === 1 ? "#232b38" : "#6b7280",
                  borderRadius: 2,
                  mx: 0.5,
                  transition: "all 0.2s",
                }}
              />
            )}
          </Tabs>
          {rightTab === 0 && (
            <ResizableBox
              width={Infinity}
              height={340}
              axis="y"
              resizeHandles={["s"]}
              minConstraints={[Infinity, 180]}
              maxConstraints={[Infinity, 600]}
              style={{
                background: "#fff",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                marginBottom: 8,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Custom drag handle for code editor */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: 12,
                  borderRadius: 6,
                  cursor: "row-resize",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                }}
              >
                <div style={{ height: 4, width: 40, background: "#90caf9", borderRadius: 2 }} />
              </div>
              <Box sx={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
                <CodeEditor code={code} setCode={setCode} />
              </Box>
            </ResizableBox>
          )}
          {rightTab === 0 && <TestcaseResults results={results} testcases={testcases} />}
          {rightTab === 1 && <ReviewSubmission reviewSubmission={reviewSubmission} reviewResults={reviewResults} testcases={testcases} />}
        </Box>
      </Box>
    </Box>
  );
}
