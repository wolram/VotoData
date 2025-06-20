"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      void audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(audio.duration);
  }, []);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const time = parseFloat(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [handleTimeUpdate, handleLoadedMetadata, handleEnded]);

  if (!src) {
    return (
      <div className="bg-[var(--window-frame-bg)] border border-[var(--border-color-light)] rounded-[2px] p-4">
        <p className="text-mono-sm">Ouça o autor lendo este artigo</p>
        <p className="font-mono text-xs opacity-60 mt-2">Áudio em breve</p>
      </div>
    );
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-[var(--window-frame-bg)] border border-[var(--border-color-light)] rounded-[2px] p-4">
      <p className="text-mono-sm mb-1">Ouça o autor lendo este artigo</p>
      <p className="font-mono text-xs opacity-60 mb-3">{title}</p>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handlePlayPause}
          className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-[var(--border-color-light)] rounded-[2px] hover:opacity-80 transition-opacity"
          aria-label={isPlaying ? "Pausar" : "Reproduzir"}
        >
          {isPlaying ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="3" y="2" width="4" height="12" />
              <rect x="9" y="2" width="4" height="12" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <polygon points="3,1 14,8 3,15" />
            </svg>
          )}
        </button>

        <div className="flex-1 flex flex-col gap-1">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 appearance-none cursor-pointer rounded-none bg-[var(--border-color-light)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--font-color)] [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[var(--font-color)] [&::-moz-range-thumb]:border-0"
            style={{
              background: `linear-gradient(to right, var(--font-color) ${progress}%, var(--border-color-light) ${progress}%)`,
            }}
            aria-label="Progresso do áudio"
          />
          <span className="font-mono text-xs opacity-60">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      <audio ref={audioRef} preload="metadata" src={src} />
    </div>
  );
}
