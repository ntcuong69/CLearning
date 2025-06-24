import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export async function GET(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params;
    const lesson = await prisma.lesson.findUnique({
      where: { Slug: slug },
      select: { LID: true },
    });
    if (!lesson) {
      return NextResponse.json({ comments: [] });
    }
    const comments = await prisma.comment.findMany({
      where: { LID: lesson.LID },
      select: {
        CoID: true,
        UID: true,
        LID: true,
        Content: true,
        ParentID: true,
        CreatedAt: true,
        user: {
          select: {
            UID: true,
            Username: true,
          },
        },
      },
      orderBy: { CreatedAt: "asc" },
    });
    return NextResponse.json({ comments });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.uid) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    const { slug } = await context.params;
    const body = await req.json();
    const Content = typeof body.Content === "string" ? body.Content : "";
    const ParentID = typeof body.ParentID === "number" ? body.ParentID : undefined;
    if (!Content) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }
    const lesson = await prisma.lesson.findUnique({
      where: { Slug: slug },
      select: { LID: true },
    });
    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
    }
    const comment = await prisma.comment.create({
      data: {
        UID: session.user.uid,
        LID: lesson.LID,
        Content,
        ParentID: ParentID ?? null,
      },
      select: {
        CoID: true,
        UID: true,
        LID: true,
        Content: true,
        ParentID: true,
        CreatedAt: true,
        user: {
          select: {
            UID: true,
            Username: true,
          },
        },
      },
    });
    return NextResponse.json({ comment });
  } catch (error) {
    return NextResponse.json({ error: "Failed to post comment" }, { status: 500 });
  }
} 