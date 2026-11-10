"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-[var(--ink)]/75 py-3 backdrop-blur-md"
            : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a href="#home" className="focus-ring group flex items-center gap-3" data-cursor="Home">
            <span className="flex h-9 w-9 items-center justify-center border border-white/30 font-display text-sm font-bold transition group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
              KV
            </span>
            <span className="hidden text-sm font-semibold tracking-wide md:inline">KHAT VANNA</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {profile.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring text-[11px] tracking-[0.16em] text-white/70 uppercase transition hover:text-white"
                data-cursor={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="focus-ring text-[11px] tracking-[0.2em] uppercase"
            onClick={() => setOpen(true)}
            data-cursor="Menu"
            aria-expanded={open}
            aria-controls="site-menu"
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-[60] bg-[var(--ink)]"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-full flex-col px-5 py-6 md:px-10">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold">KV</span>
                <button
                  type="button"
                  className="focus-ring text-[11px] tracking-[0.2em] uppercase"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              <nav className="flex flex-1 flex-col justify-center gap-3" aria-label="Mobile">
                {profile.nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-[clamp(2.4rem,10vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.04em]"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              <p className="pb-4 text-sm text-white/45">{profile.contact.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
