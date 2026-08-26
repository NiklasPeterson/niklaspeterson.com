"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function AnimatedHeader() {
  return (
    <DotLottieReact
      src="/animation.lottie"
      autoplay
      loop
      aria-hidden="true"
      className="h-full w-full"
    />
  );
}
