"use client";
import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const params = useSearchParams();
  const error = params.get("error");

  let message = "Đã xảy ra lỗi khi đăng nhập.";
  if (error === "Email already registered with credentials") {
    message = "Email này đã được sử dụng để đăng ký bằng mật khẩu. Vui lòng đăng nhập bằng email và mật khẩu.";
  }

  return (
    <div style={{ minHeight: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h2 style={{ color: "#d32f2f", marginBottom: 16 }}>Lỗi đăng nhập</h2>
      <p style={{ color: "#333", fontSize: 18, marginBottom: 24 }}>{message}</p>
      <a href="/auth" style={{ color: "#1976d2", textDecoration: "underline" }}>Quay lại trang đăng nhập</a>
    </div>
  );
} 