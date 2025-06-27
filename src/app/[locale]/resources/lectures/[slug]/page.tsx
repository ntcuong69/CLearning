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
  Avatar,
  IconButton,
  Tooltip,
  TextField,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
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
import { formatDistanceToNow } from "date-fns";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

// Định nghĩa type cho dữ liệu
interface UserInfo {
  UID: string;
  Username: string;
}
interface CommentData {
  CoID: number;
  UID: string;
  LID: number;
  Content: string;
  ParentID?: number | null;
  CreatedAt?: string;
  user?: UserInfo;
  likeCount?: number;
}
interface LessonData {
  LID: number;
  CID: number;
  LessonIndex: number;
  Title: string;
  Slug: string;
  chapterName?: string;
  chapterIndex?: number;
}
interface ChapterData {
  CID: number;
  ChapterIndex: number;
  Name: string;
  lesson: LessonData[];
}

// 1. Custom hook quản lý state và logic bình luận
function useComments(currentLesson: LessonData | undefined) {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentUID, setCurrentUID] = useState<string | null>(null);
  const [likedComments, setLikedComments] = useState<{ [coid: number]: boolean }>({});

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
  const handleLike = async (coid: number) => {
    if (!currentUID) return;
    const alreadyLiked = likedComments[coid];
    // Optimistic update
    setLikedComments((prev) => ({ ...prev, [coid]: !alreadyLiked }));
    setComments((prev) => prev.map(c => c.CoID === coid ? { ...c, likeCount: (c.likeCount || 0) + (alreadyLiked ? -1 : 1) } : c));
    try {
      const res = await fetch(`/api/comments/${coid}/like`, { method: "POST" });
      // Optionally, re-fetch or handle error
    } catch {}
  };

  return { comments, setComments, loading, error, setError, currentUID, likedComments, handleLike };
}

// 2. Form nhập bình luận
interface CommentFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  setValue: (v: string) => void;
  disabled: boolean;
  loading: boolean;
  error: string;
}
function CommentForm({ onSubmit, value, setValue, disabled, loading, error }: CommentFormProps) {
  return (
    <Box component="form" onSubmit={onSubmit} sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 1 }}>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={disabled ? "Bạn cần đăng nhập để bình luận" : "Nhập bình luận..."}
        disabled={disabled || loading}
        rows={2}
        style={{
          resize: "vertical",
          borderRadius: 8,
          border: "1px solid #ccc",
          padding: 8,
          fontFamily: "inherit",
          fontSize: 15,
          background: disabled ? "#f3f3f3" : "#fff",
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={disabled || loading || !value.trim()}
        sx={{ alignSelf: "flex-end", minWidth: 100 }}
      >
        {loading ? "Đang gửi..." : "Bình luận"}
      </Button>
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
    </Box>
  );
}

