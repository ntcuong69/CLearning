import React from "react";
import {useTranslations} from 'next-intl';
import Link from "next/link";
import { Button, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { AccountCircle, Code, CheckCircle } from "@mui/icons-material";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function GettingStarted() {
 
  const t = useTranslations('GettingStarted');

  return (
    <main className="min-h-screen bg-[linear-gradient(to_left_bottom,_#3f2a9c,_#141b56)] text-white font-sans px-6 py-12">
      <Box className="max-w-6xl mx-auto">
        {/* Header */}
        <Box component="header" className="flex justify-between items-center mb-8">
          <Typography variant="h5" className="font-bold">
            &lt;/&gt; CODE CHALLENGE
          </Typography>
          <LocaleSwitcher/>
          <Box className="space-x-4">
            <Link href="/auth">
              <Button variant="text">
                Sign Up
              </Button>
            </Link>
            <Link href="/auth">
              <Button variant="text">
                Log In
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Main Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                marginBottom: 3,
                background: "linear-gradient(to right, #00c6ff, #9c27b0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              {t('title')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 3 }}>
            {t('description')}
            </Typography>
            <Link href="/auth">
              <Button
                variant="contained"
                color="primary"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Let&apos;s Go
              </Button>
            </Link>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className="md:block">
            <img src="developer.png" alt="Developer Coding" className="w-full max-w-sm mx-auto" />
          </Grid>
        </Grid>

        {/* Card */}
        <Grid container spacing={4} className="mt-16 text-center">
          {[
            {
              icon: <AccountCircle sx={{ fontSize: 60 }} />,
              title: "Sign Up",
              description: "Create an account to begin.",
            },
            {
              icon: <Code sx={{ fontSize: 60 }} />,
              title: "Solve a Problem",
              description: "Browse the problems and start coding.",
            },
            {
              icon: <CheckCircle sx={{ fontSize: 60 }} />,
              title: "Submit Your Solution",
              description: "Test your code and submit it.",
            },
          ].map((card, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  padding: 2,
                  borderRadius: 5,
                  transition: "all 0.2s ease-in-out",
                  boxShadow: 3,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h2" sx={{ marginBottom: 2, color: "#5f5afd" }}>
                    {card.icon}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}
