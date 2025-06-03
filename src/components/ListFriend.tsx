"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

interface Friend {
  id: string;
  username: string;
  email: string;
}

export default function ListFriend() {
  const [friends, setFriends] = useState<Friend[]>([]);

  const fetchFriends = async () => {
    const res = await axios.get("/api/users/friends");
    setFriends(res.data);
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  const handleUnfriend = async (friendId: string) => {
    await axios.post("/api/users/unfriend", { friendId });
    fetchFriends();
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">Danh sách bạn bè</h2>
      {friends.length === 0 ? (
        <p>Bạn chưa có bạn bè nào.</p>
      ) : (
        <div className="space-y-2">
          {friends.map((friend) => (
            <div key={friend.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <p className="font-medium">{friend.username}</p>
                <p className="text-sm text-gray-500">{friend.email}</p>
              </div>
              <Button
                onClick={() => handleUnfriend(friend.id)}
                size="small"
                variant="outlined"
                color="error"
              >
                Hủy kết bạn
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}