// 3. Item bình luận (cả cha và con)
interface CommentItemProps {
  comment: CommentData;
  currentUID: string | null;
  onEdit: () => void;
  onDelete: () => void;
  onReply: () => void;
  isEditing: boolean;
  editValue: string;
  setEditValue: (v: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  isReplying: boolean;
  replyValue: string;
  setReplyValue: (v: string) => void;
  onSendReply: () => void;
  onCancelReply: () => void;
  children?: React.ReactNode;
}
function CommentItem({
  comment,
  currentUID,
  onEdit,
  onDelete,
  onReply,
  isEditing,
  editValue,
  setEditValue,
  onSaveEdit,
  onCancelEdit,
  isReplying,
  replyValue,
  setReplyValue,
  onSendReply,
  onCancelReply,
  children,
  likedComments,
  handleLike,
}: CommentItemProps & { likedComments?: { [coid: number]: boolean }, handleLike?: (coid: number) => void }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOwner = currentUID && comment.UID === currentUID;
  return (
    <Box sx={{ mb: 2, p: 1.5, borderRadius: 2, bgcolor: "#fff", boxShadow: "0 1px 4px #0001" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar sx={{ width: 32, height: 32, bgcolor: "#753a88" }}>{comment.user?.Username?.[0]?.toUpperCase() || "U"}</Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" fontWeight={600} color="#753a88">
            {comment.user?.Username || "Người dùng ẩn danh"}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {comment.CreatedAt ? formatDistanceToNow(new Date(comment.CreatedAt), { addSuffix: true, locale: undefined }) : ""}
          </Typography>
        </Box>
        {isOwner && (
          <>
            <IconButton size="small" onClick={(e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget)}>
              <MoreVertIcon fontSize="small" />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
              <MenuItem
                onClick={() => {
                  onEdit();
                  setAnchorEl(null);
                }}
              >
                Chỉnh sửa
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onDelete();
                  setAnchorEl(null);
                }}
              >
                Xóa
              </MenuItem>
            </Menu>
          </>
        )}
      </Box>
      {isEditing ? (
        <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
          <TextField value={editValue} onChange={(e) => setEditValue(e.target.value)} size="small" fullWidth autoFocus />
          <Button onClick={onSaveEdit} variant="contained" size="small">
            Lưu
          </Button>
          <Button onClick={onCancelEdit} size="small">
            Hủy
          </Button>
        </Box>
      ) : (
        <Typography variant="body2" sx={{ mt: 1, mb: 0.5 }}>
          {comment.Content}
        </Typography>
      )}
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 0.5 }}>
        <Tooltip title={likedComments && handleLike ? (likedComments[comment.CoID] ? "Bỏ thích" : "Thích") : "Thích"}>
          <IconButton size="small" onClick={handleLike ? () => handleLike(comment.CoID) : undefined} color={likedComments && likedComments[comment.CoID] ? "primary" : "default"}>
            <Typography variant="caption" sx={{ mr: 0.5 }}>{comment.likeCount || 0}</Typography>
            <ThumbUpAltOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Phản hồi">
          <IconButton size="small" onClick={onReply}>
            <ReplyOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      {isReplying && (
        <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
          <TextField value={replyValue} onChange={(e) => setReplyValue(e.target.value)} size="small" fullWidth placeholder="Nhập phản hồi..." />
          <Button onClick={onSendReply} variant="contained" size="small" disabled={!replyValue.trim()}>
            Gửi
          </Button>
          <Button onClick={onCancelReply} size="small">
            Hủy
          </Button>
        </Box>
      )}
      {children}
    </Box>
  );
}

// Helper: Lấy tất cả phản hồi (cấp 2 và cấp 3+) cho một bình luận gốc
function getAllReplies(comments: CommentData[], parentId: number): CommentData[] {
  // Lấy phản hồi cấp 2
  const level2 = comments.filter((c) => c.ParentID === parentId);
  // Lấy phản hồi cấp 3+ (ParentID là CoID của bất kỳ bình luận cấp 2)
  const level3plus = comments.filter((c) => level2.some((l2) => c.ParentID === l2.CoID));
  // Gộp lại, sort theo CreatedAt nếu muốn
  return [...level2, ...level3plus];
}

// Helper: Lấy tất cả CoID của comment con (mọi cấp)
function getAllChildIds(comments: CommentData[], parentId: number): number[] {
  const direct = comments.filter((c) => c.ParentID === parentId).map((c) => c.CoID);
  let all = [...direct];
  for (const id of direct) {
    all = all.concat(getAllChildIds(comments, id));
  }
  return all;
}

