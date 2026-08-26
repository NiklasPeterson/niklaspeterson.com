"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function LottieAnimation() {
  return (
    <DotLottieReact
      src="/animation.lottie"
      autoplay
      loop
      aria-hidden="true"
      className="w-full h-fit min-w-[150vw] blur-[92px] md:blur-[120px] md:min-w-auto"
    />
  );
}