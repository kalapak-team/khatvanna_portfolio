"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function Cursor() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 32 });
  const sy = useSpring(y, { stiffness: 420, damping: 32 });

  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    document.documentElement.classList.add("cursor-none");
    const show = window.requestAnimationFrame(() => setVisible(true));

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      if (t) {
        setHover(true);
        setLabel(t.dataset.cursor || "");
      } else {
        setHover(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.cancelAnimationFrame(show);
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [reduced, x, y]);

  if (!visible || reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[90] mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      <div
        className={`flex items-center justify-center rounded-full border border-white bg-white/10 transition-all duration-300 ${
          hover ? "h-20 w-20" : "h-3 w-3"
        }`}
      >
        {hover && label && (
          <span className="px-2 text-center text-[9px] leading-tight font-semibold tracking-[0.12em] text-white uppercase">
            {label}
          </span>
        )}
      </div>
    </motion.div>
  );
}
