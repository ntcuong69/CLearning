import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Lấy chi tiết bài tập theo EID
export async function GET(
  req: NextRequest,
  { params }: { params: { eid: string } }
) {
  try {
    const eid = parseInt((await params).eid);
    if (isNaN(eid)) {
      return NextResponse.json({ error: "EID không hợp lệ" }, { status: 400 });
    }

    const exercise = await prisma.exercise.findUnique({
      where: { EID: eid },
      include: {
        topic: true,
      },
    });

    if (!exercise) {
      return NextResponse.json({ error: "Không tìm thấy bài tập" }, { status: 404 });
    }

    return NextResponse.json({ exercise });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi lấy chi tiết bài tập" }, { status: 500 });
  }
}

// PATCH: Chỉnh sửa thông tin bài tập (không bao gồm testcase)
export async function PATCH(req: NextRequest, { params }: { params: { eid: string } }) {
  try {
    const eid = parseInt((await params).eid);
    if (isNaN(eid)) {
      return NextResponse.json({ error: "EID không hợp lệ" }, { status: 400 });
    }
    const body = await req.json();
    const {
      TpID, Name, Slug, Content, Tips, Image, Difficulty, template
    } = body;
    const updated = await prisma.exercise.update({
      where: { EID: eid },
      data: {
        TpID: TpID === "" ? null : TpID !== undefined ? Number(TpID) : undefined,
        Name,
        Slug,
        Content,
        Tips,
        Image,
        Difficulty,
        template,
      },
    });
    return NextResponse.json({ success: true, exercise: updated });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi cập nhật bài tập" }, { status: 500 });
  }
} 