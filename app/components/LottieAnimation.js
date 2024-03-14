'use client'
import React, { useRef } from "react";

export default function Home() {
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
      src="https://lottie.host/7188f07e-fa23-4736-b46d-8b913ee45c4c/NNg0uwffxn.json"
      style={{ width: "1440px", height: "800px" }}
    ></lottie-player>
  );
}