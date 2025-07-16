import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Lấy danh sách tất cả chủ đề kèm tổng số bài tập
export async function GET() {
  try {
    const topics = await prisma.topic.findMany({
      orderBy: { TpID: "asc" },
      include: { _count: { select: { exercise: true } } }
    });
    return NextResponse.json({ topics });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi lấy danh sách chủ đề" }, { status: 500 });
  }
}

// POST: Tạo mới 1 chủ đề (body: { Name })
export async function POST(req: NextRequest) {
  try {
    const { Name } = await req.json();
    if (!Name) return NextResponse.json({ error: "Thiếu Name" }, { status: 400 });
    const topic = await prisma.topic.create({ data: { Name } });
    return NextResponse.json({ topic });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi tạo chủ đề" }, { status: 500 });
  }
}