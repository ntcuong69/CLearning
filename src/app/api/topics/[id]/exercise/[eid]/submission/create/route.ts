// src/app/api/topics/[id]/exercise/[eid]/submission/create/route.ts

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request, context: { params: Promise<{ id: string; eid: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.uid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { code } = await req.json();
    if (!code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }

    const { eid } = await context.params; // ✅ Phải await ở đây
    const exerciseId = parseInt(eid, 10);
    if (isNaN(exerciseId)) {
      return NextResponse.json({ error: "Invalid exercise ID" }, { status: 400 });
    }

    const submission = await prisma.submission.create({
      data: {
        UID: session.user.uid,
        EID: exerciseId,
        Code: code,
        Result: "Pending",
        isPublic: false,
      },
    });

    return NextResponse.json({ submission }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
