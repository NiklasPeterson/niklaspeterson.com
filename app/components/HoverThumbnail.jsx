"use client"
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HoverThumbnail = ({ text, images }) => {
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
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
                x: mousePosition.x + 16 + index * 96,
                y: mousePosition.y - 16 + index * 10,
                rotate: index % 2 === 0 ? index * 2 : -index * 2,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 16 + index * 96,
                y: mousePosition.y - 16 + index * 10,
                rotate: index % 2 === 0 ? index * 2 : -index * 2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                // delay: index * 0.1,
              }}
              className="pointer-events-none w-40 rounded-xl shadow-xl overflow-hidden z-10 hidden sm:flex"
              style={{
                position: "absolute",
                transformOrigin: "center center",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <img
                src={imageSrc}
                alt={`${text} UI ${index + 1}`}
              />
            </motion.span>
          ))}
      </AnimatePresence>
    </span>
  );
};

export default HoverThumbnail;