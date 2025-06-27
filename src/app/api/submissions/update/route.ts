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

    // Lấy submission để biết EID
    const submission = await prisma.submission.findUnique({ where: { SID } });
    if (submission) {
      await prisma.exercise.update({
        where: { EID: submission.EID },
        data: {
          status: Result === "Pass" ? "Solved" : "Unattempted",
        },
      });
    }

    return NextResponse.json({ message: "Submission result and exercise status updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating submission result:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}