import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get("user")?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
  const isHomePage = request.nextUrl.pathname.startsWith("/homepage");
  const isProtectedRoute = isHomePage || request.nextUrl.pathname.startsWith("/profile");

  // Validate if cookie contains valid JSON with required fields
  let isValidCookie = false;
  if (userCookie) {
    try {
      const userData = JSON.parse(userCookie);
      isValidCookie = Boolean(userData?.UID);
    } catch (e) {
      // If parsing fails, cookie is invalid
      isValidCookie = false;
    }
  }

  // Redirect unauthenticated users from protected routes
  if (isProtectedRoute && !isValidCookie) {
    const loginUrl = new URL("/auth", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect authenticated users from auth page
  if (isAuthPage && isValidCookie) {
    const homeUrl = new URL("/homepage", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/homepage/:path*',
    '/auth',
    '/profile/:path*',
    // Add any other protected routes here
  ],
};
