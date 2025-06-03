"use client";

import { useEffect, useState } from "react";
import { Box, Tabs, Tab, Paper, Button, Typography, Input, CircularProgress } from "@mui/material";
import NavBar from "@/components/NavBar";
import axios from "axios";

interface Friend {
  id: string;
  username: string;
  email: string;
}
interface User {
  id: string;
  username: string;
  email: string;
  status: "friend" | "pending" | "not_friends";
  canAccept?: boolean;
}

export default function FriendsPage() {
  const [tab, setTab] = useState(0);

  // Danh sách bạn bè
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loadingFriends, setLoadingFriends] = useState(true);

  // Tìm kiếm bạn bè
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [searching, setSearching] = useState(false);

  // Lời mời đã gửi
  const [sentRequests, setSentRequests] = useState<Friend[]>([]);
  const [loadingSent, setLoadingSent] = useState(false);

  // Lời mời nhận được
  const [receivedRequests, setReceivedRequests] = useState<Friend[]>([]);
  const [loadingReceived, setLoadingReceived] = useState(false);

  // Fetch friends
  const fetchFriends = async () => {
    setLoadingFriends(true);
    try {
      const res = await axios.get("/api/users/friends");
      setFriends(res.data);
    } catch {
      setFriends([]);
    }
    setLoadingFriends(false);
  };

  // Fetch sent requests
  const fetchSentRequests = async () => {
    setLoadingSent(true);
    try {
      const res = await axios.get("/api/users/sentrequests");
      setSentRequests(res.data);
    } catch {
      setSentRequests([]);
    }
    setLoadingSent(false);
  };

  // Fetch received requests
  const fetchReceivedRequests = async () => {
    setLoadingReceived(true);
    try {
      const res = await axios.get("/api/users/receivedrequests");
      setReceivedRequests(res.data);
    } catch {
      setReceivedRequests([]);
    }
    setLoadingReceived(false);
  };

  // Search users
  const handleSearch = async () => {
    setSearching(true);
    try {
      const res = await axios.get("/api/users/search", { params: { q: query } });
      setSearchResults(res.data);
    } catch {
      setSearchResults([]);
    }
    setSearching(false);
  };

  // Gửi lời mời kết bạn
  const handleSendRequest = async (userId: string) => {
    await axios.post("/api/users/addfriend", { friendId: userId });
    handleSearch();
  };

  // Chấp nhận lời mời
  const handleAccept = async (userId: string) => {
    await axios.post("/api/users/acceptfriend", { friendId: userId });
    fetchReceivedRequests();
    fetchFriends();
    handleSearch();
  };

  // Từ chối lời mời
  const handleReject = async (userId: string) => {
    await axios.post("/api/users/rejectfriend", { friendId: userId });
    fetchReceivedRequests();
    handleSearch();
  };

  // Hủy kết bạn
  const handleUnfriend = async (userId: string) => {
    await axios.post("/api/users/unfriend", { friendId: userId });
    fetchFriends();
    handleSearch();
  };

  useEffect(() => {
    if (tab === 0) fetchFriends();
    if (tab === 2) fetchSentRequests();
    if (tab === 3) fetchReceivedRequests();
    // eslint-disable-next-line
  }, [tab]);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          maxWidth: 1000,
          mx: "auto",
          mt: 4,
          px: 2,
        }}
      >
        {/* Tabs dọc bên trái */}
        <Paper
          elevation={1}
          sx={{
            minWidth: 180,
            maxWidth: 220,
            mr: 3,
            borderRadius: 2,
            py: 2,
            bgcolor: "background.paper",
            height: "fit-content",
          }}
        >
          <Tabs orientation="vertical" value={tab} onChange={(_, v) => setTab(v)} textColor="primary" indicatorColor="primary" variant="fullWidth">
            <Tab label="Bạn bè" />
            <Tab label="Tìm kiếm" />
            <Tab label="Lời mời đã gửi" />
            <Tab label="Lời mời kết bạn" />
          </Tabs>
        </Paper>
        {/* Nội dung tab ở giữa, căn lề 2 bên */}
        <Paper
          elevation={2}
          sx={{
            flex: 1,
            borderRadius: 2,
            p: { xs: 2, sm: 4 },
            minHeight: 500,
            bgcolor: "background.paper",
          }}
        >
          <Box>
            {/* Danh sách bạn bè */}
            {tab === 0 && (
              <Box>
                <Typography variant="h6" mb={2}>
                  Danh sách bạn bè
                </Typography>
                {loadingFriends ? (
                  <CircularProgress />
                ) : friends.length === 0 ? (
                  <Typography>Bạn chưa có bạn bè nào.</Typography>
                ) : (
                  <Box className="space-y-2">
                    {friends.map((friend) => (
                      <Box key={friend.id} className="flex justify-between items-center border p-2 rounded">
                        <div>
                          <p className="font-medium">{friend.username}</p>
                          <p className="text-sm text-gray-500">{friend.email}</p>
                        </div>
                        <Button onClick={() => handleUnfriend(friend.id)} size="small" variant="outlined" color="error">
                          Hủy kết bạn
                        </Button>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            )}

            {/* Tìm kiếm bạn bè */}
            {tab === 1 && (
              <Box>
                <Typography variant="h6" mb={2}>
                  Tìm kiếm người dùng
                </Typography>
                <Box className="flex gap-2 mb-4">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Nhập username hoặc email"
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch();
                    }}
                  />
                  <Button variant="contained" onClick={handleSearch}>
                    Tìm
                  </Button>
                </Box>
                {searching ? (
                  <CircularProgress />
                ) : searchResults.length > 0 ? (
                  <Box className="space-y-2">
                    {searchResults.map((user) => (
                      <Box key={user.id} className="flex justify-between items-center border p-2 rounded">
                        <div>
                          <p className="font-medium">{user.username}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        {user.status === "not_friends" ? (
                          <Button onClick={() => handleSendRequest(user.id)} size="small" variant="outlined">
                            Kết bạn
                          </Button>
                        ) : user.status === "pending" && user.canAccept ? (
                          <Box className="flex gap-2">
                            <Button onClick={() => handleAccept(user.id)} size="small" variant="contained" color="success">
                              Chấp nhận
                            </Button>
                            <Button onClick={() => handleReject(user.id)} size="small" variant="outlined" color="error">
                              Từ chối
                            </Button>
                          </Box>
                        ) : user.status === "friend" ? (
                          <Box className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Bạn bè</span>
                            <Button onClick={() => handleUnfriend(user.id)} size="small" variant="outlined" color="error">
                              Hủy kết bạn
                            </Button>
                          </Box>
                        ) : (
                          <span className="text-sm text-gray-500">Đã gửi lời mời</span>
                        )}
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Typography>Không có kết quả.</Typography>
                )}
              </Box>
            )}

            {/* Đã gửi lời mời */}
            {tab === 2 && (
              <Box>
                <Typography variant="h6" mb={2}>
                  Danh sách lời mời đã gửi
                </Typography>
                {loadingSent ? (
                  <CircularProgress />
                ) : sentRequests.length === 0 ? (
                  <Typography>Bạn chưa gửi lời mời nào.</Typography>
                ) : (
                  <Box className="space-y-2">
                    {sentRequests.map((user) => (
                      <Box key={user.id} className="flex justify-between items-center border p-2 rounded">
                        <div>
                          <p className="font-medium">{user.username}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <span className="text-sm text-gray-500">Đã gửi lời mời</span>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            )}

            {/* Lời mời kết bạn */}
            {tab === 3 && (
              <Box>
                <Typography variant="h6" mb={2}>
                  Lời mời kết bạn
                </Typography>
                {loadingReceived ? (
                  <CircularProgress />
                ) : receivedRequests.length === 0 ? (
                  <Typography>Không có lời mời nào.</Typography>
                ) : (
                  <Box className="space-y-2">
                    {receivedRequests.map((user) => (
                      <Box key={user.id} className="flex justify-between items-center border p-2 rounded">
                        <div>
                          <p className="font-medium">{user.username}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <Box className="flex gap-2">
                          <Button onClick={() => handleAccept(user.id)} size="small" variant="contained" color="success">
                            Chấp nhận
                          </Button>
                          <Button onClick={() => handleReject(user.id)} size="small" variant="outlined" color="error">
                            Từ chối
                          </Button>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
