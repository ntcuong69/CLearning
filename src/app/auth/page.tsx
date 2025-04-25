"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { TextField, Button, Card, CardContent, Typography, IconButton, InputAdornment, Divider, Box, Snackbar, Alert } from "@mui/material";
import { Visibility, VisibilityOff, Email, Person, Lock, Facebook, Google, GitHub } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import ThemeToggleSwitch from "@/components/ThemeToggleButton";

export default function AuthPage() {
  // State management
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Event handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      setErrorMessage("");
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Password does not match.");
        return;
      }
      setErrorMessage("");
      try {
        const response = await axios.post("http://localhost:3000/api/auth/signup", {
          FirstName: formData.firstName,
          LastName: formData.lastName,
          Email: formData.email,
          Password: formData.password,
        });
        console.log(response.data.message);
        setSnackbar({ open: true, message: response.data.message, severity: "success" });
      } catch (error) {
        console.error("Error during sign up:", error);
        setSnackbar({
          open: true,
          message: "Failed to register. Please try again.",
          severity: "error",
        });
      }
    } else {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (result?.error) {
          // Nếu login thất bại
          setSnackbar({
            open: true,
            message: result.error || "Failed to login. Please try again.",
            severity: "error",
          });
        } else {
          // Nếu login thành công
          router.push("/");
        }
      } catch (error: any) {
        console.error("Error during login:", error);
        setSnackbar({
          open: true,
          message: error.response?.data?.error || "Failed to login. Please try again.",
          severity: "error",
        });
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Box className="dark:bg-[linear-gradient(to_right,_#e2e2e2,_#c9d6ff)] flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-sm" sx={{ borderRadius: 3, boxShadow: 10 }}>
          <CardContent className="p-8">
            {/* Header */}
            <Typography variant="h5" component="h1" className="text-center" sx={{ fontWeight: "bold", marginBottom: 3 }}>
              {isSignUp ? "Sign Up" : "Sign In"}
            </Typography>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <Box display="flex" gap={2} mb={0}>
                  {/* First Name and Last Name Inputs */}
                  <TextField
                    fullWidth
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ color: "#6c5ce7" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      borderRadius: 20,
                    }}
                  />

                  {/* Last Name Input */}
                  <TextField
                    fullWidth
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ color: "#6c5ce7" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              )}

              {/* Email Input */}
              <TextField
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                variant="outlined"
                size="small"
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: "#6c5ce7" }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Password Input */}
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                variant="outlined"
                size="small"
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: "#6c5ce7" }} />
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

              {isSignUp && (
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  required
                  error={!!errorMessage}
                  helperText={errorMessage}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock sx={{ color: "#6c5ce7" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}

              {/* Remember Me & Forgot Password */}
              {!isSignUp && (
                <Box className="flex items-center justify-center mt-4">
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </Box>
              )}

              {/* Submit Button */}
              <Box className="flex justify-center mt-8">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    px: 10,
                    backgroundColor: "#1F2937",
                    transition: "background-color 0.3s ease",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#111827",
                    },
                  }}
                  disableElevation
                >
                  {isSignUp ? "Sign Up" : "Login"}
                </Button>
              </Box>
            </Box>

            {/* Toggle Sign In/Sign Up */}
            <Box className="mt-6 text-center">
              <Typography variant="body2" className="text-gray-700">
                {isSignUp ? "Already have an account? " : "Don’t have an account? "}
                <Button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-600 hover:underline" sx={{ textTransform: "none", padding: 0 }}>
                  {isSignUp ? "Sign In" : "Sign Up"}
                </Button>
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
                <IconButton sx={{ color: "#dc2626" }} size="large" aria-label="login with Google">
                  <Google />
                </IconButton>
                <IconButton sx={{ color: "#1e2939" }} size="large" aria-label="login with GitHub">
                  <GitHub />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {/* Snackbar */}
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity as "success" | "error"}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
