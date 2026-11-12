"use client";

import { useEffect, useId, useRef } from "react";

const GLOW_LAYERS = [
  {
    name: "orange",
    color: "#FB5607",
    path: "M262.146 9.42927C299.418 -11.5801 350.481 5.8457 386.342 29.1819C422.136 52.4746 439.136 94.7439 454.488 134.594C469.097 172.511 492 217.051 472.444 252.669C451.963 289.973 385.718 273.298 359.802 307.052C330.928 344.661 365.931 415.742 326.746 442.437C291.871 466.195 241.952 434.52 206.668 411.373C176.213 391.394 174.64 345.351 145.48 323.525C103.151 291.844 23.0363 308.837 3.84841 259.571C-13.6232 214.711 31.7547 161.637 72.3484 135.756C110.133 111.666 166.7 156.791 204.004 131.962C242.417 106.395 221.949 32.0878 262.146 9.42927Z",
  },
  {
    name: "pink",
    color: "#FF006E",
    path: "M225.755 5.31226C255.325 5.51041 283.828 4.71576 312.79 10.7131C351.901 18.8123 395.686 19.3472 425.005 46.5733C456.315 75.6476 486.488 120.633 475.807 162.092C464.484 206.042 409.91 221.065 373.217 247.585C349.783 264.521 315.472 265.842 299.16 289.763C263.093 342.654 284.476 438.69 225.755 463.831C178.571 484.032 127.299 419.24 104.413 373.142C82.7615 329.531 131.024 273.173 109.434 229.531C90.0623 190.374 -0.641036 205.809 0.0034171 162.092C0.653393 118 81.8728 128.431 111.405 95.7952C131.914 73.1308 114.094 28.4961 138.048 9.5421C161.436 -8.96455 195.979 5.11272 225.755 5.31226Z",
  },
  {
    name: "blue",
    color: "#3A86FF",
    path: "M241.84 0.90198C284.697 -10.4043 279.893 87.9759 320.305 106.183C362.379 125.14 420.114 69.6707 456.751 97.7313C489.057 122.476 483.233 180.965 466.18 217.913C447.967 257.375 393.07 264.229 364.707 297.161C351.629 312.346 357.308 336.235 348.69 354.328C338.716 375.269 327.24 395.46 310.327 411.332C290.386 430.045 266.978 443.835 241.84 454.598C208.179 469.009 165.416 509.224 137.777 485.206C105.282 456.967 132.173 400.897 130.54 357.877C129.728 336.506 144.222 310.957 130.538 294.521C100.155 258.027 35.1379 259.045 13.1975 216.931C-5.32295 181.382 -7.89061 115.384 28.7869 99.2129C77.7205 77.6375 132.506 165.323 181.065 142.916C228.412 121.069 191.421 14.2032 241.84 0.90198Z",
  },
];

export default function GradientGlow({ flipped = false }) {
  const glow = useRef(null);
  const blurId = useId();

  useEffect(() => {
    const backdrop = glow.current;
    const visibility = new IntersectionObserver(([entry]) => {
      backdrop.toggleAttribute("data-offscreen", !entry.isIntersecting);
    });
    visibility.observe(backdrop);
    return () => visibility.disconnect();
  }, []);

  // The footer needs extra clipping space above it for the rotating layers.
  return (
    <div
      ref={glow}
      aria-hidden="true"
      className={`group/glow pointer-events-none absolute inset-x-0 -z-10 ${
        flipped
          ? "bottom-0 h-360 transform-[scaleY(-1)] overflow-clip"
          : "top-0 h-144 overflow-x-clip overflow-y-visible"
      }`}
    >
      <div className="@container absolute top-0 left-1/2 aspect-9/5 w-full max-w-360 min-w-192 -translate-x-1/2 overflow-visible opacity-45">
        {GLOW_LAYERS.map((layer) => (
          <div
            key={layer.name}
            className={`gradient-glow-layer gradient-glow-${layer.name} absolute inset-0 origin-top-left group-data-[offscreen]/glow:[animation-play-state:paused] motion-safe:animate-gradient-glow motion-safe:will-change-transform`}
          >
            <svg
              className="block size-full overflow-visible"
              viewBox="0 0 1440 800"
              focusable="false"
            >
              <defs>
                <filter
                  id={`${blurId}-${layer.name}`}
                  filterUnits="userSpaceOnUse"
                  x="-320"
                  y="-320"
                  width="1160"
                  height="1160"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur stdDeviation="100" />
                </filter>
              </defs>
              <path
                fill={layer.color}
                fillRule="evenodd"
                d={layer.path}
                filter={`url(#${blurId}-${layer.name})`}
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
