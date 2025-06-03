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

  // Tìm mối quan hệ bạn bè (Accepted) giữa hai người
  const friendship = await prisma.friendship.findFirst({
    where: {
      OR: [
        { requester: session.user.uid, addressee: friendId },
        { requester: friendId, addressee: session.user.uid },
      ],
      status: "Accepted",
    },
  });

  if (!friendship) {
    return new Response("No friendship found", { status: 404 });
  }

  // Xóa mối quan hệ bạn bè
  await prisma.friendship.delete({
    where: { FID: friendship.FID },
  });

  return new Response("Unfriended successfully", { status: 200 });
}