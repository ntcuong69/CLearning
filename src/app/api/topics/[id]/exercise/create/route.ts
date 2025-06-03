import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // body là mảng các exercise
    if (!Array.isArray(body) || body.length === 0) {
      return NextResponse.json(
        { success: false, error: "Request body must be a non-empty array" },
        { status: 400 }
      );
    }

    // Validate từng exercise đầu vào
    for (const exercise of body) {
      if (
        typeof exercise.TpID !== "number" ||
        typeof exercise.Content !== "string" ||
        !["Easy", "Medium", "Hard"].includes(exercise.Difficulty) ||
        !Array.isArray(exercise.testcase) ||
        exercise.testcase.length === 0
      ) {
        return NextResponse.json(
          { success: false, error: "Invalid exercise format" },
          { status: 400 }
        );
      }
    }

    // Tạo nhiều exercise với testcase con
    const createdExercises = await Promise.all(
      body.map((exercise) =>
        prisma.exercise.create({
          data: {
            TpID: exercise.TpID,
            Content: exercise.Content,
            Difficulty: exercise.Difficulty,
            testcase: {
              create: exercise.testcase.map((tc: any) => ({
                Input: tc.Input,
                ExpectedOutput: tc.ExpectedOutput,
                isHidden: tc.isHidden ?? false,
              })),
            },
          },
          include: {
            testcase: true,
          },
        })
      )
    );

    return NextResponse.json({ success: true, exercises: createdExercises });
  } catch (error: any) {
    console.error("Error creating exercises:", error);
    return NextResponse.json(
      { success: false, error: error.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
