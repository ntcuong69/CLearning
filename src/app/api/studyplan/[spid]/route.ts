import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: NextRequest, { params }: { params: { spid: string } }) {
  try {
    const spid = Number((await params).spid);
    if (isNaN(spid)) return NextResponse.json({ error: 'Invalid SPID' }, { status: 400 });
    const session = await getServerSession(authOptions);
    const plan = await prisma.studyplan.findUnique({
      where: { SPID: spid },
      include: {
        studyplanitem: {
          include: {
            exercise: true,
          },
        },
      },
    });
    if (!plan) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    // Lấy tất cả EID trong plan
    const allExercises = plan.studyplanitem.flatMap(item => item.exercise);
    const allEIDs = allExercises.map(ex => ex.EID);

    let statusMap: Record<number, string> = {};
    if (session?.user?.uid && allEIDs.length > 0) {
      const progressList = await prisma.exerciseprogress.findMany({
        where: {
          UID: session.user.uid,
          EID: { in: allEIDs },
        },
        select: { EID: true, Status: true },
      });
      statusMap = progressList.reduce((acc, cur) => {
        acc[cur.EID] = cur.Status || 'Unattempted';
        return acc;
      }, {} as Record<number, string>);
    }

    // Lấy trạng thái study plan
    let studyPlanStatus = 'NotStarted';
    if (session?.user?.uid) {
      const studyPlanProgress = await prisma.studyplanprogress.findFirst({
        where: {
          UID: session.user.uid,
          SPID: spid,
        },
      });
      
      if (studyPlanProgress) {
        studyPlanStatus = studyPlanProgress.Status;
      }
    }

    // Gán status cho từng exercise và tính isCompleted cho studyplanitem
    const studyplanitem = plan.studyplanitem.map(item => {
      const exerciseWithStatus = item.exercise.map(ex => ({
        ...ex,
        status: statusMap[ex.EID] || 'Unattempted',
      }));
      
      // Kiểm tra xem tất cả exercise trong studyplanitem có status là 'Solved' không
      const isCompleted = exerciseWithStatus.length > 0 && 
        exerciseWithStatus.every(ex => ex.status === 'Solved');
      
      return {
        ...item,
        exercise: exerciseWithStatus,
        isCompleted,
      };
    });

    return NextResponse.json({ ...plan, studyplanitem, studyPlanStatus });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch study plan' }, { status: 500 });
  }
} 