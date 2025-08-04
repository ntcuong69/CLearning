import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { pid: string } }
) {
  try {
    const playlistId = parseInt((await params).pid);
    
    if (isNaN(playlistId)) {
      return NextResponse.json({ error: 'Invalid playlist ID' }, { status: 400 });
    }

    const videos = await prisma.video.findMany({
      where: {
        PID: playlistId
      },
      include: {
        playlist: {
          select: {
            PID: true,
            Name: true,
          }
        }
      }
    });

    if (videos.length === 0) {
      return NextResponse.json({ error: 'No videos found for this playlist' }, { status: 404 });
    }

    // Return raw database data
    return NextResponse.json({ 
      success: true, 
      videos: videos,
      playlist: {
        PID: videos[0].playlist.PID,
        Name: videos[0].playlist.Name,
        videoCount: videos.length
      }
    });
  } catch (error) {
    console.error('Error fetching videos by playlist:', error);
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}