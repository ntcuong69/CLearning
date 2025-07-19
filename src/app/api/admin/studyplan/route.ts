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
  const { Name, Description } = await req.json();
  try {
    const newPlan = await prisma.studyplan.create({
      data: { Name, Description },
    });
    return NextResponse.json({ studyPlan: { ...newPlan, studyplanitem: [] } });
  } catch {
    return NextResponse.json({ error: "Failed to create study plan" }, { status: 500 });
  }
}

// PUT: Sửa studyplan
export async function PUT(req: Request) {
  const { SPID, Name, Description } = await req.json();
  try {
    const updated = await prisma.studyplan.update({
      where: { SPID },
      data: { Name, Description },
    });
    return NextResponse.json({ studyPlan: updated });
  } catch {
    return NextResponse.json({ error: "Failed to update study plan" }, { status: 500 });
  }
}

// DELETE: Xóa studyplan
export async function DELETE(req: Request) {
  const { SPID } = await req.json();
  try {
    await prisma.studyplan.delete({ where: { SPID } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete study plan" }, { status: 500 });
  }
}