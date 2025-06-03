import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  // Lấy tất cả lời mời nhận được (mình là addressee, status Pending)
  const received = await prisma.friendship.findMany({
    where: {
      addressee: session.user.uid,
      status: "Pending",
    },
    select: {
      requester: true,
    },
  });

  const friendIds = received.map(f => f.requester);

  // Lấy thông tin user đã gửi lời mời cho mình
  const users = await prisma.user.findMany({
    where: { UID: { in: friendIds } },
    select: {
      UID: true,
      Username: true,
      Email: true,
    },
  });

  const result = users.map(u => ({
    id: u.UID,
    username: u.Username,
    email: u.Email,
  }));

  return Response.json(result);
}