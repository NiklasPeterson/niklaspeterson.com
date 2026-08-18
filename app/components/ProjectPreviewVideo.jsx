"use client";

import { useEffect, useRef, useState } from "react";

export default function ProjectPreviewVideo({
  media,
  className,
  priority = false,
  fetchPriority,
}) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (shouldLoad || !containerRef.current) return;

    if (!("IntersectionObserver" in window)) {
      const fallbackTimeout = window.setTimeout(() => setShouldLoad(true), 0);
      return () => window.clearTimeout(fallbackTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="h-full w-full bg-zinc-100 dark:bg-zinc-900">
      <video
        className={className}
        src={shouldLoad ? media.url : undefined}
        poster={media.poster}
        width={media.width}
        height={media.height}
        autoPlay={shouldLoad}
        muted
        playsInline
        loop
        preload={shouldLoad ? "auto" : "none"}
        fetchPriority={fetchPriority}
        aria-label={media.alt || undefined}
      />
    </div>
  );
}
