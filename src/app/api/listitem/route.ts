import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const user = await prisma.user.findUnique({ where: { Email: session.user.email } });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  const body = await req.json();
  const { lid, eid } = body;
  if (!lid || !eid) {
    return NextResponse.json({ error: 'Thiếu thông tin' }, { status: 400 });
  }
  // Kiểm tra list thuộc user
  const list = await prisma.list.findUnique({ where: { LID: lid } });
  if (!list || list.UID !== user.UID) {
    return NextResponse.json({ error: 'Không có quyền với list này' }, { status: 403 });
  }
  // Kiểm tra đã có chưa
  const exists = await prisma.listitem.findUnique({ where: { LID_EID: { LID: lid, EID: eid } } });
  if (exists) {
    return NextResponse.json({ error: 'Bài tập đã có trong list' }, { status: 409 });
  }
  // Tạo mới
  const item = await prisma.listitem.create({ data: { LID: lid, EID: eid } });
  return NextResponse.json({ success: true, item });
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const user = await prisma.user.findUnique({ where: { Email: session.user.email } });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  const body = await req.json();
  const { lid, eid } = body;
  if (!lid || !eid) {
    return NextResponse.json({ error: 'Thiếu thông tin' }, { status: 400 });
  }
  // Kiểm tra list thuộc user
  const list = await prisma.list.findUnique({ where: { LID: lid } });
  if (!list || list.UID !== user.UID) {
    return NextResponse.json({ error: 'Không có quyền với list này' }, { status: 403 });
  }
  // Xóa nếu tồn tại
  await prisma.listitem.deleteMany({ where: { LID: lid, EID: eid } });
  return NextResponse.json({ success: true });
} 