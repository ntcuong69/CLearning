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
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";

// 2. TYPES
interface StudyPlan {
  SPID: number;
  Name: string;
  Description: string;
  Slug: string;
  studyplanitem: StudyPlanItem[];
}

interface StudyPlanItem {
  SPIID: number;
  Name: string;
  Description: string;
  exercise: Exercise[];
}

interface Exercise {
  EID: number;
  Name: string;
}

interface AvailableExercise {
  EID: number;
  Name: string;
  Difficulty: string;
  Slug: string;
}

interface FormState {
  Name: string;
  Description: string;
  Slug: string;
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

interface ConfirmDeleteItemsState {
  open: boolean;
  selectedItems: number[];
  plan: StudyPlan | null;
}

interface ConfirmDeleteExercisesState {
  open: boolean;
  selectedExercises: number[];
  spiid: number | null;
  plan: StudyPlan | null;
}

interface EditItemFormState {
  Name: string;
  Description: string;
}

// Thêm type cho form thêm chương học
interface AddItemFormState {
  Name: string;
  Description: string;
}

// 3. COMPONENT
export default function StudyplanManagement() {
  // STATE
  const [studyPlans, setStudyPlans] = useState<StudyPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editPlan, setEditPlan] = useState<StudyPlan | null>(null);
  const [form, setForm] = useState<FormState>({ Name: "", Description: "", Slug: "" });
  const [search, setSearch] = useState("");
  const [snackbar, setSnackbar] = useState<SnackbarState>({ open: false, message: "", severity: "success" });
  const [saveLoading, setSaveLoading] = useState(false);
  const [formError, setFormError] = useState<FormState>({ Name: "", Description: "", Slug: "" });
  const [confirmDelete, setConfirmDelete] = useState<ConfirmDeleteState>({ open: false, plan: null });
  const [confirmDeleteItems, setConfirmDeleteItems] = useState<ConfirmDeleteItemsState>({ open: false, selectedItems: [], plan: null });
  const [confirmDeleteExercises, setConfirmDeleteExercises] = useState<ConfirmDeleteExercisesState>({ open: false, selectedExercises: [], spiid: null, plan: null });
  const [detailPlan, setDetailPlan] = useState<StudyPlan | null>(null);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedExercisesByChapter, setSelectedExercisesByChapter] = useState<{ [spiid: number]: number[] }>({});

  // Thêm state cho dialog thêm chương học
  const [addItemDialogOpen, setAddItemDialogOpen] = useState(false);
  const [addItemForm, setAddItemForm] = useState<AddItemFormState>({ Name: "", Description: "" });
  const [addItemFormError, setAddItemFormError] = useState<string>("");
  const [addItemLoading, setAddItemLoading] = useState(false);

  // Thêm state cho dialog chỉnh sửa chương học
  const [editItemDialogOpen, setEditItemDialogOpen] = useState(false);
  const [editItemForm, setEditItemForm] = useState<EditItemFormState>({ Name: "", Description: "" });
  const [editItemFormError, setEditItemFormError] = useState<string>("");
  const [editItemLoading, setEditItemLoading] = useState(false);
  const [editingItem, setEditingItem] = useState<StudyPlanItem | null>(null);

  // Thêm state cho dialog thêm bài tập
  const [addExerciseDialogOpen, setAddExerciseDialogOpen] = useState(false);
  const [currentSPIID, setCurrentSPIID] = useState<number | null>(null);
  const [availableExercises, setAvailableExercises] = useState<AvailableExercise[]>([]);
  const [addExerciseLoading, setAddExerciseLoading] = useState(false);
  const [exerciseSearch, setExerciseSearch] = useState("");
  const [exerciseDifficulty, setExerciseDifficulty] = useState<string>("all");

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
    setForm({ Name: "", Description: "", Slug: "" });
    setDialogOpen(true);
  };

  const handleEdit = (plan: StudyPlan) => {
    setEditPlan(plan);
    setForm({ Name: plan.Name, Description: plan.Description, Slug: plan.Slug || "" });
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
    } catch (error: any) {
      console.error("Delete error:", error);
      const errorMessage = error.response?.data?.error || "Xóa thất bại!";
      setSnackbar({ open: true, message: errorMessage, severity: "error" });
    }
    setLoading(false);
    setConfirmDelete({ open: false, plan: null });
  };

  const handleDeleteItemsConfirm = async () => {
    if (!confirmDeleteItems.selectedItems.length || !confirmDeleteItems.plan) return;
    setLoading(true);
    try {
      await axios.delete("/api/admin/studyplanitem", { data: { SPIIDs: confirmDeleteItems.selectedItems } });
      
      // Cập nhật detailPlan và studyPlans
      const updatedPlan = {
        ...confirmDeleteItems.plan,
        studyplanitem: confirmDeleteItems.plan.studyplanitem.filter(
          item => !confirmDeleteItems.selectedItems.includes(item.SPIID)
        )
      };
      
      setDetailPlan(updatedPlan);
      setStudyPlans(studyPlans.map(p => 
        p.SPID === confirmDeleteItems.plan!.SPID ? updatedPlan : p
      ));
      
      setSnackbar({ 
        open: true, 
        message: `Đã xóa ${confirmDeleteItems.selectedItems.length} chương học thành công!`, 
        severity: "success" 
      });
      setSelectedItems([]);
    } catch (error: any) {
      console.error("Delete items error:", error);
      const errorMessage = error.response?.data?.error || "Xóa chương học thất bại!";
      setSnackbar({ open: true, message: errorMessage, severity: "error" });
    }
    setLoading(false);
    setConfirmDeleteItems({ open: false, selectedItems: [], plan: null });
  };

  const handleItemSelect = (spiid: number) => {
    setSelectedItems(prev => 
      prev.includes(spiid) 
        ? prev.filter(id => id !== spiid)
        : [...prev, spiid]
    );
  };

  const handleSelectAll = () => {
    if (!detailPlan) return;
    setSelectedItems(
      selectedItems.length === detailPlan.studyplanitem.length 
        ? [] 
        : detailPlan.studyplanitem.map(item => item.SPIID)
    );
  };

  const handleExerciseSelect = (eid: number, spiid: number) => {
    setSelectedExercisesByChapter(prev => {
      const currentSelected = prev[spiid] || [];
      const newSelected = currentSelected.includes(eid)
        ? currentSelected.filter(id => id !== eid)
        : [...currentSelected, eid];
      
      return {
        ...prev,
        [spiid]: newSelected
      };
    });
  };

  const handleSelectAllExercises = (exercises: Exercise[], spiid: number) => {
    setSelectedExercisesByChapter(prev => {
      const currentSelected = prev[spiid] || [];
      const newSelected = currentSelected.length === exercises.length
        ? []
        : exercises.map(ex => ex.EID);
      
      return {
        ...prev,
        [spiid]: newSelected
      };
    });
  };

  const handleDeleteExercisesConfirm = async () => {
    if (!confirmDeleteExercises.selectedExercises.length || !confirmDeleteExercises.spiid || !confirmDeleteExercises.plan) return;
    setLoading(true);
    try {
      await axios.delete(`/api/admin/exercise/by-studyplanitem/${confirmDeleteExercises.spiid}`, { 
        data: { EIDs: confirmDeleteExercises.selectedExercises } 
      });
      
      // Cập nhật detailPlan và studyPlans
      const updatedPlan = {
        ...confirmDeleteExercises.plan,
        studyplanitem: confirmDeleteExercises.plan.studyplanitem.map(item =>
          item.SPIID === confirmDeleteExercises.spiid
            ? { ...item, exercise: item.exercise.filter(ex => !confirmDeleteExercises.selectedExercises.includes(ex.EID)) }
            : item
        )
      };
      
      setDetailPlan(updatedPlan);
      setStudyPlans(studyPlans.map(p => 
        p.SPID === confirmDeleteExercises.plan!.SPID ? updatedPlan : p
      ));
      
      setSnackbar({ 
        open: true, 
        message: `Đã xóa ${confirmDeleteExercises.selectedExercises.length} bài tập khỏi chương học!`, 
        severity: "success" 
      });
      
      // Xóa selected exercises của chương này
      setSelectedExercisesByChapter(prev => {
        const newState = { ...prev };
        delete newState[confirmDeleteExercises.spiid!];
        return newState;
      });
    } catch (error: any) {
      console.error("Delete exercises error:", error);
      const errorMessage = error.response?.data?.error || "Xóa bài tập thất bại!";
      setSnackbar({ open: true, message: errorMessage, severity: "error" });
    }
    setLoading(false);
    setConfirmDeleteExercises({ open: false, selectedExercises: [], spiid: null, plan: null });
  };

  const handleEditItem = (item: StudyPlanItem) => {
    setEditingItem(item);
    setEditItemForm({ Name: item.Name, Description: item.Description || "" });
    setEditItemFormError("");
    setEditItemDialogOpen(true);
  };

  const handleEditItemSave = async () => {
    if (!editingItem) return;
    
    // Validation
    if (!editItemForm.Name.trim()) {
      setEditItemFormError("Tên chương học không được để trống");
      return;
    }
    
    setEditItemFormError("");
    setEditItemLoading(true);
    
    try {
      const response = await axios.put("/api/admin/studyplanitem", {
        SPIID: editingItem.SPIID,
        Name: editItemForm.Name.trim(),
        Description: editItemForm.Description.trim(),
      });
      
      if (response.data.studyPlanItem) {
        // Cập nhật detailPlan và studyPlans
        const updatedPlan = {
          ...detailPlan!,
          studyplanitem: detailPlan!.studyplanitem.map(item =>
            item.SPIID === editingItem.SPIID
              ? { ...item, Name: response.data.studyPlanItem.Name, Description: response.data.studyPlanItem.Description }
              : item
          )
        };
        
        setDetailPlan(updatedPlan);
        setStudyPlans(studyPlans.map(p =>
          p.SPID === detailPlan!.SPID ? updatedPlan : p
        ));
        
        setSnackbar({ open: true, message: "Cập nhật chương học thành công!", severity: "success" });
        setEditItemDialogOpen(false);
      }
    } catch (error: any) {
      console.error("Error updating study plan item:", error);
      const errorMessage = error.response?.data?.error || "Không thể cập nhật chương học!";
      setSnackbar({ open: true, message: errorMessage, severity: "error" });
    }
    
    setEditItemLoading(false);
  };

  const handleSave = async () => {
    // Validation
    const error: FormState = { Name: "", Description: "", Slug: "" };
    if (!form.Name.trim()) error.Name = "Tên không được để trống";
    if (!form.Description.trim()) error.Description = "Mô tả không được để trống";
    if (!form.Slug.trim()) error.Slug = "Slug không được để trống";
    setFormError(error);
    if (error.Name || error.Description || error.Slug) return;
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

  // Helper function để tạo slug từ tên
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Loại bỏ ký tự đặc biệt
      .replace(/\s+/g, '-') // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/-+/g, '-') // Loại bỏ dấu gạch ngang liên tiếp
      .replace(/^-+|-+$/g, ''); // Loại bỏ dấu gạch ngang ở đầu và cuối
  };

  // Handler cho việc thêm bài tập
  const handleAddExerciseClick = async (spiid: number) => {
    setCurrentSPIID(spiid);
    setAddExerciseDialogOpen(true);
    setAddExerciseLoading(true);
    try {
      const response = await axios.get(`/api/admin/exercise/by-studyplanitem/${spiid}`);
      setAvailableExercises(response.data.exercises || []);
    } catch (error) {
      console.error("Error fetching available exercises:", error);
      setSnackbar({ open: true, message: "Không thể tải danh sách bài tập!", severity: "error" });
    }
    setAddExerciseLoading(false);
  };

  const handleAddExercise = async (eid: number) => {
    if (!currentSPIID) return;
    
    setAddExerciseLoading(true);
    try {
      const response = await axios.post(`/api/admin/exercise/by-studyplanitem/${currentSPIID}`, { EID: eid });
      
      if (response.data.success) {
        // Cập nhật detailPlan và studyPlans
        const newExercise = { EID: eid, Name: response.data.exercise.Name };
        
        setDetailPlan(prev => prev ? {
          ...prev,
          studyplanitem: prev.studyplanitem.map(item =>
            item.SPIID === currentSPIID
              ? { ...item, exercise: [...item.exercise, newExercise] }
              : item
          )
        } : prev);
        
        setStudyPlans(prev => prev.map(plan =>
          plan.SPID === detailPlan?.SPID
            ? {
                ...plan,
                studyplanitem: plan.studyplanitem.map(item =>
                  item.SPIID === currentSPIID
                    ? { ...item, exercise: [...item.exercise, newExercise] }
                    : item
                )
              }
            : plan
        ));
        
        // Cập nhật danh sách bài tập có sẵn
        setAvailableExercises(prev => prev.filter(ex => ex.EID !== eid));
        
        setSnackbar({ open: true, message: "Thêm bài tập thành công!", severity: "success" });
      }
    } catch (error: any) {
      console.error("Error adding exercise:", error);
      const errorMessage = error.response?.data?.error || "Không thể thêm bài tập!";
      setSnackbar({ open: true, message: errorMessage, severity: "error" });
    }
    setAddExerciseLoading(false);
  };

  // Lọc bài tập theo search và difficulty
  const filteredAvailableExercises = availableExercises.filter(exercise => {
    const matchesSearch = exercise.Name.toLowerCase().includes(exerciseSearch.toLowerCase());
    const matchesDifficulty = exerciseDifficulty === "all" || exercise.Difficulty === exerciseDifficulty;
    return matchesSearch && matchesDifficulty;
  });

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
                {/* Header với thông tin khóa học */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  mb: 3,
                  p: 3,
                  bgcolor: 'primary.50',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'primary.200'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button
                      startIcon={<ArrowBackIcon />}
                      onClick={() => {
                        setDetailPlan(null);
                        setSelectedItems([]);
                        setSelectedExercisesByChapter({});
                      }}
                      variant="outlined"
                      size="small"
                    >
                      Quay lại
                    </Button>
                    <Box>
                      <Typography variant="h5" fontWeight={700} color="primary">
                        {detailPlan.Name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ID: {detailPlan.SPID} • {detailPlan.studyplanitem.length} chương học • {detailPlan.studyplanitem.reduce((acc, item) => acc + item.exercise.length, 0)} bài tập
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteClick(detailPlan)}
                    size="small"
                  >
                    Xóa khóa học
                  </Button>
                </Box>

                {/* Mô tả khóa học */}
                <Paper sx={{ p: 3, mb: 3, bgcolor: 'grey.50' }}>
                  <Typography variant="h6" fontWeight={600} mb={1}>
                    Mô tả khóa học
                  </Typography>
                  <Typography variant="body1">
                    {detailPlan.Description || "Chưa có mô tả cho khóa học này."}
                  </Typography>
                </Paper>

                {/* Phần quản lý chương học */}
                <Paper sx={{ p: 3 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mb: 3,
                    pb: 2,
                    borderBottom: '2px solid',
                    borderColor: 'divider'
                  }}>
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        Danh sách chương học
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {detailPlan.studyplanitem.length} chương học
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {selectedItems.length > 0 && (
                        <Button 
                          variant="contained" 
                          color="error"
                          size="small"
                          onClick={() => setConfirmDeleteItems({ 
                            open: true, 
                            selectedItems: selectedItems, 
                            plan: detailPlan 
                          })}
                        >
                          Xóa {selectedItems.length} chương
                        </Button>
                      )}
                      <Button 
                        variant="contained" 
                        onClick={() => setAddItemDialogOpen(true)}
                        startIcon={<AddCircleIcon />}
                        size="small"
                      >
                        Thêm chương học
                      </Button>
                    </Box>
                  </Box>

                  {/* Checkbox chọn tất cả chương học */}
                  {detailPlan.studyplanitem.length > 0 && (
                    <Box sx={{ 
                      mb: 3, 
                      p: 2, 
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: 'divider'
                    }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedItems.length === detailPlan.studyplanitem.length && detailPlan.studyplanitem.length > 0}
                            indeterminate={selectedItems.length > 0 && selectedItems.length < detailPlan.studyplanitem.length}
                            onChange={handleSelectAll}
                          />
                        }
                        label={
                          <Typography variant="subtitle2" fontWeight={600}>
                            Chọn tất cả chương học ({selectedItems.length}/{detailPlan.studyplanitem.length})
                          </Typography>
                        }
                      />
                    </Box>
                  )}

                  {/* Danh sách chương học */}
                  {detailPlan.studyplanitem.length === 0 ? (
                    <Box sx={{ 
                      textAlign: 'center', 
                      py: 4,
                      bgcolor: 'grey.50',
                      borderRadius: 2
                    }}>
                      <Typography color="text.secondary" variant="h6">
                        Chưa có chương học nào
                      </Typography>
                      <Typography color="text.secondary" variant="body2" sx={{ mt: 1 }}>
                        Bấm "Thêm chương học" để bắt đầu
                      </Typography>
                    </Box>
                  ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {detailPlan.studyplanitem.map((item, index) => (
                        <Paper 
                          key={item.SPIID} 
                          sx={{ 
                            p: 3,
                            border: '1px solid',
                            borderColor: selectedItems.includes(item.SPIID) ? 'primary.main' : 'divider',
                            bgcolor: selectedItems.includes(item.SPIID) ? 'primary.50' : 'background.paper',
                            borderRadius: 2,
                            transition: 'all 0.2s ease-in-out'
                          }}
                        >
                          {/* Header chương học */}
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 2, 
                            mb: 2,
                            pb: 2,
                            borderBottom: '1px solid',
                            borderColor: 'divider'
                          }}>
                            <Checkbox
                              checked={selectedItems.includes(item.SPIID)}
                              onChange={() => handleItemSelect(item.SPIID)}
                              color="primary"
                            />
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" fontWeight={600} color="primary">
                                Chương {index + 1}: {item.Name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                ID: {item.SPIID} • {item.exercise.length} bài tập
                              </Typography>
                            </Box>
                            <IconButton
                              onClick={() => handleEditItem(item)}
                              color="primary"
                              size="small"
                            >
                              <EditIcon />
                            </IconButton>
                          </Box>

                          {/* Mô tả chương học */}
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="body1" sx={{ 
                              p: 2, 
                              bgcolor: 'grey.50', 
                              borderRadius: 1,
                              fontStyle: item.Description ? 'normal' : 'italic'
                            }}>
                              {item.Description || "Chưa có mô tả cho chương học này."}
                            </Typography>
                          </Box>

                          {/* Phần quản lý bài tập */}
                          <Box>
                            <Box sx={{ 
                              display: "flex", 
                              justifyContent: "space-between", 
                              alignItems: "center", 
                              mb: 2
                            }}>
                              <Typography variant="subtitle1" fontWeight={600}>
                                Danh sách bài tập
                              </Typography>
                              <Box sx={{ display: "flex", gap: 1 }}>
                                {(selectedExercisesByChapter[item.SPIID] || []).length > 0 && (
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    color="error"
                                    onClick={() => setConfirmDeleteExercises({ 
                                      open: true, 
                                      selectedExercises: selectedExercisesByChapter[item.SPIID] || [], 
                                      spiid: item.SPIID,
                                      plan: detailPlan 
                                    })}
                                  >
                                    Xóa {(selectedExercisesByChapter[item.SPIID] || []).length} bài tập
                                  </Button>
                                )}
                                <Button
                                  size="small"
                                  variant="contained"
                                  startIcon={<AddCircleIcon />}
                                  onClick={() => handleAddExerciseClick(item.SPIID)}
                                >
                                  Thêm bài tập
                                </Button>
                              </Box>
                            </Box>

                            {item.exercise.length === 0 ? (
                              <Box sx={{ 
                                textAlign: 'center', 
                                py: 3,
                                bgcolor: 'grey.50',
                                borderRadius: 1
                              }}>
                                <Typography color="text.secondary">
                                  Chưa có bài tập nào trong chương này.
                                </Typography>
                              </Box>
                            ) : (
                              <Box>
                                {/* Checkbox chọn tất cả bài tập */}
                                <Box sx={{ mb: 2 }}>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={(selectedExercisesByChapter[item.SPIID] || []).length === item.exercise.length && item.exercise.length > 0}
                                        indeterminate={(selectedExercisesByChapter[item.SPIID] || []).length > 0 && (selectedExercisesByChapter[item.SPIID] || []).length < item.exercise.length}
                                        onChange={() => handleSelectAllExercises(item.exercise, item.SPIID)}
                                        size="small"
                                      />
                                    }
                                    label={
                                      <Typography variant="body2" fontWeight={500}>
                                        Chọn tất cả bài tập ({(selectedExercisesByChapter[item.SPIID] || []).length}/{item.exercise.length})
                                      </Typography>
                                    }
                                  />
                                </Box>

                                {/* Danh sách bài tập */}
                                <Box sx={{ 
                                  display: 'flex', 
                                  flexDirection: 'column', 
                                  gap: 1,
                                  maxHeight: 300,
                                  overflow: 'auto',
                                  p: 1,
                                  bgcolor: 'background.paper',
                                  borderRadius: 1,
                                  border: '1px solid',
                                  borderColor: 'divider'
                                }}>
                                  {item.exercise.map((ex, exIndex) => (
                                    <Box 
                                      key={ex.EID} 
                                      sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: 2, 
                                        p: 1.5,
                                        borderRadius: 1,
                                        bgcolor: (selectedExercisesByChapter[item.SPIID] || []).includes(ex.EID) ? 'primary.50' : 'transparent',
                                        border: '1px solid',
                                        borderColor: (selectedExercisesByChapter[item.SPIID] || []).includes(ex.EID) ? 'primary.main' : 'transparent',
                                        transition: 'all 0.2s ease-in-out'
                                      }}
                                    >
                                      <Checkbox
                                        checked={(selectedExercisesByChapter[item.SPIID] || []).includes(ex.EID)}
                                        onChange={() => handleExerciseSelect(ex.EID, item.SPIID)}
                                        size="small"
                                        color="primary"
                                      />
                                      <Box sx={{ flex: 1 }}>
                                        <Typography variant="body2" fontWeight={500}>
                                          {exIndex + 1}. {ex.Name}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                          ID: {ex.EID}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  ))}
                                </Box>
                              </Box>
                            )}
                          </Box>
                        </Paper>
                      ))}
                    </Box>
                  )}
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
                      onChange={e => setAddItemForm({ ...addItemForm, Name: e.target.value })}
                      error={!!addItemFormError}
                      helperText={addItemFormError}
                    />
                    <TextField
                      label="Mô tả chương học"
                      fullWidth
                      margin="dense"
                      value={addItemForm.Description}
                      onChange={e => setAddItemForm({ ...addItemForm, Description: e.target.value })}
                      multiline
                      minRows={2}
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
                            Description: addItemForm.Description.trim(),
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
                            setAddItemForm({ Name: "", Description: "" });
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
                {/* Dialog xác nhận xóa bài tập */}
                <Dialog open={confirmDeleteExercises.open} onClose={() => setConfirmDeleteExercises({ open: false, selectedExercises: [], spiid: null, plan: null })}>
                  <DialogTitle>Xác nhận xóa bài tập</DialogTitle>
                  <DialogContent>
                    <Alert severity="error" sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                        ⚠️ CẢNH BÁO: Hành động này không thể hoàn tác!
                      </Typography>
                      <Typography variant="body2">
                        Khi xóa {confirmDeleteExercises.selectedExercises.length} bài tập này, các dữ liệu sau sẽ bị xóa vĩnh viễn:
                      </Typography>
                      <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                        <li>Tất cả bài nộp (submission) của người dùng cho các bài tập này</li>
                        <li>Tất cả kết quả test (testcaseresult) liên quan</li>
                        <li>Tất cả tiến độ học tập (exerciseprogress) của các bài tập này</li>
                        <li>Bài tập sẽ được tách khỏi chương học (không bị xóa)</li>
                      </ul>
                    </Alert>
                    <Typography>
                      Bạn có chắc chắn muốn xóa {confirmDeleteExercises.selectedExercises.length} bài tập đã chọn?
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setConfirmDeleteExercises({ open: false, selectedExercises: [], spiid: null, plan: null })} color="primary">
                      Hủy
                    </Button>
                    <Button onClick={handleDeleteExercisesConfirm} color="error" variant="contained" autoFocus>
                      Xóa
                    </Button>
                  </DialogActions>
                </Dialog>
                {/* Dialog xác nhận xóa chương học */}
                <Dialog open={confirmDeleteItems.open} onClose={() => setConfirmDeleteItems({ open: false, selectedItems: [], plan: null })}>
                  <DialogTitle>Xác nhận xóa chương học</DialogTitle>
                  <DialogContent>
                    <Alert severity="error" sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                        ⚠️ CẢNH BÁO: Hành động này không thể hoàn tác!
                      </Typography>
                      <Typography variant="body2">
                        Khi xóa {confirmDeleteItems.selectedItems.length} chương học này, các dữ liệu sau sẽ bị xóa vĩnh viễn:
                      </Typography>
                      <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                        <li>Tất cả bài nộp (submission) của người dùng trong các chương này</li>
                        <li>Tất cả kết quả test (testcaseresult) liên quan</li>
                        <li>Tất cả tiến độ học tập (exerciseprogress) trong các chương này</li>
                        <li>Bài tập sẽ được tách khỏi chương học (không bị xóa)</li>
                      </ul>
                    </Alert>
                    <Typography>
                      Bạn có chắc chắn muốn xóa {confirmDeleteItems.selectedItems.length} chương học đã chọn?
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setConfirmDeleteItems({ open: false, selectedItems: [], plan: null })} color="primary">
                      Hủy
                    </Button>
                    <Button onClick={handleDeleteItemsConfirm} color="error" variant="contained" autoFocus>
                      Xóa
                    </Button>
                  </DialogActions>
                </Dialog>
                {/* Dialogs */}
                <Dialog open={confirmDelete.open} onClose={() => setConfirmDelete({ open: false, plan: null })}>
                  <DialogTitle>Xác nhận xóa khóa học</DialogTitle>
                  <DialogContent>
                    <Alert severity="error" sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                        ⚠️ CẢNH BÁO: Hành động này không thể hoàn tác!
                      </Typography>
                      <Typography variant="body2">
                        Khi xóa khóa học này, các dữ liệu sau sẽ bị xóa vĩnh viễn:
                      </Typography>
                      <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
                        <li>Tất cả chương học trong khóa học</li>
                        <li>Tất cả bài nộp (submission) của người dùng</li>
                        <li>Tất cả kết quả test (testcaseresult)</li>
                        <li>Tất cả tiến độ học tập (exerciseprogress)</li>
                        <li>Bài tập sẽ được tách khỏi khóa học (không bị xóa)</li>
                      </ul>
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
                
                {/* Dialog chỉnh sửa chương học */}
                <Dialog open={editItemDialogOpen} onClose={() => setEditItemDialogOpen(false)}>
                  <DialogTitle>Chỉnh sửa chương học</DialogTitle>
                  <DialogContent>
                    <TextField
                      label="Tên chương học"
                      fullWidth
                      margin="dense"
                      value={editItemForm.Name}
                      onChange={e => setEditItemForm({ ...editItemForm, Name: e.target.value })}
                      error={!!editItemFormError}
                      helperText={editItemFormError}
                    />
                    <TextField
                      label="Mô tả chương học"
                      fullWidth
                      margin="dense"
                      value={editItemForm.Description}
                      onChange={e => setEditItemForm({ ...editItemForm, Description: e.target.value })}
                      multiline
                      minRows={2}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setEditItemDialogOpen(false)} disabled={editItemLoading}>Hủy</Button>
                    <Button
                      onClick={handleEditItemSave}
                      variant="contained"
                      disabled={editItemLoading}
                      startIcon={editItemLoading ? <CircularProgress size={18} /> : null}
                    >
                      Lưu
                    </Button>
                  </DialogActions>
                </Dialog>
                
                {/* Dialog thêm bài tập */}
                <Dialog 
                  open={addExerciseDialogOpen} 
                  onClose={() => {
                    setAddExerciseDialogOpen(false);
                    setExerciseSearch("");
                    setExerciseDifficulty("all");
                    setAvailableExercises([]);
                  }}
                  maxWidth="md"
                  fullWidth
                >
                  <DialogTitle>Thêm bài tập vào chương học</DialogTitle>
                  <DialogContent>
                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        placeholder="Tìm kiếm bài tập..."
                        value={exerciseSearch}
                        onChange={e => setExerciseSearch(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        sx={{ mb: 2 }}
                      />
                      <FormControl fullWidth>
                        <InputLabel>Độ khó</InputLabel>
                        <Select
                          value={exerciseDifficulty}
                          onChange={e => setExerciseDifficulty(e.target.value)}
                          label="Độ khó"
                        >
                          <MenuItem value="all">Tất cả</MenuItem>
                          <MenuItem value="Easy">Dễ</MenuItem>
                          <MenuItem value="Medium">Trung bình</MenuItem>
                          <MenuItem value="Hard">Khó</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    
                    {addExerciseLoading ? (
                      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
                        <CircularProgress />
                      </Box>
                    ) : filteredAvailableExercises.length === 0 ? (
                      <Typography color="text.secondary" align="center">
                        Không có bài tập nào có thể thêm.
                      </Typography>
                    ) : (
                      <List sx={{ maxHeight: 400, overflow: "auto" }}>
                        {filteredAvailableExercises.map((exercise, index) => (
                          <React.Fragment key={exercise.EID}>
                            <ListItem disablePadding>
                              <ListItemButton onClick={() => handleAddExercise(exercise.EID)}>
                                <ListItemText
                                  primary={exercise.Name}
                                  secondary={`ID: ${exercise.EID} | Độ khó: ${exercise.Difficulty}`}
                                />
                                <Chip 
                                  label={exercise.Difficulty} 
                                  size="small" 
                                  color={
                                    exercise.Difficulty === "Easy" ? "success" :
                                    exercise.Difficulty === "Medium" ? "warning" : "error"
                                  }
                                />
                              </ListItemButton>
                            </ListItem>
                            {index < filteredAvailableExercises.length - 1 && <Divider />}
                          </React.Fragment>
                        ))}
                      </List>
                    )}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => {
                      setAddExerciseDialogOpen(false);
                      setExerciseSearch("");
                      setExerciseDifficulty("all");
                      setAvailableExercises([]);
                    }}>
                      Đóng
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            ) : (
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ width: '8%' }}>ID</TableCell>
                        <TableCell sx={{ width: '18%' }}>Tên khóa học</TableCell>
                        <TableCell sx={{ width: '15%' }}>Slug</TableCell>
                        <TableCell sx={{ width: '30%' }}>Mô tả</TableCell>
                        <TableCell sx={{ width: '14%' }}>Chương học</TableCell>
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
                            <TableCell>
                              <Chip 
                                label={plan.Slug || "Chưa có"} 
                                size="small" 
                                color={plan.Slug ? "primary" : "default"}
                                variant={plan.Slug ? "filled" : "outlined"}
                              />
                            </TableCell>
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
            label="Slug"
            fullWidth
            margin="dense"
            value={form.Slug}
            onChange={(e) => setForm({ ...form, Slug: e.target.value })}
            error={!!formError.Slug}
            helperText={formError.Slug || "URL-friendly version of the name (e.g., 'basic-c-programming')"}
            placeholder="basic-c-programming"
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
      
      {/* Snackbar hiển thị thông báo */}
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
    </>
  );
}