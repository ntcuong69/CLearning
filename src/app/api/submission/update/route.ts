import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request) {
  try {
    const { SID, Result } = await req.json();

    if (!SID || !Result) {
      return NextResponse.json({ error: "SID and Result are required" }, { status: 400 });
    }

    // Cập nhật kết quả submission
    await prisma.submission.update({
      where: { SID },
      data: { Result },
    });

    return NextResponse.json({ message: "Submission result updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating submission result:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}