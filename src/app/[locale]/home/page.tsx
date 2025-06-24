"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, CircularProgress, Typography, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import NavBar from "@/components/Header";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

interface Topic {
  TpID: number;
  Name: string;
  Description: string | null;
}

export default function HomePage() {
  const t2 = useTranslations("HomePage");
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/topics/list")
      .then((res) => {
        setTopics(res.data.topics);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={100} sx={{ color: "#cc2b5e" }} />
      </Box>
    );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px" }}>
      <NavBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: "290px" },
          px: { xs: 2, sm: 6, md: 10 },
          py: 6,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <h1 className="text-2xl font-bold mb-4">{t2("topics_list")}</h1>
        <Stack spacing={3}>
          {topics.map((topic) => (
            <Card key={topic.TpID} variant="outlined" sx={{ borderRadius: 3, minHeight: "100px" }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  <Link href={`/home/topic/${topic.TpID}`}>{topic.Name}</Link>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
