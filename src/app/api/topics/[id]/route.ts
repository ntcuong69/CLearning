import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // await params ở đây
  try {
    const topic = await prisma.topic.findUnique({
      where: { TpID: Number(id) },
      select: {
        TpID: true,
        Name: true,
        exercise: {
          select: {
            EID: true,
            Content: true,
            Difficulty: true,
            Slug: true,
            Name: true,
            status: true,
          },
        },
      },
    });
    if (!topic) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ topic });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}