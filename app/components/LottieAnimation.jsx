"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function LottieAnimation() {
  return (
    <DotLottieReact
      src="/animation.lottie"
      autoplay
      loop
      aria-hidden="true"
      className="w-full h-fit blur-3xl md:blur-[120px]"
    />
  );
}