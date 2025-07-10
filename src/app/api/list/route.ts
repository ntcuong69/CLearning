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
  const lists = await prisma.list.findMany({
    where: { UID: user.UID },
    orderBy: { CreatedAt: 'asc' },
    select: { LID: true, Name: true, Description: true, CreatedAt: true },
  });
  return NextResponse.json({ lists });
}

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
  const { name, description } = body;
  if (!name || typeof name !== 'string' || name.length > 30) {
    return NextResponse.json({ error: 'Tên danh sách không hợp lệ' }, { status: 400 });
  }
  const newList = await prisma.list.create({
    data: {
      Name: name,
      Description: description || '',
      UID: user.UID,
    },
    select: { LID: true, Name: true, Description: true, CreatedAt: true },
  });
  return NextResponse.json({ list: newList });
} 