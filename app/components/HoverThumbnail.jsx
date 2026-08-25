"use client";
import { useEffect, useRef, useState } from "react";
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

const HoverThumbnail = ({
  text,
  images,
  appIcon,
  iconRotation = "rotate-12",
  hasTrailingSpacing = true,
}) => {
  const [hovered, setHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const textRef = useRef(null);
  const staggerTimeoutRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => () => window.clearTimeout(staggerTimeoutRef.current), []);

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
      className={`group relative inline-block ${hasTrailingSpacing ? "mx-1" : "ml-1"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={updateMousePosition}
    >
      <span
        className={`mr-1.5 inline-flex h-7 w-7 -translate-y-0.5 align-middle ${iconRotation} overflow-clip rounded-md shadow-md transition-transform duration-160 ease-out motion-reduce:transition-none dark:shadow-none [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-110`}
      >
        <img
          src={appIcon}
          alt={`${text} app icon`}
          className="h-full w-full object-cover"
        />
      </span>
      <span className="font-semibold text-primary">{text}</span>
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
