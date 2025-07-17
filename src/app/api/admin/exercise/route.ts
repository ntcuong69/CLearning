import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Lấy danh sách tất cả bài tập (chỉ những bài chưa bị xóa)
export async function GET() {
  try {
    const exercises = await prisma.exercise.findMany({
      select: {
        EID: true,
        TpID: true,
        SPIID: true,
        Name: true,
        Slug: true,
        Difficulty: true,
        isDeleted: true,
      },
      orderBy: { EID: "asc" }
    });
    return NextResponse.json({ exercises });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi lấy danh sách bài tập" }, { status: 500 });
  }
}

// POST: Tạo mới bài tập và các testcase
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      TpID, Name, Slug, Content, Difficulty, template, Tips, Image, testcases
    } = body;
    // Tạo bài tập và các testcase trong transaction
    const result = await prisma.$transaction(async (tx) => {
      const exercise = await tx.exercise.create({
        data: {
          TpID: TpID ? Number(TpID) : null,
          Name,
          Slug,
          Content,
          Difficulty,
          template,
          Tips,
          Image,
        },
      });
      if (Array.isArray(testcases) && testcases.length > 0) {
        await Promise.all(testcases.map(tc =>
          tx.testcase.create({
            data: {
              EID: exercise.EID,
              Input: tc.Input,
              ExpectedOutput: tc.ExpectedOutput,
              isHidden: !!tc.isHidden,
            },
          })
        ));
      }
      return exercise;
    });
    return NextResponse.json({ success: true, exercise: result });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi tạo bài tập" }, { status: 500 });
  }
}

// PATCH: Xóa mềm hoặc khôi phục bài tập
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { EID, action } = body; // action: "delete" hoặc "restore"
    
    if (!EID || !action) {
      return NextResponse.json({ error: "Thiếu thông tin cần thiết" }, { status: 400 });
    }

    const isDeleted = action === "delete" ? 1 : 0;
    
    const exercise = await prisma.exercise.update({
      where: { EID: parseInt(EID) },
      data: { isDeleted },
    });

    return NextResponse.json({ 
      success: true, 
      exercise,
      message: action === "delete" ? "Đã xóa bài tập" : "Đã khôi phục bài tập"
    });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi cập nhật trạng thái bài tập" }, { status: 500 });
  }
} 