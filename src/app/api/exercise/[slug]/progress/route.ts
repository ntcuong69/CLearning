import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// POST: Cập nhật trạng thái tiến độ của exercise
export async function POST(req: NextRequest, context: { params: { slug: string } }) {
  const { params } = await context;
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.uid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const UID = session.user.uid;
  const slug = (await params).slug;
  const { status } = await req.json();
  
  if (!slug) return NextResponse.json({ error: 'Invalid exercise slug' }, { status: 400 });
  if (!status || !['Attempting', 'Solved'].includes(status)) {
    return NextResponse.json({ error: 'Invalid status. Must be Attempting or Solved' }, { status: 400 });
  }

  try {
    // Tìm exercise theo slug
    const exercise = await prisma.exercise.findFirst({
      where: { Slug: slug },
    });

    if (!exercise) {
      return NextResponse.json({ error: 'Exercise not found' }, { status: 404 });
    }

    const EID = exercise.EID;

    // Cập nhật hoặc tạo mới exercise progress
    const progress = await prisma.exerciseprogress.upsert({
      where: {
        UID_EID: {
          UID,
          EID,
        },
      },
      update: {
        Status: status,
        UpdatedAt: new Date(),
      },
      create: {
        UID,
        EID,
        Status: status,
      },
    });

    return NextResponse.json({ progress });
  } catch (error) {
    console.error('Error updating exercise progress:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET: Lấy trạng thái tiến độ của exercise cho user hiện tại
export async function GET(req: NextRequest, context: { params: { slug: string } }) {
  const { params } = await context;
  const session = await getServerSession(authOptions);
  const slug = (await params).slug;
  
  if (!slug) return NextResponse.json({ error: 'Invalid exercise slug' }, { status: 400 });

  try {
    // Tìm exercise theo slug
    const exercise = await prisma.exercise.findFirst({
      where: { Slug: slug },
    });

    if (!exercise) {
      return NextResponse.json({ error: 'Exercise not found' }, { status: 404 });
    }

    const EID = exercise.EID;

    // Lấy trạng thái tiến độ của user hiện tại
    let status = 'Unattempted';
    if (session?.user?.uid) {
      const progress = await prisma.exerciseprogress.findUnique({
        where: {
          UID_EID: {
            UID: session.user.uid,
            EID,
          },
        },
      });
      
      if (progress) {
        status = progress.Status || 'Unattempted';
      }
    }

    return NextResponse.json({ status });
  } catch (error) {
    console.error('Error fetching exercise progress:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE: Xóa progress (reset về Unattempted)
export async function DELETE(req: NextRequest, context: { params: { slug: string } }) {
  const { params } = await context;
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.uid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const UID = session.user.uid;
  const slug = (await params).slug;
  
  if (!slug) return NextResponse.json({ error: 'Invalid exercise slug' }, { status: 400 });

  try {
    // Tìm exercise theo slug
    const exercise = await prisma.exercise.findFirst({
      where: { Slug: slug },
    });

    if (!exercise) {
      return NextResponse.json({ error: 'Exercise not found' }, { status: 404 });
    }

    const EID = exercise.EID;

    // Xóa progress record
    await prisma.exerciseprogress.deleteMany({
      where: {
        UID,
        EID,
      },
    });

    return NextResponse.json({ success: true, status: 'Unattempted' });
  } catch (error) {
    console.error('Error deleting exercise progress:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 