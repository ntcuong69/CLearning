import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ eid: string }> }
) {
  const { eid } = await context.params;
  try {
    const exercise = await prisma.exercise.findFirst({
      where: {
        EID: Number(eid),
      },
      select: {
        EID: true,
        TpID: true,
        Content: true,
        Difficulty: true,
        template: true,
      },
    });

    if (!exercise) {
      return NextResponse.json({ error: "Exercise not found" }, { status: 404 });
    }

    return NextResponse.json({ exercise });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}