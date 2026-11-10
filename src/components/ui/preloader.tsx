"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export function Preloader() {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) return;

    let current = 0;
    let finished = false;
    const timer = window.setInterval(() => {
      current += Math.random() * 18 + 8;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        window.clearInterval(timer);
        window.setTimeout(() => {
          if (!finished) {
            finished = true;
            setDone(true);
          }
        }, 320);
      } else {
        setProgress(Math.floor(current));
      }
    }, 80);

    return () => {
      finished = true;
      window.clearInterval(timer);
    };
  }, [reduced]);

  if (reduced || done) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--background)]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.p
          className="font-display text-5xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          KV
        </motion.p>
        <p className="mt-3 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
          Khat Vanna
        </p>
        <div className="mt-10 h-px w-40 overflow-hidden bg-[var(--border)]">
          <motion.div
            className="h-full bg-[var(--accent)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
        <p className="mt-3 font-mono text-xs text-[var(--muted)] tabular-nums">
          {String(progress).padStart(2, "0")}%
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
