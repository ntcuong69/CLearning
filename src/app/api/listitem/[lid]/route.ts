import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: NextRequest, { params }: { params: { lid: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const user = await prisma.user.findUnique({ where: { Email: session.user.email } });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  const lid = Number((await params).lid);
  if (!lid) {
    return NextResponse.json({ error: 'Thiếu LID' }, { status: 400 });
  }
  // Kiểm tra quyền user với list
  const list = await prisma.list.findUnique({ where: { LID: lid } });
  if (!list || list.UID !== user.UID) {
    return NextResponse.json({ error: 'Không có quyền với list này' }, { status: 403 });
  }
  // Lấy các bài tập đã lưu
  const items = await prisma.listitem.findMany({
    where: { LID: lid },
    include: { exercise: { select: { EID: true, Name: true, Difficulty: true, Slug: true } } },
  });
  const exercises = items.map(i => i.exercise);
  return NextResponse.json({ exercises });
} 