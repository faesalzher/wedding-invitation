import { useRef, useImperativeHandle, forwardRef, useState } from "react";
import { Music, Pause } from "lucide-react";

type BackgroundMusicProps = {};

export type BackgroundMusicHandle = {
  play: () => void;
};

const BackgroundMusic = forwardRef<BackgroundMusicHandle, BackgroundMusicProps>(
  (_, ref) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // expose fungsi play ke parent via ref
    useImperativeHandle(ref, () => ({
      play: () => {
        if (audioRef.current && !isPlaying) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      },
    }));

    const togglePlay = () => {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    return (
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={togglePlay}
          className="p-1 rounded-full bg-white/60 shadow-lg hover:scale-100 transition"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-primary" />
          ) : (
            <Music className="w-6 h-6 text-primary" />
          )}
        </button>

        <audio ref={audioRef} loop preload="auto">
          <source src={`${import.meta.env.BASE_URL}audio/bg-audio.mp3`}  type="audio/mpeg" />
          Browser kamu tidak mendukung audio.
        </audio>
      </div>
    );
  }
);

export default BackgroundMusic;
