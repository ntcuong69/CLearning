import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, context: { params: Promise<{ tcid: string }> }) {
  try {
    const { tcid } = await context.params;
    const body = await req.json();
    const { Input, ExpectedOutput, isHidden } = body;
    const testcase = await prisma.testcase.update({
      where: { TCID: Number(tcid) },
      data: {
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

export async function DELETE(req: NextRequest, context: { params: Promise<{ tcid: string }> }) {
  try {
    const { tcid } = await context.params;
    await prisma.testcase.delete({ where: { TCID: Number(tcid) } });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
} 