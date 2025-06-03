import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  // Lấy tất cả lời mời đã gửi (mình là requester, status Pending)
  const sent = await prisma.friendship.findMany({
    where: {
      requester: session.user.uid,
      status: "Pending",
    },
    select: {
      addressee: true,
    },
  });

  const friendIds = sent.map(f => f.addressee);

  // Lấy thông tin user đã gửi lời mời
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