/**
 * API cho quản lý danh sách (list) của người dùng.
 * 
 * GET /api/list
 * - Lấy tất cả danh sách của user hiện tại
 * - Trả về: { lists: Array<{LID, Name, Description, CreatedAt, ExerciseCount}> }
 * 
 * POST /api/list
 * - Tạo danh sách mới
 * - Body: { name: string, description?: string }
 * - Trả về: { list: {LID, Name, Description, CreatedAt, ExerciseCount} }
 * 
 * PUT /api/list/:lid
 * - Sửa thông tin danh sách
 * - Body: { name: string, description?: string }
 * 
 * DELETE /api/list/:lid
 * - Xóa danh sách
 * 
 * GET /api/list/:lid
 * - Lấy thông tin chi tiết 1 danh sách (nếu cần)
 */

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
    select: { 
      LID: true, 
      Name: true, 
      Description: true, 
      CreatedAt: true,
      _count: {
        select: {
          listitem: {
            where: {
              exercise: {
                isDeleted: 0 // Chỉ đếm bài tập chưa bị xóa
              }
            }
          }
        }
      }
    },
  });

  // Transform the data to include exercise count
  const listsWithCount = lists.map(list => ({
    LID: list.LID,
    Name: list.Name,
    Description: list.Description,
    CreatedAt: list.CreatedAt,
    ExerciseCount: list._count.listitem
  }));

  return NextResponse.json({ lists: listsWithCount });
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
    select: { 
      LID: true, 
      Name: true, 
      Description: true, 
      CreatedAt: true,
      _count: {
        select: {
          listitem: {
            where: {
              exercise: {
                isDeleted: 0 // Chỉ đếm bài tập chưa bị xóa
              }
            }
          }
        }
      }
    },
  });

  // Transform the data to include exercise count
  const listWithCount = {
    LID: newList.LID,
    Name: newList.Name,
    Description: newList.Description,
    CreatedAt: newList.CreatedAt,
    ExerciseCount: newList._count.listitem
  };

  return NextResponse.json({ list: listWithCount });
} 