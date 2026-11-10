"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function Preloader() {
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const delay = reduced ? 0 : 1600;
    const t = window.setTimeout(() => setDone(true), delay);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--ink)]"
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border border-white/25">
              <span className="font-display text-xl font-bold tracking-tight">KV</span>
            </div>
            <motion.p
              className="text-[10px] tracking-[0.35em] text-white/50 uppercase"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              Loading experience
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
