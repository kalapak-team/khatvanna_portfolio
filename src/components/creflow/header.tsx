"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ShoppingBag, X } from "lucide-react";
import { brand } from "@/data/brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-400 ${
          scrolled || open ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-[72px] md:px-8">
          <a href="#home" className="flex items-center gap-2.5 text-white">
            <span className="relative inline-flex h-5 w-7 items-center">
              <span className="absolute left-0 h-4 w-4 rounded-full border border-white" />
              <span className="absolute left-3 h-4 w-4 rounded-full bg-white" />
            </span>
            <span className="font-display text-[15px] font-semibold tracking-tight">
              {brand.short}
            </span>
          </a>

          <div className="flex items-center gap-5 text-white">
            <button type="button" className="relative hidden items-center sm:flex" aria-label="Cart">
              <ShoppingBag size={18} strokeWidth={1.75} />
              <span className="ml-1 text-xs">0</span>
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="text-xs font-semibold tracking-[0.18em] uppercase"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 text-white"
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute top-5 right-5 md:right-8"
              onClick={() => setOpen(false)}
            >
              <X size={22} />
            </button>
            <nav className="flex h-full flex-col items-center justify-center gap-6">
              {brand.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.45 }}
                  className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
