"use client";
import { motion } from "motion/react";
import React from "react";

const images = [
  {
    src: "https://placehold.co/720",
    alt: "Tree",
  },
  {
    src: "https://placehold.co/720",
    alt: "Tree",
  },
  {
    src: "https://placehold.co/720",
    alt: "Tree",
  },
  {
    src: "https://placehold.co/720",
    alt: "Tree",
  },
  {
    src: "https://placehold.co/720",
    alt: "Tree",
  },
];

const ROTATION_DEGREES = [10, -20, -5, 5, -2];

const variants = {
  initial: {
    scale: 0,
  },
  animate: (i) => ({
    scale: 1,
    rotate: ROTATION_DEGREES[i],
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 360,
      damping: 20,
    },
  }),
};

export default function AlbumAnimation() {
  return (
    <motion.div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden rounded-xl p-4 shadow-lg">
      {images.map((image, index) => (
        <motion.img
          src={image.src}
          alt={image.alt}
          key={index}
          custom={index}
          variants={variants}
          initial="initial"
          animate="animate"
          className="-m-3 h-12 w-12 rounded-lg border-2 border-gray-100 shadow-lg"
        />
      ))}
    </motion.div>
  );
}
