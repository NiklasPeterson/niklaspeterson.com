"use client"
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const HoverThumbnail = ({ text, images }) => {
  const [hovered, setHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
    setTimeout(() => setHasEntered(true), images.length * 100);
  };

  const handleMouseLeave = () => {
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
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8,
                x: mousePosition.x + 16 + index * 140,
                y: mousePosition.y - 40 + (index % 2 === 0 ? - 8 : + 4),
                rotate: index % 2 === 0 ? index * 1 : -index * 1,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 16 + index * 140,
                y: mousePosition.y - 40 + (index % 2 === 0 ? - 8 : + 4),
                rotate: index % 2 === 0 ? index * 1 : -index * 1,
              }}
              transition={{
                opacity: { duration: 0.2, ease: "easeOut" },
                default: {
                  type: "spring",
                  stiffness: 360,
                  damping: 20,
                  delay: !hasEntered ? index * 0.1 : 0,
                },
              }}
              className="absolute pointer-events-none w-40 rounded-xl shadow-xl overflow-hidden z-10 hidden sm:flex"
              style={{
                transformOrigin: "center center",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <img
                src={imageSrc}
                alt={`${text} UI ${index + 1}`}
                className="object-fill h-full"
              />
            </motion.span>
          ))}
      </AnimatePresence>
    </span>
  );
};

export default HoverThumbnail;