"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { TextField, Button, Card, CardContent, Typography, IconButton, InputAdornment, CircularProgress, Divider, Box, Snackbar, Alert } from "@mui/material";
import { Visibility, VisibilityOff, AlternateEmail, LockOutlined, Facebook, Google, GitHub } from "@mui/icons-material";
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
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

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
    setIsLoading(true);
    // Sign up logic
    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Password does not match.");
        setIsLoading(false);
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
      } finally {
        setIsLoading(false);
      }
    } else {
      // Sign in logic
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (result?.error) {
          // If login fails
          setSnackbar({
            open: true,
            message: result.error || "Failed to login. Please try again.",
            severity: "error",
          });
        } else {
          // If login succeeds
          router.push("/");
        }
      } catch (error: any) {
        console.error("Error during login:", error);
        setSnackbar({
          open: true,
          message: error.response?.data?.error || "Failed to login. Please try again.",
          severity: "error",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const commonTextFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      paddingTop: "0.2rem",
      paddingBottom: "0.2rem",
      ".dark &": {
        backgroundColor: "#2b2b2b",
      },
    },
    "& .MuiOutlinedInput-input": {
      "&::placeholder": {
        ".dark &": {
          color: "#d1d5db",
        },
      },
      ".dark &": {
        caretColor: "#ffffff",
        color: "#ffffff",
      },
    },
  };

  return (
    <>
      <Box className="flex items-center justify-center min-h-screen">
        <ThemeToggleSwitch />
        <Card
          className="w-full max-w-sm"
          sx={{ borderRadius: 5, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", ".dark &": { backgroundColor: "#1f1f1f" } }}
        >
          <CardContent className="p-8 dark:bg-[#1f1f1f]">
            {/* Header */}
            <Typography variant="h5" component="h1" className="text-center dark:text-[#f1f1f1]" sx={{ fontWeight: "bold", marginBottom: 3 }}>
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
                    sx={commonTextFieldStyles}
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
                    sx={commonTextFieldStyles}
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
                      <AlternateEmail sx={{ color: "black", ".dark &": { color: "white" }, marginRight: 1 }} />
                    </InputAdornment>
                  ),
                }}
                sx={commonTextFieldStyles}
              />

              {/* Password Input */}
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                variant="outlined"
                size="small"
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined sx={{ color: "black", ".dark &": { color: "white" }, marginRight: 1 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" aria-label="toggle password visibility">
                        {showPassword ? <VisibilityOff sx={{ color: "black", ".dark &": { color: "white" } }} /> : <Visibility sx={{ color: "black", ".dark &": { color: "white" } }} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={commonTextFieldStyles}
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
                        <LockOutlined sx={{ color: "black", ".dark &": { color: "white" }, marginRight: 1 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={commonTextFieldStyles}
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
                    backgroundColor: "#1F2937",
                    width: "50%",
                    transition: "background-color 0.3s ease",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#111827",
                    },
                    "&.Mui-disabled": {
                      backgroundColor: "#111827",
                    },
                    ".dark &": {
                      backgroundColor: "#2d79f3",
                      "&:hover": {
                        backgroundColor: "#1e40af",
                      },
                    },
                  }}
                  disableElevation
                  disabled={isLoading}
                >
                  {isLoading ? <CircularProgress size={25} sx={{ color: "#ffffff" }} /> : isSignUp ? "Sign Up" : "Login"}
                </Button>
              </Box>
            </Box>

            {/* Toggle Sign In/Sign Up */}
            <Box className="mt-6 text-center">
              <Typography variant="body2" className="text-gray-700 dark:text-[#f1f1f1]">
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
                <Typography variant="body2" className="absolute px-4 bg-white dark:bg-[#1f1f1f] text-gray-600 dark:text-gray-400">
                  or connect with
                </Typography>
              </Box>

              <Box className="flex justify-center mt-6 space-x-4">
                <IconButton
                  sx={{
                    color: "#155dfc",
                    ".dark &": {
                      color: "#4c6ef5",
                      "&:hover": {
                        backgroundColor: "#333333",
                      },
                    },
                  }}
                  size="large"
                  aria-label="login with Facebook"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#dc2626",
                    ".dark &": {
                      color: "#f87171",
                      "&:hover": {
                        backgroundColor: "#333333",
                      },
                    },
                  }}
                  size="large"
                  aria-label="login with Google"
                >
                  <Google />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#1e2939",
                    ".dark &": {
                      color: "#334155",
                      "&:hover": {
                        backgroundColor: "#333333",
                      },
                    },
                  }}
                  size="large"
                  aria-label="login with GitHub"
                >
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
