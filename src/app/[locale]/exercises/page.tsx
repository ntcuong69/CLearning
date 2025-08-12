"use client";
import React, { useState, useEffect, useRef, createRef } from "react";
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
  Pagination,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Menu from "@mui/material/Menu";
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

// Số bài tập hiển thị trên mỗi trang
const ITEMS_PER_PAGE = 50;

const ExercisesPage = () => {
  // State cho chủ đề, bài tập, loading
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [topics, setTopics] = useState<any[]>([]);
  const [problems, setProblems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // State cho pagination
  const [currentPage, setCurrentPage] = useState(1);

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
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; color?: string }>({ open: false, message: "" });
  const [savedEIDs, setSavedEIDs] = useState<number[]>([]); // EID đã lưu vào bất kỳ list nào
  const [listItemEIDs, setListItemEIDs] = useState<{ [lid: number]: number[] }>({}); // EID theo từng list

  // Xử lý mở/đóng popover filter
  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => setFilterAnchorEl(event.currentTarget);
  const handleFilterClose = () => setFilterAnchorEl(null);
  const filterOpen = Boolean(filterAnchorEl);
  const filterId = filterOpen ? "filter-popover" : undefined;

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
      const res = await axios.get("/api/list");
      setUserLists(res.data.lists || []);
      // Lấy EID cho từng list
      const eidsMap: { [lid: number]: number[] } = {};
      await Promise.all(
        (res.data.lists || []).map(async (list: any) => {
          const r = await axios.get(`/api/listitem/${list.LID}`);
          eidsMap[list.LID] = (r.data.exercises || []).map((ex: any) => ex.EID);
        })
      );
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
        await axios.post("/api/listitem", { lid, eid: selectedEID });
      } else {
        await axios.delete("/api/listitem", { data: { lid, eid: selectedEID } });
      }

      // Notify ListSidebar about the change
      if (handleListExerciseChanged) {
        handleListExerciseChanged(lid, selectedEID, checked);
      }

      // Also notify ListSidebar's internal handler if available
      if ((window as any).handleListExerciseChanged) {
        (window as any).handleListExerciseChanged(lid, selectedEID, checked);
      }

      // Refetch for this list
      const r = await axios.get(`/api/listitem/${lid}`);
      setListItemEIDs((prev) => ({ ...prev, [lid]: (r.data.exercises || []).map((ex: any) => ex.EID) }));
      // Refetch savedEIDs for global icon
      const res = await axios.get("/api/listitem/user");
      setSavedEIDs(res.data.eids || []);
    } catch (e: any) {
      setSnackbar({ open: true, message: e?.response?.data?.error || "Lỗi khi lưu/xóa", color: "error" });
    }
  };

  const handleMenuClose = () => {
    setBookmarkAnchorEl(null);
    setSelectedEID(null);
  };

  // Handler for when a list is deleted
  const handleListDeleted = async (deletedListId: number) => {
    // Remove the deleted list from userLists
    setUserLists((prev) => prev.filter((list) => list.LID !== deletedListId));

    // Remove the deleted list from listItemEIDs
    setListItemEIDs((prev) => {
      const newState = { ...prev };
      delete newState[deletedListId];
      return newState;
    });

    // Refetch saved EIDs to update bookmark icons
    try {
      const res = await axios.get("/api/listitem/user");
      setSavedEIDs(res.data.eids || []);
    } catch (error) {
      console.error("Error refetching saved EIDs:", error);
    }
  };

  // Handler for when exercises are added/removed from lists
  const handleListExerciseChanged = async (listId: number, exerciseId: number, isAdded: boolean) => {
    // Update listItemEIDs
    setListItemEIDs((prev) => {
      const newState = { ...prev };
      if (!newState[listId]) {
        newState[listId] = [];
      }

      if (isAdded) {
        if (!newState[listId].includes(exerciseId)) {
          newState[listId] = [...newState[listId], exerciseId];
        }
      } else {
        newState[listId] = newState[listId].filter((id) => id !== exerciseId);
      }

      return newState;
    });

    // Update savedEIDs for bookmark icons
    try {
      const res = await axios.get("/api/listitem/user");
      setSavedEIDs(res.data.eids || []);
    } catch (error) {
      console.error("Error refetching saved EIDs:", error);
    }
  };

  // Lấy danh sách chủ đề và bài tập khi load trang
  useEffect(() => {
    setLoading(true);
    Promise.all([axios.get("/api/topics/list"), axios.get("/api/exercise/list")])
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
        const res = await axios.get("/api/listitem/user");
        setSavedEIDs(res.data.eids || []);
      } catch {}
    };
    fetchSavedEIDs();
  }, []);

  // Hàm lọc bài tập theo chủ đề, từ khóa, trạng thái, độ khó
  const getFilteredProblems = () => {
    return (selectedTopic === "all" ? problems : problems.filter((p) => p.TpID === Number(selectedTopic)))
      .filter((p) => p.Name.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter((p) => (statusFilter === "all" ? true : (p.status || "Unattempted") === statusFilter))
      .filter((p) => (difficultyFilter === "all" ? true : (p.Difficulty || "") === difficultyFilter));
  };
  const filteredProblems = getFilteredProblems();

  // Tính toán bài tập hiển thị cho trang hiện tại
  const getCurrentPageProblems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProblems.slice(startIndex, endIndex);
  };

  // Tính tổng số trang
  const totalPages = Math.ceil(filteredProblems.length / ITEMS_PER_PAGE);

  // Reset về trang 1 khi filter thay đổi
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTopic, problems, searchTerm, statusFilter, difficultyFilter]);

  // Xử lý thay đổi trang
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    // Scroll to top of the table
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Đếm số bài tập theo trạng thái
  const getStatusCounts = (problems: any[]) =>
    problems.reduce(
      (acc, p) => {
        const status = p.status || "Unattempted";
        if (status === "Solved") acc.solved++;
        else if (status === "Attempting") acc.attempting++;
        else acc.unattempted++;
        return acc;
      },
      { solved: 0, attempting: 0, unattempted: 0 }
    );

  // Đếm trạng thái tổng quan
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
        {/* Header Section */}

        {/* Thanh chọn chủ đề */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 2,
              p: 1,
            }}
          >
            {topics.map((topic) => {
              // Đếm số bài theo trạng thái cho từng chủ đề
              let topicProblems = topic.TpID === "all" ? problems : problems.filter((p) => p.TpID === Number(topic.TpID));
              const statusCounts = getStatusCounts(topicProblems);
              const totalCount = topicProblems.length;
              const isSelected = selectedTopic === String(topic.TpID);
              const progressPercentage = totalCount === 0 ? 0 : (statusCounts.solved / totalCount) * 100;

              return (
                <Box
                  key={topic.TpID}
                  onClick={() => setSelectedTopic(String(topic.TpID))}
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    borderRadius: 2.5,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Card
                    sx={{
                      bgcolor: isSelected ? "#1976d2" : "#fff",
                      color: isSelected ? "#fff" : "#1a1a1a",
                      borderRadius: 2.5,
                      border: isSelected ? "2px solid #1976d2" : "2px solid #e2e8f0",
                      boxShadow: isSelected ? "0 4px 12px rgba(25, 118, 210, 0.3)" : "0 2px 8px rgba(0,0,0,0.08)",
                      p: 2,
                      minWidth: 150,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          fontSize: "14px",
                          lineHeight: 1.2,
                        }}
                      >
                        {topic.Name}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            bgcolor: isSelected ? "rgba(255,255,255,0.2)" : "rgba(76, 175, 80, 0.1)",
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            minWidth: "fit-content",
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              fontWeight: 600,
                              fontSize: "11px",
                              color: isSelected ? "#fff" : "#4caf50",
                            }}
                          >
                            {statusCounts.solved}/{totalCount}
                          </Typography>
                        </Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: isSelected ? "rgba(255,255,255,0.8)" : "text.secondary",
                            fontSize: "10px",
                            fontWeight: 500,
                          }}
                        >
                          {progressPercentage.toFixed(0)}%
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Thanh tìm kiếm + filter icon + vòng tròn thống kê tổng quan */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            p: 3,
            bgcolor: "#fff",
            borderRadius: "12px 12px 0 0",
            border: "1px solid #e2e8f0",
            borderBottom: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          {/* Thanh tìm kiếm */}
          <Box sx={{ position: "relative", flex: 1 }}>
            <SearchIcon
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
                fontSize: 20,
              }}
            />
            <input
              type="text"
              placeholder="Tìm kiếm bài tập..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 16px 12px 48px",
                borderRadius: 12,
                border: "2px solid #e2e8f0",
                fontSize: 15,
                outline: "none",
                boxSizing: "border-box",
                color: "#1a1a1a",
                backgroundColor: "#f8fafc",
                transition: "all 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#1976d2";
                e.target.style.backgroundColor = "#fff";
                e.target.style.boxShadow = "0 0 0 3px rgba(25, 118, 210, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e2e8f0";
                e.target.style.backgroundColor = "#f8fafc";
                e.target.style.boxShadow = "none";
              }}
            />
          </Box>

          {/* Icon filter mở popover */}
          <Button
            aria-describedby={filterId}
            onClick={handleFilterClick}
            variant="outlined"
            sx={{
              minWidth: 48,
              height: 48,
              p: 0,
              borderRadius: 12,
              border: "2px solid #e2e8f0",
              color: "#64748b",
              bgcolor: "#f8fafc",
              "&:hover": {
                borderColor: "#1976d2",
                bgcolor: "#e3f2fd",
                color: "#1976d2",
              },
              transition: "all 0.2s ease",
            }}
          >
            <FilterListIcon sx={{ fontSize: 20 }} />
          </Button>

          {/* Popover filter */}
          <Popover
            id={filterId}
            open={filterOpen}
            disableScrollLock={true}
            anchorEl={filterAnchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            PaperProps={{
              sx: {
                borderRadius: 3,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid #e2e8f0",
                mt: 1,
              },
            }}
          >
            <Box sx={{ p: 3, minWidth: 300 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#1a1a1a" }}>
                Bộ lọc
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: "#374151" }}>
                    Trạng thái
                  </Typography>
                  <Select
                    size="small"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as any)}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "& fieldset": { borderColor: "#e2e8f0" },
                        "&:hover fieldset": { borderColor: "#1976d2" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      },
                    }}
                  >
                    {STATUS_OPTIONS.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: "#374151" }}>
                    Độ khó
                  </Typography>
                  <Select
                    size="small"
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value as any)}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "& fieldset": { borderColor: "#e2e8f0" },
                        "&:hover fieldset": { borderColor: "#1976d2" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      },
                    }}
                  >
                    {DIFFICULTY_OPTIONS.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
            </Box>
          </Popover>

          {/* Vòng tròn progress tổng quan */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 2,
              minWidth: 200,
            }}
          >
            <Box sx={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
              {/* Nền xám */}
              <svg width={40} height={40} style={{ position: "absolute", top: 0, left: 0 }}>
                <circle cx={20} cy={20} r={16} stroke="#e2e8f0" strokeWidth={3} fill="none" />
              </svg>
              {/* Phần đã làm màu xanh */}
              <svg width={40} height={40} style={{ position: "absolute", top: 0, left: 0 }}>
                <circle
                  cx={20}
                  cy={20}
                  r={16}
                  stroke="#4CAF50"
                  strokeWidth={3}
                  fill="none"
                  strokeDasharray={2 * Math.PI * 16}
                  strokeDashoffset={2 * Math.PI * 16 * (1 - (problems.length === 0 ? 0 : statusCounts.solved / problems.length))}
                  style={{
                    transition: "stroke-dashoffset 0.8s ease-in-out",
                    transform: "rotate(-90deg)",
                    transformOrigin: "50% 50%",
                  }}
                />
              </svg>
              {/* Vòng ngoài để giữ layout */}
              <Box sx={{ width: 40, height: 40 }} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
                {statusCounts.solved}/{problems.length}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 500 }}>
                Đã giải xong
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Danh sách bài tập */}
        <Card className="border border-gray-200 shadow-lg" sx={{ borderRadius: "0 0 12px 12px", borderTop: "none" }}>
          <TableContainer component={Paper} className="rounded-xl">
            <Table>
              <TableHead className="bg-gray-50">
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      width: "15%",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      fontSize: "14px",
                      py: 2,
                    }}
                  >
                    Trạng thái
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "60%",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      fontSize: "14px",
                      py: 2,
                    }}
                  >
                    Tên bài tập
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: "10%",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      fontSize: "14px",
                      py: 2,
                    }}
                  >
                    Độ khó
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: "15%",
                      fontWeight: 700,
                      color: "#1a1a1a",
                      fontSize: "14px",
                      py: 2,
                    }}
                  >
                    Đánh dấu
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getCurrentPageProblems().map((problem, idx) => {
                  // Tạo ref cho mỗi TableCell nếu chưa có
                  if (!cellRefs.current[problem.EID]) {
                    cellRefs.current[problem.EID] = createRef<HTMLTableCellElement>();
                  }
                  return (
                    <TableRow
                      key={problem.EID}
                      className="transition-colors duration-150 cursor-pointer"
                      sx={{ backgroundColor: idx % 2 === 0 ? "#fff" : "#f9fafb", "&:hover": { backgroundColor: "#f1f5f9" } }}
                    >
                      <TableCell align="center">
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                          <ExerciseStatusBadge status={problem.status || "Unattempted"} />
                        </Box>
                      </TableCell>
                      <TableCell
                        onClick={() => {
                          const url = `/exercises/${problem.Slug}?source=all`;
                          window.location.href = url;
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <Box>
                          <Typography variant="body2" className="font-medium text-gray-900 hover:text-blue-600">
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
                          {problem.Difficulty === "Easy"
                            ? "Dễ"
                            : problem.Difficulty === "Medium"
                            ? "Vừa"
                            : problem.Difficulty === "Hard"
                            ? "Khó"
                            : problem.Difficulty}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" ref={cellRefs.current[problem.EID]}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {savedEIDs.includes(problem.EID) ? (
                            <BookmarkIcon sx={{ cursor: "pointer", color: "#FFD600" }} onClick={() => handleBookmarkClick(problem.EID)} />
                          ) : (
                            <BookmarkBorderIcon sx={{ cursor: "pointer", color: "#888" }} onClick={() => handleBookmarkClick(problem.EID)} />
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

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
              sx={{
                "& .MuiPaginationItem-root": {
                  borderRadius: 2,
                  fontWeight: 600,
                },
                "& .Mui-selected": {
                  backgroundColor: "#1976d2 !important",
                  color: "#fff !important",
                },
              }}
            />
          </Box>
        )}

        {/* Thông tin về số bài tập hiển thị */}
        {filteredProblems.length > 0 && (
          <Box sx={{ textAlign: "center", py: 2, mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Hiển thị {((currentPage - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, filteredProblems.length)} trong tổng số {filteredProblems.length} bài tập
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
              <Typography sx={{ py: 2, color: "text.secondary", fontSize: 14 }}>Đang tải...</Typography>
            ) : userLists.length === 0 ? (
              <Typography sx={{ py: 2, color: "text.secondary", fontSize: 14 }}>Không có danh sách</Typography>
            ) : (
              <List sx={{ p: 0 }}>
                {userLists.map((list) => {
                  const checked = listItemEIDs[list.LID]?.includes(selectedEID ?? -1);
                  return (
                    <ListItem key={list.LID} disablePadding sx={{ mb: 1, borderRadius: 2 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <Checkbox
                          checked={checked}
                          onChange={(e) => handleToggleListItem(list.LID, e.target.checked)}
                          sx={{
                            p: 0,
                            borderRadius: 1.5,
                            color: "#222",
                            "&.Mui-checked": {
                              color: "#111",
                              bgcolor: "#111",
                              borderRadius: 1.5,
                            },
                            "& .MuiSvgIcon-root": {
                              borderRadius: 1.5,
                            },
                          }}
                          icon={<span style={{ border: "2px solid #222", borderRadius: 8, width: 22, height: 22, display: "block" }} />}
                          checkedIcon={
                            <span style={{ background: "#111", borderRadius: 8, width: 22, height: 22, display: "block", position: "relative" }}>
                              <svg width="16" height="16" style={{ position: "absolute", top: 2, left: 3 }}>
                                <polyline points="2,8 6,12 14,4" style={{ fill: "none", stroke: "white", strokeWidth: 2 }} />
                              </svg>
                            </span>
                          }
                        />
                      </ListItemIcon>
                      <ListItemText primary={<Typography sx={{ fontWeight: 400, fontSize: 14 }}>{list.Name}</Typography>} />
                    </ListItem>
                  );
                })}
              </List>
            )}
          </Box>
        </Menu>
      </Box>
      <ListSidebar onListDeleted={handleListDeleted} onListExerciseChanged={handleListExerciseChanged} />
    </Box>
  );
};

export default ExercisesPage;
