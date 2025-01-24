"use client"
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HoverThumbnail = ({ text, imageSrc }) => {
  const [hovered, setHovered] = useState(false);
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

  return (
    <span
      ref={textRef}
      className="inline cursor-alias relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {text}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="pointer-events-none w-16 h-16 rounded-xl shadow-xl flex border border-zinc-50 dark:border-zinc-900 items-center justify-center"
            style={{
              position: "absolute",
              transformOrigin: "center center",
            }}
          >
            <img
              src={imageSrc}
              alt={`${text} Logo`}
              className="object-fill rounded-xl"
            />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export default HoverThumbnail;