// 4. Danh sách bình luận (đệ quy cho phản hồi)
interface CommentListProps {
  comments: CommentData[];
  currentUID: string | null;
  onEdit: (id: number, content: string) => void;
  onDelete: (id: number) => void;
  onReply: (id: number) => void;
  editingId: number | null;
  editValue: string;
  setEditValue: (v: string) => void;
  onSaveEdit: (id: number) => void;
  onCancelEdit: () => void;
  replyingTo: number | null;
  replyValue: string;
  setReplyValue: (v: string) => void;
  onSendReply: (id: number) => void;
  onCancelReply: () => void;
  likedComments?: { [coid: number]: boolean };
  handleLike?: (coid: number) => void;
}
function CommentList({
  comments,
  currentUID,
  onEdit,
  onDelete,
  onReply,
  editingId,
  editValue,
  setEditValue,
  onSaveEdit,
  onCancelEdit,
  replyingTo,
  replyValue,
  setReplyValue,
  onSendReply,
  onCancelReply,
  likedComments,
  handleLike,
}: CommentListProps) {
  return (
    <List sx={{ p: 0 }}>
      {comments
        .filter((c: CommentData) => !c.ParentID)
        .map((c: CommentData) => (
          <CommentItem
            key={c.CoID}
            comment={c}
            currentUID={currentUID}
            onEdit={() => onEdit(c.CoID, c.Content)}
            onDelete={() => onDelete(c.CoID)}
            onReply={() => onReply(c.CoID)}
            isEditing={editingId === c.CoID}
            editValue={editValue}
            setEditValue={(v) => setEditValue(v)}
            onSaveEdit={() => onSaveEdit(c.CoID)}
            onCancelEdit={onCancelEdit}
            isReplying={replyingTo === c.CoID}
            replyValue={replyValue}
            setReplyValue={(v) => setReplyValue(v)}
            onSendReply={() => onSendReply(c.CoID)}
            onCancelReply={onCancelReply}
            likedComments={likedComments}
            handleLike={handleLike}
          >
            {/* Phản hồi (cấp 2 và cấp 3+) */}
            {getAllReplies(comments, c.CoID).length > 0 && (
              <Box sx={{ mt: 1, pl: 3, borderLeft: "2px solid #eee" }}>
                {getAllReplies(comments, c.CoID).map((r: CommentData) => (
                  <CommentItem
                    key={r.CoID}
                    comment={r}
                    currentUID={currentUID}
                    onEdit={() => onEdit(r.CoID, r.Content)}
                    onDelete={() => onDelete(r.CoID)}
                    onReply={() => onReply(r.CoID)}
                    isEditing={editingId === r.CoID}
                    editValue={editValue}
                    setEditValue={(v) => setEditValue(v)}
                    onSaveEdit={() => onSaveEdit(r.CoID)}
                    onCancelEdit={onCancelEdit}
                    isReplying={replyingTo === r.CoID}
                    replyValue={replyValue}
                    setReplyValue={(v) => setReplyValue(v)}
                    onSendReply={() => onSendReply(r.CoID)}
                    onCancelReply={onCancelReply}
                    likedComments={likedComments}
                    handleLike={handleLike}
                  />
                ))}
              </Box>
            )}
          </CommentItem>
        ))}
    </List>
  );
}

