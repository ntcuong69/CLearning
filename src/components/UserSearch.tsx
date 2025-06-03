"use client";

import { useState } from "react";
import axios from "axios";
import { Button, Input, Typography } from "@mui/material";

interface User {
  id: string;
  username: string;
  email: string;
  status: "friend" | "pending" | "not_friends";
  canAccept?: boolean;
}

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);

  const handleSearch = async () => {
    const res = await axios.get("/api/users/search", {
      params: { q: query },
    });
    setResults(res.data);
  };

  const handleSendRequest = async (userId: string) => {
    await axios.post("/api/users/addfriend", { friendId: userId });
    await handleSearch(); // refresh status
  };

  const handleAccept = async (userId: string) => {
    await axios.post("/api/users/acceptfriend", { friendId: userId });
    await handleSearch(); // refresh status
  };

  const handleReject = async (userId: string) => {
    await axios.post("/api/users/rejectfriend", { friendId: userId });
    await handleSearch(); // refresh status
  };

  const handleUnfriend = async (userId: string) => {
    await axios.post("/api/users/unfriend", { friendId: userId });
    await handleSearch(); // refresh status
  };

  return (
    <div className="p-4 space-y-4">
      <Typography variant="h6">Tìm kiếm người dùng</Typography>
      <div className="flex gap-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nhập username hoặc email"
          className="flex-1"
        />
        <Button variant="contained" onClick={handleSearch}>
          Tìm
        </Button>
      </div>

      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((user) => (
            <div key={user.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <p className="font-medium">{user.username}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              {user.status === "not_friends" ? (
                <Button onClick={() => handleSendRequest(user.id)} size="small" variant="outlined">
                  Kết bạn
                </Button>
              ) : user.status === "pending" && user.canAccept ? (
                <div className="flex gap-2">
                  <Button onClick={() => handleAccept(user.id)} size="small" variant="contained" color="success">
                    Chấp nhận
                  </Button>
                  <Button onClick={() => handleReject(user.id)} size="small" variant="outlined" color="error">
                    Từ chối
                  </Button>
                </div>
              ) : user.status === "friend" ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Bạn bè</span>
                  <Button onClick={() => handleUnfriend(user.id)} size="small" variant="outlined" color="error">
                    Hủy kết bạn
                  </Button>
                </div>
              ) : (
                <span className="text-sm text-gray-500">Đã gửi lời mời</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
