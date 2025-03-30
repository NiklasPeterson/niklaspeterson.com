"use client";
import { motion } from "motion/react"

export default function FadeIn(props) {

  const initialY = props.position === "down" ? -20 : 20;

  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
}