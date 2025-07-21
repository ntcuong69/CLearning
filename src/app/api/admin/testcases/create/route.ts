import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { EID, Input, ExpectedOutput, isHidden } = body;
    if (!EID || Input == null || ExpectedOutput == null) {
      return NextResponse.json({ error: "Thiếu thông tin testcase" }, { status: 400 });
    }
    const testcase = await prisma.testcase.create({
      data: {
        EID: Number(EID),
        Input,
        ExpectedOutput,
        isHidden: !!isHidden,
      },
    });
    return NextResponse.json({ testcase });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
} 