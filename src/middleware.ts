import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  // Lấy token từ cookie
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Các route cần bảo vệ
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");
  const isHomePage = req.nextUrl.pathname.startsWith("/homepage");
  const isProfilePage = req.nextUrl.pathname.startsWith("/profile");
  const isProtectedRoute = isHomePage || isProfilePage;

  // Nếu là route bảo vệ và chưa đăng nhập (token không tồn tại)
  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/auth", req.url); // Redirect đến trang login
    return NextResponse.redirect(loginUrl);
  }

  // Nếu đã đăng nhập và đang cố gắng truy cập trang đăng nhập
  if (isAuthPage && token) {
    const homeUrl = new URL("/homepage", req.url); // Redirect đến trang chủ
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/homepage/:path*',
    '/auth',
    '/profile/:path*',
  ],
};
