"use client";
import { motion, useReducedMotion } from "motion/react";

export default function FadeIn(props) {
  const initialY = props.position === "down" ? -20 : 20;
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { y: initialY, opacity: 0 }}
      whileInView={reduceMotion ? undefined : { y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={
        reduceMotion
          ? undefined
          : {
              ease: "easeOut",
              duration: 0.5,
              delay: props.index ? props.index * 0.1 : 0,
            }
      }
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
}
