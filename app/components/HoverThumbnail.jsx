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
      className="inline cursor-alias relative group"
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
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + index * 88, // Offset each image slightly
                y: mousePosition.y + index * 10, // Offset each image slightly
                rotate: index % 2 === 0 ? index * 5 : -index * 5, // Alternate tilt directions
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="pointer-events-none w-40 rounded-xl shadow-xl flex items-center justify-center z-10 group-hover:animate-none"
              style={{
                position: "absolute",
                transformOrigin: "center center",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <img
                src={imageSrc}
                alt={`${text} Logo ${index + 1}`}
                className="object-fill rounded-xl"
              />
            </motion.span>
          ))}
      </AnimatePresence>
    </span>
  );
};

export default HoverThumbnail;