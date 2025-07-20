import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Lấy danh sách exercises có thể thêm vào study plan item (TpID và SPIID đều null)
export async function GET(
  request: NextRequest,
  { params }: { params: { spiid: string } }
) {
  try {
    const spiid = parseInt(params.spiid);
    if (isNaN(spiid)) {
      return NextResponse.json({ error: "Invalid SPIID" }, { status: 400 });
    }

    const exercises = await prisma.exercise.findMany({
      where: {
        TpID: null,
        SPIID: null,
      },
      select: {
        EID: true,
        Name: true,
        Difficulty: true,
        Slug: true,
      },
      orderBy: {
        Name: "asc",
      },
    });

    return NextResponse.json({ exercises });
  } catch (error) {
    console.error("Error fetching available exercises:", error);
    return NextResponse.json({ error: "Failed to fetch exercises" }, { status: 500 });
  }
}

// POST: Thêm exercise vào study plan item
export async function POST(
  request: NextRequest,
  { params }: { params: { spiid: string } }
) {
  try {
    const spiid = parseInt(params.spiid);
    if (isNaN(spiid)) {
      return NextResponse.json({ error: "Invalid SPIID" }, { status: 400 });
    }

    const { EID } = await request.json();
    if (!EID) {
      return NextResponse.json({ error: "EID is required" }, { status: 400 });
    }

    // Kiểm tra xem exercise có tồn tại và có thể thêm vào không
    const exercise = await prisma.exercise.findFirst({
      where: {
        EID: EID,
        TpID: null,
        SPIID: null,
      },
    });

    if (!exercise) {
      return NextResponse.json({ error: "Exercise not found or already assigned" }, { status: 404 });
    }

    // Cập nhật SPIID của exercise
    const updatedExercise = await prisma.exercise.update({
      where: { EID: EID },
      data: { SPIID: spiid },
      select: {
        EID: true,
        Name: true,
      },
    });

    return NextResponse.json({ 
      success: true, 
      exercise: updatedExercise 
    });
  } catch (error) {
    console.error("Error adding exercise to study plan item:", error);
    return NextResponse.json({ error: "Failed to add exercise" }, { status: 500 });
  }
}

// DELETE: Xóa exercises khỏi study plan item
export async function DELETE(
  request: NextRequest,
  { params }: { params: { spiid: string } }
) {
  try {
    const spiid = parseInt(params.spiid);
    if (isNaN(spiid)) {
      return NextResponse.json({ error: "Invalid SPIID" }, { status: 400 });
    }

    const { EIDs } = await request.json();
    if (!EIDs || !Array.isArray(EIDs) || EIDs.length === 0) {
      return NextResponse.json({ error: "EIDs array is required" }, { status: 400 });
    }

    // Xóa trong transaction để đảm bảo tính nhất quán
    const result = await prisma.$transaction(async (tx) => {
      // 1. Xóa tất cả test case results liên quan đến exercises này
      const deletedTestResults = await tx.testcaseresult.deleteMany({
        where: {
          submission: {
            EID: {
              in: EIDs
            }
          }
        }
      });

      // 2. Xóa tất cả submissions liên quan đến exercises này
      const deletedSubmissions = await tx.submission.deleteMany({
        where: {
          EID: {
            in: EIDs
          }
        }
      });

      // 3. Xóa tất cả exercise progress liên quan đến exercises này
      const deletedProgress = await tx.exerciseprogress.deleteMany({
        where: {
          EID: {
            in: EIDs
          }
        }
      });

      // 4. Cập nhật SPIID của exercises về null
      const updatedExercises = await tx.exercise.updateMany({
        where: {
          EID: {
            in: EIDs
          },
          SPIID: spiid // Chỉ cập nhật exercises thuộc về study plan item này
        },
        data: {
          SPIID: null
        }
      });

      return {
        deletedTestResults: deletedTestResults.count,
        deletedSubmissions: deletedSubmissions.count,
        deletedProgress: deletedProgress.count,
        updatedExercises: updatedExercises.count
      };
    });

    return NextResponse.json({ 
      success: true, 
      message: `Đã xóa ${result.updatedExercises} bài tập khỏi chương học`,
      deletedCount: result.updatedExercises,
      details: result
    });

  } catch (error) {
    console.error("Error removing exercises from study plan item:", error);
    return NextResponse.json({ error: "Failed to remove exercises" }, { status: 500 });
  }
} 