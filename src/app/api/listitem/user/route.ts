import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const user = await prisma.user.findUnique({ where: { Email: session.user.email } });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  // Lấy tất cả list của user
  const lists = await prisma.list.findMany({ where: { UID: user.UID }, select: { LID: true } });
  const lids = lists.map(l => l.LID);
  // Lấy tất cả listitem thuộc các list này
  const items = await prisma.listitem.findMany({ where: { LID: { in: lids } }, select: { EID: true } });
  const eids = items.map(i => i.EID);
  return NextResponse.json({ eids });
} 