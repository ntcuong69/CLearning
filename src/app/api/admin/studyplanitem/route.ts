import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST: Thêm chương học mới vào studyplan
export async function POST(req: Request) {
  const { SPID, Name, Description } = await req.json();
  if (!SPID || !Name) {
    return NextResponse.json({ error: "SPID và Name là bắt buộc" }, { status: 400 });
  }
  try {
    const newItem = await prisma.studyplanitem.create({
      data: {
        Name,
        Description: Description || null,
        studyplan: { connect: { SPID } },
      },
    });
    return NextResponse.json({ studyPlanItem: newItem });
  } catch (error) {
    return NextResponse.json({ error: "Không thể thêm chương học mới" }, { status: 500 });
  }
}

// PUT: Cập nhật thông tin chương học
export async function PUT(req: Request) {
  const { SPIID, Name, Description } = await req.json();
  if (!SPIID || !Name) {
    return NextResponse.json({ error: "SPIID và Name là bắt buộc" }, { status: 400 });
  }
  try {
    const updatedItem = await prisma.studyplanitem.update({
      where: { SPIID },
      data: {
        Name,
        Description: Description || null,
      },
    });
    return NextResponse.json({ studyPlanItem: updatedItem });
  } catch (error) {
    return NextResponse.json({ error: "Không thể cập nhật chương học" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { SPIIDs } = await request.json();
    
    if (!SPIIDs || !Array.isArray(SPIIDs) || SPIIDs.length === 0) {
      return NextResponse.json({ error: "SPIIDs array is required" }, { status: 400 });
    }

    // Xóa trong transaction để đảm bảo tính nhất quán
    const result = await prisma.$transaction(async (tx) => {
      // 1. Lấy danh sách EIDs của các exercises trong các chương học này
      const exercises = await tx.exercise.findMany({
        where: {
          SPIID: {
            in: SPIIDs
          }
        },
        select: {
          EID: true
        }
      });
      
      const exerciseIds = exercises.map(ex => ex.EID);
      
      if (exerciseIds.length > 0) {
        // 2. Xóa tất cả test case results liên quan đến exercises này
        const deletedTestResults = await tx.testcaseresult.deleteMany({
          where: {
            submission: {
              EID: {
                in: exerciseIds
              }
            }
          }
        });

        // 3. Xóa tất cả submissions liên quan đến exercises này
        const deletedSubmissions = await tx.submission.deleteMany({
          where: {
            EID: {
              in: exerciseIds
            }
          }
        });

        // 4. Xóa tất cả exercise progress liên quan đến exercises này
        const deletedProgress = await tx.exerciseprogress.deleteMany({
          where: {
            EID: {
              in: exerciseIds
            }
          }
        });
      }

      // 5. Cập nhật SPIID của tất cả exercises trong các chương học này về null
      const updatedExercises = await tx.exercise.updateMany({
        where: {
          SPIID: {
            in: SPIIDs
          }
        },
        data: {
          SPIID: null
        }
      });

      // 6. Cuối cùng xóa các study plan items
      const deletedItems = await tx.studyplanitem.deleteMany({
        where: {
          SPIID: {
            in: SPIIDs
          }
        }
      });

      return deletedItems;
    });

    return NextResponse.json({ 
      success: true, 
      message: `Đã xóa ${result.count} chương học thành công`,
      deletedCount: result.count 
    });

  } catch (error) {
    console.error("Error deleting study plan items:", error);
    return NextResponse.json({ error: "Failed to delete study plan items" }, { status: 500 });
  }
} 