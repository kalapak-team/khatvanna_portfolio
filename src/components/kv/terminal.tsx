"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { profile } from "@/data/profile";

export function Terminal() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduced) {
      const t = window.setTimeout(() => setStep(profile.terminal.length), 0);
      return () => window.clearTimeout(t);
    }

    let i = 0;
    const reset = window.setTimeout(() => setStep(0), 0);
    const id = window.setInterval(() => {
      i += 1;
      setStep(i);
      if (i >= profile.terminal.length) window.clearInterval(id);
    }, 700);

    return () => {
      window.clearTimeout(reset);
      window.clearInterval(id);
    };
  }, [inView, reduced]);

  return (
    <section ref={ref} className="bg-[var(--ink)] px-5 py-24 md:px-10 md:py-28" aria-label="Interactive terminal storytelling">
      <div className="mx-auto max-w-[820px]">
        <p className="mb-3 text-center text-[11px] tracking-[0.2em] text-white/40 uppercase">Storytelling</p>
        <h2 className="font-display mb-10 text-center text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em]">
          $ identity
        </h2>
        <div className="overflow-hidden border border-white/15 bg-[#0a0c12] shadow-[0_0_0_1px_rgba(72,209,204,0.08)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] tracking-wide text-white/35">kv — zsh</span>
          </div>
          <div className="min-h-[280px] space-y-5 p-5 font-mono text-[13px] leading-relaxed md:p-8 md:text-sm">
            {profile.terminal.slice(0, step).map((line) => (
              <div key={line.cmd}>
                <p>
                  <span className="text-[var(--accent)]">$</span> {line.cmd}
                </p>
                <pre className="mt-1 whitespace-pre-wrap text-white/80">{line.out}</pre>
              </div>
            ))}
            {step < profile.terminal.length && (
              <p className="animate-pulse text-[var(--accent)]">█</p>
            )}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-white/35">Visual storytelling only — not a live shell.</p>
      </div>
    </section>
  );
}
