import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { spiid: string } }) {
  try {
    const spiid = Number((await params).spiid);
    if (isNaN(spiid)) return NextResponse.json({ error: 'Invalid SPIID' }, { status: 400 });
    const item = await prisma.studyplanitem.findUnique({
      where: { SPIID: spiid },
      include: {
        exercise: true,
      },
    });
    if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch studyplanitem' }, { status: 500 });
  }
} 