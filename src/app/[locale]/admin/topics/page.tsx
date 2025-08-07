"use client";
import React from "react";
import NavBar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  CircularProgress,
  Chip,
  Fade,
  Skeleton,
  Divider
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import TopicIcon from "@mui/icons-material/Topic";
import AssignmentIcon from "@mui/icons-material/Assignment";
import axios from "axios";

export default function TopicsPage() {
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

  const renderSkeletonCards = () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
      {[1, 2, 3, 4].map((item) => (
        <Card key={item} sx={{ height: 140 }}>
          <CardContent>
            <Skeleton variant="text" width="60%" height={32} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="40%" height={24} sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Skeleton variant="rectangular" width={80} height={32} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px" }}>
      <NavBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: "250px" },
          px: { xs: 2, sm: 6, md: 10 },
          py: 6,
          mx: "auto",
          maxWidth: 1200,
        }}
      >
        {/* Header Section */}
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          p: 3,
          backgroundColor: 'rgba(44, 90, 160, 0.02)',
          borderRadius: 2,
          border: '1px solid rgba(44, 90, 160, 0.1)'
        }}>
          <Box>
            <Typography variant="h5" fontWeight={600} sx={{ color: '#1A202C', mb: 0.5 }}>
              Quản lý chủ đề học tập
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tổng cộng {loading ? '...' : topics.length} chủ đề
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleOpenAdd}
            sx={{
              backgroundColor: '#2C5AA0',
              '&:hover': {
                backgroundColor: '#1E3A8A'
              },
              px: 3,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 500
            }}
          >
            Thêm chủ đề
          </Button>
        </Box>

        {/* Topics Grid */}
        {loading ? (
          renderSkeletonCards()
        ) : topics.length === 0 ? (
          <Card sx={{
            p: 6,
            textAlign: 'center',
            backgroundColor: 'rgba(44, 90, 160, 0.02)',
            border: '2px dashed rgba(44, 90, 160, 0.2)'
          }}>
            <TopicIcon sx={{ fontSize: 64, color: 'rgba(44, 90, 160, 0.3)', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
              Chưa có chủ đề nào
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Bắt đầu bằng cách thêm chủ đề đầu tiên
            </Typography>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={handleOpenAdd}
              sx={{
                borderColor: '#2C5AA0',
                color: '#2C5AA0',
                '&:hover': {
                  borderColor: '#1E3A8A',
                  backgroundColor: 'rgba(44, 90, 160, 0.04)'
                }
              }}
            >
              Thêm chủ đề đầu tiên
            </Button>
          </Card>
        ) : (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {topics.map((topic, index) => (
              <Fade in timeout={300 + index * 100} key={topic.TpID}>
                <Card sx={{
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                  },
                  border: '1px solid rgba(0,0,0,0.08)'
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h6" fontWeight={600} sx={{ color: '#1A202C', mb: 0.5 }}>
                          {topic.Name}
                        </Typography>
                        <Chip
                          label={`ID: ${topic.TpID}`}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: '0.75rem',
                            borderColor: 'rgba(44, 90, 160, 0.3)',
                            color: 'rgba(44, 90, 160, 0.7)'
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <IconButton
                          size="small"
                          onClick={() => handleOpenEdit(topic)}
                          sx={{
                            color: '#2C5AA0',
                            '&:hover': {
                              backgroundColor: 'rgba(44, 90, 160, 0.08)'
                            }
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleOpenDelete(topic)}
                          sx={{
                            color: '#E53E3E',
                            '&:hover': {
                              backgroundColor: 'rgba(229, 62, 62, 0.08)'
                            }
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AssignmentIcon sx={{ fontSize: 20, color: 'rgba(44, 90, 160, 0.6)' }} />
                      <Typography variant="body2" color="text.secondary">
                        {topic._count?.exercise ?? 0} bài tập
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            ))}
          </Box>
        )}

        {/* Dialog Thêm/Sửa chủ đề */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
            }
          }}
        >
          <DialogTitle sx={{
            pb: 1,
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            backgroundColor: 'rgba(44, 90, 160, 0.02)',
            fontWeight: 600,
            fontSize: '1.25rem'
          }}>
            {editMode ? "Chỉnh sửa chủ đề" : "Thêm chủ đề mới"}
          </DialogTitle>
          <DialogContent sx={{ pt: 3 }}>
            <TextField
              margin="normal"
              label="Tên chủ đề"
              name="Name"
              value={form.Name ?? ""}
              onChange={handleFormChange}
              fullWidth
              required
              autoFocus
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />
          </DialogContent>
          <DialogActions sx={{ p: 3, pt: 2 }}>
            <Button
              onClick={handleCloseDialog}
              disabled={saving}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              Hủy
            </Button>
            <Button
              onClick={handleSave}
              variant="contained"
              disabled={saving || !form.Name}
              sx={{
                backgroundColor: '#2C5AA0',
                '&:hover': {
                  backgroundColor: '#1E3A8A'
                },
                px: 3,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500
              }}
            >
              {saving ? <CircularProgress size={20} /> : "Lưu"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Dialog xác nhận xóa chủ đề */}
        <Dialog
          open={deleteDialog}
          onClose={handleCloseDelete}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
            }
          }}
        >
          <DialogTitle sx={{
            pb: 1,
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            backgroundColor: 'rgba(229, 62, 62, 0.02)',
            fontWeight: 600,
            fontSize: '1.25rem',
            color: 'error.main'
          }}>
            Xác nhận xóa chủ đề
          </DialogTitle>
          <DialogContent sx={{ pt: 3 }}>
            <Alert severity="warning" sx={{ mb: 3, borderRadius: 2 }}>
              <Typography variant="body2">
                {deleteTarget && `Nếu xóa chủ đề này, toàn bộ bài tập thuộc chủ đề này sẽ có TpID là null!`}
              </Typography>
            </Alert>
            <Typography variant="body1">
              Bạn có chắc chắn muốn xóa chủ đề <strong>{deleteTarget?.Name}</strong>?
            </Typography>
          </DialogContent>
          <DialogActions sx={{ p: 3, pt: 2 }}>
            <Button
              onClick={handleCloseDelete}
              disabled={saving}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              Hủy
            </Button>
            <Button
              onClick={handleDelete}
              color="error"
              variant="contained"
              disabled={saving}
              sx={{
                px: 3,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500
              }}
            >
              {saving ? <CircularProgress size={20} /> : "Xóa"}
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            severity={snackbar.severity}
            sx={{
              width: "100%",
              borderRadius: 2,
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
