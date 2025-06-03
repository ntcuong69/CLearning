"use client";

import { useEffect } from "react";
import { io } from "socket.io-client";
import { useSession } from "next-auth/react";

export default function useSocketStatus() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user?.uid) return;

    const socket = io("/", {
      path: "/api/socketio",
      query: { userId: session.user.uid },
    });

    return () => {socket.disconnect();};
  }, [session?.user?.uid]);
}
