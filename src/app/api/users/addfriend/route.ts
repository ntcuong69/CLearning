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

  // Kiểm tra đã tồn tại lời mời hoặc đã là bạn
  const existing = await prisma.friendship.findFirst({
    where: {
      OR: [
        { requester: session.user.uid, addressee: friendId },
        { requester: friendId, addressee: session.user.uid },
      ],
    },
  });

  if (existing) {
    return new Response("Friend request already exists or already friends", { status: 409 });
  }

  // Tạo lời mời kết bạn mới
  await prisma.friendship.create({
    data: {
      requester: session.user.uid,
      addressee: friendId,
      status: "Pending",
    },
  });

  return new Response("Friend request sent", { status: 200 });
}