import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const plans = await prisma.studyplan.findMany({
      include: {
        studyplanitem: {
          include: {
            exercise: true,
          },
        },
      },
      orderBy: { SPID: 'asc' },
    });

    // Tính toán % hoàn thành và trạng thái study plan cho mỗi plan
    const plansWithProgress = await Promise.all(plans.map(async (plan) => {
      // Lấy tất cả EID trong plan
      const allExercises = plan.studyplanitem.flatMap(item => item.exercise);
      const allEIDs = allExercises.map(ex => ex.EID);

      let completedCount = 0;
      let studyPlanStatus = 'NotStarted';
      
      if (session?.user?.uid) {
        // Luôn lấy trạng thái study plan từ bảng studyplanprogress
        const studyPlanProgress = await prisma.studyplanprogress.findFirst({
          where: {
            UID: session.user.uid,
            SPID: plan.SPID,
          },
        });
        
        if (studyPlanProgress) {
          studyPlanStatus = studyPlanProgress.Status;
        }

        // Chỉ lấy tiến độ bài tập nếu có bài tập trong plan
        if (allEIDs.length > 0) {
          const progressList = await prisma.exerciseprogress.findMany({
            where: {
              UID: session.user.uid,
              EID: { in: allEIDs },
              Status: 'Solved',
            },
            select: { EID: true },
          });
          completedCount = progressList.length;
        }
      }

      const totalExercises = allEIDs.length;
      const completionPercentage = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0;

      return {
        ...plan,
        progress: {
          completed: completedCount,
          total: totalExercises,
          percentage: completionPercentage,
        },
        studyPlanStatus,
      };
    }));

    return NextResponse.json(plansWithProgress);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch study plans' }, { status: 500 });
  }
} 