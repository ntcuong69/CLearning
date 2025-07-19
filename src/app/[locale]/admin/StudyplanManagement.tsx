// 1. IMPORTS
import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Chip,
  Tooltip,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";

// 2. TYPES
interface StudyPlan {
  SPID: number;
  Name: string;
  Description: string;
  studyplanitem: StudyPlanItem[];
}

interface StudyPlanItem {
  SPIID: number;
  Name: string;
  exercise: Exercise[];
}

interface Exercise {
  EID: number;
  Name: string;
}

interface FormState {
  Name: string;
  Description: string;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
}

interface ConfirmDeleteState {
  open: boolean;
  plan: StudyPlan | null;
}

// Thêm type cho form thêm chương học
interface AddItemFormState {
  Name: string;
}

// 3. COMPONENT
export default function StudyplanManagement() {
  // STATE
  const [studyPlans, setStudyPlans] = useState<StudyPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editPlan, setEditPlan] = useState<StudyPlan | null>(null);
  const [form, setForm] = useState<FormState>({ Name: "", Description: "" });
  const [search, setSearch] = useState("");
  const [snackbar, setSnackbar] = useState<SnackbarState>({ open: false, message: "", severity: "success" });
  const [saveLoading, setSaveLoading] = useState(false);
  const [formError, setFormError] = useState<FormState>({ Name: "", Description: "" });
  const [confirmDelete, setConfirmDelete] = useState<ConfirmDeleteState>({ open: false, plan: null });
  const [detailPlan, setDetailPlan] = useState<StudyPlan | null>(null);

  // Thêm state cho dialog thêm chương học
  const [addItemDialogOpen, setAddItemDialogOpen] = useState(false);
  const [addItemForm, setAddItemForm] = useState<AddItemFormState>({ Name: "" });
  const [addItemFormError, setAddItemFormError] = useState<string>("");
  const [addItemLoading, setAddItemLoading] = useState(false);

  // 4. EFFECTS
  useEffect(() => {
    fetchStudyPlans();
  }, []);

  // 5. HANDLERS & HELPERS
  const fetchStudyPlans = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/admin/studyplan");
      setStudyPlans(response.data.studyPlans || []);
      setError("");
    } catch (err) {
      setError("Failed to fetch study plans.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditPlan(null);
    setForm({ Name: "", Description: "" });
    setDialogOpen(true);
  };

  const handleEdit = (plan: StudyPlan) => {
    setEditPlan(plan);
    setForm({ Name: plan.Name, Description: plan.Description });
    setDialogOpen(true);
  };

  const handleDeleteClick = (plan: StudyPlan) => {
    setConfirmDelete({ open: true, plan });
  };

  const handleDeleteConfirm = async () => {
    if (!confirmDelete.plan) return;
    setLoading(true);
    try {
      await axios.delete("/api/admin/studyplan", { data: { SPID: confirmDelete.plan.SPID } });
      setStudyPlans(studyPlans.filter((p) => p.SPID !== confirmDelete.plan!.SPID));
      setSnackbar({ open: true, message: "Xóa thành công!", severity: "success" });
      setDetailPlan(null);
    } catch {
      setSnackbar({ open: true, message: "Xóa thất bại!", severity: "error" });
    }
    setLoading(false);
    setConfirmDelete({ open: false, plan: null });
  };

  const handleSave = async () => {
    // Validation
    const error: FormState = { Name: "", Description: "" };
    if (!form.Name.trim()) error.Name = "Tên không được để trống";
    if (!form.Description.trim()) error.Description = "Mô tả không được để trống";
    setFormError(error);
    if (error.Name || error.Description) return;
    setSaveLoading(true);
    setLoading(true);
    try {
      if (editPlan) {
        // Edit
        const res = await axios.put("/api/admin/studyplan", { SPID: editPlan.SPID, ...form });
        setStudyPlans(studyPlans.map((p) => (p.SPID === editPlan.SPID ? { ...res.data.studyPlan, studyplanitem: editPlan.studyplanitem } : p)));
        setSnackbar({ open: true, message: "Cập nhật thành công!", severity: "success" });
      } else {
        // Add
        const res = await axios.post("/api/admin/studyplan", form);
        setStudyPlans([...studyPlans, res.data.studyPlan]);
        setSnackbar({ open: true, message: "Thêm mới thành công!", severity: "success" });
      }
      setDialogOpen(false);
    } catch {
      setSnackbar({ open: true, message: "Có lỗi xảy ra!", severity: "error" });
    }
    setSaveLoading(false);
    setLoading(false);
  };

  const filteredPlans = studyPlans.filter((plan) =>
    plan.Name?.toLowerCase().includes(search.toLowerCase())
  );

  const highlight = (text: string) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={i} style={{ background: "#ffe082", fontWeight: 600 }}>{part}</span>
      ) : (
        part
      )
    );
  };

  // 6. RENDER
  return (
    <>
      <Box>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          Quản lý khóa học
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 2, alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <Button variant="contained" onClick={handleAdd} fullWidth>
              Thêm khóa học
            </Button>
          </Box>
          <Box sx={{ flex: 2 }}>
            <TextField
              fullWidth
              placeholder="Tìm kiếm khóa học..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <>
            {detailPlan ? (
              <Box>
                <Button
                  startIcon={<ArrowBackIcon />}
                  onClick={() => setDetailPlan(null)}
                  sx={{ mb: 2 }}
                >
                  Quay lại danh sách khóa học
                </Button>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                    {detailPlan.Name} (ID: {detailPlan.SPID})
                  </Typography>
                  <Typography sx={{ mb: 2 }}>{detailPlan.Description}</Typography>
                  <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                    Danh sách chương học ({detailPlan.studyplanitem.length})
                  </Typography>
                  {/* Nút thêm chương học */}
                  <Box sx={{ mb: 2 }}>
                    <Button variant="outlined" onClick={() => setAddItemDialogOpen(true)}>
                      Thêm chương học
                    </Button>
                  </Box>
                  {detailPlan.studyplanitem.length === 0 ? (
                    <Typography color="text.secondary">Chưa có chương học.</Typography>
                  ) : (
                    detailPlan.studyplanitem.map((item) => (
                      <Box key={item.SPIID} sx={{ mb: 3, pl: 2, borderLeft: "2px solid #eee" }}>
                        <Typography fontWeight={500} sx={{ mb: 1 }}>
                          {item.Name} (ID: {item.SPIID})
                        </Typography>
                        <Typography variant="body2" fontWeight={500} sx={{ mt: 1 }}>
                          Bài tập:
                        </Typography>
                        {item.exercise.length === 0 ? (
                          <Typography color="text.secondary" sx={{ pl: 2 }}>
                            Chưa có bài tập.
                          </Typography>
                        ) : (
                          <ul>
                            {item.exercise.map((ex) => (
                              <li key={ex.EID}>
                                {ex.Name} (ID: {ex.EID})
                              </li>
                            ))}
                          </ul>
                        )}
                      </Box>
                    ))
                  )}
                  <Box sx={{ display: "flex", gap: 2, mt: 4, justifyContent: "flex-end" }}>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteClick(detailPlan)}
                    >
                      Xóa
                    </Button>
                  </Box>
                </Paper>
                {/* Dialog thêm chương học */}
                <Dialog open={addItemDialogOpen} onClose={() => setAddItemDialogOpen(false)}>
                  <DialogTitle>Thêm chương học mới</DialogTitle>
                  <DialogContent>
                    <TextField
                      label="Tên chương học"
                      fullWidth
                      margin="dense"
                      value={addItemForm.Name}
                      onChange={e => setAddItemForm({ Name: e.target.value })}
                      error={!!addItemFormError}
                      helperText={addItemFormError}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setAddItemDialogOpen(false)} disabled={addItemLoading}>Hủy</Button>
                    <Button
                      onClick={async () => {
                        // Validate
                        if (!addItemForm.Name.trim()) {
                          setAddItemFormError("Tên chương học không được để trống");
                          return;
                        }
                        setAddItemFormError("");
                        setAddItemLoading(true);
                        try {
                          // Gọi API tạo chương học mới
                          const res = await axios.post("/api/admin/studyplanitem", {
                            SPID: detailPlan?.SPID,
                            Name: addItemForm.Name.trim(),
                          });
                          // Cập nhật detailPlan và studyPlans
                          if (res.data.studyPlanItem) {
                            const newItem = { ...res.data.studyPlanItem, exercise: [] };
                            setDetailPlan(prev => prev ? { ...prev, studyplanitem: [...prev.studyplanitem, newItem] } : prev);
                            setStudyPlans(prev => prev.map(p =>
                              p.SPID === detailPlan?.SPID
                                ? { ...p, studyplanitem: [...p.studyplanitem, newItem] }
                                : p
                            ));
                            setSnackbar({ open: true, message: "Thêm chương học thành công!", severity: "success" });
                            setAddItemDialogOpen(false);
                            setAddItemForm({ Name: "" });
                          } else {
                            setSnackbar({ open: true, message: "Không thể thêm chương học!", severity: "error" });
                          }
                        } catch {
                          setSnackbar({ open: true, message: "Có lỗi khi thêm chương học!", severity: "error" });
                        }
                        setAddItemLoading(false);
                      }}
                      variant="contained"
                      disabled={addItemLoading}
                    >
                      Lưu
                    </Button>
                  </DialogActions>
                </Dialog>
                {/* Dialogs */}
                <Dialog open={confirmDelete.open} onClose={() => setConfirmDelete({ open: false, plan: null })}>
                  <DialogTitle>Xác nhận xóa khóa học</DialogTitle>
                  <DialogContent>
                    <Alert severity="warning" sx={{ mb: 2 }}>
                      Nếu xóa khóa học này, toàn bộ chương học và bài tập thuộc khóa học sẽ bị xóa hoặc chuyển về trạng thái không thuộc khóa học!
                    </Alert>
                    <Typography>
                      Bạn có chắc chắn muốn xóa khóa học <b>{confirmDelete.plan?.Name}</b>?
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setConfirmDelete({ open: false, plan: null })} color="primary">
                      Hủy
                    </Button>
                    <Button onClick={handleDeleteConfirm} color="error" variant="contained" autoFocus>
                      Xóa
                    </Button>
                  </DialogActions>
                </Dialog>
                <Snackbar
                  open={snackbar.open}
                  autoHideDuration={3000}
                  onClose={() => setSnackbar({ ...snackbar, open: false })}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
                    {snackbar.message}
                  </Alert>
                </Snackbar>
              </Box>
            ) : (
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ width: '10%' }}>ID</TableCell>
                        <TableCell sx={{ width: '20%' }}>Tên khóa học</TableCell>
                        <TableCell sx={{ width: '40%' }}>Mô tả</TableCell>
                        <TableCell sx={{ width: '15%' }}>Chương học</TableCell>
                        <TableCell sx={{ width: '15%' }}>Hành động</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredPlans.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} align="center">Không có khóa học nào.</TableCell>
                        </TableRow>
                      ) : (
                        filteredPlans.map((plan) => (
                          <TableRow key={plan.SPID}>
                            <TableCell>{plan.SPID}</TableCell>
                            <TableCell>{highlight(plan.Name)}</TableCell>
                            <TableCell>{highlight(plan.Description)}</TableCell>
                            <TableCell>
                              <Chip label={`${plan.studyplanitem.length} chương`} size="small" sx={{ mb: 1 }} />
                              <Chip label={`${plan.studyplanitem.reduce((acc, item) => acc + item.exercise.length, 0)} bài tập`} size="small" />
                            </TableCell>
                            <TableCell>
                              <Tooltip title="Xem chi tiết">
                                <span>
                                  <IconButton
                                    onClick={() => setDetailPlan(plan)}
                                    size="small"
                                    sx={{ mr: 1 }}
                                    color="primary"
                                  >
                                    <VisibilityIcon />
                                  </IconButton>
                                </span>
                              </Tooltip>
                              <Tooltip title="Sửa">
                                <span>
                                  <IconButton onClick={() => handleEdit(plan)} size="small">
                                    <EditIcon />
                                  </IconButton>
                                </span>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </>
        )}
      </Box>
      {/* Di chuyển Dialog thêm/sửa khóa học ra ngoài, luôn render */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>{editPlan ? "Sửa khóa học" : "Thêm khóa học"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Tên khóa học"
            fullWidth
            margin="dense"
            value={form.Name}
            onChange={(e) => setForm({ ...form, Name: e.target.value })}
            error={!!formError.Name}
            helperText={formError.Name}
          />
          <TextField
            label="Mô tả"
            fullWidth
            margin="dense"
            value={form.Description}
            onChange={(e) => setForm({ ...form, Description: e.target.value })}
            error={!!formError.Description}
            helperText={formError.Description}
            multiline
            minRows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} disabled={saveLoading}>Hủy</Button>
          <Button onClick={handleSave} variant="contained" disabled={saveLoading} startIcon={saveLoading ? <CircularProgress size={18} /> : null}>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}