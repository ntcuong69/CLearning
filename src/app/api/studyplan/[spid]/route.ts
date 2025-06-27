import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { spid: string } }) {
  try {
    const spid = Number((await params).spid);
    if (isNaN(spid)) return NextResponse.json({ error: 'Invalid SPID' }, { status: 400 });
    const plan = await prisma.studyplan.findUnique({
      where: { SPID: spid },
      include: {
        studyplanitem: {
          include: {
            exercise: true,
          },
        },
      },
    });
    if (!plan) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(plan);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch study plan' }, { status: 500 });
  }
} 