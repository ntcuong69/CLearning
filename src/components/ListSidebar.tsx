import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Divider,
  ListItemButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const mockLists = [
  { id: 1, name: "Luyện tập C cơ bản", description: "Các bài tập nhập môn C" },
  { id: 2, name: "Bài tập khó", description: "Tổng hợp các bài nâng cao" },
  { id: 3, name: "Yêu thích", description: "Những bài mình thích nhất" },
];

const ListSidebar = () => {
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

  return (
    <Box
      sx={{
        width: 250,
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
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 3, py: 2 }}>
        <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
          Danh sách của bạn
        </Typography>
        <IconButton sx={{ color: "#000" }} onClick={() => setOpenDialog(true)}>
          <AddIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ flex: 1, overflow: "auto", px: 2, py: 2 }}>
        {loading ? (
          <Typography align="center" color="text.secondary" sx={{ mt: 2 }}>Đang tải...</Typography>
        ) : (
          <List>
            {lists.map((list) => (
              <ListItem key={list.LID} sx={{ mb: 0, p: 0 }}>
                <ListItemButton sx={{ borderRadius: 2 }} onClick={() => handleOpenListDialog(list)}>
                  <ListItemText
                    primary={<Typography sx={{ fontWeight: 500 }}>{list.Name}</Typography>}
                    secondary={<Typography variant="body2" color="text.secondary">{list.Description}</Typography>}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
        {error && <Typography color="error" variant="body2" sx={{ mt: 1 }}>{error}</Typography>}
      </Box>
      {/* Dialog tạo list mới */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="xs" fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ fontWeight: 600, fontSize: 20, mb: 1 }}>Tạo danh sách mới</DialogTitle>
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
                  '&.Mui-focused fieldset': { borderColor: '#000' },
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
                  '&.Mui-focused fieldset': { borderColor: '#000' },
                  fontSize: 15,
                },
              }}
            />
            <Typography variant="caption" sx={{ position: 'absolute', right: 8, bottom: 8, color: '#888' }}>{newListDesc.length}/150</Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2, pt: 1 }}>
          <Button onClick={() => setOpenDialog(false)} sx={{ bgcolor: '#f6f6f6', color: '#222', borderRadius: 2, px: 2, boxShadow: 'none', '&:hover': { bgcolor: '#ececec' } }}>Hủy</Button>
          <Button
            onClick={handleCreate}
            variant="contained"
            disabled={!newListName.trim() || newListName.length > 30 || creating}
            sx={{ borderRadius: 2, px: 3, boxShadow: 'none', bgcolor: '#888', color: '#fff', '&:hover': { bgcolor: '#666' }, textTransform: 'none', fontWeight: 500 }}
          >
            {creating ? 'Đang tạo...' : 'Tạo'}
          </Button>
        </DialogActions>
      </Dialog>
      {/* Dialog hiển thị danh sách bài tập */}
      <Dialog open={openListDialog} onClose={handleCloseListDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Danh sách bài tập trong "{selectedList?.Name}"</DialogTitle>
        <DialogContent>
          {listDialogLoading ? (
            <Typography align="center" sx={{ my: 2 }}>Đang tải...</Typography>
          ) : listExercises.length === 0 ? (
            <Typography align="center" sx={{ my: 2 }}>Chưa có bài tập nào trong danh sách này.</Typography>
          ) : (
            <Box>
              {listExercises.map(ex => (
                <Box key={ex.EID} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, p: 1, bgcolor: '#f3f4f6', borderRadius: 1 }}>
                  <Typography component="a" href={`/exercises/${ex.Slug}`} target="_blank" sx={{ fontWeight: 500, color: '#1976d2', textDecoration: 'none', flex: 1 }}>
                    {ex.Name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {ex.Difficulty === 'Easy' ? 'Dễ' : ex.Difficulty === 'Medium' ? 'Vừa' : ex.Difficulty === 'Hard' ? 'Khó' : ex.Difficulty}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseListDialog}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListSidebar; 