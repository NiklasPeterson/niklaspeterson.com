"use client";
import { motion } from "motion/react"

export default function FadeIn({ position, className, index, children, ...rest }) {

  const initialY = position === "down" ? -20 : 20;

  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeOut", duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
