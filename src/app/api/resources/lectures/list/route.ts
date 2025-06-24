import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const chapters = await prisma.chapter.findMany({
      select: {
        CID: true,
        ChapterIndex: true,
        Name: true,
        lesson: {
          select: {
            LID: true,
            CID: true,
            LessonIndex: true,
            Title: true,
            Slug: true,
          },
          orderBy: { LessonIndex: "asc" },
        },
      },
      orderBy: [
        { ChapterIndex: "asc" },
      ],
    });
    return NextResponse.json({ chapters });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch chapters" }, { status: 500 });
  }
} 