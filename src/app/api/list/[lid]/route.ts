import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: NextRequest,
  { params }: { params: { lid: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Lấy thông tin user từ email
    const user = await prisma.user.findUnique({
      where: { Email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: "User không tồn tại" }, { status: 404 });
    }

    const { name, description } = await request.json();
    const lid = parseInt((await params).lid);

    if (!name || name.trim().length === 0) {
      return NextResponse.json({ error: "Tên danh sách không được để trống" }, { status: 400 });
    }

    if (name.length > 30) {
      return NextResponse.json({ error: "Tên danh sách không được quá 30 ký tự" }, { status: 400 });
    }

    if (description && description.length > 150) {
      return NextResponse.json({ error: "Mô tả không được quá 150 ký tự" }, { status: 400 });
    }

    // Kiểm tra xem danh sách có tồn tại và thuộc về user hiện tại không
    const existingList = await prisma.list.findFirst({
      where: {
        LID: lid,
        UID: user.UID
      }
    });

    if (!existingList) {
      return NextResponse.json({ error: "Danh sách không tồn tại" }, { status: 404 });
    }

    // Cập nhật danh sách
    const updatedList = await prisma.list.update({
      where: { LID: lid },
      data: {
        Name: name.trim(),
        Description: description?.trim() || null
      }
    });

    return NextResponse.json({ 
      message: "Cập nhật danh sách thành công",
      list: updatedList 
    });

  } catch (error) {
    console.error("Error updating list:", error);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { lid: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Lấy thông tin user từ email
    const user = await prisma.user.findUnique({
      where: { Email: session.user.email }
    });

    if (!user) {
      return NextResponse.json({ error: "User không tồn tại" }, { status: 404 });
    }

    const lid = parseInt((await params).lid);

    // Kiểm tra xem danh sách có tồn tại và thuộc về user hiện tại không
    const existingList = await prisma.list.findFirst({
      where: {
        LID: lid,
        UID: user.UID
      },
      include: {
        _count: {
          select: {
            listitem: true
          }
        }
      }
    });

    if (!existingList) {
      return NextResponse.json({ error: "Danh sách không tồn tại" }, { status: 404 });
    }

    // Xóa tất cả listitems trước
    await prisma.listitem.deleteMany({
      where: { LID: lid }
    });

    // Sau đó xóa list
    await prisma.list.delete({
      where: { LID: lid }
    });

    return NextResponse.json({ 
      message: "Xóa danh sách thành công",
      deletedItemsCount: existingList._count.listitem
    });

  } catch (error) {
    console.error("Error deleting list:", error);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
} 