// 5. Dialog hiển thị tất cả bình luận
interface CommentDialogProps {
  open: boolean;
  onClose: () => void;
  comments: CommentData[];
  currentUID: string | null;
  loading: boolean;
  currentLesson: LessonData | undefined;
  commentInput: string;
  setCommentInput: (v: string) => void;
  posting: boolean;
  notLoggedIn: boolean;
  postError: string;
  handlePostComment: (e: React.FormEvent<HTMLFormElement>) => void;
  editingId: number | null;
  editInput: string;
  setEditInput: (v: string) => void;
  handleEditComment: (id: number) => void;
  setEditingId: (id: number | null) => void;
  replyingTo: number | null;
  replyInput: string;
  setReplyInput: (v: string) => void;
  handleReply: (id: number) => void;
  setReplyingTo: (id: number | null) => void;
  handleDeleteComment: (id: number) => void;
  deleteDialogId: number | null;
  setDeleteDialogId: (id: number | null) => void;
  likedComments: { [coid: number]: boolean };
  handleLike: (coid: number) => void;
}
function CommentDialog(props: CommentDialogProps) {
  const {
    open,
    onClose,
    comments,
    currentUID,
    loading,
    currentLesson,
    commentInput,
    setCommentInput,
    posting,
    notLoggedIn,
    postError,
    handlePostComment,
    editingId,
    editInput,
    setEditInput,
    handleEditComment,
    setEditingId,
    replyingTo,
    replyInput,
    setReplyInput,
    handleReply,
    setReplyingTo,
    handleDeleteComment,
    deleteDialogId,
    setDeleteDialogId,
    likedComments,
    handleLike,
  } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      disableScrollLock={false}
      PaperProps={{
        sx: {
          bgcolor: '#fff',
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          p: 0,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: "bold",
          color: '#111',
          textAlign: 'center',
          fontSize: 24,
          letterSpacing: 0.5,
          borderBottom: '1px solid #eee',
          bgcolor: '#fff',
          py: 2,
        }}
      >
        Tất cả bình luận
      </DialogTitle>
      <DialogContent
        dividers={false}
        sx={{
          bgcolor: '#fafbfc',
          maxHeight: '80vh',
          minWidth: { xs: 320, sm: 600, md: 800 },
          p: { xs: 1, sm: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': { width: 6, background: '#f3f3f3' },
          '&::-webkit-scrollbar-thumb': { background: '#e0e0e0', borderRadius: 3 },
        }}
      >
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 3,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            p: { xs: 1.5, sm: 2 },
            mb: 2,
          }}
        >
          <CommentForm
            onSubmit={handlePostComment}
            value={commentInput}
            setValue={setCommentInput}
            disabled={notLoggedIn}
            loading={posting}
            error={postError}
          />
        </Box>
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 3,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            p: { xs: 1.5, sm: 2 },
            minHeight: 200,
            maxHeight: '55vh',
            overflowY: 'auto',
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': { width: 6, background: '#f3f3f3' },
            '&::-webkit-scrollbar-thumb': { background: '#e0e0e0', borderRadius: 3 },
          }}
        >
          {loading ? (
            <Typography variant="body2" color="#888" textAlign="center">Đang tải bình luận...</Typography>
          ) : !currentLesson ? (
            <Typography variant="body2" color="#888" textAlign="center">Chọn một bài học để xem bình luận.</Typography>
          ) : comments.length === 0 ? (
            <Typography variant="body2" color="#888" textAlign="center">Chưa có bình luận nào cho bài học này.</Typography>
          ) : (
            <CommentList
              comments={comments}
              currentUID={currentUID}
              onEdit={(id, content) => {
                setEditingId(id);
                setEditInput(content);
              }}
              onDelete={(id) => setDeleteDialogId(id)}
              onReply={(id) => setReplyingTo(replyingTo === id ? null : id)}
              editingId={editingId}
              editValue={editInput}
              setEditValue={(v) => setEditInput(v)}
              onSaveEdit={(id) => handleEditComment(id)}
              onCancelEdit={() => setEditingId(null)}
              replyingTo={replyingTo}
              replyValue={replyInput}
              setReplyValue={(v) => setReplyInput(v)}
              onSendReply={(id) => handleReply(id)}
              onCancelReply={() => setReplyingTo(null)}
              likedComments={likedComments}
              handleLike={handleLike}
            />
          )}
        </Box>
        {/* Dialog xác nhận xóa */}
        <Dialog
          open={!!deleteDialogId}
          onClose={() => setDeleteDialogId(null)}
          disableScrollLock={true}
          PaperProps={{
            sx: {
              bgcolor: '#fff',
              borderRadius: 3,
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
              p: 0,
            },
          }}
        >
          <DialogTitle sx={{ fontWeight: 700, color: '#111', textAlign: 'center', fontSize: 20, borderBottom: '1px solid #eee', bgcolor: '#fff', py: 2 }}>
            Bạn có chắc muốn xóa bình luận này?
          </DialogTitle>
          <DialogActions sx={{ bgcolor: '#fafbfc', borderBottomLeftRadius: 3, borderBottomRightRadius: 3, p: 2, justifyContent: 'center' }}>
            <Button onClick={() => setDeleteDialogId(null)} sx={{ color: '#111', borderColor: '#bbb' }} variant="outlined">Hủy</Button>
            <Button color="error" variant="contained" onClick={() => deleteDialogId && handleDeleteComment(deleteDialogId)} sx={{ ml: 2, fontWeight: 600 }}>
              Xóa
            </Button>
          </DialogActions>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}

const LessonPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [chapters, setChapters] = useState<ChapterData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [allLessons, setAllLessons] = useState<LessonData[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");
  const [posting, setPosting] = useState<boolean>(false);
  const [postError, setPostError] = useState<string>("");
  const [notLoggedIn, setNotLoggedIn] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editInput, setEditInput] = useState<string>("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyInput, setReplyInput] = useState<string>("");
  const [deleteDialogId, setDeleteDialogId] = useState<number | null>(null);
  const [openCommentsDialog, setOpenCommentsDialog] = useState<boolean>(false);

  useEffect(() => {
    const fetchChapters = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/resources/lectures/list");
        const data = await res.json();
        if (data.chapters) {
          setChapters(data.chapters);
          const flat = data.chapters.flatMap((chapter: ChapterData) =>
            chapter.lesson.map((lesson: LessonData) => ({
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

  const currentLesson = allLessons.find((lesson) => lesson.Slug === slug);
  const currentIndex = allLessons.findIndex((lesson) => lesson.Slug === slug);
  const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  // Bình luận hook
  const {
    comments,
    setComments,
    loading: loadingComments,
    error: commentsError,
    setError: setCommentsError,
    currentUID,
    likedComments,
    handleLike,
  } = useComments(currentLesson);

  // Gửi bình luận mới
  const handlePostComment = async (e: React.FormEvent<HTMLFormElement>) => {
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
        setComments((prev) => [...prev, data.comment]);
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

  // Gửi phản hồi
  const handleReply = async (parentId: number) => {
    if (!replyInput.trim() || !currentLesson) return;
    setPosting(true);
    setPostError("");
    try {
      const res = await fetch(`/api/resources/lectures/${currentLesson.Slug}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Content: replyInput, ParentID: parentId }),
      });
      const data = await res.json();
      if (res.ok && data.comment) {
        setComments((prev) => [...prev, data.comment]);
        setReplyInput("");
        setReplyingTo(null);
      } else {
        setPostError(data.error || "Gửi phản hồi thất bại");
      }
    } catch (err) {
      setPostError("Gửi phản hồi thất bại");
    }
    setPosting(false);
  };

  // Xóa bình luận
  const handleDeleteComment = async (CoID: number) => {
    try {
      // Lấy tất cả CoID cần xóa (bao gồm cả chính nó và các con)
      const allToDelete = [CoID, ...getAllChildIds(comments, CoID)];
      // Gọi API xóa like cho từng comment trước khi xóa comment
      await Promise.all(
        allToDelete.map(async (id) => {
          await fetch(`/api/comments/${id}/like`, { method: "DELETE" });
        })
      );
      // Xóa comment
      const res = await fetch(`/api/comments/${CoID}/delete`, { method: "DELETE" });
      if (res.ok) {
        setComments((prev) => prev.filter((c) => !allToDelete.includes(c.CoID)));
      }
      setDeleteDialogId(null);
    } catch {}
  };

  const totalComments = comments.length;

  const handleLessonClick = (slug: string) => {
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
          chapters.map((chapter) => (
            <Box key={chapter.CID}>
              <Typography variant="subtitle2" fontWeight="bold" sx={{ mt: 2, mb: 1, color: "#cc2b5e" }}>
                Chương {chapter.ChapterIndex}: {chapter.Name}
              </Typography>
              <List dense disablePadding>
                {chapter.lesson.map((lesson) => (
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
          // height: "calc(100vh - 75px)",
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
        {/* Hiển thị danh sách bình luận rút gọn ở sidebar phải */}
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
        replyingTo={replyingTo}
        replyInput={replyInput}
        setReplyInput={setReplyInput}
        handleReply={handleReply}
        setReplyingTo={setReplyingTo}
        handleDeleteComment={handleDeleteComment}
        deleteDialogId={deleteDialogId}
        setDeleteDialogId={setDeleteDialogId}
        likedComments={likedComments}
        handleLike={handleLike}
      />
    </Box>
  );
};

export default LessonPage;
