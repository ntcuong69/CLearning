import { useState, useEffect } from 'react';

interface Video {
  VID: number;
  PID: number;
  Title: string;
  Description: string | null;
  Duration: string | null;
  VideoUrl: string;
}

interface Playlist {
  PID: number;
  Name: string;
  video: Video[];
}

export const useVideoData = () => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all playlists
  const fetchPlaylists = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/playlists');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setPlaylists(data.playlists);
        // Flatten all videos from all playlists
        const allVideos = data.playlists.flatMap((playlist: Playlist) => 
          playlist.video.map((video: Video) => video)
        );
        setVideos(allVideos);
      } else {
        setError(data.error || 'Failed to fetch playlists');
      }
    } catch (err) {
      setError('Failed to fetch playlists');
      console.error('Error fetching playlists:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch videos by playlist
  const fetchVideosByPlaylist = async (playlistId: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/videos/by-playlist/${playlistId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setVideos(data.videos);
      } else {
        setError(data.error || 'Failed to fetch videos');
      }
    } catch (err) {
      setError('Failed to fetch videos');
      console.error('Error fetching videos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all videos
  const fetchAllVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/videos');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setVideos(data.videos);
      } else {
        setError(data.error || 'Failed to fetch videos');
      }
    } catch (err) {
      setError('Failed to fetch videos');
      console.error('Error fetching videos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return {
    playlists,
    videos,
    loading,
    error,
    fetchPlaylists,
    fetchVideosByPlaylist,
    fetchAllVideos,
  };
}; 