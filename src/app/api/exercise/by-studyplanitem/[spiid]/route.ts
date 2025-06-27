import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { spiid: string } }) {
  try {
    const spiid = Number((await params).spiid);
    if (isNaN(spiid)) return NextResponse.json({ error: 'Invalid SPIID' }, { status: 400 });
    const exercises = await prisma.exercise.findMany({
      where: { SPIID: spiid },
      orderBy: { EID: 'asc' },
    });
    return NextResponse.json(exercises);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch exercises' }, { status: 500 });
  }
} 