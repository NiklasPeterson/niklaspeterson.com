"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

function HoverThumbnailPreview({
  imageSrc,
  index,
  text,
  mouseX,
  mouseY,
  hasEntered,
}) {
  const x = useTransform(mouseX, (value) => value + 16 + index * 140);
  const y = useTransform(
    mouseY,
    (value) => value - 40 + (index % 2 === 0 ? -8 : 4),
  );
  const springX = useSpring(x, { stiffness: 360, damping: 20 });
  const springY = useSpring(y, { stiffness: 360, damping: 20 });

  return (
    <motion.span
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.2, ease: "easeOut" },
        scale: {
          type: "spring",
          stiffness: 360,
          damping: 20,
          delay: !hasEntered ? index * 0.1 : 0,
        },
      }}
      className="pointer-events-none absolute z-10 hidden w-40 overflow-hidden rounded-xl shadow-xl sm:flex"
      style={{
        x: springX,
        y: springY,
        rotate: index % 2 === 0 ? index : -index,
        transformOrigin: "center center",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <img
        src={imageSrc}
        alt={`${text} UI ${index + 1}`}
        className="h-full object-fill"
      />
    </motion.span>
  );
}

const HoverThumbnail = ({ text, images }) => {
  const [hovered, setHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const textRef = useRef(null);
  const staggerTimeoutRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useEffect(
    () => () => window.clearTimeout(staggerTimeoutRef.current),
    [],
  );

  const updateMousePosition = (e) => {
    if (reduceMotion || !canShowPreview()) return;

    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const canShowPreview = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handleMouseMove = (e) => {
    updateMousePosition(e);
  };

  const handleMouseEnter = (e) => {
    if (reduceMotion || !canShowPreview()) return;

    updateMousePosition(e);
    window.clearTimeout(staggerTimeoutRef.current);
    setHovered(true);
    staggerTimeoutRef.current = window.setTimeout(
      () => setHasEntered(true),
      images.length * 100,
    );
  };

  const handleMouseLeave = () => {
    window.clearTimeout(staggerTimeoutRef.current);
    setHovered(false);
    setHasEntered(false);
  };

  return (
    <span
      ref={textRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {text}
      <AnimatePresence>
        {hovered &&
          images.map((imageSrc, index) => (
            <HoverThumbnailPreview
              key={index}
              imageSrc={imageSrc}
              index={index}
              text={text}
              mouseX={mouseX}
              mouseY={mouseY}
              hasEntered={hasEntered}
            />
          ))}
      </AnimatePresence>
    </span>
  );
};

export default HoverThumbnail;
