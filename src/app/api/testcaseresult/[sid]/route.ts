import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  context: { params: { sid: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Sử dụng `await` để lấy `params`
    const { sid } = await context.params;
    const sidInt = parseInt(sid, 10);
    if (isNaN(sidInt)) {
      return NextResponse.json({ error: "Invalid submission ID" }, { status: 400 });
    }

    const submission = await prisma.submission.findUnique({
      where: { SID: sidInt },
    });

    if (!submission || submission.UID !== session.user.uid) {
      return NextResponse.json({ error: "Submission not found or unauthorized" }, { status: 404 });
    }

    const testcaseresults = await prisma.testcaseresult.findMany({
      where: { SID: sidInt },
      include: {
        testcase: true,
      },
    });

    return NextResponse.json({ testcaseresults }, { status: 200 });
  } catch (error) {
    console.error("Error fetching testcaseresults:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
