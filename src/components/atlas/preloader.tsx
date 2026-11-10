"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { atlas } from "@/data/atlas";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [p, setP] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    let v = 0;
    const id = window.setInterval(() => {
      v = Math.min(100, v + (v < 70 ? 3.5 : 1.8));
      setP(Math.floor(v));
      if (v >= 100) {
        window.clearInterval(id);
        window.setTimeout(() => {
          setDone(true);
          document.documentElement.style.overflow = "";
        }, 420);
      }
    }, 26);
    return () => {
      window.clearInterval(id);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[var(--ink)] text-white"
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] } }}
        >
          <p className="mb-3 text-[10px] tracking-[0.35em] text-white/45">{atlas.folio}</p>
          <p className="font-display text-5xl font-semibold tracking-tight md:text-7xl">{atlas.wordmark}</p>
          <div className="mt-10 h-px w-48 overflow-hidden bg-white/15">
            <div className="h-full bg-[var(--accent)] transition-[width] duration-75" style={{ width: `${p}%` }} />
          </div>
          <p className="mt-4 text-xs tracking-[0.25em] text-white/40">{String(p).padStart(2, "0")} — ATLAS</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
