"use client";

import { useEffect, useRef, useState } from "react";

export default function DeferredFooterBackground() {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: "800px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute right-0 bottom-0 left-0 -z-10 flex h-full max-w-full rotate-180 justify-center overflow-hidden blur-[120px]"
    >
      {shouldRender ? <img src="/animated-header.svg" alt="" /> : null}
    </div>
  );
}
