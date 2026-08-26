"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function LottieAnimation() {
  return (
    <DotLottieReact
      src="/animation.lottie"
      autoplay
      loop
      aria-hidden="true"
      style={{ minWidth: "1440px", width: "1440px", height: "800px" }}
    />
  );
}