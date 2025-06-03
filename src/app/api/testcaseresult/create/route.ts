import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { SID, TCID, ActualOutput, Result, ExecutionTime } = body;

    // Kiểm tra dữ liệu đầu vào
    if (!SID || !TCID || !ActualOutput || !Result) {
      return NextResponse.json(
        { error: "Missing required fields (SID, TCID, ActualOutput, Result)" },
        { status: 400 }
      );
    }

    // Tạo testcase result
    const testcaseresult = await prisma.testcaseresult.create({
      data: {
        SID,
        TCID,
        ActualOutput,
        Result
      },
    });

    return NextResponse.json({ testcaseresult }, { status: 201 });
  } catch (error) {
    console.error("Error creating testcase result:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}