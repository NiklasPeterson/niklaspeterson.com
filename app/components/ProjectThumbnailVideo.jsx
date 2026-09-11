"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export default function ProjectThumbnailVideo({
  media,
  className,
  priority = false,
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [posterReady, setPosterReady] = useState(!media.poster);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playing, setPlaying] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting && posterReady && !reduceMotion)
        setShouldLoad(true);
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [posterReady, reduceMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (visible && shouldLoad && !reduceMotion) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [visible, shouldLoad, reduceMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-zinc-100 dark:bg-zinc-900"
      style={{ aspectRatio: media.width / media.height }}
    >
      {media.poster && (
        <Image
          src={media.poster}
          alt={media.alt || ""}
          fill
          priority={priority}
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1439px) calc((100vw - 208px) / 2), 616px"
          className="object-cover"
          onLoad={() => setPosterReady(true)}
          onError={() => setPosterReady(true)}
        />
      )}
      <video
        ref={videoRef}
        className={"absolute inset-0 h-full w-full " + (className || "")}
        style={{ opacity: playing && !reduceMotion ? 1 : 0 }}
        src={shouldLoad ? media.url : undefined}
        width={media.width}
        height={media.height}
        muted
        playsInline
        loop={!reduceMotion}
        preload="none"
        onPlaying={() => setPlaying(true)}
        aria-label={media.alt || undefined}
      />
    </div>
  );
}
