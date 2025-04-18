import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logout successful" }, { status: 200 });

  // Xóa cookie "user"
  response.cookies.set("user", "", {
    httpOnly: true,
    secure: true,
    maxAge: 0,
    path: "/",
  });

  return response;
}
