import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Lấy 1 chủ đề theo id
export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number((await params).id);
    if (!id) return NextResponse.json({ error: "Thiếu id" }, { status: 400 });
    const topic = await prisma.topic.findUnique({ where: { TpID: id } });
    if (!topic) return NextResponse.json({ error: "Không tìm thấy chủ đề" }, { status: 404 });
    return NextResponse.json({ topic });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi lấy chủ đề" }, { status: 500 });
  }
}

// PUT: Sửa tên chủ đề (body: { Name })
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number((await params).id);
    const { Name } = await req.json();
    if (!id || !Name) return NextResponse.json({ error: "Thiếu id hoặc Name" }, { status: 400 });
    const updated = await prisma.topic.update({ where: { TpID: id }, data: { Name } });
    return NextResponse.json({ topic: updated });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi cập nhật chủ đề" }, { status: 500 });
  }
}

// DELETE: Xóa chủ đề và set TpID của exercise về null
export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number((await params).id);
    if (!id) return NextResponse.json({ error: "Thiếu id" }, { status: 400 });
    await prisma.exercise.updateMany({ where: { TpID: id }, data: { TpID: null } });
    await prisma.topic.delete({ where: { TpID: id } });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Lỗi xóa chủ đề" }, { status: 500 });
  }
} 