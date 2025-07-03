import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest, context: { params: { slug: string } }) {
  const { params } = context;
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

    // Kiểm tra đã like chưa
    const existing = await prisma.exerciselike.findUnique({
      where: {
        UID_EID: {
          UID,
          EID,
        },
      },
    });

    let liked = false;
    if (existing) {
      // Đã like, xóa like
      await prisma.exerciselike.delete({
        where: {
          UID_EID: {
            UID,
            EID,
          },
        },
      });
      liked = false;
    } else {
      // Chưa like, tạo like
      await prisma.exerciselike.create({
        data: {
          UID,
          EID,
        },
      });
      liked = true;
    }

    // Đếm lại số like
    const likeCount = await prisma.exerciselike.count({ where: { EID } });

    return NextResponse.json({ liked, likeCount });
  } catch (error) {
    console.error('Error handling exercise like:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Lấy thông tin like của exercise
export async function GET(req: NextRequest, context: { params: { slug: string } }) {
  const { params } = context;
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

    // Đếm số like
    const likeCount = await prisma.exerciselike.count({ where: { EID } });

    // Kiểm tra user hiện tại đã like chưa
    let isLiked = false;
    if (session?.user?.uid) {
      const existing = await prisma.exerciselike.findUnique({
        where: {
          UID_EID: {
            UID: session.user.uid,
            EID,
          },
        },
      });
      isLiked = !!existing;
    }

    return NextResponse.json({ likeCount, isLiked });
  } catch (error) {
    console.error('Error fetching exercise like info:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 