"use client";
import React, { useState, useEffect, useCallback, useRef, createRef } from "react";
import NavBar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ExerciseStatusBadge from "@/components/ExercisePage/ExerciseStatusBadge";
import ListSidebar from "@/components/ListSidebar";
import {
  Box,
  Typography,
  Chip,
  Paper,
  Card,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  CircularProgress,
  Select,
  MenuItem,
  Popover,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Menu from '@mui/material/Menu';
import axios from "axios";

// Các hằng số cho filter
const STATUS_OPTIONS = [
  { label: "Tất cả", value: "all" },
  { label: "Đã làm", value: "Solved" },
  { label: "Đang làm", value: "Attempting" },
  { label: "Chưa làm", value: "Unattempted" },
];
const DIFFICULTY_OPTIONS = [
  { label: "Tất cả", value: "all" },
  { label: "Dễ", value: "Easy" },
  { label: "Vừa", value: "Medium" },
  { label: "Khó", value: "Hard" },
];

// Đặt initialLoadCount và loadMoreCount ở ngoài component, không lặp lại trong component
const initialLoadCount = 50;
const loadMoreCount = 20;

const ExercisesPage = () => {
  // State cho chủ đề, bài tập, loading
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [topics, setTopics] = useState<any[]>([]);
  const [problems, setProblems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // State cho lazy loading
  const [displayedProblems, setDisplayedProblems] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef<HTMLDivElement>(null);

  // State cho tìm kiếm và filter
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "Solved" | "Attempting" | "Unattempted">("all");
  const [difficultyFilter, setDifficultyFilter] = useState<"all" | "Easy" | "Medium" | "Hard">("all");
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);

  // State cho đánh dấu (bookmark)
  const [bookmarkAnchorEl, setBookmarkAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedEID, setSelectedEID] = useState<number | null>(null);
  const [userLists, setUserLists] = useState<any[]>([]);
  const [menuLoading, setMenuLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{open: boolean, message: string, color?: string}>({open: false, message: ''});
  const [savedEIDs, setSavedEIDs] = useState<number[]>([]); // EID đã lưu vào bất kỳ list nào
  const [listItemEIDs, setListItemEIDs] = useState<{ [lid: number]: number[] }>({}); // EID theo từng list

  // Xử lý mở/đóng popover filter
  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => setFilterAnchorEl(event.currentTarget);
  const handleFilterClose = () => setFilterAnchorEl(null);
  const filterOpen = Boolean(filterAnchorEl);
  const filterId = filterOpen ? 'filter-popover' : undefined;

  const bookmarkMenuOpen = Boolean(bookmarkAnchorEl);

  // Đảm bảo chỉ có 1 khai báo cellRefs
  const cellRefs = useRef<{ [eid: number]: React.RefObject<HTMLTableCellElement | null> }>({});

  const handleBookmarkClick = async (eid: number) => {
    const cellRef = cellRefs.current[eid];
    if (cellRef && cellRef.current) {
      setBookmarkAnchorEl(cellRef.current);
    }
    setSelectedEID(eid);
    setMenuLoading(true);
    try {
      const res = await axios.get('/api/list');
      setUserLists(res.data.lists || []);
      // Lấy EID cho từng list
      const eidsMap: { [lid: number]: number[] } = {};
      await Promise.all((res.data.lists || []).map(async (list: any) => {
        const r = await axios.get(`/api/listitem/${list.LID}`);
        eidsMap[list.LID] = (r.data.exercises || []).map((ex: any) => ex.EID);
      }));
      setListItemEIDs(eidsMap);
    } catch {
      setUserLists([]);
      setListItemEIDs({});
    }
    setMenuLoading(false);
  };

  const handleToggleListItem = async (lid: number, checked: boolean) => {
    if (!selectedEID) return;
    try {
      if (checked) {
        await axios.post('/api/listitem', { lid, eid: selectedEID });
      } else {
        await axios.delete('/api/listitem', { data: { lid, eid: selectedEID } });
      }
      // Refetch for this list
      const r = await axios.get(`/api/listitem/${lid}`);
      setListItemEIDs(prev => ({ ...prev, [lid]: (r.data.exercises || []).map((ex: any) => ex.EID) }));
      // Refetch savedEIDs for global icon
      const res = await axios.get('/api/listitem/user');
      setSavedEIDs(res.data.eids || []);
    } catch (e: any) {
      setSnackbar({ open: true, message: e?.response?.data?.error || 'Lỗi khi lưu/xóa', color: 'error' });
    }
  };

  const handleMenuClose = () => {
    setBookmarkAnchorEl(null);
    setSelectedEID(null);
  };

  // Lấy danh sách chủ đề và bài tập khi load trang
  useEffect(() => {
    setLoading(true);
    Promise.all([
      axios.get("/api/topics/list"),
      axios.get("/api/exercise/list")
    ])
      .then(([topicsRes, exercisesRes]) => {
        const fetchedTopics = topicsRes.data.topics || [];
        const allTopic = { TpID: "all", Name: "Tất cả" };
        setTopics([allTopic, ...fetchedTopics]);
        const exercises = exercisesRes.data.exercises || [];
        setProblems(exercises);
      })
      .finally(() => setLoading(false));
    // Lấy EID đã lưu
    const fetchSavedEIDs = async () => {
      try {
        const res = await axios.get('/api/listitem/user');
        setSavedEIDs(res.data.eids || []);
      } catch {}
    };
    fetchSavedEIDs();
  }, []);

  // Hàm lọc bài tập theo chủ đề, từ khóa, trạng thái, độ khó
  const getFilteredProblems = () => {
    return (selectedTopic === "all" ? problems : problems.filter((p) => p.TpID === Number(selectedTopic)))
      .filter((p) => p.Name.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter((p) => statusFilter === "all" ? true : (p.status || "Unattempted") === statusFilter)
      .filter((p) => difficultyFilter === "all" ? true : (p.Difficulty || "") === difficultyFilter);
  };
  const filteredProblems = getFilteredProblems();

  // Cập nhật displayedProblems khi filter thay đổi
  useEffect(() => {
    setCurrentPage(1);
    setDisplayedProblems(filteredProblems.slice(0, initialLoadCount));
    setHasMore(filteredProblems.length > initialLoadCount);
  }, [selectedTopic, problems, searchTerm, statusFilter, difficultyFilter]);

  // Lazy load thêm bài tập khi scroll
  const loadMore = useCallback(() => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const startIndex = (nextPage - 1) * loadMoreCount;
      const endIndex = startIndex + loadMoreCount;
      const newProblems = filteredProblems.slice(startIndex, endIndex);
      setDisplayedProblems((prev) => [...prev, ...newProblems]);
      setCurrentPage(nextPage);
      setHasMore(endIndex < filteredProblems.length);
      setLoadingMore(false);
    }, 500); // Hiệu ứng loading
  }, [currentPage, filteredProblems, loadingMore, hasMore]);

  // Intersection Observer để detect scroll cuối trang
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );
    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [loadMore, hasMore, loadingMore]);

  // Đếm số bài tập theo trạng thái
  const getStatusCounts = (problems: any[]) =>
    problems.reduce(
      (acc, p) => {
        const status = p.status || 'Unattempted';
        if (status === 'Solved') acc.solved++;
        else if (status === 'Attempting') acc.attempting++;
        else acc.unattempted++;
        return acc;
      },
      { solved: 0, attempting: 0, unattempted: 0 }
    );
  const statusCounts = getStatusCounts(problems);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px" }}>
      <NavBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: "220px" },
          mr: { lg: "250px" }, // Add right margin to avoid overlap with ListSidebar
          px: { xs: 2, sm: 6, md: 10 },
          py: 6,
          mx: "auto",
        }}
      >
        {/* Thanh chọn chủ đề */}
        <Box className="mb-6">
          <Box className="flex flex-wrap gap-3">
            {topics.map((topic) => {
              // Đếm số bài theo trạng thái cho từng chủ đề
              let topicProblems = topic.TpID === "all" ? problems : problems.filter((p) => p.TpID === Number(topic.TpID || topic.id));
              const statusCounts = getStatusCounts(topicProblems);
              const totalCount = topicProblems.length;
              return (
                <Chip
                  key={topic.TpID}
                  label={
                    <Box className="flex items-center gap-2">
                      <span>{topic.Name}</span>
                      <Box className="bg-white bg-opacity-50 rounded-full px-2 py-0.5">
                        <Typography variant="caption" className="font-semibold">
                          {`${statusCounts.solved}/${totalCount}`}
                        </Typography>
                      </Box>
                    </Box>
                  }
                  onClick={() => setSelectedTopic(String(topic.TpID))}
                  className={`${
                    topic.TpID === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  } cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedTopic === String(topic.TpID) ? "ring-2 ring-blue-500 ring-opacity-50" : ""
                  }`}
                  sx={{
                    height: "auto",
                    padding: "8px 4px",
                    "& .MuiChip-label": {
                    },
                  }}
                />
              );
            })}
          </Box>
        </Box>

        {/* Thanh tìm kiếm + filter icon + vòng tròn thống kê tổng quan */}
        <Box sx={{ mb: 3, mt: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Ô tìm kiếm tên bài tập kiểu mới */}
          <Box sx={{ position: 'relative', width: '100%', maxWidth: 250 }}>
            <SearchIcon sx={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: 22 }} />
            <input
              type="text"
              placeholder="Tìm kiếm bài tập"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px 10px 40px',
                borderRadius: 24,
                border: '1px solid #d1d5db',
                fontSize: 16,
                outline: 'none',
                boxSizing: 'border-box',
                color: '#222',
              }}
            />
          </Box>
          {/* Icon filter mở popover */}
          <Button
            aria-describedby={filterId}
            onClick={handleFilterClick}
            variant="outlined"
            sx={{ minWidth: 0, p: 1, borderRadius: '50%' }}
          >
            <FilterListIcon />
          </Button>
          {/* Popover filter */}
          <Popover
            id={filterId}
            open={filterOpen}
            disableScrollLock={true}
            anchorEl={filterAnchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          >
            <Box sx={{ p: 2, minWidth: 260 }}>
              {/* Dropdown trạng thái và độ khó: mỗi dropdown 1 hàng, label và select cách đều 2 bên */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                  <span style={{ fontWeight: 500 }}>Trạng thái:</span>
                  <Select
                    size="small"
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value as any)}
                    sx={{ minWidth: 120 }}
                  >
                    {STATUS_OPTIONS.map(item => (
                      <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                  <span style={{ fontWeight: 500 }}>Độ khó:</span>
                  <Select
                    size="small"
                    value={difficultyFilter}
                    onChange={e => setDifficultyFilter(e.target.value as any)}
                    sx={{ minWidth: 120 }}
                  >
                    {DIFFICULTY_OPTIONS.map(item => (
                      <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
            </Box>
          </Popover>
          {/* Vòng tròn progress tổng quan */}
          <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', ml: 2 }}>
            {/* Nền xám */}
            <svg width={28} height={28} style={{ position: 'absolute', top: 0, left: 0 }}>
              <circle
                cx={14}
                cy={14}
                r={12}
                stroke="#bdbdbd"
                strokeWidth={4}
                fill="none"
              />
            </svg>
            {/* Phần đã làm màu xanh */}
            <svg width={28} height={28} style={{ position: 'absolute', top: 0, left: 0 }}>
              <circle
                cx={14}
                cy={14}
                r={12}
                stroke="#4CAF50"
                strokeWidth={4}
                fill="none"
                strokeDasharray={2 * Math.PI * 12}
                strokeDashoffset={2 * Math.PI * 12 * (1 - (problems.length === 0 ? 0 : statusCounts.solved / problems.length))}
                style={{ transition: 'stroke-dashoffset 0.5s', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
              />
            </svg>
            {/* Vòng ngoài để giữ layout */}
            <Box sx={{ width: 28, height: 28 }} />
            <Typography variant="body2" sx={{ fontWeight: 500, ml: 1 }}>
              {statusCounts.solved}/{problems.length} Đã giải
            </Typography>
          </Box>
        </Box>

        {/* Danh sách bài tập */}
        <Card className="border border-gray-200 shadow-lg">
          <TableContainer component={Paper} className="rounded-xl">
            <Table>
              <TableHead className="bg-gray-50">
                <TableRow>
                  <TableCell className="font-semibold text-gray-900" style={{ width: "15%" }} align="center">Trạng thái</TableCell>
                  <TableCell className="font-semibold text-gray-900" style={{ width: "60%" }}>Tên bài tập</TableCell>
                  <TableCell className="font-semibold text-gray-900" style={{ width: "10%" }} align="center">Độ khó</TableCell>
                  <TableCell className="font-semibold text-gray-900" style={{ width: "15%" }} align="center">Đánh dấu</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedProblems.map((problem, idx) => {
                  // Tạo ref cho mỗi TableCell nếu chưa có
                  if (!cellRefs.current[problem.EID]) {
                    cellRefs.current[problem.EID] = createRef<HTMLTableCellElement>();
                  }
                  return (
                    <TableRow
                      key={problem.EID}
                      className="transition-colors duration-150 cursor-pointer"
                      sx={{ backgroundColor: idx % 2 === 0 ? '#fff' : '#f9fafb', '&:hover': { backgroundColor: '#f1f5f9' } }}
                    >
                      <TableCell align="center">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                          <ExerciseStatusBadge status={problem.status || 'Unattempted'} />
                        </Box>
                      </TableCell>
                      <TableCell
                        onClick={() => window.location.href = `/exercises/${problem.Slug}`}
                        style={{ cursor: 'pointer' }}
                      >
                        <Box>
                          <Typography 
                            variant="body2" 
                            className="font-medium text-gray-900 hover:text-blue-600"
                          >
                            {problem.Name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body2"
                          className={`font-medium ${
                            (problem.Difficulty || "") === "Easy"
                              ? "text-green-500"
                              : (problem.Difficulty || "") === "Medium"
                              ? "text-yellow-500"
                              : (problem.Difficulty || "") === "Hard"
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          {problem.Difficulty === 'Easy' ? 'Dễ' : problem.Difficulty === 'Medium' ? 'Vừa' : problem.Difficulty === 'Hard' ? 'Khó' : problem.Difficulty}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" ref={cellRefs.current[problem.EID]}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {savedEIDs.includes(problem.EID) ? (
                            <BookmarkIcon
                              sx={{ cursor: 'pointer', color: '#FFD600' }}
                              onClick={() => handleBookmarkClick(problem.EID)}
                            />
                          ) : (
                            <BookmarkBorderIcon
                              sx={{ cursor: 'pointer', color: '#888' }}
                              onClick={() => handleBookmarkClick(problem.EID)}
                            />
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

        {/* Loading indicator khi lazy load */}
        {hasMore && (
          <Box
            ref={loadingRef}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 4,
              mt: 2,
            }}
          >
            {loadingMore ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <CircularProgress size={24} />
                <Typography variant="body2" color="text.secondary">
                  Đang tải thêm bài tập...
                </Typography>
              </Box>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Cuộn xuống để xem thêm
              </Typography>
            )}
          </Box>
        )}

        {/* End message khi đã hiển thị hết */}
        {!hasMore && displayedProblems.length > 0 && (
          <Box sx={{ textAlign: "center", py: 4, mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Đã hiển thị tất cả {filteredProblems.length} bài tập
            </Typography>
          </Box>
        )}
        {/* Popup đánh dấu */}
        <Menu
          anchorEl={bookmarkAnchorEl}
          disableScrollLock={true}
          open={bookmarkMenuOpen}
          onClose={handleMenuClose}
          PaperProps={{ sx: { borderRadius: 3, minWidth: 260, p: 0 } }}
        >
          <Box sx={{ px: 2, pt: 2, pb: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 16, mb: 1 }}>Danh sách của tôi</Typography>
            {menuLoading ? (
              <Typography sx={{ py: 2, color: 'text.secondary', fontSize: 14 }}>Đang tải...</Typography>
            ) : userLists.length === 0 ? (
              <Typography sx={{ py: 2, color: 'text.secondary', fontSize: 14 }}>Không có danh sách</Typography>
            ) : (
              <List sx={{ p: 0 }}>
                {userLists.map(list => {
                  const checked = listItemEIDs[list.LID]?.includes(selectedEID ?? -1);
                  return (
                    <ListItem key={list.LID} disablePadding sx={{ mb: 1, borderRadius: 2 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Checkbox
                          checked={checked}
                          onChange={e => handleToggleListItem(list.LID, e.target.checked)}
                          sx={{
                            p: 0,
                            borderRadius: 1.5,
                            color: '#222',
                            '&.Mui-checked': {
                              color: '#111',
                              bgcolor: '#111',
                              borderRadius: 1.5,
                            },
                            '& .MuiSvgIcon-root': {
                              borderRadius: 1.5,
                            },
                          }}
                          icon={<span style={{ border: '2px solid #222', borderRadius: 8, width: 22, height: 22, display: 'block' }} />}
                          checkedIcon={<span style={{ background: '#111', borderRadius: 8, width: 22, height: 22, display: 'block', position: 'relative' }}><svg width="16" height="16" style={{ position: 'absolute', top: 2, left: 3 }}><polyline points="2,8 6,12 14,4" style={{ fill: 'none', stroke: 'white', strokeWidth: 2 }} /></svg></span>}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={<Typography sx={{ fontWeight: 400, fontSize: 14 }}>{list.Name}</Typography>}
                      />
                    </ListItem>
                  );
                })}
              </List>
            )}
          </Box>
        </Menu>
        
      </Box>
      <ListSidebar />
    </Box>
  );
};

export default ExercisesPage;
