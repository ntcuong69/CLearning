import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: Request, context: { params: { eid: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Sử dụng `await` để lấy `params`
    const params = await context.params;
    const eid = parseInt(params.eid, 10); // Sử dụng params sau khi đã được lấy
    if (isNaN(eid)) {
      return NextResponse.json({ error: "Invalid exercise ID" }, { status: 400 });
    }

    const submissions = await prisma.submission.findMany({
      where: {
        UID: session.user.uid,
        EID: eid,
      },
      orderBy: {
        CreatedAt: "desc",
      },
    });

    return NextResponse.json({ submissions }, { status: 200 });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}