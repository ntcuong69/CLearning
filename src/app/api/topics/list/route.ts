import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const topics = await prisma.topic.findMany();
    return NextResponse.json({ topics });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch topics" }, { status: 500 });
  }
}

// Tạo mới topic
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { Name } = body;
    if (!Name) {
      return NextResponse.json({ error: "Thiếu Name" }, { status: 400 });
    }
    const created = await prisma.topic.create({ data: { Name } });
    return NextResponse.json({ topic: created });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}