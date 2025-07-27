import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const user = await prisma.user.findUnique({
      where: { Email: session.user.email }
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Lấy tổng số bài tập hợp lệ
    const totalExercises = await prisma.exercise.count({
      where: {
        TpID: { not: null },
        SPIID: null,
        isDeleted: 0
      }
    });

    // Lấy các bài tập đã hoàn thành dựa vào exerciseprogress
    const solvedProgress = await prisma.exerciseprogress.findMany({
      where: {
        UID: user.UID,
        Status: 'Solved',
        exercise: {
          TpID: { not: null },
          SPIID: null,
          isDeleted: 0
        }
      },
      select: { EID: true }
    });
    const completedEIDs = solvedProgress.map(p => p.EID);
    const completedExercisesCount = completedEIDs.length;

    // Lấy tất cả submission hợp lệ của user
    const userSubmissions = await prisma.submission.findMany({
      where: {
        UID: user.UID,
        exercise: {
          TpID: { not: null },
          SPIID: null,
          isDeleted: 0
        }
      },
      orderBy: {
        CreatedAt: 'asc'
      }
    });
    const totalSubmissions = userSubmissions.length;

    // Nhóm submission theo EID
    const submissionsByExercise = new Map<number, typeof userSubmissions>();
    userSubmissions.forEach(submission => {
      if (!submissionsByExercise.has(submission.EID)) {
        submissionsByExercise.set(submission.EID, []);
      }
      submissionsByExercise.get(submission.EID)!.push(submission);
    });

    // Tính số lần nộp trung bình mỗi bài trước khi đúng (chỉ tính các bài đã hoàn thành)
    let totalAttemptsForCompleted = 0;
    let firstAttemptCorrect = 0;
    completedEIDs.forEach(eid => {
      const submissions = submissionsByExercise.get(eid) || [];
      const firstAcceptedIdx = submissions.findIndex(s => s.Result === 'Pass');
      if (firstAcceptedIdx !== -1) {
        totalAttemptsForCompleted += (firstAcceptedIdx + 1);
        if (firstAcceptedIdx === 0) firstAttemptCorrect++;
      }
    });
    const averageAttemptsPerExercise = completedExercisesCount > 0
      ? Number((totalAttemptsForCompleted / completedExercisesCount).toFixed(1))
      : 0.0;

    // Tính dữ liệu heatmap submissions
    const heatmapMap = new Map<string, number>();
    userSubmissions.forEach(sub => {
      if (sub.CreatedAt) {
        const date = sub.CreatedAt.toISOString().slice(0, 10); // YYYY-MM-DD
        heatmapMap.set(date, (heatmapMap.get(date) || 0) + 1);
      }
    });
    const submissionHeatmap = Array.from(heatmapMap.entries()).map(([date, count]) => ({ date, count }));

    // Lấy thông tin độ khó của các bài đã giải
    let solvedByDifficulty = { Easy: 0, Medium: 0, Hard: 0 };
    if (completedEIDs.length > 0) {
      const solvedExercises = await prisma.exercise.findMany({
        where: {
          EID: { in: completedEIDs },
          TpID: { not: null },
          SPIID: null,
          isDeleted: 0
        },
        select: { Difficulty: true }
      });
      solvedExercises.forEach(ex => {
        if (ex.Difficulty && solvedByDifficulty.hasOwnProperty(ex.Difficulty)) {
          solvedByDifficulty[ex.Difficulty]++;
        }
      });
    }

    const stats = {
      totalExercises,
      completedExercises: completedExercisesCount,
      totalSubmissions,
      averageAttemptsPerExercise,
      firstAttemptCorrect,
      submissionHeatmap,
      solvedByDifficulty
    };
    return NextResponse.json({ stats });
  } catch (error) {
    console.error("Error calculating user stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 