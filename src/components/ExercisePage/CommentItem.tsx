import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  TextField,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import { formatDistanceToNow } from "date-fns";

export default function CommentItem({
  comment,
  onEdit,
  onDelete,
  isEditing,
  editValue,
  setEditValue,
  onSaveEdit,
  onCancelEdit,
  likedComments,
  handleLike,
  currentUID,
}: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOwner = currentUID && comment.UID?.toString() === currentUID.toString();

  return (
    <Box sx={{ mb: 2, p: 1.5, borderRadius: 2, bgcolor: "#fff", boxShadow: "0 1px 4px #0001" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar 
          sx={{ 
            width: 32, 
            height: 32, 
            bgcolor: comment.user?.Image ? "transparent" : "#753a88" 
          }}
          src={comment.user?.Image}
        >
          {!comment.user?.Image && (
            <PersonIcon sx={{ fontSize: 20, color: "#fff" }} />
          )}
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" fontWeight={600} color="#753a88" sx={{ mb: -1 }}>
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
        <Typography variant="body2" sx={{ mt: 1, mb: 0.5, whiteSpace: 'pre-wrap' }}>
          {comment.Content}
        </Typography>
      )}
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 0.5 }}>
        <Tooltip title={likedComments && handleLike ? (likedComments[comment.CoID] ? "Bỏ thích" : "Thích") : "Thích"}>
          <IconButton
            size="small"
            onClick={() => handleLike && handleLike(comment.CoID)}
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