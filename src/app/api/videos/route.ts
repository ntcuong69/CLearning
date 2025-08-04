import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const videos = await prisma.video.findMany({
      include: {
        playlist: {
          select: {
            PID: true,
            Name: true,
          }
        }
      }
    });

    // Return raw database data
    return NextResponse.json({ success: true, videos: videos });
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}