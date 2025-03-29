"use client"
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HoverThumbnail = ({ text, images }) => {
  const [hovered, setHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false); // New state to track initial hover
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
    // Delay setting hasEntered to true to allow the initial animation to play
    setTimeout(() => setHasEntered(true), images.length * 100); // Adjust timing based on delay
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setHasEntered(false); // Reset for the next hover
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
                rotate: 0,
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
                type: "spring",
                stiffness: 320,
                damping: 20,
                // Apply delay only for the initial animation
                delay: !hasEntered ? index * 0.1 : 0,
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