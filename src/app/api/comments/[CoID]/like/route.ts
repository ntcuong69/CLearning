import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

/**
 * API POST: Toggle like (like hoặc bỏ like) cho một bình luận.
 */
export async function POST(req: NextRequest, { params }: { params: { CoID: string } }) {
  const session = await getServerSession(authOptions);

  // Kiểm tra đăng nhập
  if (!session || !session.user?.uid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const UID = session.user.uid;
  const CoID = Number((await params).CoID);
  if (!CoID) {
    return NextResponse.json({ error: 'Invalid comment ID' }, { status: 400 });
  }

  // Kiểm tra đã like chưa
  const alreadyLiked = await prisma.commentlike.findUnique({
    where: {
      UID_CoID: { UID, CoID },
    },
  });

  let liked: boolean;

  if (alreadyLiked) {
    // Nếu đã like → xoá like
    await prisma.commentlike.delete({
      where: {
        UID_CoID: { UID, CoID },
      },
    });
    liked = false;
  } else {
    // Nếu chưa like → tạo like
    await prisma.commentlike.create({
      data: { UID, CoID },
    });
    liked = true;
  }

  // Đếm lại tổng số lượt like cho bình luận
  const likeCount = await prisma.commentlike.count({ where: { CoID } });

  return NextResponse.json({ liked, likeCount });
}

/**
 * API DELETE: Xoá toàn bộ lượt like của một bình luận.
 * (Sử dụng khi xoá bình luận chính)
 */
export async function DELETE(req: NextRequest, { params }: { params: { CoID: string } }) {
  const CoID = Number(params.CoID);

  if (!CoID) {
    return NextResponse.json({ error: 'Invalid comment ID' }, { status: 400 });
  }

  await prisma.commentlike.deleteMany({ where: { CoID } });

  return NextResponse.json({ success: true });
}
