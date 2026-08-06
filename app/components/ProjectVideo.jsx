"use client";

import { useRef, useState } from "react";

export default function ProjectVideo({ media, className = "" }) {
  const videoRef = useRef(null);
  const resumedAfterScrub = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
  };

  const seek = (event) => {
    const video = videoRef.current;
    if (!video) return;

    const nextTime = Number(event.target.value);
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const startScrubbing = () => {
    const video = videoRef.current;
    if (!video) return;
    resumedAfterScrub.current = !video.paused;
    if (!video.paused) video.pause();
  };

  const finishScrubbing = () => {
    const video = videoRef.current;
    if (!video || !resumedAfterScrub.current) return;
    video.play().catch(() => {});
    resumedAfterScrub.current = false;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const cropEdges = media.cropEdges === true;
  const showControls = media.controls !== false;

  return (
    <div className="project-video group/video relative h-full w-full">
      <video
        ref={videoRef}
        className={`${className} ${showControls ? "cursor-pointer" : ""} ${cropEdges ? "scale-[1.004]" : ""}`}
        src={media.url}
        poster={media.poster}
        width={media.width}
        height={media.height}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onClick={showControls ? togglePlayback : undefined}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
        onLoadedMetadata={(event) => {
          setDuration(event.currentTarget.duration || 0);
          setCurrentTime(event.currentTarget.currentTime || 0);
        }}
        onDurationChange={(event) =>
          setDuration(event.currentTarget.duration || 0)
        }
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
      />

      {showControls && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/55 via-black/10 to-transparent px-2.5 pt-12 pb-2.5 opacity-100 transition-opacity duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] md:opacity-0 md:group-focus-within/video:opacity-100 md:group-hover/video:opacity-100">
          <div className="pointer-events-auto flex items-center gap-2 rounded-xl border border-white/15 bg-black/55 p-1.5 text-white shadow-lg shadow-black/20 backdrop-blur-xl">
            <ControlButton
              label={isPlaying ? "Pause video" : "Play video"}
              onClick={togglePlayback}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </ControlButton>

            {media.hasAudio && (
              <ControlButton
                label={isMuted ? "Unmute video" : "Mute video"}
                onClick={toggleMuted}
              >
                {isMuted ? <MutedIcon /> : <VolumeIcon />}
              </ControlButton>
            )}

            <input
              className="project-video-scrubber min-w-0 flex-1"
              type="range"
              min="0"
              max={duration || 1}
              step="0.01"
              value={Math.min(currentTime, duration || 0)}
              aria-label="Video progress"
              aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
              style={{ "--video-progress": `${progress}%` }}
              onInput={seek}
              onPointerDown={startScrubbing}
              onPointerUp={finishScrubbing}
              onPointerCancel={finishScrubbing}
            />

            <span className="min-w-[4.75rem] pr-1 text-right text-[11px] leading-none font-medium tracking-tight text-white/75 tabular-nums">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function ControlButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-white transition-[background-color,transform] duration-150 ease-out hover:bg-white/12 focus-visible:bg-white/12 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white active:scale-[0.96]"
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <path d="M6.5 4.75v10.5L15 10 6.5 4.75Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <path d="M5.75 4.5h3v11h-3v-11Zm5.5 0h3v11h-3v-11Z" fill="currentColor" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 8v4h3l4 3.25V4.75L6.5 8h-3Z" />
      <path d="M13 7.25a4 4 0 0 1 0 5.5M15 5.25a6.75 6.75 0 0 1 0 9.5" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 8v4h3l4 3.25V4.75L6.5 8h-3Z" />
      <path d="m13.25 8 3.5 4m0-4-3.5 4" />
    </svg>
  );
}

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
