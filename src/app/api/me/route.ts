import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const userCookie = req.cookies.get("user");
    
    // If no cookie exists, user is not authenticated
    if (!userCookie) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    
    // Parse the cookie value
    const userData = JSON.parse(userCookie.value);
    
    // If no UID in cookie, return unauthorized
    if (!userData?.UID) {
      return NextResponse.json({ error: "Invalid user data" }, { status: 401 });
    }
    
    // Fetch user data from database
    const user = await prisma.users.findUnique({
      where: { UID: userData.UID },
      select: {
        UID: true,
        FirstName: true,
        LastName: true,
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