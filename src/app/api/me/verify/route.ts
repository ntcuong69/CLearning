import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token || !token.uid) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    // Lấy user
    const user = await prisma.user.findUnique({
      where: { UID: token.uid.toString() },
      select: { Email: true, isVerified: true }
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    if (user.isVerified) {
      return NextResponse.json({ error: "Email đã được xác thực" }, { status: 400 });
    }
    // TODO: Gửi email xác thực thực tế ở đây
    // Hiện tại chỉ mock
    console.log(`Send verification email to: ${user.Email}`);
    return NextResponse.json({ message: "Đã gửi email xác thực. Vui lòng kiểm tra hộp thư." });
  } catch (error) {
    console.error("Error sending verification email:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 