import React from "react";
import { Box, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, Pagination, TextField, InputAdornment, MenuItem, Select, FormControl, InputLabel, Stack, Card, IconButton, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

const PAGE_SIZE = 50;
const DIFFICULTY_OPTIONS = [
  { label: "Tất cả", value: "all" },
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
  const [openAdd, setOpenAdd] = React.useState(false);
  const [topics, setTopics] = React.useState<any[]>([]);
  const [form, setForm] = React.useState({
    TpID: "",
    Name: "",
    Slug: "",
    Content: "",
    Difficulty: "Easy",
    template: "#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}",
    testcases: [] as any[],
  });
  // Testcase tạm thời để nhập
  const [tcInput, setTcInput] = React.useState("");
  const [tcOutput, setTcOutput] = React.useState("");
  const [tcHidden, setTcHidden] = React.useState(false);

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
  React.useEffect(() => { fetchExercises(); }, []);

  // Lấy danh sách chủ đề cho dropdown TpID
  React.useEffect(() => {
    if (!openAdd) return;
    axios.get("/api/admin/topics").then(res => setTopics(res.data.topics || []));
  }, [openAdd]);

  // Lọc theo tìm kiếm và filter
  const filteredExercises = exercises.filter((ex) => {
    if (search && !(
      ex.Name.toLowerCase().includes(search.toLowerCase()) ||
      ex.Slug.toLowerCase().includes(search.toLowerCase())
    )) return false;
    if (eid && String(ex.EID) !== eid) return false;
    if (tpId === "__NULL__" && ex.TpID !== null) return false;
    if (tpId && tpId !== "__NULL__" && String(ex.TpID ?? "") !== tpId) return false;
    if (spiId === "__NULL__" && ex.SPIID !== null) return false;
    if (spiId && spiId !== "__NULL__" && String(ex.SPIID ?? "") !== spiId) return false;
    if (difficulty !== "all" && ex.Difficulty !== difficulty) return false;
    return true;
  });

  // Tính toán phân trang
  const totalPages = Math.ceil(filteredExercises.length / PAGE_SIZE) || 1;
  const pagedExercises = filteredExercises.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Reset về trang 1 khi search/filter thay đổi
  React.useEffect(() => { setPage(1); }, [search, eid, tpId, spiId, difficulty]);

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" fontWeight={600}>Danh sách bài tập</Typography>
        <Box>
          <button
            style={{
              background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer', boxShadow: '0 2px 8px rgba(25,118,210,0.08)', transition: 'background 0.2s', marginLeft: 8
            }}
            onClick={() => setOpenAdd(true)}
          >
            <AddIcon sx={{ mr: 1, mb: "-2px" }} /> Thêm bài tập mới
          </button>
        </Box>
      </Box>
      {/* Dialog thêm bài tập mới */}
      {openAdd && (
        <Box sx={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", bgcolor: "rgba(0,0,0,0.18)", zIndex: 1300, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ bgcolor: "#fff", borderRadius: 3, p: 4, minWidth: 1000, maxWidth: 1900, boxShadow: 6, position: "relative", display: 'flex', flexDirection: 'row', gap: 4 }}>
            <Box sx={{ flex: 1, minWidth: 320 }}>
              <IconButton sx={{ position: "absolute", top: 8, right: 8 }} onClick={() => setOpenAdd(false)}><CloseIcon /></IconButton>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Thêm bài tập mới</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <FormControl fullWidth size="small">
                    <InputLabel>Chủ đề (TpID)</InputLabel>
                    <Select
                      label="Chủ đề (TpID)"
                      value={form.TpID}
                      onChange={e => setForm(f => ({ ...f, TpID: e.target.value }))}
                    >
                      <MenuItem value="">null</MenuItem>
                      {topics.map((tp: any) => (
                        <MenuItem key={tp.TpID} value={tp.TpID}>{tp.Name} (ID: {tp.TpID})</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField label="Slug" size="small" value={form.Slug} onChange={e => setForm(f => ({ ...f, Slug: e.target.value }))} fullWidth required sx={{ minWidth: 140 }} />
                  <FormControl fullWidth size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Độ khó</InputLabel>
                    <Select
                      label="Độ khó"
                      value={form.Difficulty}
                      onChange={e => setForm(f => ({ ...f, Difficulty: e.target.value }))}
                    >
                      <MenuItem value="Easy">Dễ</MenuItem>
                      <MenuItem value="Medium">Vừa</MenuItem>
                      <MenuItem value="Hard">Khó</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <TextField label="Tên bài tập" size="small" value={form.Name} onChange={e => setForm(f => ({ ...f, Name: e.target.value }))} fullWidth required />
                <TextField label="Nội dung mô tả" size="small" value={form.Content} onChange={e => setForm(f => ({ ...f, Content: e.target.value }))} fullWidth required multiline minRows={2} />
                <TextField label="Template code" size="small" value={form.template} onChange={e => setForm(f => ({ ...f, template: e.target.value }))} fullWidth multiline minRows={2} />
                <Box sx={{ mt: 2 }}>
                  <Typography fontWeight={600} sx={{ mb: 1 }}>Thêm testcase</Typography>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                    <TextField label="Input" size="small" value={tcInput} onChange={e => setTcInput(e.target.value)} sx={{ flex: 1 }} multiline minRows={1} />
                    <TextField label="ExpectedOutput" size="small" value={tcOutput} onChange={e => setTcOutput(e.target.value)} sx={{ flex: 1 }} multiline minRows={1} />
                    <FormControl size="small" sx={{ minWidth: 90 }}>
                      <InputLabel>Ẩn?</InputLabel>
                      <Select label="Ẩn?" value={tcHidden ? 1 : 0} onChange={e => setTcHidden(Boolean(Number(e.target.value)))}>
                        <MenuItem value={0}>Hiện</MenuItem>
                        <MenuItem value={1}>Ẩn</MenuItem>
                      </Select>
                    </FormControl>
                    <button
                      style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 14px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}
                      onClick={() => {
                        if (!tcInput || !tcOutput) return;
                        setForm(f => ({ ...f, testcases: [...f.testcases, { Input: tcInput, ExpectedOutput: tcOutput, isHidden: tcHidden }] }));
                        setTcInput(""); setTcOutput(""); setTcHidden(false);
                      }}
                    >Thêm</button>
                  </Stack>
                </Box>
                <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}>
                  <button
                    style={{ background: '#888', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}
                    onClick={() => setOpenAdd(false)}
                  >Hủy</button>
                  <button
                    style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}
                    onClick={() => { /* TODO: Gửi API tạo bài tập mới */ }}
                  >Lưu bài tập</button>
                </Box>
              </Stack>
            </Box>
            {/* Bảng testcase ở cột phải */}
            <Box sx={{ flex: 1.2, minWidth: 320, pl: 2, borderLeft: '1.5px solid #e2e8f0', bgcolor: '#f9fafb', borderRadius: 2 }}>
              <Typography fontWeight={600} sx={{ mb: 2, mt: 1 }}>Danh sách testcase</Typography>
              {form.testcases.length === 0 ? <Typography color="text.secondary">Chưa có testcase nào</Typography> : (
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
                          <IconButton size="small" color="error" onClick={() => setForm(f => ({ ...f, testcases: f.testcases.filter((_, i) => i !== idx) }))}><CloseIcon fontSize="small" /></IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </Box>
        </Box>
      )}
      {/* End dialog thêm bài tập mới */}
      <Card sx={{ mb: 3, p: { xs: 2, sm: 3 }, borderRadius: 3, boxShadow: 2, bgcolor: "#f8fafc", border: "1px solid #e2e8f0" }}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
          <TextField
            label="Tìm kiếm tên hoặc slug"
            size="small"
            placeholder="Nhập tên hoặc slug..."
            value={search}
            onChange={e => setSearch(e.target.value)}
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
            onChange={e => setEid(e.target.value)}
            sx={{ width: 110, bgcolor: "white", borderRadius: 2 }}
          />
          <FormControl size="small" sx={{ minWidth: 130, bgcolor: "white", borderRadius: 2 }}>
            <InputLabel>TpID</InputLabel>
            <Select
              label="TpID"
              value={tpId}
              onChange={e => setTpId(e.target.value)}
            >
              <MenuItem value="">Tất cả</MenuItem>
              <MenuItem value="__NULL__">null</MenuItem>
              {[...new Set(exercises.map(ex => ex.TpID).filter(id => id !== null))].sort((a, b) => a - b).map(id => (
                <MenuItem key={id} value={String(id)}>{id}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 130, bgcolor: "white", borderRadius: 2 }}>
            <InputLabel>SPIID</InputLabel>
            <Select
              label="SPIID"
              value={spiId}
              onChange={e => setSpiId(e.target.value)}
            >
              <MenuItem value="">Tất cả</MenuItem>
              <MenuItem value="__NULL__">null</MenuItem>
              {[...new Set(exercises.map(ex => ex.SPIID).filter(id => id !== null))].sort((a, b) => a - b).map(id => (
                <MenuItem key={id} value={String(id)}>{id}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 130, bgcolor: "white", borderRadius: 2 }}>
            <InputLabel>Độ khó</InputLabel>
            <Select
              label="Độ khó"
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
            >
              {DIFFICULTY_OPTIONS.map(opt => (
                <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
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
              <TableRow><TableCell colSpan={7} align="center"><CircularProgress size={28} /></TableCell></TableRow>
            ) : pagedExercises.length === 0 ? (
              <TableRow><TableCell colSpan={7} align="center">Không có bài tập</TableCell></TableRow>
            ) : pagedExercises.map((ex) => (
              <TableRow key={ex.EID}>
                <TableCell>{ex.EID}</TableCell>
                <TableCell>{ex.TpID ?? ""}</TableCell>
                <TableCell>{ex.SPIID ?? ""}</TableCell>
                <TableCell>{ex.Name}</TableCell>
                <TableCell>{ex.Slug}</TableCell>
                <TableCell>{ex.Difficulty}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Xem chi tiết">
                    <IconButton color="primary" onClick={() => { /* TODO: Xem chi tiết bài tập */ }}>
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination count={totalPages} page={page} onChange={handleChangePage} color="primary" />
      </Box>
    </Box>
  );
} 