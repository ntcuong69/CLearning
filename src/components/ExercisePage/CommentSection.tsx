import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  List,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CommentItem from "./CommentItem";

interface CommentSectionProps {
  comments: any[];
  sortType: "newest" | "mostLiked";
  setSortType: (type: "newest" | "mostLiked") => void;
  commentInput: string;
  setCommentInput: (value: string) => void;
  posting: boolean;
  postError: string;
  notLoggedIn: boolean;
  editingId: number | null;
  editInput: string;
  setEditInput: (value: string) => void;
  deleteDialogId: number | null;
  currentUID: string | null;
  likedComments: { [coid: number]: boolean };
  onPostComment: (e: React.FormEvent<HTMLFormElement>) => void;
  onEditComment: (CoID: number) => void;
  onDeleteComment: (CoID: number) => void;
  onLike: (coid: number) => void;
  onSetEditingId: (id: number | null) => void;
  onSetDeleteDialogId: (id: number | null) => void;
}

export default function CommentSection({
  comments,
  sortType,
  setSortType,
  commentInput,
  setCommentInput,
  posting,
  postError,
  notLoggedIn,
  editingId,
  editInput,
  setEditInput,
  deleteDialogId,
  currentUID,
  likedComments,
  onPostComment,
  onEditComment,
  onDeleteComment,
  onLike,
  onSetEditingId,
  onSetDeleteDialogId,
}: CommentSectionProps) {
  // Sort bình luận cha (ParentID == null)
  const sortedComments = useMemo(() => {
    const topLevel = comments.filter((c) => !c.ParentID);
    if (sortType === "mostLiked") {
      return [
        ...topLevel.sort((a, b) => {
          const likeA = a.likeCount || 0;
          const likeB = b.likeCount || 0;
          if (likeB !== likeA) return likeB - likeA;
          return new Date(b.CreatedAt || 0).getTime() - new Date(a.CreatedAt || 0).getTime();
        }),
      ];
    } else {
      return [...topLevel.sort((a, b) => new Date(b.CreatedAt || 0).getTime() - new Date(a.CreatedAt || 0).getTime())];
    }
  }, [comments, sortType]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Dropdown sort */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2, justifyContent: "flex-start", flexShrink: 0 }}>
        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel id="sort-comments-label">Sắp xếp</InputLabel>
          <Select
            labelId="sort-comments-label"
            value={sortType}
            label="Sắp xếp"
            onChange={(e) => setSortType(e.target.value as "newest" | "mostLiked")}
          >
            <MenuItem value="newest">Mới nhất</MenuItem>
            <MenuItem value="mostLiked">Nổi bật nhất</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* Danh sách bình luận */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          p: 2,
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          mb: 2,
        }}
      >
        {comments.length === 0 ? (
          <Typography variant="body2" color="#888" textAlign="center">
            Chưa có bình luận nào cho bài tập này.
          </Typography>
        ) : (
          <List sx={{ p: 0 }}>
            {sortedComments.map((c: any) => {
              const handleEdit = () => {
                onSetEditingId(c.CoID);
                setEditInput(c.Content);
              };
              return (
                <CommentItem
                  key={c.CoID}
                  comment={c}
                  onEdit={handleEdit}
                  onDelete={() => onSetDeleteDialogId(c.CoID)}
                  isEditing={editingId === c.CoID}
                  editValue={editInput}
                  setEditValue={setEditInput}
                  onSaveEdit={() => onEditComment(c.CoID)}
                  onCancelEdit={() => onSetEditingId(null)}
                  likedComments={likedComments}
                  handleLike={onLike}
                  currentUID={currentUID}
                />
              );
            })}
          </List>
        )}
      </Box>
      {/* Form nhập bình luận cố định ở dưới */}
      <Box
        sx={{
          flexShrink: 0,
        }}
      >
        <Box component="form" onSubmit={onPostComment} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder={notLoggedIn ? "Bạn cần đăng nhập để bình luận" : "Nhập bình luận..."}
              disabled={notLoggedIn || posting}
              rows={1}
              style={{
                resize: "vertical",
                borderRadius: 8,
                border: "1px solid #ccc",
                padding: 8,
                fontFamily: "inherit",
                fontSize: 15,
                background: notLoggedIn ? "#f3f3f3" : "#fff",
                width: "100%",
              }}
            />
            {postError && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {postError}
              </Typography>
            )}
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={notLoggedIn || posting || !commentInput.trim()}
            startIcon={<SendIcon />}
          >
            {posting ? "Đang gửi..." : "Gửi"}
          </Button>
        </Box>
      </Box>
      {/* Dialog xác nhận xóa */}
      {deleteDialogId && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 3,
              p: 3,
              maxWidth: 400,
              width: "90%",
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={2} textAlign="center">
              Bạn có chắc muốn xóa bình luận này?
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Button onClick={() => onSetDeleteDialogId(null)} variant="outlined">
                Hủy
              </Button>
              <Button color="error" variant="contained" onClick={() => deleteDialogId && onDeleteComment(deleteDialogId)}>
                Xóa
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
} 