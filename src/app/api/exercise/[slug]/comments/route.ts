import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// GET: Lấy tất cả bình luận của bài tập
export async function GET(req: Request, context: { params: { slug: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const params = await context.params;
    const slug = params.slug;

    // Tìm bài tập theo slug
    const exercise = await prisma.exercise.findFirst({
      where: { Slug: slug },
    });

    if (!exercise) {
      return NextResponse.json({ error: "Exercise not found" }, { status: 404 });
    }

    // Lấy tất cả bình luận của bài tập này
    const comments = await prisma.comment.findMany({
      where: { EID: exercise.EID },
      include: {
        user: {
          select: {
            UID: true,
            Username: true,
          },
        },
      },
      orderBy: { CreatedAt: "desc" },
    });

    // Lấy thông tin like của user hiện tại
    const likedComments = await prisma.commentlike.findMany({
      where: {
        CoID: { in: comments.map(c => c.CoID) },
        UID: session.user.uid,
      },
    });

    const likedCommentIds = likedComments.reduce((acc: { [key: number]: boolean }, like: any) => {
      acc[like.CoID] = true;
      return acc;
    }, {});

    // Đếm số like cho mỗi comment
    const likeCounts = await prisma.commentlike.groupBy({
      by: ['CoID'],
      where: {
        CoID: { in: comments.map(c => c.CoID) },
      },
      _count: {
        CoID: true,
      },
    });

    const likeCountMap = likeCounts.reduce((acc: { [key: number]: number }, item: any) => {
      acc[item.CoID] = item._count.CoID;
      return acc;
    }, {});

    // Thêm thông tin like count vào comments
    const commentsWithLikes = comments.map(comment => ({
      ...comment,
      likeCount: likeCountMap[comment.CoID] || 0,
    }));

    return NextResponse.json({
      comments: commentsWithLikes,
      likedComments: likedCommentIds,
    });
  } catch (error) {
    console.error("Error fetching exercise comments:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST: Tạo bình luận mới cho bài tập
export async function POST(req: Request, context: { params: { slug: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const params = await context.params;
    const slug = params.slug;
    const { Content, ParentID } = await req.json();

    if (!Content?.trim()) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 });
    }

    // Tìm bài tập theo slug
    const exercise = await prisma.exercise.findFirst({
      where: { Slug: slug },
    });

    if (!exercise) {
      return NextResponse.json({ error: "Exercise not found" }, { status: 404 });
    }

    // Tạo bình luận mới
    const comment = await prisma.comment.create({
      data: {
        UID: session.user.uid,
        EID: exercise.EID, // Sử dụng EID thay vì LID
        Content: Content.trim(),
      },
      include: {
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
    console.error("Error creating exercise comment:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 