import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) return new Response("Missing query", { status: 400 });

  // Tìm tất cả user theo username hoặc email
  const orConditions: any[] = [
    { Username: { contains: query } },
  ];
  if (query.includes("@")) {
    orConditions.push({ Email: { contains: query} });
  }

  const users = await prisma.user.findMany({
    where: {
      OR: orConditions,
      NOT: { UID: session.user.uid }, // Không trả về chính mình
    },
    take: 10,
  });

  // Kiểm tra trạng thái bạn bè với từng user
  const results = await Promise.all(
    users.map(async (user) => {
      const friendship = await prisma.friendship.findFirst({
        where: {
          OR: [
            { requester: session.user.uid, addressee: user.UID },
            { requester: user.UID, addressee: session.user.uid },
          ],
        },
      });

      let status: "friend" | "pending" | "not_friends" = "not_friends";
      if (friendship?.status === "Accepted") status = "friend";
      else if (friendship?.status === "Pending") status = "pending";

      return {
        id: user.UID,
        name: user.Username,
        email: user.Email,
        username: user.Username,
        status,
        canAccept:
          status === "pending" &&
          friendship?.status === "Pending" &&
          friendship?.addressee === session.user.uid, // chỉ người nhận mới được chấp nhận
      };
    })
  );

  return Response.json(results);
}
