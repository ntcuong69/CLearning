import React from "react";
import {
  Box,
  Button,
  List,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  TextField,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import { formatDistanceToNow } from "date-fns";

// Item bình luận
function CommentItem({
  comment,
  currentUID,
  onEdit,
  onDelete,
  isEditing,
  editValue,
  setEditValue,
  onSaveEdit,
  onCancelEdit,
  likedComments,
  handleLike,
}: any) {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
            <IconButton size="small" onClick={(e: any) => setAnchorEl(e.currentTarget)}>
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
        <Typography 
          variant="body2" 
          sx={{ 
            mt: 1, 
            mb: 0.5,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word'
          }}
        >
          {comment.Content}
        </Typography>
      )}
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 0.5 }}>
        <Tooltip title={likedComments && handleLike ? (likedComments[comment.CoID] ? "Bỏ thích" : "Thích") : "Thích"}>
          <IconButton
            size="small"
            onClick={handleLike ? () => handleLike(comment.CoID) : undefined}
            color={likedComments && likedComments[comment.CoID] ? "primary" : "default"}
          >
            <Typography variant="caption" sx={{ mr: 0.5 }}>
              {comment.likeCount || 0}
            </Typography>
            <ThumbUpAltOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

// Danh sách bình luận
function CommentList({
  comments,
  currentUID,
  onEdit,
  onDelete,
  editingId,
  editValue,
  setEditValue,
  onSaveEdit,
  onCancelEdit,
  likedComments,
  handleLike,
}: any) {
  return (
    <List sx={{ p: 0 }}>
      {comments.map((c: any) => {
        const handleEdit = () => onEdit(c.CoID, c.Content);
        return (
          <CommentItem
            key={c.CoID}
            comment={c}
            currentUID={currentUID}
            onEdit={handleEdit}
            onDelete={() => onDelete(c.CoID)}
            isEditing={editingId === c.CoID}
            editValue={editValue}
            setEditValue={(v: any) => setEditValue(v)}
            onSaveEdit={() => onSaveEdit(c.CoID)}
            onCancelEdit={onCancelEdit}
            likedComments={likedComments}
            handleLike={handleLike}
          />
        );
      })}
    </List>
  );
}

// Dialog hiển thị tất cả bình luận
const CommentDialog = (props: any) => {
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
    handleDeleteComment,
    setComments,
    likedComments,
    handleLike,
  } = props;

  const [sortType, setSortType] = React.useState("newest");
  const [deleteDialogId, setDeleteDialogId] = React.useState(null);

  // Sort bình luận
  const sortedComments = React.useMemo(() => {
    if (sortType === "mostLiked") {
      return [
        ...comments.sort((a: any, b: any) => {
          const likeA = a.likeCount || 0;
          const likeB = b.likeCount || 0;
          if (likeB !== likeA) return likeB - likeA;
          return new Date(b.CreatedAt || 0).getTime() - new Date(a.CreatedAt || 0).getTime();
        }),
      ];
    } else {
      return [...comments.sort((a: any, b: any) => new Date(b.CreatedAt || 0).getTime() - new Date(a.CreatedAt || 0).getTime())];
    }
  }, [comments, sortType]);

  // Handle delete with confirmation
  const handleDeleteWithConfirmation = (coid: any) => {
    setDeleteDialogId(coid);
  };

  const confirmDelete = () => {
    if (deleteDialogId) {
      handleDeleteComment(deleteDialogId);
      setDeleteDialogId(null);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      disableScrollLock={false}
      PaperProps={{
        sx: {
          bgcolor: "#fff",
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          p: 0,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: "bold",
          color: "#111",
          textAlign: "center",
          fontSize: 24,
          letterSpacing: 0.5,
          borderBottom: "1px solid #eee",
          bgcolor: "#fff",
          py: 2,
        }}
      >
        Tất cả bình luận
      </DialogTitle>
      <DialogContent
        dividers={false}
        sx={{
          bgcolor: "#fafbfc",
          maxHeight: "80vh",
          minWidth: { xs: 320, sm: 600, md: 800 },
          p: { xs: 1, sm: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          gap: 3,
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": { width: 6, background: "#f3f3f3" },
          "&::-webkit-scrollbar-thumb": { background: "#e0e0e0", borderRadius: 3 },
        }}
      >
        {/* Dropdown sort ở trên cùng bên trái */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: 2, justifyContent: "flex-start" }}>
          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel id="sort-comments-label">Sắp xếp</InputLabel>
            <Select
              labelId="sort-comments-label"
              value={sortType}
              label="Sắp xếp"
              onChange={(e) => setSortType(e.target.value)}
            >
              <MenuItem value="newest">Mới nhất</MenuItem>
              <MenuItem value="mostLiked">Nổi bật nhất</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* Danh sách bình luận ở giữa */}
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            p: { xs: 1.5, sm: 2 },
            flex: 1,
            minHeight: 300,
            maxHeight: "60vh",
            overflowY: "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": { width: 6, background: "#f3f3f3" },
            "&::-webkit-scrollbar-thumb": { background: "#e0e0e0", borderRadius: 3 },
          }}
        >
          {loading ? (
            <Typography variant="body2" color="#888" textAlign="center">
              Đang tải bình luận...
            </Typography>
          ) : !currentLesson ? (
            <Typography variant="body2" color="#888" textAlign="center">
              Chọn một bài học để xem bình luận.
            </Typography>
          ) : comments.length === 0 ? (
            <Typography variant="body2" color="#888" textAlign="center">
              Chưa có bình luận nào cho bài học này.
            </Typography>
          ) : (
            <CommentList
              comments={sortedComments}
              currentUID={currentUID}
              onEdit={handleEditComment}
              onDelete={handleDeleteWithConfirmation}
              editingId={editingId}
              editValue={editInput}
              setEditValue={setEditInput}
              onSaveEdit={handleEditComment}
              onCancelEdit={() => setEditingId(null)}
              likedComments={likedComments}
              handleLike={handleLike}
            />
          )}
        </Box>
        {/* Form nhập bình luận ở dưới cùng */}
        <Box>
          <Box component="form" onSubmit={handlePostComment} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
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
      </DialogContent>

      {/* Delete Confirmation Dialog */}
      <Dialog open={Boolean(deleteDialogId)} onClose={() => setDeleteDialogId(null)}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>
          <Typography>Bạn có chắc chắn muốn xóa bình luận này không?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogId(null)} variant="outlined">
            Hủy
          </Button>
          <Button color="error" variant="contained" onClick={confirmDelete}>
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </Dialog>
  );
};

export default CommentDialog; 