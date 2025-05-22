"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { Box, Drawer, Avatar, Divider } from "@mui/material";
import Image from "next/image";
import { signOut } from "next-auth/react";

interface Topic {
  TpID: number;
  Name: string;
  Description: string | null;
}

export default function TopicsPage() {
  const t1 = useTranslations("Topic");
  const t2 = useTranslations("HomePage");
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/topics")
      .then((res) => {
        setTopics(res.data.topics);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
        setLoading(false);
      });
    axios
      .get("/api/me")
      .then((res) => {
        setUserEmail(res.data.user.Email);
      })
      .catch(() => {
        setUserEmail("");
      });
  }, []);

  if (loading)
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={100} sx={{ color: "#cc2b5e" }} />
      </Box>
    );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 260,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 260, boxSizing: "border-box", background: "#f5f5f5" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 3 }}>
          <Image src="/next.svg" alt="CodeForge Logo" width={80} height={80} style={{ marginBottom: 16 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            CodeForge
          </Typography>
          <Divider sx={{ width: "100%", my: 2 }} />
          <Avatar sx={{ mb: 1, bgcolor: "primary.main" }}>{userEmail ? userEmail[0].toUpperCase() : "?"}</Avatar>
          <Typography variant="body2" color="text.secondary">
            {userEmail || "Chưa đăng nhập"}
          </Typography>
        </Box>
        <Button onClick={() => signOut({ callbackUrl: "/auth" })} className="px-4 py-2">
          Logout
        </Button>
      </Drawer>
      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 6 }}>
        <Typography
          variant="h5"
          component="h2"
          className="text-gray-800 dark:text-white font-semibold"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            mb: 2,
          }}
        >
          {t2("welcome")}
        </Typography>
        <h1 className="text-2xl font-bold mb-4">{t2("topics_list")}</h1>
        <Grid container spacing={4}>
          {topics.map((topic) => (
            <Grid size={{ xs: 12, md: 4 }} key={topic.TpID}>
              <Card key={topic.TpID} variant="outlined" sx={{ borderRadius: 3, height: "170px" }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1.5 }}>
                    {t1(topic.Name)}
                  </Typography>
                  {topic.Description && (
                    <Typography variant="body2" color="text.secondary">
                      {t1(topic.Description)}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
