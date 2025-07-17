import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  
  try {
    const exercises = await prisma.exercise.findMany({
      where: {
        isDeleted: 0,
        TpID: {
          not: null,
        },
      },
      select: {
        EID: true,
        TpID: true,
        Name: true,
        Slug: true,
        Difficulty: true,
        Content: true,
        template: true,
      },
    });

    // Nếu user đã đăng nhập, lấy trạng thái progress cho tất cả exercises
    if (session?.user?.uid) {
      const progressMap = await prisma.exerciseprogress.findMany({
        where: {
          UID: session.user.uid,
          EID: {
            in: exercises.map(ex => ex.EID),
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
      const exercisesWithStatus = exercises.map(exercise => ({
        ...exercise,
        status: statusMap[exercise.EID] || 'Unattempted',
      }));

      return NextResponse.json({ exercises: exercisesWithStatus });
    }

    // Nếu chưa đăng nhập, trả về exercises với status mặc định
    const exercisesWithDefaultStatus = exercises.map(exercise => ({
      ...exercise,
      status: 'Unattempted',
    }));

    return NextResponse.json({ exercises: exercisesWithDefaultStatus });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch exercises' }, { status: 500 });
  }
} 