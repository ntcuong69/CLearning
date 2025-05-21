import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    
    if (!token.uid) {
      return NextResponse.json({ error: "Invalid user data" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { UID: token.uid.toString() },
      select: {
        UID: true,
        Username: true,
        Email: true,
        Role: true,
        CreatedAt: true,
      }
    });
    
    // If user not found in database
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    // Return user information
    return NextResponse.json({
      user,
    });
    
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}