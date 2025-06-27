import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const plans = await prisma.studyplan.findMany({
      include: {
        studyplanitem: {
          include: {
            exercise: true,
          },
        },
      },
      orderBy: { SPID: 'asc' },
    });
    return NextResponse.json(plans);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch study plans' }, { status: 500 });
  }
} 