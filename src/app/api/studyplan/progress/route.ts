import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// POST: Bắt đầu hoặc cập nhật tiến độ study plan
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.uid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const UID = session.user.uid;
  const { SPID, action } = await req.json();
  
  if (!SPID) return NextResponse.json({ error: 'Invalid SPID' }, { status: 400 });
  if (!action || !['start', 'complete', 'restart'].includes(action)) {
    return NextResponse.json({ error: 'Invalid action. Must be start, complete, or restart' }, { status: 400 });
  }

  try {
    if (action === 'start') {
      // Bắt đầu study plan
      let progress = await prisma.studyplanprogress.findFirst({
        where: {
          UID,
          SPID: Number(SPID),
        },
      });

      if (progress) {
        // Cập nhật nếu đã tồn tại
        progress = await prisma.studyplanprogress.update({
          where: {
            SPPID: progress.SPPID,
          },
          data: {
            Status: 'InProgress',
            StartTime: new Date(),
          },
        });
      } else {
        // Tạo mới nếu chưa tồn tại
        progress = await prisma.studyplanprogress.create({
          data: {
            UID,
            SPID: Number(SPID),
            Status: 'InProgress',
            StartTime: new Date(),
          },
        });
      }

      return NextResponse.json({ progress });
    } else if (action === 'complete') {
      // Hoàn thành study plan
      const existingProgress = await prisma.studyplanprogress.findFirst({
        where: {
          UID,
          SPID: Number(SPID),
        },
      });

      if (!existingProgress) {
        return NextResponse.json({ error: 'Study plan progress not found' }, { status: 404 });
      }

      const progress = await prisma.studyplanprogress.update({
        where: {
          SPPID: existingProgress.SPPID,
        },
        data: {
          Status: 'Completed',
          EndTime: new Date(),
        },
      });

      return NextResponse.json({ progress });
    } else if (action === 'restart') {
      // Học lại study plan (reset về InProgress)
      const existingProgress = await prisma.studyplanprogress.findFirst({
        where: {
          UID,
          SPID: Number(SPID),
        },
      });

      if (!existingProgress) {
        return NextResponse.json({ error: 'Study plan progress not found' }, { status: 404 });
      }

      const progress = await prisma.studyplanprogress.update({
        where: {
          SPPID: existingProgress.SPPID,
        },
        data: {
          Status: 'InProgress',
          EndTime: null, // Reset end time
        },
      });

      return NextResponse.json({ progress });
    }
  } catch (error) {
    console.error('Error updating study plan progress:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET: Lấy tiến độ study plan của user
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(req.url);
  const SPID = searchParams.get('spid');
  
  if (!SPID) return NextResponse.json({ error: 'Invalid SPID' }, { status: 400 });

  try {
    let progress = null;
    if (session?.user?.uid) {
      progress = await prisma.studyplanprogress.findFirst({
        where: {
          UID: session.user.uid,
          SPID: Number(SPID),
        },
      });
    }

    return NextResponse.json({ 
      progress: progress || { 
        Status: 'NotStarted', 
        StartTime: null, 
        EndTime: null 
      } 
    });
  } catch (error) {
    console.error('Error fetching study plan progress:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 