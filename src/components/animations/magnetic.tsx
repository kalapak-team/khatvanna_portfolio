"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import {
  useRef,
  type MouseEvent,
  type ReactNode,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });
  const reduced = useReducedMotion();

  const onMove = (e: MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Magnetic>
      <button
        className={cn(
          "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
          variant === "primary" &&
            "bg-[var(--accent)] text-white hover:bg-[color-mix(in_srgb,var(--accent)_88%,white)]",
          variant === "ghost" &&
            "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </Magnetic>
  );
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
};

export function MagneticLink({
  children,
  className,
  variant = "primary",
  ...props
}: LinkProps) {
  return (
    <Magnetic>
      <a
        className={cn(
          "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
          variant === "primary" &&
            "bg-[var(--accent)] text-white hover:bg-[color-mix(in_srgb,var(--accent)_88%,white)]",
          variant === "ghost" &&
            "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    </Magnetic>
  );
}
