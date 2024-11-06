'use client'
import React, { useRef } from "react";

export default function LottieAnimation() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <lottie-player
      id="firstLottie"
      ref={ref}
      autoplay
      loop
      mode="normal"
      src="/animation.json"
      style={{ minWidth: "1440px", width: "1440px", height: "800px" }}
    ></lottie-player>
  );
}