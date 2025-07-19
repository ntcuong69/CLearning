import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST: Thêm chương học mới vào studyplan
export async function POST(req: Request) {
  const { SPID, Name } = await req.json();
  if (!SPID || !Name) {
    return NextResponse.json({ error: "SPID và Name là bắt buộc" }, { status: 400 });
  }
  try {
    const newItem = await prisma.studyplanitem.create({
      data: {
        Name,
        studyplan: { connect: { SPID } },
      },
    });
    return NextResponse.json({ studyPlanItem: newItem });
  } catch (error) {
    return NextResponse.json({ error: "Không thể thêm chương học mới" }, { status: 500 });
  }
} 