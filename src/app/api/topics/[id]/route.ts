import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const session = await getServerSession(authOptions);
  
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
          },
        },
      },
    });
    
    if (!topic) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Nếu user đã đăng nhập, lấy trạng thái progress cho exercises trong topic
    if (session?.user?.uid) {
      const exerciseIds = topic.exercise.map(ex => ex.EID);
      const progressMap = await prisma.exerciseprogress.findMany({
        where: {
          UID: session.user.uid,
          EID: {
            in: exerciseIds,
          },
        },
        select: {
          EID: true,
          Status: true,
        },
      });

      // Tạo map EID -> Status
      const statusMap = progressMap.reduce((acc, progress) => {
        if (progress.Status) {
          acc[progress.EID] = progress.Status; // Chỉ có 'Attempting' hoặc 'Solved'
        }
        return acc;
      }, {} as Record<number, string>);

      // Thêm status vào exercises
      const exercisesWithStatus = topic.exercise.map(exercise => ({
        ...exercise,
        status: statusMap[exercise.EID] || 'Unattempted',
      }));

      return NextResponse.json({ 
        topic: {
          ...topic,
          exercise: exercisesWithStatus,
        }
      });
    }

    // Nếu chưa đăng nhập, trả về exercises với status mặc định
    const exercisesWithDefaultStatus = topic.exercise.map(exercise => ({
      ...exercise,
      status: 'Unattempted',
    }));

    return NextResponse.json({ 
      topic: {
        ...topic,
        exercise: exercisesWithDefaultStatus,
      }
    });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}