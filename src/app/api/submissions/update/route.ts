import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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

    // Lấy submission để biết EID và UID
    const submission = await prisma.submission.findUnique({ 
      where: { SID },
      include: { user: true }
    });
    
    if (submission) {
      const EID = submission.EID;
      const UID = submission.UID;
      
      // Cập nhật hoặc tạo mới progress trong bảng exerciseprogress
      const status = Result === "Pass" ? "Solved" : "Attempting";
      
      await prisma.exerciseprogress.upsert({
        where: {
          UID_EID: {
            UID,
            EID,
          },
        },
        update: {
          Status: status,
        },
        create: {
          UID,
          EID,
          Status: status,
        },
      });
    }

    return NextResponse.json({ message: "Submission result and exercise progress updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating submission result:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}