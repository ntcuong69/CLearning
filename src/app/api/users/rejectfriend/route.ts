import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { friendId } = await req.json();

  if (!friendId || friendId === session.user.uid) {
    return new Response("Invalid friendId", { status: 400 });
  }

  // Tìm lời mời kết bạn đang ở trạng thái Pending mà mình là người nhận
  const friendship = await prisma.friendship.findFirst({
    where: {
      requester: friendId,
      addressee: session.user.uid,
      status: "Pending",
    },
  });

  if (!friendship) {
    return new Response("No pending friend request found", { status: 404 });
  }

  // Xóa lời mời kết bạn
  await prisma.friendship.delete({
    where: { FID: friendship.FID },
  });

  return new Response("Friend request rejected", { status: 200 });
}