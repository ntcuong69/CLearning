import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const session = await getServerSession(authOptions);
  
  try {
    const exercise = await prisma.exercise.findFirst({
      where: {
        Slug: slug,
      },
      select: {
        EID: true,
        TpID: true,
        Content: true,
        Difficulty: true,
        template: true,
        Name: true,
        Slug: true,
        Tips: true,
        Image: true,
        isDeleted: true,
      },
    });

    if (!exercise) {
      return NextResponse.json({ error: "Exercise not found" }, { status: 404 });
    }

    // Lấy thông tin like
    const likeCount = await prisma.exerciselike.count({ where: { EID: exercise.EID } });
    
    // Kiểm tra user hiện tại đã like chưa
    let isLiked = false;
    if (session?.user?.uid) {
      const existing = await prisma.exerciselike.findUnique({
        where: {
          UID_EID: {
            UID: session.user.uid,
            EID: exercise.EID,
          },
        },
      });
      isLiked = !!existing;
    }

    // Lấy trạng thái progress của user hiện tại
    let status = 'Unattempted';
    if (session?.user?.uid) {
      const progress = await prisma.exerciseprogress.findUnique({
        where: {
          UID_EID: {
            UID: session.user.uid,
            EID: exercise.EID,
          },
        },
      });
      
      if (progress && progress.Status) {
        status = progress.Status; // Chỉ có 'Attempting' hoặc 'Solved'
      }
      // Nếu không có progress hoặc Status null, mặc định là 'Unattempted'
    }

    return NextResponse.json({ 
      exercise: {
        ...exercise,
        status,
        likeCount,
        isLiked,
      }
    });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
} 