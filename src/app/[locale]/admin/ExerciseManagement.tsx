import React from "react";
import {
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Pagination,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
  Card,
  IconButton,
  Tooltip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Snackbar,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PAGE_SIZE = 50;
const DIFFICULTY_OPTIONS = [
  { label: "Tất cả", value: "all" },
  { label: "Dễ", value: "Easy" },
  { label: "Vừa", value: "Medium" },
  { label: "Khó", value: "Hard" },
];

const STATUS_OPTIONS = [
  { label: "Tất cả", value: "all" },
  { label: "Hoạt động", value: "active" },
  { label: "Đã xóa", value: "deleted" },
];

const CREATE_DIFFICULTY_OPTIONS = [
  { label: "Dễ", value: "Easy" },
  { label: "Vừa", value: "Medium" },
  { label: "Khó", value: "Hard" },
];

export default function ExerciseManagement() {
  const [exercises, setExercises] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [eid, setEid] = React.useState("");
  const [tpId, setTpId] = React.useState("");
  const [spiId, setSpiId] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [showCreateForm, setShowCreateForm] = React.useState(false);
  const [showDetailForm, setShowDetailForm] = React.useState(false);
  const [selectedExercise, setSelectedExercise] = React.useState<any>(null);
  const [topics, setTopics] = React.useState<any[]>([]);
  const [deleting, setDeleting] = React.useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [restoreDialogOpen, setRestoreDialogOpen] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState<{ open: boolean; message: string; severity: "success" | "error" }>({
    open: false,
    message: "",
    severity: "success",
  });
  const [form, setForm] = React.useState({
    TpID: "",
    Name: "",
    Slug: "",
    Content: "",
    Tips: "",
    Image: "",
    Difficulty: "Easy",
    template: "#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}",
    testcases: [] as any[],
  });
  const [tcInput, setTcInput] = React.useState("");
  const [tcOutput, setTcOutput] = React.useState("");
  const [tcHidden, setTcHidden] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [slugError, setSlugError] = React.useState("");
  const [editMode, setEditMode] = React.useState(false);
  const [editForm, setEditForm] = React.useState<any>(null);

  const fetchExercises = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/admin/exercise");
      setExercises(res.data.exercises || []);
    } catch {
      setExercises([]);
    }
    setLoading(false);
  };
  React.useEffect(() => {
    fetchExercises();
  }, []);

  // Lấy danh sách chủ đề cho dropdown TpID
  React.useEffect(() => {
    if (showCreateForm) {
      axios.get("/api/admin/topics").then((res) => setTopics(res.data.topics || []));
    }
  }, [showCreateForm]);

  const handleAddTestcase = () => {
    if (!tcInput || !tcOutput) return;
    setForm((f) => ({ ...f, testcases: [...f.testcases, { Input: tcInput, ExpectedOutput: tcOutput, isHidden: tcHidden }] }));
    setTcInput("");
    setTcOutput("");
    setTcHidden(false);
  };

  const handleRemoveTestcase = (idx: number) => {
    setForm((f) => ({ ...f, testcases: f.testcases.filter((_, i) => i !== idx) }));
  };

  const handleChange = (field: string, value: any) => {
    setForm((f) => ({ ...f, [field]: value }));

    // Validate slug when it changes
    if (field === "Slug") {
      const slugRegex = /^[a-z0-9-]+$/;
      if (value && !slugRegex.test(value)) {
        setSlugError("Slug chỉ được chứa chữ cái thường (a-z), số (0-9 và dấu gạch ngang (-))");
      } else {
        setSlugError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate slug before submitting
    const slugRegex = /^[a-z0-9-]+$/;
    if (form.Slug && !slugRegex.test(form.Slug)) {
      setSlugError("Slug chỉ được chứa chữ cái thường (a-z), số (0-9 và dấu gạch ngang (-))");
      return;
    }

    setSubmitting(true);
    try {
      await axios.post("/api/admin/exercise", form);
      setShowCreateForm(false);
      setForm({
        TpID: "",
        Name: "",
        Slug: "",
        Content: "",
        Tips: "",
        Image: "",
        Difficulty: "Easy",
        template: "#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}",
        testcases: [],
      });
      fetchExercises(); // Refresh the list
    } catch (err) {
      alert("Tạo bài tập thất bại!");
    }
    setSubmitting(false);
  };

  const handleViewExercise = async (eid: number) => {
    try {
      // Fetch topics nếu chưa có
      if (!topics || topics.length === 0) {
        const res = await axios.get("/api/admin/topics");
        setTopics(res.data.topics || []);
      }
      const [exerciseRes, testcasesRes] = await Promise.all([
        axios.get(`/api/admin/exercise/${eid}`),
        axios.get(`/api/testcases/by-exercise/${eid}`),
      ]);

      const exercise = exerciseRes.data.exercise;
      const testcases = testcasesRes.data.testcases || [];

      setSelectedExercise({
        ...exercise,
        testcases: testcases.map((tc: any) => ({
          Input: tc.Input,
          ExpectedOutput: tc.ExpectedOutput,
          isHidden: tc.isHidden,
        })),
      });
      setShowDetailForm(true);
    } catch (err) {
      alert("Không thể tải thông tin bài tập!");
    }
  };

  const handleSoftDelete = async () => {
    if (!selectedExercise) return;

    setDeleting(true);
    try {
      await axios.patch("/api/admin/exercise", {
        EID: selectedExercise.EID,
        action: "delete",
      });
      setSnackbar({ open: true, message: "Đã xóa bài tập thành công!", severity: "success" });
      setShowDetailForm(false);
      fetchExercises(); // Refresh the list
    } catch (err) {
      setSnackbar({ open: true, message: "Xóa bài tập thất bại!", severity: "error" });
    }
    setDeleting(false);
    setDeleteDialogOpen(false);
  };

  const handleRestore = async () => {
    if (!selectedExercise) return;

    setDeleting(true);
    try {
      await axios.patch("/api/admin/exercise", {
        EID: selectedExercise.EID,
        action: "restore",
      });
      setSnackbar({ open: true, message: "Đã khôi phục bài tập thành công!", severity: "success" });
      setShowDetailForm(false);
      fetchExercises(); // Refresh the list
    } catch (err) {
      setSnackbar({ open: true, message: "Khôi phục bài tập thất bại!", severity: "error" });
    }
    setDeleting(false);
    setRestoreDialogOpen(false);
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleRestoreClick = () => {
    setRestoreDialogOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleEditClick = () => {
    if (!selectedExercise) return;
    setEditForm({
      TpID: selectedExercise.TpID ?? "",
      Name: selectedExercise.Name ?? "",
      Slug: selectedExercise.Slug ?? "",
      Content: selectedExercise.Content ?? "",
      Tips: selectedExercise.Tips ?? "",
      Image: selectedExercise.Image ?? "",
      Difficulty: selectedExercise.Difficulty ?? "Easy",
      template: selectedExercise.template ?? "",
    });
    setEditMode(true);
  };

  const handleEditFormChange = (field: string, value: any) => {
    setEditForm((f: any) => ({ ...f, [field]: value }));
  };

  const handleEditCancel = () => {
    setEditMode(false);
    setEditForm(null);
  };

  // Đóng form chi tiết (mũi tên hoặc nút Đóng)
  const handleCloseDetail = () => {
    setShowDetailForm(false);
    setEditMode(false);
    setEditForm(null);
  };

  const handleEditSave = async () => {
    if (!selectedExercise) return;
    // Validate slug
    const slugRegex = /^[a-z0-9-]+$/;
    if (editForm.Slug && !slugRegex.test(editForm.Slug)) {
      setSnackbar({ open: true, message: "Slug chỉ được chứa chữ cái thường (a-z), số (0-9) và dấu gạch ngang (-)", severity: "error" });
      return;
    }
    try {
      await axios.patch(`/api/admin/exercise/${selectedExercise.EID}`, editForm);
      setSnackbar({ open: true, message: "Cập nhật bài tập thành công!", severity: "success" });
      setEditMode(false);
      setEditForm(null);
      // Refresh detail
      handleViewExercise(selectedExercise.EID);
      fetchExercises();
    } catch (err) {
      setSnackbar({ open: true, message: "Cập nhật bài tập thất bại!", severity: "error" });
    }
  };

  // Lọc theo tìm kiếm và filter
  const filteredExercises = exercises.filter((ex) => {
    if (search && !(ex.Name.toLowerCase().includes(search.toLowerCase()) || ex.Slug.toLowerCase().includes(search.toLowerCase()))) return false;
    if (eid && String(ex.EID) !== eid) return false;
    if (tpId === "__NULL__" && ex.TpID !== null) return false;
    if (tpId && tpId !== "__NULL__" && String(ex.TpID ?? "") !== tpId) return false;
    if (spiId === "__NULL__" && ex.SPIID !== null) return false;
    if (spiId && spiId !== "__NULL__" && String(ex.SPIID ?? "") !== spiId) return false;
    if (difficulty !== "all" && ex.Difficulty !== difficulty) return false;
    if (statusFilter === "active" && ex.isDeleted) return false;
    if (statusFilter === "deleted" && !ex.isDeleted) return false;
    return true;
  });

  // Tính toán phân trang
  const totalPages = Math.ceil(filteredExercises.length / PAGE_SIZE) || 1;
  const pagedExercises = filteredExercises.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Reset về trang 1 khi search/filter thay đổi
  React.useEffect(() => {
    setPage(1);
  }, [search, eid, tpId, spiId, difficulty, statusFilter]);

  return (
    <Box>
      {/* Nếu đang ở chế độ tạo bài tập mới, chỉ hiển thị form và nút back */}
      {showCreateForm ? (
        <>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <IconButton onClick={() => setShowCreateForm(false)}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" fontWeight={700} sx={{ ml: 1 }}>
              Tạo bài tập mới
            </Typography>
          </Box>
          <Card sx={{ mb: 3, p: 4, borderRadius: 3, boxShadow: 2, bgcolor: "#fff", border: "1px solid #e2e8f0" }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3} direction={{ xs: "column", md: "row" }}>
                <Stack spacing={2} flex={1}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Chủ đề (TpID)</InputLabel>
                    <Select label="Chủ đề (TpID)" value={form.TpID} onChange={(e) => handleChange("TpID", e.target.value)}>
                      <MenuItem value="">null</MenuItem>
                      {topics.map((tp: any) => (
                        <MenuItem key={tp.TpID} value={tp.TpID}>
                          {tp.Name} (ID: {tp.TpID})
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    label="Slug"
                    size="small"
                    value={form.Slug}
                    onChange={(e) => handleChange("Slug", e.target.value)}
                    fullWidth
                    required
                    error={!!slugError}
                    helperText={slugError}
                    sx={{ minWidth: 140 }}
                  />
                  <FormControl fullWidth size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Độ khó</InputLabel>
                    <Select label="Độ khó" value={form.Difficulty} onChange={(e) => handleChange("Difficulty", e.target.value)}>
                      {CREATE_DIFFICULTY_OPTIONS.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    label="Tên bài tập"
                    size="small"
                    value={form.Name}
                    onChange={(e) => handleChange("Name", e.target.value)}
                    fullWidth
                    required
                  />
                  <TextField
                    label="Nội dung mô tả"
                    size="small"
                    value={form.Content}
                    onChange={(e) => handleChange("Content", e.target.value)}
                    fullWidth
                    required
                    multiline
                    minRows={2}
                  />
                  <TextField
                    label="Tips"
                    size="small"
                    value={form.Tips}
                    onChange={(e) => handleChange("Tips", e.target.value)}
                    fullWidth
                    multiline
                    minRows={1}
                  />
                  <TextField label="Image (URL)" size="small" value={form.Image} onChange={(e) => handleChange("Image", e.target.value)} fullWidth />
                  <TextField
                    label="Template code"
                    size="small"
                    value={form.template}
                    onChange={(e) => handleChange("template", e.target.value)}
                    fullWidth
                    multiline
                    minRows={2}
                  />
                </Stack>
                <Box flex={1} minWidth={320} pl={{ md: 2 }} sx={{ borderLeft: { md: "1.5px solid #e2e8f0" }, bgcolor: "#f9fafb", borderRadius: 2 }}>
                  <Typography fontWeight={600} sx={{ mb: 2, mt: 1 }}>
                    Danh sách testcase
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <TextField
                      label="Input"
                      size="small"
                      value={tcInput}
                      onChange={(e) => setTcInput(e.target.value)}
                      sx={{ flex: 1 }}
                      multiline
                      minRows={1}
                    />
                    <TextField
                      label="ExpectedOutput"
                      size="small"
                      value={tcOutput}
                      onChange={(e) => setTcOutput(e.target.value)}
                      sx={{ flex: 1 }}
                      multiline
                      minRows={1}
                    />
                    <FormControl size="small" sx={{ minWidth: 90 }}>
                      <InputLabel>Ẩn?</InputLabel>
                      <Select label="Ẩn?" value={tcHidden ? 1 : 0} onChange={(e) => setTcHidden(Boolean(Number(e.target.value)))}>
                        <MenuItem value={0}>Hiện</MenuItem>
                        <MenuItem value={1}>Ẩn</MenuItem>
                      </Select>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={handleAddTestcase} sx={{ minWidth: 80, fontWeight: 600 }}>
                      <AddIcon sx={{ mr: 1 }} />
                      Thêm
                    </Button>
                  </Stack>
                  <Box>
                    {form.testcases.length === 0 ? (
                      <Typography color="text.secondary">Chưa có testcase nào</Typography>
                    ) : (
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Input</TableCell>
                            <TableCell>ExpectedOutput</TableCell>
                            <TableCell>Ẩn?</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {form.testcases.map((tc, idx) => (
                            <TableRow key={idx}>
                              <TableCell>{tc.Input}</TableCell>
                              <TableCell>{tc.ExpectedOutput}</TableCell>
                              <TableCell>{tc.isHidden ? "Ẩn" : "Hiện"}</TableCell>
                              <TableCell>
                                <IconButton size="small" color="error" onClick={() => handleRemoveTestcase(idx)}>
                                  <CloseIcon fontSize="small" />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                  </Box>
                </Box>
              </Stack>
              <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 2 }}>
                <Button variant="outlined" color="secondary" onClick={() => setShowCreateForm(false)}>
                  Hủy
                </Button>
                <Button type="submit" variant="contained" color="primary" disabled={submitting}>
                  Tạo bài tập
                </Button>
              </Box>
            </form>
          </Card>
        </>
      ) : showDetailForm && selectedExercise ? (
        <>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <IconButton onClick={handleCloseDetail}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" fontWeight={700} sx={{ ml: 1 }}>
              Chi tiết bài tập: {selectedExercise.Name}
              {selectedExercise.isDeleted ? (
                <Typography component="span" color="error" sx={{ ml: 1, fontSize: "0.8em" }}>
                  (Đã xóa)
                </Typography>
              ) : null}
            </Typography>
          </Box>
          <Card sx={{ mb: 3, p: 4, borderRadius: 3, boxShadow: 2, bgcolor: "#fff", border: "1px solid #e2e8f0" }}>
            {editMode ? (
              <Stack spacing={3} direction={{ xs: "column", md: "row" }}>
                <Stack spacing={2} flex={1}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Chủ đề (TpID)</InputLabel>
                    <Select label="Chủ đề (TpID)" value={editForm.TpID} onChange={e => handleEditFormChange("TpID", e.target.value)}>
                      <MenuItem value="">null</MenuItem>
                      {topics.map((tp: any) => (
                        <MenuItem key={tp.TpID} value={tp.TpID}>{tp.Name} (ID: {tp.TpID})</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField label="Slug" size="small" value={editForm.Slug} onChange={e => handleEditFormChange("Slug", e.target.value)} fullWidth required sx={{ minWidth: 140 }} />
                  <FormControl fullWidth size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Độ khó</InputLabel>
                    <Select label="Độ khó" value={editForm.Difficulty} onChange={e => handleEditFormChange("Difficulty", e.target.value)}>
                      {CREATE_DIFFICULTY_OPTIONS.map(opt => (
                        <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField label="Tên bài tập" size="small" value={editForm.Name} onChange={e => handleEditFormChange("Name", e.target.value)} fullWidth required />
                  <TextField label="Nội dung mô tả" size="small" value={editForm.Content} onChange={e => handleEditFormChange("Content", e.target.value)} fullWidth required multiline minRows={2} />
                  <TextField label="Tips" size="small" value={editForm.Tips} onChange={e => handleEditFormChange("Tips", e.target.value)} fullWidth multiline minRows={1} />
                  <TextField label="Image (URL)" size="small" value={editForm.Image} onChange={e => handleEditFormChange("Image", e.target.value)} fullWidth />
                  <TextField label="Template code" size="small" value={editForm.template} onChange={e => handleEditFormChange("template", e.target.value)} fullWidth multiline minRows={2} />
                </Stack>
                <Box flex={1} minWidth={320} pl={{ md: 2 }} sx={{ borderLeft: { md: "1.5px solid #e2e8f0" }, bgcolor: "#f9fafb", borderRadius: 2 }}>
                  <Typography fontWeight={600} sx={{ mb: 2, mt: 1 }}>
                    Danh sách testcase
                  </Typography>
                  <Box>
                    {selectedExercise.testcases.length === 0 ? (
                      <Typography color="text.secondary">Không có testcase nào</Typography>
                    ) : (
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Input</TableCell>
                            <TableCell>ExpectedOutput</TableCell>
                            <TableCell>Ẩn?</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {selectedExercise.testcases.map((tc: any, idx: number) => (
                            <TableRow key={idx}>
                              <TableCell sx={{ whiteSpace: "pre-wrap" }}>{tc.Input}</TableCell>
                              <TableCell sx={{ whiteSpace: "pre-wrap" }}>{tc.ExpectedOutput}</TableCell>
                              <TableCell>{tc.isHidden ? "Ẩn" : "Hiện"}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                  </Box>
                </Box>
              </Stack>
            ) : (
              <Stack spacing={3} direction={{ xs: "column", md: "row" }}>
                <Stack spacing={2} flex={1}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Chủ đề (TpID)</InputLabel>
                    <Select label="Chủ đề (TpID)" value={selectedExercise.TpID || ""} disabled>
                      <MenuItem value="">null</MenuItem>
                      {topics.map((tp: any) => (
                        <MenuItem key={tp.TpID} value={tp.TpID}>{tp.Name} (ID: {tp.TpID})</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField label="Slug" size="small" value={selectedExercise.Slug} fullWidth disabled sx={{ minWidth: 140 }} />
                  <FormControl fullWidth size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Độ khó</InputLabel>
                    <Select label="Độ khó" value={selectedExercise.Difficulty} disabled>
                      {CREATE_DIFFICULTY_OPTIONS.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField label="Tên bài tập" size="small" value={selectedExercise.Name} fullWidth disabled />
                  <TextField label="Nội dung mô tả" size="small" value={selectedExercise.Content} fullWidth multiline minRows={2} disabled />
                  <TextField label="Tips" size="small" value={selectedExercise.Tips || ""} fullWidth multiline minRows={1} disabled />
                  <TextField label="Image (URL)" size="small" value={selectedExercise.Image || ""} fullWidth disabled />
                  <TextField label="Template code" size="small" value={selectedExercise.template || ""} fullWidth multiline minRows={2} disabled />
                </Stack>
                <Box flex={1} minWidth={320} pl={{ md: 2 }} sx={{ borderLeft: { md: "1.5px solid #e2e8f0" }, bgcolor: "#f9fafb", borderRadius: 2 }}>
                  <Typography fontWeight={600} sx={{ mb: 2, mt: 1 }}>
                    Danh sách testcase
                  </Typography>
                  <Box>
                    {selectedExercise.testcases.length === 0 ? (
                      <Typography color="text.secondary">Không có testcase nào</Typography>
                    ) : (
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Input</TableCell>
                            <TableCell>ExpectedOutput</TableCell>
                            <TableCell>Ẩn?</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {selectedExercise.testcases.map((tc: any, idx: number) => (
                            <TableRow key={idx}>
                              <TableCell sx={{ whiteSpace: "pre-wrap" }}>{tc.Input}</TableCell>
                              <TableCell sx={{ whiteSpace: "pre-wrap" }}>{tc.ExpectedOutput}</TableCell>
                              <TableCell>{tc.isHidden ? "Ẩn" : "Hiện"}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                  </Box>
                </Box>
              </Stack>
            )}
            <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end", gap: 2 }}>
              {editMode ? (
                <>
                  <Button variant="outlined" color="secondary" onClick={handleEditCancel}>Hủy</Button>
                  <Button variant="contained" color="primary" onClick={handleEditSave}>Lưu</Button>
                </>
              ) : selectedExercise.isDeleted ? (
                <Button variant="outlined" color="success" onClick={handleRestoreClick} disabled={deleting}>
                  {deleting ? "Đang khôi phục..." : "Khôi phục"}
                </Button>
              ) : (
                <Button variant="outlined" color="error" onClick={handleDeleteClick} disabled={deleting}>
                  {deleting ? "Đang xóa..." : "Xóa"}
                </Button>
              )}
              {!editMode && (
                <Button variant="outlined" color="primary" onClick={handleEditClick}>
                  Chỉnh sửa
                </Button>
              )}
              <Button variant="outlined" color="secondary" onClick={handleCloseDetail}>
                Đóng
              </Button>
            </Box>
          </Card>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6" fontWeight={600}>
              Danh sách bài tập
            </Typography>
            <Box>
              <button
                style={{
                  background: "#1976d2",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "8px 18px",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(25,118,210,0.08)",
                  transition: "background 0.2s",
                  marginLeft: 8,
                }}
                onClick={() => setShowCreateForm(true)}
              >
                <AddIcon sx={{ mr: 1, mb: "-2px" }} /> Thêm bài tập mới
              </button>
            </Box>
          </Box>
          {/* Bộ lọc và bảng danh sách bài tập */}
          <Card sx={{ mb: 3, p: { xs: 2, sm: 3 }, borderRadius: 3, boxShadow: 2, bgcolor: "#f8fafc", border: "1px solid #e2e8f0" }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
              <TextField
                size="small"
                placeholder="Nhập tên hoặc slug..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
                sx={{ minWidth: 220, bgcolor: "white", borderRadius: 2 }}
              />
              <TextField
                label="EID"
                size="small"
                type="number"
                value={eid}
                onChange={(e) => setEid(e.target.value)}
                sx={{ width: 110, bgcolor: "white", borderRadius: 2 }}
              />
              <FormControl size="small" sx={{ minWidth: 130, bgcolor: "white", borderRadius: 2 }}>
                <InputLabel>TpID</InputLabel>
                <Select label="TpID" value={tpId} onChange={(e) => setTpId(e.target.value)}>
                  <MenuItem value="">Tất cả</MenuItem>
                  <MenuItem value="__NULL__">null</MenuItem>
                  {[...new Set(exercises.map((ex) => ex.TpID).filter((id) => id !== null))]
                    .sort((a, b) => a - b)
                    .map((id) => (
                      <MenuItem key={id} value={String(id)}>
                        {id}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ minWidth: 130, bgcolor: "white", borderRadius: 2 }}>
                <InputLabel>SPIID</InputLabel>
                <Select label="SPIID" value={spiId} onChange={(e) => setSpiId(e.target.value)}>
                  <MenuItem value="">Tất cả</MenuItem>
                  <MenuItem value="__NULL__">null</MenuItem>
                  {[...new Set(exercises.map((ex) => ex.SPIID).filter((id) => id !== null))]
                    .sort((a, b) => a - b)
                    .map((id) => (
                      <MenuItem key={id} value={String(id)}>
                        {id}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ minWidth: 130, bgcolor: "white", borderRadius: 2 }}>
                <InputLabel>Độ khó</InputLabel>
                <Select label="Độ khó" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                  {DIFFICULTY_OPTIONS.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ minWidth: 130, bgcolor: "white", borderRadius: 2 }}>
                <InputLabel>Trạng thái</InputLabel>
                <Select label="Trạng thái" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                  {STATUS_OPTIONS.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Card>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>EID</TableCell>
                  <TableCell>TpID</TableCell>
                  <TableCell>SPIID</TableCell>
                  <TableCell>Tên bài tập</TableCell>
                  <TableCell>Slug</TableCell>
                  <TableCell>Độ khó</TableCell>
                  <TableCell align="center">Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} align="center">
                      <CircularProgress size={28} />
                    </TableCell>
                  </TableRow>
                ) : pagedExercises.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} align="center">
                      Không có bài tập
                    </TableCell>
                  </TableRow>
                ) : (
                  pagedExercises.map((ex) => (
                    <TableRow 
                      key={ex.EID}
                                              sx={{
                          ...(ex.isDeleted && {
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: '50%',
                              left: 0,
                              width: 'calc(100% - 120px)', // Exclude the last column (actions)
                              height: '2px',
                              backgroundColor: 'error.main',
                              zIndex: 1,
                            },
                            '& td:not(:last-child)': {
                              color: 'text.disabled',
                              position: 'relative',
                              zIndex: 2,
                            }
                          })
                        }}
                    >
                      <TableCell>{ex.EID}</TableCell>
                      <TableCell>{ex.TpID ?? ""}</TableCell>
                      <TableCell>{ex.SPIID ?? ""}</TableCell>
                      <TableCell>{ex.Name}</TableCell>
                      <TableCell>{ex.Slug}</TableCell>
                      <TableCell>{ex.Difficulty}</TableCell>
                      <TableCell align="center">
                        <Tooltip title="Xem chi tiết">
                          <IconButton color="primary" onClick={() => handleViewExercise(ex.EID)}>
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Pagination count={totalPages} page={page} onChange={handleChangePage} color="primary" />
          </Box>
        </>
      )}
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Xác nhận xóa</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Bạn có chắc chắn muốn xóa bài tập này? Hành động này không thể hoàn tác.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
            Hủy
          </Button>
          <Button onClick={handleSoftDelete} color="error" variant="contained">
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={restoreDialogOpen}
        onClose={() => setRestoreDialogOpen(false)}
        aria-labelledby="restore-dialog-title"
        aria-describedby="restore-dialog-description"
      >
        <DialogTitle id="restore-dialog-title">Xác nhận khôi phục</DialogTitle>
        <DialogContent>
          <DialogContentText id="restore-dialog-description">Bạn có chắc chắn muốn khôi phục bài tập này?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRestoreDialogOpen(false)} color="primary">
            Hủy
          </Button>
          <Button onClick={handleRestore} color="success" variant="contained">
            Khôi phục
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
