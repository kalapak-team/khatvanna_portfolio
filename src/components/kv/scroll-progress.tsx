"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 right-0 left-0 z-[70] h-[2px] origin-left bg-[var(--accent)]"
      style={{ scaleX }}
    />
  );
}
