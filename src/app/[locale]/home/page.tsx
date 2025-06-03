"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, CircularProgress, Grid, List, Typography, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import { Box, Drawer, Avatar, Divider } from "@mui/material";
import NavBar from "@/components/NavBar";
import Link from "next/link";

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
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <NavBar />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: { xs: 2, sm: 6, md: 10 },
            py: 6,
            maxWidth: 900,
            mx: "auto",
          }}
        >
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
          <Stack spacing={3}>
            {topics.map((topic) => (
              <Card
                key={topic.TpID}
                variant="outlined"
                sx={{ borderRadius: 3, minHeight: "100px" }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    <Link href={`/home/topic/${topic.TpID}`}>
                      {topic.Name}
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
