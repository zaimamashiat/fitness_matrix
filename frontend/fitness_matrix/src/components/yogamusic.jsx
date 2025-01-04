// Import necessary dependencies
import React, { useState, useRef } from 'react';

const MeditationMusic = () => {
  const tracks = [
    {
      id: 1,
      title: "Soothing Sunrise",
      artist: "Zen Waves",
      thumbnail: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      audio: "/music/calm-yoga-lofi-peaceful-meditation-beat-247403.mp3"
    },
    {
      id: 2,
      title: "Calm Reflections",
      artist: "Peaceful Sounds",
      thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      audio: "/music/meditation-lofi-yoga-relax-lofi-music-247404.mp3"
    },
    {
      id: 3,
      title: "Tranquil Vibes",
      artist: "Harmony Beats",
      thumbnail: "https://images.unsplash.com/photo-1534096210335-a3b961613bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      audio: "/music/morning-meditation-ambient-yoga-music-247406.mp3"
    },
    {
      id: 4,
      title: "Meditative State",
      artist: "Serenity Now",
      thumbnail: "https://images.unsplash.com/photo-1538240175502-ec4eb4455f34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      audio: "/music/relax-yoga-peaceful-meditation-background-music-247405.mp3"
    },
    {
      id: 5,
      title: "Inner Peace",
      artist: "Relaxation Crew",
      thumbnail: "https://images.unsplash.com/photo-1508050249562-b28a87434496?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      audio: "/music/meditation-lofi-yoga-relax-lofi-music-247404.mp3"
    },
    {
      id: 6,
      title: "Serene Evening",
      artist: "Calm Tones",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      audio: "/music/serene-evening-meditation-music.mp3"
    }
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = tracks[currentTrackIndex];

  const playPauseTrack = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
    audioRef.current.src = tracks[nextIndex].audio;
    audioRef.current.play();
  };

  const handleSeek = (event) => {
    audioRef.current.currentTime = event.target.value;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-left gap-20">Meditation Tracks</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg aspect-square ${currentTrackIndex === index ? 'border-2 border-teal-500' : ''}`}
              style={{ width: "400px", height: "400px" }}
              onClick={() => {
                setCurrentTrackIndex(index);
                setIsPlaying(true);
                audioRef.current.src = track.audio;
                audioRef.current.play();
              }}
            >
              <img
                src={track.thumbnail}
                alt={track.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-700 truncate">
                  {track.title}
                </h3>
                <p className="text-gray-500 text-sm">{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Music Player */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-6 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src={currentTrack.thumbnail}
              alt={currentTrack.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h4 className="text-lg font-bold text-gray-800">{currentTrack.title}</h4>
              <p className="text-gray-500 text-sm">{currentTrack.artist}</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={playPauseTrack}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600"
            >
              {isPlaying ? '❚❚ Pause' : '▶ Play'}
            </button>
            <button
              onClick={playNextTrack}
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400"
            >
              ⏭ Next
            </button>
            <input
              type="range"
              min="0"
              max={audioRef.current?.duration || 0}
              step="1"
              onChange={handleSeek}
              className="w-40"
            />
          </div>
        </div>
      )}
      <audio ref={audioRef} />
    </div>
  );
};

export default MeditationMusic;
