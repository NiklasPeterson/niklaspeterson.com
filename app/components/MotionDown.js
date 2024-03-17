"use client";
import { motion } from "framer-motion";

export default function Motion(props) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
}