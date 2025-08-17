"use client";
import React from "react";
import NavBar from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Box, Typography, Paper } from "@mui/material";
import StudyplanManagement from "../StudyplanManagement";

export default function StudyplansPage() {
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
        
        <StudyplanManagement />
      </Box>
    </Box>
  );
}
