import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

/**
 * API DELETE: Xoá một bình luận cụ thể.
 * Chỉ cho phép nếu người gọi API là chủ nhân của bình luận đó.
 */
export async function DELETE(req: NextRequest, { params }: { params: { CoID: string } }) {
  try {
    const session = await getServerSession(authOptions);

    // Kiểm tra đăng nhập
    if (!session?.user?.uid) {
      return NextResponse.json({ error: "Chưa xác thực người dùng" }, { status: 401 });
    }

    const CoID = Number((await params).CoID);

    if (!CoID) {
      return NextResponse.json({ error: "ID bình luận không hợp lệ" }, { status: 400 });
    }

    // Tìm comment để kiểm tra quyền xoá
    const comment = await prisma.comment.findUnique({ where: { CoID } });

    if (!comment) {
      return NextResponse.json({ error: "Không tìm thấy bình luận" }, { status: 404 });
    }

    if (comment.UID !== session.user.uid) {
      return NextResponse.json({ error: "Bạn không có quyền xoá bình luận này" }, { status: 403 });
    }

    // XÓA CÁC LIÊN KẾT TRƯỚC KHI XÓA COMMENT
    // 1. Xoá các lượt like của bình luận
    await prisma.commentlike.deleteMany({ where: { CoID } });

    // 2. Xoá bình luận
    await prisma.comment.delete({ where: { CoID } });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Lỗi xoá bình luận:", error);
    return NextResponse.json({ error: "Lỗi khi xoá bình luận" }, { status: 500 });
  }
}
