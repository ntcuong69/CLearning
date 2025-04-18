import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get("user")?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");
  const isHomePage = request.nextUrl.pathname.startsWith("/homepage");

  if (isHomePage && !userCookie) {
    const loginUrl = new URL("/auth", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthPage && userCookie) {
    const homeUrl = new URL("/homepage", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}
