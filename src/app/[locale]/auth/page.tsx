"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  InputAdornment,
  CircularProgress,
  Divider,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff, AlternateEmail, LockOutlined, Person2Outlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function AuthPage() {
  const t = useTranslations("AuthPage");
  const router = useRouter();

  // State quản lý form và trạng thái
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  // Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (["email", "password", "confirmPassword"].includes(name)) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
      if (name === "confirmPassword") setErrorMessage("");
    }
  };

  // Xử lý submit form đăng nhập/đăng ký
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (isSignUp) {
      // Đăng ký
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Password does not match.");
        setIsLoading(false);
        return;
      }
      try {
        const res = await axios.post("http://localhost:3000/api/auth/signup", {
          Name: formData.username,
          Email: formData.email,
          Password: formData.password,
        });
        setSnackbar({ open: true, message: res.data.message, severity: "success" });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data?.message?.includes("Email already registered")) {
          setFieldErrors({ email: "Email đã được sử dụng", password: "" });
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      // Đăng nhập
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });
        if (result?.error) {
          if (result.error.toLowerCase().includes("email")) setFieldErrors({email: "Email không tồn tại", password: "" });
          else if (result.error.toLowerCase().includes("password")) setFieldErrors({email: "", password: "Mật khẩu không đúng" });
          else setFieldErrors({ email: "", password: "Đăng nhập thất bại" });
        } else {
          setFieldErrors({ email: "", password: "" });
          router.push("/home");
        }
      } catch (error: any) {
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

  // Đóng snackbar thông báo
  const handleCloseSnackbar = () => setSnackbar((prev) => ({ ...prev, open: false }));

  // Style chung cho các TextField
  const commonTextFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      paddingTop: "0.2rem",
      paddingBottom: "0.2rem",
      ".dark &": { backgroundColor: "#171823" },
    },
    "& .MuiOutlinedInput-input": {
      "&::placeholder": { ".dark &": { color: "#d1d5db" } },
      ".dark &": { caretColor: "#ffffff", color: "#ffffff" },
    },
  };

  return (
    <>
      <style>
        {`
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
            -webkit-text-fill-color: #000000 !important;
          }
          
          .dark input:-webkit-autofill,
          .dark input:-webkit-autofill:hover,
          .dark input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0px 1000px #171823 inset !important; /* Gray background for dark mode */
            -webkit-text-fill-color: #ffffff !important;
          }
        `}
      </style>
      <Box className="flex items-center justify-center min-h-screen">
        <Card
          className="w-full max-w-sm"
          sx={{ borderRadius: 5, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", ".dark &": { backgroundColor: "#242533" } }}
        >
          <CardContent className="p-8 dark:bg-[#242533]">
            {/* Tiêu đề */}
            <Typography variant="h5" component="h1" className="text-center dark:text-[#f1f1f1]" sx={{ fontWeight: "bold", marginBottom: 3 }}>
              {isSignUp ? t("signup") : t("signin")}
            </Typography>

            {/* Form đăng nhập/đăng ký */}
            <Box component="form" onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && 
                <Box mb={0}>
                  {/* Name Input */}
                  <TextField
                    fullWidth
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder={t("name")}
                    variant="outlined"
                    size="small"
                    margin="normal"
                    required
                    sx={commonTextFieldStyles}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person2Outlined sx={{ color: "black", ".dark &": { color: "white" }, marginRight: 1 }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              }
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
                error={!!fieldErrors.email}
                helperText={fieldErrors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmail sx={{ color: "black", ".dark &": { color: "white" }, marginRight: 1 }} />
                    </InputAdornment>
                  ),
                }}
                sx={commonTextFieldStyles}
              />

              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={t("password")}
                variant="outlined"
                size="small"
                margin="normal"
                required
                error={!!fieldErrors.password}
                helperText={fieldErrors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined sx={{ color: "black", ".dark &": { color: "white" }, marginRight: 1 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword((v) => !v)} edge="end" aria-label="toggle password visibility">
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "black", ".dark &": { color: "white" } }} />
                        ) : (
                          <Visibility sx={{ color: "black", ".dark &": { color: "white" } }} />
                        )}
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
                  placeholder={t("confirm_password")}
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

              {/* Link quên mật khẩu */}
              {!isSignUp && (
                <Box className="flex items-center justify-center mt-4">
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    {t("forgot_password")}
                  </Link>
                </Box>
              )}

              {/* Nút submit */}
              <Box className="flex justify-center mt-8">
                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  disabled={isLoading}
                  sx={{
                    backgroundColor: "#1F2937",
                    width: "50%",
                    color: "#ffffff",
                    transition: "background-color 0.3s ease",
                    "&:hover": { backgroundColor: "#111827" },
                    "&.Mui-disabled": { backgroundColor: "#111827" },
                    ".dark &": { backgroundColor: "#2d79f3", "&:hover": { backgroundColor: "#1e40af" } },
                  }}
                >
                  {isLoading ? <CircularProgress size={25} sx={{ color: "#ffffff" }} /> : isSignUp ? t("create") : t("login")}
                </Button>
              </Box>
            </Box>

            {/* Chuyển đổi giữa đăng nhập/đăng ký */}
            <Box className="mt-6 text-center">
              <Typography variant="body2" className="text-gray-700 dark:text-[#f1f1f1]">
                {isSignUp ? t("already_have_an_account") : t("do_not_have_any_account")}
                <Button
                  onClick={() => {
                    setIsSignUp((v) => !v);
                    setFieldErrors({ email: "", password: "" });
                    setErrorMessage("");
                  }}
                  className="text-blue-600 hover:underline"
                  sx={{ textTransform: "none", padding: 0, ml: 1 }}
                >
                  {isSignUp ? t("sign_in") : t("sign_up")}
                </Button>
              </Typography>
            </Box>

            {/* Đăng nhập mạng xã hội (chỉ Google, theo thiết kế mẫu, dùng ảnh SVG) */}
            <Box className="mt-8 mb-2">
              <Box className="relative flex items-center justify-center">
                <Divider className="w-full" sx={{ borderColor: '#e5e7eb', borderBottomWidth: '1px', ".dark &": { borderColor: "#444950", borderBottomWidth: "1px" } }} />
                <Typography variant="body2" className="absolute px-4 bg-white dark:bg-[#23272f] text-gray-600 dark:text-gray-300">
                  {t("or_connect_with")}
                </Typography>
              </Box>
              <Box className="flex justify-center mt-6">
                <Button
                  variant="outlined"
                  aria-label="Continue with Google"
                  disabled={isGoogleLoading}
                  sx={{
                    borderRadius: "24px",
                    borderColor: "#dadce0",
                    backgroundColor: "#fff",
                    color: "#3c4043",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    boxShadow: "none",
                    paddingY: 1.2,
                    paddingX: 2,
                    minHeight: "48px",
                    minWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    '&:hover': {
                      backgroundColor: "#f7f8fa",
                      borderColor: "#bcbcbc",
                      boxShadow: "none",
                    },
                    // Style cho dark mode
                    ".dark &": {
                      backgroundColor: "#23272f",
                      color: "#f1f1f1",
                      borderColor: "#444950",
                      '&:hover': {
                        backgroundColor: "#2d323c",
                        borderColor: "#6b7280",
                        boxShadow: "none",
                      },
                    },
                  }}
                  onClick={async () => {
                    setIsGoogleLoading(true);
                    try {
                      const result = await signIn("google", { callbackUrl: "/home", redirect: false });
                      if (result?.error) {
                        if (result.error.includes("Email already registered with credentials")) {
                          setSnackbar({ open: true, message: "Email này đã được sử dụng để đăng ký bằng mật khẩu. Vui lòng đăng nhập bằng email và mật khẩu.", severity: "error" });
                        } else {
                          setSnackbar({ open: true, message: result.error, severity: "error" });
                        }
                        setIsGoogleLoading(false);
                      } else if (result?.ok) {
                        // Nếu thành công, sẽ redirect tự động
                      } else {
                        setIsGoogleLoading(false);
                      }
                    } catch (err) {
                      setSnackbar({ open: true, message: "Google login failed. Please try again.", severity: "error" });
                      setIsGoogleLoading(false);
                    }
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google logo"
                    style={{ width: 22, height: 22, marginRight: 12, display: "inline-block" }}
                  />
                  {isGoogleLoading ? <CircularProgress size={22} sx={{ color: "#3c4043" }} /> : "Continue with Google"}
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {/* Thông báo snackbar */}
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity as "success" | "error"}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
