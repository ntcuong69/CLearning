"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TextField, Button, Checkbox, FormControlLabel, Card, CardContent, Typography, IconButton, InputAdornment, Divider, Box } from "@mui/material";
import { Visibility, VisibilityOff, Person, Lock, Facebook, Google, GitHub } from "@mui/icons-material";

export default function LoginPage() {
  // State management
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Event handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setCredentials({
      ...credentials,
      [name]: name === "rememberMe" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login credentials:", credentials);
    // Add authentication logic here
  };

  return (
    <Box className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md shadow-xl" elevation={6} sx={{ borderRadius: 3 }}>
        <CardContent className="p-8">
          {/* Header */}
          <Typography variant="h4" component="h1" className="font-bold text-center" sx={{ marginBottom: 3 }}>
            Login
          </Typography>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <TextField
              fullWidth
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password Input */}
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              variant="outlined"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" aria-label="toggle password visibility">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Remember Me & Forgot Password */}
            <Box className="flex items-center justify-between mt-2">
              <FormControlLabel control={<Checkbox name="rememberMe" checked={credentials.rememberMe} onChange={handleChange} color="primary" />} label="Remember me" />
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </Box>

            {/* Login Button */}
            <Button type="submit" variant="contained" fullWidth className="py-3 mt-4 hover:bg-blue-700" disableElevation>
              Login
            </Button>
          </Box>

          {/* Sign Up Link */}
          <Box className="mt-6 text-center">
            <Typography variant="body2" className="text-gray-700">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </Typography>
          </Box>

          {/* Social Login */}
          <Box className="mt-8 mb-2">
            <Box className="relative flex items-center justify-center">
              <Divider className="w-full" />
              <Typography variant="body2" className="absolute px-4 bg-white text-gray-600">
                or connect with
              </Typography>
            </Box>

            <Box className="flex justify-center mt-6 space-x-4">
              <IconButton sx={{ color: "#155dfc" }} size="large" aria-label="login with Facebook">
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#dc2626"}} size="large" aria-label="login with Google">
                <Google />
              </IconButton>
              <IconButton sx={{ color: "#1e2939"}} size="large" aria-label="login with GitHub">
                <GitHub />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
