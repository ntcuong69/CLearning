import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { Email, Password, rememberMe } = await req.json();

    // Kiểm tra thông tin đăng nhập
    const user = await validateUser(Email, Password);
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const response = NextResponse.json({
      message: "Login successful",
      user: { UID: user.UID, FirstName: user.FirstName, LastName: user.LastName, Email: user.Email },
    });

    if (rememberMe) {
      response.cookies.set("user", JSON.stringify({ UID: user.UID, Email: user.Email }), {
        httpOnly: true,
        secure: true,
        maxAge: 30 * 24 * 60 * 60, // Lưu trong 30 ngày
      });
    } else {
      response.cookies.set("user", JSON.stringify({ UID: user.UID, Email: user.Email }), {
        httpOnly: true,
        secure: true,
      });
    }

    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Hàm kiểm tra thông tin người dùng
async function validateUser(email: string, password: string) {
  const user = await prisma.users.findUnique({ where: { Email: email } });

  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.Password);
    if (isPasswordValid) {
      return user;
    }
  }
  return null;
}
