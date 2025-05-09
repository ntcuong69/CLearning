import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import i18nRouter from "next-intl/middleware";
import { routing } from "./i18n/routing";

const SUPPORTED_LOCALES = ["en", "vi"];

function getLocaleFromPath(pathname: string) {
  const locale = pathname.split("/")[1];
  return SUPPORTED_LOCALES.includes(locale) ? locale : null;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const locale = getLocaleFromPath(pathname);
  const isAuthPage = pathname.includes("/auth");
  const isHomePage = pathname.includes("/home");
  const isProfilePage = pathname.includes("/profile");
  const isProtectedRoute = isHomePage || isProfilePage;

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(
      new URL(locale ? `/${locale}/auth` : "/auth", req.url)
    );
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(
      new URL(locale ? `/${locale}/home` : "/home", req.url)
    );
  }

  const intlResponse = i18nRouter(routing)(req);
  if (intlResponse) return intlResponse;

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)", // Bỏ qua API, tệp tĩnh
};
