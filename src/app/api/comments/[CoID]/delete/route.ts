import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Đệ quy lấy tất cả CoID của comment con
async function getAllChildCommentIds(parentId: number): Promise<number[]> {
  const children = await prisma.comment.findMany({ where: { ParentID: parentId }, select: { CoID: true } });
  let all: number[] = children.map(c => c.CoID);
  for (const child of children) {
    const sub = await getAllChildCommentIds(child.CoID);
    all = all.concat(sub);
  }
  return all;
}

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
    
    // Lấy tất cả comment con (mọi cấp)
    const childIds = await getAllChildCommentIds(Number(CoID));
    const allCommentIds = [Number(CoID), ...childIds];
    
    // Xóa theo thứ tự để tránh lỗi foreign key constraint:
    // 1. Xóa commentlike trước
    // 2. Xóa notification liên quan
    // 3. Xóa comment con
    // 4. Xóa comment cha
    
    // Xóa tất cả like của các comment này
    await prisma.commentlike.deleteMany({
      where: { CoID: { in: allCommentIds } }
    });
    
    // Xóa tất cả notification liên quan đến các comment này
    await prisma.notification.deleteMany({
      where: { CoID: { in: allCommentIds } }
    });
    
    // Xóa tất cả comment con trước
    if (childIds.length > 0) {
      await prisma.comment.deleteMany({ 
        where: { CoID: { in: childIds } } 
      });
    }
    
    // Cuối cùng xóa comment cha
    await prisma.comment.delete({ where: { CoID: Number(CoID) } });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete comment error:", error);
    return NextResponse.json({ error: "Failed to delete comment" }, { status: 500 });
  }
} 