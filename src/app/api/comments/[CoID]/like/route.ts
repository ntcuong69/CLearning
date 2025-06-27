import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export async function POST(req: NextRequest, context: { params: { CoID: string } }) {
  const { params } = context;
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.uid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const UID = session.user.uid;
  const CoID = Number((await params).CoID);
  if (!CoID) return NextResponse.json({ error: 'Invalid comment ID' }, { status: 400 });

  // Kiểm tra đã like chưa
  const existing = await prisma.commentlike.findUnique({
    where: {
      UID_CoID: {
        UID,
        CoID,
      },
    },
  });

  let liked = false;
  if (existing) {
    // Đã like, xóa like
    await prisma.commentlike.delete({
      where: {
        UID_CoID: {
          UID,
          CoID,
        },
      },
    });
    liked = false;
  } else {
    // Chưa like, tạo like
    await prisma.commentlike.create({
      data: {
        UID,
        CoID,
      },
    });
    liked = true;
  }

  // Đếm lại số like
  const likeCount = await prisma.commentlike.count({ where: { CoID } });

  return NextResponse.json({ liked, likeCount });
}

// Xóa tất cả like của một bình luận (dùng khi xóa comment)
export async function DELETE(req: NextRequest, context: { params: { CoID: string } }) {
  const { params } = context;
  const CoID = Number(params.CoID);
  if (!CoID) return NextResponse.json({ error: 'Invalid comment ID' }, { status: 400 });
  await prisma.commentlike.deleteMany({ where: { CoID } });
  return NextResponse.json({ success: true });
}
