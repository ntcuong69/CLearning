import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Lấy tất cả testcase của exercise theo EID
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ eid: string }> }
) {
  const { eid } = await context.params;

  try {
    const testcases = await prisma.testcase.findMany({
      where: { EID: Number(eid) },
      select: {
        TCID: true,
        Input: true,
        ExpectedOutput: true,
        isHidden: true,
      },
    });

    return NextResponse.json({ testcases });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}