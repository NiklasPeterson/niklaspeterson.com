"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useReducedMotion } from "motion/react";

export function LottieAnimation() {
  const reduceMotion = useReducedMotion();

  return (
    <DotLottieReact
      src="/animation.lottie"
      autoplay={!reduceMotion}
      loop={!reduceMotion}
      aria-hidden="true"
      className="w-full h-fit min-w-[150vw] blur-[92px] md:blur-[120px] md:min-w-auto"
    />
  );
}
