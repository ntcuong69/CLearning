import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  // Lấy tất cả mối quan hệ bạn bè đã accepted
  const friendships = await prisma.friendship.findMany({
    where: {
      status: "Accepted",
      OR: [
        { requester: session.user.uid },
        { addressee: session.user.uid },
      ],
    },
  });

  // Lấy UID bạn bè (khác với user hiện tại)
  const friendIds = friendships.map(f =>
    f.requester === session.user.uid ? f.addressee : f.requester
  );

  // Lấy thông tin user bạn bè
  const friends = await prisma.user.findMany({
    where: { UID: { in: friendIds } },
    select: {
      UID: true,
      Username: true,
      Email: true,
    },
  });

  // Định dạng lại dữ liệu trả về
  const result = friends.map(f => ({
    id: f.UID,
    username: f.Username,
    email: f.Email,
  }));

  return Response.json(result);
}