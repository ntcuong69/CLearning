import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Lấy danh sách tất cả bài tập
export async function GET() {
  try {
    const exercises = await prisma.exercise.findMany({
      select: {
        EID: true,
        TpID: true,
        SPIID: true,
        Name: true,
        Slug: true,
        Difficulty: true,
      },
      orderBy: { EID: "asc" }
    });
    return NextResponse.json({ exercises });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi lấy danh sách bài tập" }, { status: 500 });
  }
} 