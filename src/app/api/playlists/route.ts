import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const playlists = await prisma.playlist.findMany({
      include: {
        video: {
          select: {
            VID: true,
            PID: true,
            Title: true,
            Description: true,
            VideoUrl: true,
          }
        }
      }
    });

    // Return raw database data
    return NextResponse.json({ success: true, playlists: playlists });
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return NextResponse.json({ error: 'Failed to fetch playlists' }, { status: 500 });
  }
}