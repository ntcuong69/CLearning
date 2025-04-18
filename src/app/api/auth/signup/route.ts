import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { FirstName, LastName, Email, Password } = body;

    if (!FirstName || !LastName || !Email || !Password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Kiểm tra xem email đã tồn tại chưa
    const existingUser = await prisma.users.findUnique({
      where: { Email },
    });

    if (existingUser) {
      return NextResponse.json({ message: "Email already registered" }, { status: 400 });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Tạo user mới
    await prisma.users.create({
      data: {
        FirstName,
        LastName,
        Email,
        Password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
