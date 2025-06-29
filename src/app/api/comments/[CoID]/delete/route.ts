import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Đệ quy lấy tất cả CoID của comment co

export async function DELETE(req: NextRequest, context: { params: { CoID: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.uid) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    const { CoID } = await context.params;
    const comment = await prisma.comment.findUnique({ where: { CoID: Number(CoID) } });
    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }
    if (comment.UID !== session.user.uid) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    
    // Xóa theo thứ tự để tránh lỗi foreign key constraint:
    // 1. Xóa commentlike trước
    // 2. Xóa notification liên quan
    // 3. Xóa comment con
    // 4. Xóa comment cha
    
    // Xóa tất cả like của các comment này
    await prisma.commentlike.deleteMany({
      where: { CoID: Number(CoID) }
    });
    
    // Xóa tất cả notification liên quan đến các comment này
    // await prisma.notification.deleteMany({
    //   where: { CoID: Number(CoID) }
    // });
    
    await prisma.comment.delete({ where: { CoID: Number(CoID) } });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete comment error:", error);
    return NextResponse.json({ error: "Failed to delete comment" }, { status: 500 });
  }
} 