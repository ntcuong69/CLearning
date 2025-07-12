import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Card,
  CardContent,
  Chip,
  Avatar,
  Tooltip,
  Skeleton,
  Collapse,
  Menu,
  MenuItem,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import ExerciseStatusBadge from "./ExercisePage/ExerciseStatusBadge";

const ListSidebar = ({ onListDeleted, onListExerciseChanged }: any) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [newListDesc, setNewListDesc] = useState("");
  const [lists, setLists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [openListDialog, setOpenListDialog] = useState(false);
  const [selectedList, setSelectedList] = useState<any>(null);
  const [listExercises, setListExercises] = useState<any[]>([]);
  const [listDialogLoading, setListDialogLoading] = useState(false);
  const [listsExpanded, setListsExpanded] = useState(true);
  
  // Edit functionality
  const [editDialog, setEditDialog] = useState(false);
  const [editingList, setEditingList] = useState<any>(null);
  const [editListName, setEditListName] = useState("");
  const [editListDesc, setEditListDesc] = useState("");
  const [editing, setEditing] = useState(false);
  
  // Delete functionality
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deletingList, setDeletingList] = useState<any>(null);
  const [deleting, setDeleting] = useState(false);
  
  // Context menu
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
    list: any;
  } | null>(null);

  const fetchLists = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("/api/list");
      setLists(res.data.lists || []);
    } catch (e) {
      setError("Không thể tải danh sách");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLists();
  }, []);

  // Update ExerciseCount when exercises are added/removed
  useEffect(() => {
    if (onListExerciseChanged) {
      const handleExerciseChange = (listId: number, exerciseId: number, isAdded: boolean) => {
        setLists(prev => prev.map(list => {
          if (list.LID === listId) {
            return {
              ...list,
              ExerciseCount: isAdded ? (list.ExerciseCount || 0) + 1 : Math.max(0, (list.ExerciseCount || 0) - 1)
            };
          }
          return list;
        }));
      };

      // Store the handler for later use
      (window as any).handleListExerciseChanged = handleExerciseChange;
    }
  }, [onListExerciseChanged]);

  const handleCreate = async () => {
    setCreating(true);
    setError("");
    try {
      await axios.post("/api/list", { name: newListName, description: newListDesc });
      setOpenDialog(false);
      setNewListName("");
      setNewListDesc("");
      fetchLists();
    } catch (e: any) {
      setError(e?.response?.data?.error || "Tạo danh sách thất bại");
    }
    setCreating(false);
  };

  const handleOpenListDialog = async (list: any) => {
    setSelectedList(list);
    setOpenListDialog(true);
    setListDialogLoading(true);
    try {
      const res = await axios.get(`/api/listitem/${list.LID}`);
      setListExercises(res.data.exercises || []);
    } catch {
      setListExercises([]);
    }
    setListDialogLoading(false);
  };
  const handleCloseListDialog = () => {
    setOpenListDialog(false);
    setSelectedList(null);
    setListExercises([]);
  };

  const handleToggleLists = () => {
    setListsExpanded(!listsExpanded);
  };

  const handleContextMenu = (event: React.MouseEvent, list: any) => {
    event.preventDefault();
    event.stopPropagation();
    setContextMenu({
      mouseX: event.clientX,
      mouseY: event.clientY,
      list,
    });
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  const handleEdit = (list: any) => {
    setEditingList(list);
    setEditListName(list.Name);
    setEditListDesc(list.Description || "");
    setEditDialog(true);
    handleCloseContextMenu();
  };

  const handleDelete = (list: any) => {
    setDeletingList(list);
    setDeleteDialog(true);
    handleCloseContextMenu();
  };

  const handleEditSubmit = async () => {
    if (!editingList) return;
    
    setEditing(true);
    setError("");
    try {
      await axios.put(`/api/list/${editingList.LID}`, {
        name: editListName,
        description: editListDesc
      });
      setEditDialog(false);
      setEditingList(null);
      setEditListName("");
      setEditListDesc("");
      fetchLists();
    } catch (e: any) {
      setError(e?.response?.data?.error || "Chỉnh sửa danh sách thất bại");
    }
    setEditing(false);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingList) return;
    
    setDeleting(true);
    setError("");
    try {
      await axios.delete(`/api/list/${deletingList.LID}`);
      setDeleteDialog(false);
      
      // Notify parent component about the deleted list
      if (onListDeleted) {
        onListDeleted(deletingList.LID);
      }
      
      setDeletingList(null);
      fetchLists();
    } catch (e: any) {
      setError(e?.response?.data?.error || "Xóa danh sách thất bại");
    }
    setDeleting(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return '#4caf50';
      case 'Medium': return '#ff9800';
      case 'Hard': return '#f44336';
      default: return '#757575';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'Dễ';
      case 'Medium': return 'Vừa';
      case 'Hard': return 'Khó';
      default: return difficulty;
    }
  };

  return (
    <Box
      sx={{
        width: 280,
        position: "fixed",
        right: 0,
        top: 65,
        height: "calc(100vh - 80px)",
        bgcolor: "#F7F9FA",
        borderLeft: "1px solid #E1F0FF",
        display: { xs: "none", lg: "block" },
        zIndex: 1200,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        overflow: "hidden",
        p: 0,
      }}
    >
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        px: 3, 
        py: 2.5,
        borderBottom: "1px solid #E1F0FF",
        bgcolor: "#fff"
      }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ fontWeight: 600, fontSize: "16px", color: "#1a1a1a" }}>
            Danh sách của bạn
          </Typography>
          <Tooltip title={listsExpanded ? "Thu gọn danh sách" : "Mở rộng danh sách"}>
            <IconButton
              size="small"
              onClick={handleToggleLists}
              sx={{
                color: "#1976d2",
                p: 0.5,
                "&:hover": {
                  bgcolor: "#e3f2fd",
                  transform: "scale(1.1)"
                },
                transition: "all 0.2s ease"
              }}
            >
              {listsExpanded ? (
                <ExpandLessIcon sx={{ fontSize: 18 }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: 18 }} />
              )}
            </IconButton>
          </Tooltip>
        </Box>
        <Tooltip title="Tạo danh sách mới">
          <IconButton 
            sx={{ 
              color: "#1976d2", 
              bgcolor: "#e3f2fd",
              "&:hover": { 
                bgcolor: "#bbdefb",
                transform: "scale(1.05)"
              },
              transition: "all 0.2s ease"
            }} 
            onClick={() => setOpenDialog(true)}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Box>
      
      <Collapse in={listsExpanded} timeout={300}>
        <Box sx={{ flex: 1, overflow: "auto", px: 2, py: 2 }}>
          {loading ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[1, 2, 3].map((i) => (
                <Card key={i} sx={{ 
                  bgcolor: "#fff", 
                  borderRadius: 2, 
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  border: "1px solid #f0f0f0"
                }}>
                  <CardContent sx={{ p: 2 }}>
                    <Skeleton variant="text" width="70%" height={20} />
                    <Skeleton variant="text" width="50%" height={16} sx={{ mt: 1 }} />
                  </CardContent>
                </Card>
              ))}
            </Box>
          ) : lists.length === 0 ? (
            <Box sx={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center", 
              py: 4,
              textAlign: "center"
            }}>
              <PlaylistAddIcon sx={{ fontSize: 48, color: "#ccc", mb: 2 }} />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Chưa có danh sách nào
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Tạo danh sách đầu tiên để tổ chức bài tập
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {lists.map((list) => (
                <Card
                  key={list.LID}
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: 2,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    border: "1px solid #f0f0f0",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                      transform: "translateY(-2px)",
                      borderColor: "#1976d2"
                    }
                  }}
                  onClick={() => handleOpenListDialog(list)}
                >
                  <CardContent sx={{ p: 2.5 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography 
                          sx={{ 
                            fontWeight: 600, 
                            fontSize: "15px",
                            color: "#1a1a1a",
                            mb: 0.5,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {list.Name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            fontSize: "13px",
                            lineHeight: 1.4,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical"
                          }}
                        >
                          {list.Description || "Không có mô tả"}
                        </Typography>
                      </Box>
                      <IconButton 
                        size="small" 
                        sx={{ 
                          color: "#999",
                          "&:hover": { color: "#1976d2" }
                        }}
                        onClick={(e) => handleContextMenu(e, list)}
                      >
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.5 }}>
                      <Chip
                        label={`${list.ExerciseCount || 0} bài tập`}
                        size="small"
                        sx={{
                          bgcolor: "#e3f2fd",
                          color: "#1976d2",
                          fontSize: "11px",
                          height: "20px",
                          fontWeight: 600,
                          "& .MuiChip-label": { px: 1.5 }
                        }}
                      />
                      {list.LastUpdated && (
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: "11px", ml: 'auto' }}>
                          Cập nhật {new Date(list.LastUpdated).toLocaleDateString('vi-VN')}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
          {error && (
            <Box sx={{ 
              bgcolor: "#ffebee", 
              border: "1px solid #ffcdd2", 
              borderRadius: 2, 
              p: 2, 
              mt: 2 
            }}>
              <Typography color="error" variant="body2" sx={{ fontSize: "13px" }}>
                {error}
              </Typography>
            </Box>
          )}
        </Box>
      </Collapse>

      {/* Context Menu */}
      <Menu
        open={contextMenu !== null}
        onClose={handleCloseContextMenu}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            minWidth: 150
          }
        }}
      >
        <MenuItem onClick={() => handleEdit(contextMenu?.list)} sx={{ gap: 1 }}>
          <EditIcon sx={{ fontSize: 18, color: "#1976d2" }} />
          Chỉnh sửa
        </MenuItem>
        <MenuItem onClick={() => handleDelete(contextMenu?.list)} sx={{ gap: 1, color: "#d32f2f" }}>
          <DeleteIcon sx={{ fontSize: 18 }} />
          Xóa
        </MenuItem>
      </Menu>

      {/* Dialog tạo list mới */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="xs" fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ fontWeight: 600, fontSize: 20, mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <PlaylistAddIcon sx={{ color: "#1976d2" }} />
          Tạo danh sách mới
        </DialogTitle>
        <DialogContent sx={{ pt: 1 }}>
          <Typography sx={{ fontWeight: 500, fontSize: 15, mb: 0.5 }}>Tiêu đề</Typography>
          <Box sx={{ position: 'relative', mb: 2 }}>
            <TextField
              placeholder="Nhập tên danh sách"
              value={newListName}
              onChange={e => setNewListName(e.target.value.slice(0, 30))}
              fullWidth
              margin="none"
              variant="outlined"
              inputProps={{ maxLength: 30 }}
              size="small"
              sx={{
                background: '#fff',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': { borderColor: '#e0e0e0' },
                  '&:hover fieldset': { borderColor: '#222' },
                  '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                  fontSize: 15,
                },
              }}
            />
            <Typography variant="caption" sx={{ position: 'absolute', right: 8, bottom: 8, color: '#888' }}>{newListName.length}/30</Typography>
          </Box>
          <Typography sx={{ fontWeight: 500, fontSize: 15, mb: 0.5 }}>Mô tả</Typography>
          <Box sx={{ position: 'relative', mb: 2 }}>
            <TextField
              placeholder="Nhập mô tả danh sách"
              value={newListDesc}
              onChange={e => setNewListDesc(e.target.value.slice(0, 150))}
              fullWidth
              margin="none"
              variant="outlined"
              multiline
              minRows={3}
              inputProps={{ maxLength: 150 }}
              size="small"
              sx={{
                background: '#fff',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': { borderColor: '#e0e0e0' },
                  '&:hover fieldset': { borderColor: '#222' },
                  '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                  fontSize: 15,
                },
              }}
            />
            <Typography variant="caption" sx={{ position: 'absolute', right: 8, bottom: 8, color: '#888' }}>{newListDesc.length}/150</Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
          <Button 
            onClick={() => setOpenDialog(false)} 
            sx={{ 
              bgcolor: '#f6f6f6', 
              color: '#222', 
              borderRadius: 2, 
              px: 2, 
              boxShadow: 'none', 
              '&:hover': { bgcolor: '#ececec' } 
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={handleCreate}
            variant="contained"
            disabled={!newListName.trim() || newListName.length > 30 || creating}
            sx={{ 
              borderRadius: 2, 
              px: 3, 
              boxShadow: 'none', 
              bgcolor: '#1976d2', 
              color: '#fff', 
              '&:hover': { bgcolor: '#1565c0' }, 
              textTransform: 'none', 
              fontWeight: 500 
            }}
          >
            {creating ? 'Đang tạo...' : 'Tạo'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog chỉnh sửa list */}
      <Dialog open={editDialog} onClose={() => setEditDialog(false)} maxWidth="xs" fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ fontWeight: 600, fontSize: 20, mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <EditIcon sx={{ color: "#1976d2" }} />
          Chỉnh sửa danh sách
        </DialogTitle>
        <DialogContent sx={{ pt: 1 }}>
          <Typography sx={{ fontWeight: 500, fontSize: 15, mb: 0.5 }}>Tiêu đề</Typography>
          <Box sx={{ position: 'relative', mb: 2 }}>
            <TextField
              placeholder="Nhập tên danh sách"
              value={editListName}
              onChange={e => setEditListName(e.target.value.slice(0, 30))}
              fullWidth
              margin="none"
              variant="outlined"
              inputProps={{ maxLength: 30 }}
              size="small"
              sx={{
                background: '#fff',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': { borderColor: '#e0e0e0' },
                  '&:hover fieldset': { borderColor: '#222' },
                  '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                  fontSize: 15,
                },
              }}
            />
            <Typography variant="caption" sx={{ position: 'absolute', right: 8, bottom: 8, color: '#888' }}>{editListName.length}/30</Typography>
          </Box>
          <Typography sx={{ fontWeight: 500, fontSize: 15, mb: 0.5 }}>Mô tả</Typography>
          <Box sx={{ position: 'relative', mb: 2 }}>
            <TextField
              placeholder="Nhập mô tả danh sách"
              value={editListDesc}
              onChange={e => setEditListDesc(e.target.value.slice(0, 150))}
              fullWidth
              margin="none"
              variant="outlined"
              multiline
              minRows={3}
              inputProps={{ maxLength: 150 }}
              size="small"
              sx={{
                background: '#fff',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': { borderColor: '#e0e0e0' },
                  '&:hover fieldset': { borderColor: '#222' },
                  '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                  fontSize: 15,
                },
              }}
            />
            <Typography variant="caption" sx={{ position: 'absolute', right: 8, bottom: 8, color: '#888' }}>{editListDesc.length}/150</Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
          <Button 
            onClick={() => setEditDialog(false)} 
            sx={{ 
              bgcolor: '#f6f6f6', 
              color: '#222', 
              borderRadius: 2, 
              px: 2, 
              boxShadow: 'none', 
              '&:hover': { bgcolor: '#ececec' } 
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={handleEditSubmit}
            variant="contained"
            disabled={!editListName.trim() || editListName.length > 30 || editing}
            sx={{ 
              borderRadius: 2, 
              px: 3, 
              boxShadow: 'none', 
              bgcolor: '#1976d2', 
              color: '#fff', 
              '&:hover': { bgcolor: '#1565c0' }, 
              textTransform: 'none', 
              fontWeight: 500 
            }}
          >
            {editing ? 'Đang cập nhật...' : 'Cập nhật'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog xác nhận xóa */}
      <Dialog open={deleteDialog} onClose={() => setDeleteDialog(false)} maxWidth="xs" fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ fontWeight: 600, fontSize: 20, mb: 1, display: "flex", alignItems: "center", gap: 1 }}>
          <DeleteIcon sx={{ color: "#d32f2f" }} />
          Xóa danh sách
        </DialogTitle>
        <DialogContent sx={{ pt: 1 }}>
          <Alert severity="warning" sx={{ mb: 2 }}>
            Bạn có chắc chắn muốn xóa danh sách "{deletingList?.Name}"?
          </Alert>
          <Typography variant="body2" color="text.secondary">
            Hành động này sẽ xóa vĩnh viễn danh sách và tất cả bài tập trong đó. Không thể hoàn tác.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
          <Button 
            onClick={() => setDeleteDialog(false)} 
            sx={{ 
              bgcolor: '#f6f6f6', 
              color: '#222', 
              borderRadius: 2, 
              px: 2, 
              boxShadow: 'none', 
              '&:hover': { bgcolor: '#ececec' } 
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            variant="contained"
            disabled={deleting}
            sx={{ 
              borderRadius: 2, 
              px: 3, 
              boxShadow: 'none', 
              bgcolor: '#d32f2f', 
              color: '#fff', 
              '&:hover': { bgcolor: '#c62828' }, 
              textTransform: 'none', 
              fontWeight: 500 
            }}
          >
            {deleting ? 'Đang xóa...' : 'Xóa'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog hiển thị danh sách bài tập */}
      <Dialog open={openListDialog} onClose={handleCloseListDialog} maxWidth="md" fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ 
          fontWeight: 600, 
          fontSize: 18, 
          display: "flex", 
          alignItems: "center", 
          gap: 1,
          borderBottom: "1px solid #f0f0f0",
          pb: 2
        }}>
          <ListIcon sx={{ color: "#1976d2" }} />
          Danh sách bài tập trong "{selectedList?.Name}"
        </DialogTitle>
        <DialogContent sx={{ pt: 2, p: 0 }}>
          {listDialogLoading ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, py: 2 }}>
              {[1, 2, 3].map((i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Skeleton variant="rectangular" width={40} height={40} sx={{ borderRadius: 1 }} />
                  <Box sx={{ flex: 1 }}>
                    <Skeleton variant="text" width="80%" height={20} />
                    <Skeleton variant="text" width="40%" height={16} sx={{ mt: 0.5 }} />
                  </Box>
                </Box>
              ))}
            </Box>
          ) : listExercises.length === 0 ? (
            <Box sx={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              justifyContent: "center", 
              py: 4,
              textAlign: "center"
            }}>
              <PlaylistAddIcon sx={{ fontSize: 48, color: "#ccc", mb: 2 }} />
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1, fontWeight: 500 }}>
                Chưa có bài tập nào
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thêm bài tập vào danh sách này để bắt đầu học
              </Typography>
            </Box>
          ) : (
            <Card className="border border-gray-200 shadow-lg">
              <TableContainer component={Paper} className="rounded-xl">
                <Table>
                  <TableHead sx={{ bgcolor: '#f9fafb' }}>
                    <TableRow>
                      <TableCell 
                        align="center" 
                        sx={{ 
                          width: "15%", 
                          fontWeight: 700, 
                          color: '#1a1a1a',
                          fontSize: '14px',
                          py: 2
                        }}
                      >
                        Trạng thái
                      </TableCell>
                      <TableCell 
                        sx={{ 
                          width: "60%", 
                          fontWeight: 700, 
                          color: '#1a1a1a',
                          fontSize: '14px',
                          py: 2
                        }}
                      >
                        Tên bài tập
                      </TableCell>
                      <TableCell 
                        align="center" 
                        sx={{ 
                          width: "15%", 
                          fontWeight: 700, 
                          color: '#1a1a1a',
                          fontSize: '14px',
                          py: 2
                        }}
                      >
                        Độ khó
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listExercises.map((ex, index) => (
                      <TableRow
                        key={ex.EID}
                        className="transition-colors duration-150 cursor-pointer"
                        sx={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9fafb', '&:hover': { backgroundColor: '#f1f5f9' } }}
                        onClick={() => window.open(`/exercises/${ex.Slug}`, '_blank')}
                      >
                        <TableCell align="center">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <ExerciseStatusBadge status={ex.status || 'Unattempted'} />
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Typography 
                              variant="body2" 
                              className="font-medium text-gray-900 hover:text-blue-600"
                            >
                              {ex.Name}
                            </Typography>
                            {ex.Description && (
                              <Typography 
                                variant="body2" 
                                color="text.secondary" 
                                sx={{ 
                                  fontSize: "12px",
                                  mt: 0.5,
                                  lineHeight: 1.3
                                }}
                              >
                                {ex.Description}
                              </Typography>
                            )}
                          </Box>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            variant="body2"
                            className={`font-medium ${
                              ex.Difficulty === 'Easy' ? 'text-green-500' :
                              ex.Difficulty === 'Medium' ? 'text-yellow-500' :
                              ex.Difficulty === 'Hard' ? 'text-red-500' : ''
                            }`}
                          >
                            {ex.Difficulty === 'Easy' ? 'Dễ' : 
                             ex.Difficulty === 'Medium' ? 'Vừa' : 
                             ex.Difficulty === 'Hard' ? 'Khó' : ex.Difficulty}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
          <Button 
            onClick={handleCloseListDialog}
            sx={{ 
              bgcolor: '#f6f6f6', 
              color: '#222', 
              borderRadius: 2, 
              px: 2, 
              boxShadow: 'none', 
              '&:hover': { bgcolor: '#ececec' } 
            }}
          >
            Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListSidebar; 