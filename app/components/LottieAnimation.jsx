'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottieAnimation() {
  return (
    <DotLottieReact
      src="animation.lottie"
      loop
      autoplay
      style={{ minWidth: "1440px", width: "1440px", height: "800px" }}
    />
  );
}