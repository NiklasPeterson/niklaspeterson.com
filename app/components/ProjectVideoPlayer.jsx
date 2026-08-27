"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  PauseIcon,
  PlayIcon,
  VolumeHighIcon,
  VolumeMute02Icon,
} from "@hugeicons/core-free-icons";

export default function ProjectVideoPlayer({ media, className = "" }) {
  const videoRef = useRef(null);
  const resumedAfterScrub = useRef(false);
  const mobileControlsTimeout = useRef(null);
  const playbackFrame = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showMobileControls, setShowMobileControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) videoRef.current?.pause();
  }, [reduceMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncCurrentSecond = () => {
      const nextSecond = Math.floor(video.currentTime);
      setCurrentTime((previousSecond) =>
        previousSecond === nextSecond ? previousSecond : nextSecond,
      );
    };

    const syncMetadata = () => {
      setDuration(video.duration || 0);
      syncCurrentSecond();
    };

    const trackPlayback = () => {
      syncCurrentSecond();
      playbackFrame.current = window.requestAnimationFrame(trackPlayback);
    };

    const startTracking = () => {
      window.cancelAnimationFrame(playbackFrame.current);
      trackPlayback();
    };

    const stopTracking = () => {
      window.cancelAnimationFrame(playbackFrame.current);
      playbackFrame.current = null;
      syncCurrentSecond();
    };

    video.addEventListener("play", startTracking);
    video.addEventListener("pause", stopTracking);
    video.addEventListener("ended", stopTracking);
    video.addEventListener("loadedmetadata", syncMetadata);
    video.addEventListener("durationchange", syncMetadata);

    if (video.readyState >= 1) syncMetadata();
    if (!video.paused) startTracking();

    return () => {
      window.cancelAnimationFrame(playbackFrame.current);
      video.removeEventListener("play", startTracking);
      video.removeEventListener("pause", stopTracking);
      video.removeEventListener("ended", stopTracking);
      video.removeEventListener("loadedmetadata", syncMetadata);
      video.removeEventListener("durationchange", syncMetadata);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const revealMobileControls = () => {
    window.clearTimeout(mobileControlsTimeout.current);
    setShowMobileControls(true);
    mobileControlsTimeout.current = window.setTimeout(
      () => setShowMobileControls(false),
      2500,
    );
  };

  useEffect(() => () => window.clearTimeout(mobileControlsTimeout.current), []);

  const handleVideoClick = (event) => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      event.preventDefault();
      revealMobileControls();
      return;
    }
    togglePlayback();
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
        className={`${className} ${showControls ? "md:cursor-pointer" : ""} ${cropEdges ? "scale-[1.004]" : ""}`}
        src={media.url}
        poster={media.poster}
        width={media.width}
        height={media.height}
        aria-label={media.alt || undefined}
        autoPlay={!reduceMotion}
        muted
        loop={!reduceMotion}
        playsInline
        preload="metadata"
        onClick={showControls ? handleVideoClick : undefined}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
      />

      {showControls && (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/55 via-black/10 to-transparent px-2.5 pt-12 pb-2.5 opacity-0 transition-opacity duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] md:group-focus-within/video:opacity-100 md:group-hover/video:opacity-100 ${showMobileControls ? "opacity-100 md:opacity-0" : ""}`}
        >
          <div
            className={`flex items-center gap-2 rounded-xl border border-zinc-50/15 bg-zinc-950/55 p-1.5 pr-3 text-zinc-50 shadow-lg shadow-black/20 backdrop-blur-xl ${showMobileControls ? "pointer-events-auto" : "pointer-events-none md:pointer-events-auto"}`}
          >
            <ControlButton
              label={isPlaying ? "Pause video" : "Play video"}
              onClick={togglePlayback}
            >
              <HugeiconsIcon
                icon={isPlaying ? PauseIcon : PlayIcon}
                strokeWidth={2}
                className="h-4 w-4"
                aria-hidden="true"
              />
            </ControlButton>

            {media.hasAudio && (
              <ControlButton
                label={isMuted ? "Unmute video" : "Mute video"}
                onClick={toggleMuted}
              >
                <HugeiconsIcon
                  icon={isMuted ? VolumeMute02Icon : VolumeHighIcon}
                  strokeWidth={2}
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </ControlButton>
            )}

            <input
              className="min-w-0 flex-1 cursor-pointer appearance-none bg-transparent focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white [&::-moz-range-progress]:h-[3px] [&::-moz-range-progress]:rounded-full [&::-moz-range-progress]:bg-white/95 [&::-moz-range-thumb]:size-2.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-[0_1px_4px_rgb(0_0_0_/_0.3)] [&::-moz-range-track]:h-[3px] [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white/28 [&::-webkit-slider-runnable-track]:h-[3px] [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[linear-gradient(to_right,rgb(255_255_255_/_0.95)_0,rgb(255_255_255_/_0.95)_var(--video-progress),rgb(255_255_255_/_0.28)_var(--video-progress),rgb(255_255_255_/_0.28)_100%)] [&::-webkit-slider-thumb]:mt-[-3.5px] [&::-webkit-slider-thumb]:size-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_1px_4px_rgb(0_0_0_/_0.3)] [&::-webkit-slider-thumb]:transition-[opacity,transform] [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:[&::-webkit-slider-thumb]:scale-75 [@media(hover:hover)_and_(pointer:fine)]:[&::-webkit-slider-thumb]:opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover/video:[&::-webkit-slider-thumb]:scale-100 [@media(hover:hover)_and_(pointer:fine)]:group-hover/video:[&::-webkit-slider-thumb]:opacity-100 [@media(hover:hover)_and_(pointer:fine)]:focus-visible:[&::-webkit-slider-thumb]:scale-100 [@media(hover:hover)_and_(pointer:fine)]:focus-visible:[&::-webkit-slider-thumb]:opacity-100"
              type="range"
              min="0"
              max={duration || 1}
              step="1"
              value={Math.min(currentTime, duration || 0)}
              aria-label="Video progress"
              aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
              style={{ "--video-progress": `${progress}%` }}
              onInput={seek}
              onPointerDown={startScrubbing}
              onPointerUp={finishScrubbing}
              onPointerCancel={finishScrubbing}
            />

            <span className="min-w-19 pr-1 text-right text-[11px] leading-none font-medium tracking-tight text-zinc-300 tabular-nums">
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
      className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-white transition-[background-color,transform] duration-150 ease-out hover:bg-zinc-100/12 focus-visible:bg-zinc-100/12 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white active:scale-[0.96]"
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {children}
    </button>
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
