"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function FadeIn(props) {
  const initialY = props.position === "down" ? -20 : 20;
  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches,
  );
  const reduceMotion = useReducedMotion();
  const delay =
    props.stagger === "pair" && isDesktop && Number.isInteger(props.index)
      ? (props.index % 2) * 0.08
      : 0;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);

    updateIsDesktop();
    mediaQuery.addEventListener("change", updateIsDesktop);

    return () => mediaQuery.removeEventListener("change", updateIsDesktop);
  }, []);

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, transform: `translateY(${initialY}px)` }
      }
      whileInView={
        reduceMotion ? undefined : { opacity: 1, transform: "translateY(0)" }
      }
      viewport={{ once: true }}
      transition={
        reduceMotion
          ? undefined
          : {
              ease: "easeOut",
              duration: 0.5,
              delay,
            }
      }
      className={`${props.className ?? ""}${props.desktopOnly ? " max-md:transform-none! max-md:opacity-100!" : ""}`}
    >
      {props.children}
    </motion.div>
  );
}
