"use client";
import React, { useState } from "react";
import NavBar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Box, Tabs, Tab, Typography, Paper } from "@mui/material";
import TopicManagement from "./TopicManagement";
import ExerciseManagement from "./ExerciseManagement";
import StudyplanManagement from "./StudyplanManagement";

function TabPanel(props: { children?: React.ReactNode; value: number; index: number }) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function AdminPage() {
  const [tab, setTab] = useState(0);
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => setTab(newValue);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", pt: "70px" }}>
      <NavBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { md: "250px" },
          px: { xs: 2, sm: 6, md: 10 },
          py: 6,
          mx: "auto",
          maxWidth: 1200,
        }}
      >
        <Paper sx={{ mb: 4 }}>
          <Tabs value={tab} onChange={handleTabChange} aria-label="admin tabs">
            <Tab label="Quản lý chủ đề" id="admin-tab-0" aria-controls="admin-tabpanel-0" />
            <Tab label="Quản lý bài tập" id="admin-tab-1" aria-controls="admin-tabpanel-1" />
            <Tab label="Quản lý khóa học" id="admin-tab-2" aria-controls="admin-tabpanel-2" />
          </Tabs>
        </Paper>
        <TabPanel value={tab} index={0}>
          <TopicManagement />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <ExerciseManagement />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <StudyplanManagement />
        </TabPanel>
      </Box>
    </Box>
  );
}
