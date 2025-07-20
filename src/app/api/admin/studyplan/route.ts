import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Fetch all study plans
export async function GET() {
  try {
    const studyPlans = await prisma.studyplan.findMany({
      include: {
        studyplanitem: {
            include: {
                exercise: true,
            }
        }
      },
      orderBy: { SPID: "asc" },
    });
    return NextResponse.json({ studyPlans });
  } catch (error) {
    console.error("Error fetching study plans:", error);
    return NextResponse.json({ error: "Failed to fetch study plans" }, { status: 500 });
  }
}

// POST: Thêm studyplan mới
export async function POST(req: Request) {
  const { Name, Description, Slug } = await req.json();
  try {
    const newPlan = await prisma.studyplan.create({
      data: { Name, Description, Slug },
    });
    return NextResponse.json({ studyPlan: { ...newPlan, studyplanitem: [] } });
  } catch (error) {
    console.error("Error creating study plan:", error);
    return NextResponse.json({ error: "Failed to create study plan" }, { status: 500 });
  }
}

// PUT: Sửa studyplan
export async function PUT(req: Request) {
  const { SPID, Name, Description, Slug } = await req.json();
  try {
    const updated = await prisma.studyplan.update({
      where: { SPID },
      data: { Name, Description, Slug },
    });
    return NextResponse.json({ studyPlan: updated });
  } catch (error) {
    console.error("Error updating study plan:", error);
    return NextResponse.json({ error: "Failed to update study plan" }, { status: 500 });
  }
}

// DELETE: Xóa studyplan
export async function DELETE(req: Request) {
  const { SPID } = await req.json();
  try {
    // Xóa tất cả dữ liệu liên quan trước
    await prisma.$transaction(async (tx) => {
      // Lấy danh sách SPIID của studyplanitem thuộc studyplan này
      const studyPlanItems = await tx.studyplanitem.findMany({
        where: { SPID },
        select: { SPIID: true }
      });
      
      const spiids = studyPlanItems.map(item => item.SPIID);
      
      // Xóa studyplanprogress
      await tx.studyplanprogress.deleteMany({
        where: { SPID }
      });
      
      if (spiids.length > 0) {
        // Xóa testcaseresult liên quan đến exercise của studyplanitem
        await tx.testcaseresult.deleteMany({
          where: {
            testcase: {
              exercise: {
                SPIID: { in: spiids }
              }
            }
          }
        });
        
        // Xóa exerciseprogress liên quan đến exercise của studyplanitem
        await tx.exerciseprogress.deleteMany({
          where: {
            exercise: {
              SPIID: { in: spiids }
            }
          }
        });
        
        // Xóa submission liên quan đến exercise của studyplanitem
        await tx.submission.deleteMany({
          where: {
            exercise: {
              SPIID: { in: spiids }
            }
          }
        });
        
        // Set SPIID của exercise thành null (không xóa exercise)
        await tx.exercise.updateMany({
          where: {
            SPIID: { in: spiids }
          },
          data: {
            SPIID: null
          }
        });
      }
      
      // Xóa studyplanitem
      await tx.studyplanitem.deleteMany({
        where: { SPID }
      });
      
      // Cuối cùng xóa studyplan
      await tx.studyplan.delete({
        where: { SPID }
      });
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting study plan:", error);
    return NextResponse.json({ error: "Failed to delete study plan" }, { status: 500 });
  }
}