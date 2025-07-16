import React from "react";
import { Box, Typography, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar, Alert, CircularProgress } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

export default function TopicManagement() {
  const [topics, setTopics] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [currentTopic, setCurrentTopic] = React.useState<any>(null);
  const [form, setForm] = React.useState({ Name: "" });
  const [saving, setSaving] = React.useState(false);
  const [deleteDialog, setDeleteDialog] = React.useState(false);
  const [deleteTarget, setDeleteTarget] = React.useState<any>(null);
  const [snackbar, setSnackbar] = React.useState<{ open: boolean; message: string; severity: "success"|"error" }>({ open: false, message: "", severity: "success" });

  const fetchTopics = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/admin/topics");
      setTopics(res.data.topics || []);
    } catch {
      setTopics([]);
    }
    setLoading(false);
  };
  React.useEffect(() => { fetchTopics(); }, []);

  const handleOpenAdd = () => {
    setEditMode(false);
    setForm({ Name: "" });
    setOpenDialog(true);
  };
  const handleOpenEdit = (topic: any) => {
    setEditMode(true);
    setCurrentTopic(topic);
    setForm({ Name: topic.Name ?? "" });
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentTopic(null);
    setForm({ Name: "" });
  };
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSave = async () => {
    setSaving(true);
    try {
      if (editMode && currentTopic) {
        await axios.put(`/api/admin/topics/${currentTopic.TpID}`, { Name: form.Name });
        setSnackbar({ open: true, message: "Cập nhật chủ đề thành công!", severity: "success" });
      } else {
        await axios.post("/api/admin/topics", form);
        setSnackbar({ open: true, message: "Thêm chủ đề thành công!", severity: "success" });
      }
      await fetchTopics();
      setOpenDialog(false);
    } catch (e: any) {
      setSnackbar({ open: true, message: e?.response?.data?.error || "Lỗi thao tác", severity: "error" });
    }
    setSaving(false);
  };
  const handleOpenDelete = (topic: any) => {
    setDeleteTarget(topic);
    setDeleteDialog(true);
  };
  const handleCloseDelete = () => {
    setDeleteDialog(false);
    setDeleteTarget(null);
  };
  const handleDelete = async () => {
    if (!deleteTarget) return;
    setSaving(true);
    try {
      await axios.delete(`/api/admin/topics/${deleteTarget.TpID}`);
      setSnackbar({ open: true, message: "Đã xóa chủ đề!", severity: "success" });
      await fetchTopics();
    } catch (e: any) {
      setSnackbar({ open: true, message: e?.response?.data?.error || "Lỗi xóa", severity: "error" });
    }
    setSaving(false);
    setDeleteDialog(false);
    setDeleteTarget(null);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" fontWeight={600}>Danh sách chủ đề</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenAdd}>Thêm chủ đề</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>TpID</TableCell>
              <TableCell>Tên chủ đề</TableCell>
              <TableCell align="center">Tổng số bài tập</TableCell>
              <TableCell align="right">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={4} align="center"><CircularProgress size={28} /></TableCell></TableRow>
            ) : topics.length === 0 ? (
              <TableRow><TableCell colSpan={4} align="center">Không có chủ đề</TableCell></TableRow>
            ) : topics.map((topic) => (
              <TableRow key={topic.TpID}>
                <TableCell>{topic.TpID}</TableCell>
                <TableCell>{topic.Name}</TableCell>
                <TableCell align="center">{topic._count?.exercise ?? 0}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary" onClick={() => handleOpenEdit(topic)}><EditIcon /></IconButton>
                  <IconButton color="error" onClick={() => handleOpenDelete(topic)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Dialog Thêm/Sửa chủ đề */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="xs" fullWidth>
        <DialogTitle>{editMode ? "Sửa chủ đề" : "Thêm chủ đề"}</DialogTitle>
        <DialogContent>
          <TextField margin="normal" label="Tên chủ đề" name="Name" value={form.Name ?? ""} onChange={handleFormChange} fullWidth required autoFocus />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} disabled={saving}>Hủy</Button>
          <Button onClick={handleSave} variant="contained" disabled={saving || !form.Name}>{saving ? <CircularProgress size={20} /> : "Lưu"}</Button>
        </DialogActions>
      </Dialog>
      {/* Dialog xác nhận xóa chủ đề */}
      <Dialog open={deleteDialog} onClose={handleCloseDelete} maxWidth="xs" fullWidth>
        <DialogTitle>Xác nhận xóa chủ đề</DialogTitle>
        <DialogContent>
          <Alert severity="warning" sx={{ mb: 2 }}>
            {deleteTarget && `Nếu xóa chủ đề này, toàn bộ bài tập thuộc chủ đề này sẽ có TpID là null!`}
          </Alert>
          <Typography>Bạn có chắc chắn muốn xóa chủ đề <b>{deleteTarget?.Name}</b>?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} disabled={saving}>Hủy</Button>
          <Button onClick={handleDelete} color="error" variant="contained" disabled={saving}>{saving ? <CircularProgress size={20} /> : "Xóa"}</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar({ ...snackbar, open: false })} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>{snackbar.message}</Alert>
      </Snackbar>
    </Box>
  );
} 