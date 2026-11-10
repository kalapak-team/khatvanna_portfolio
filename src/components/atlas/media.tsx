"use client";

import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type Fit = "cover" | "contain";
type Pos =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center top"
  | "center 18%"
  | "center 22%"
  | "center 28%";

type MediaProps = Omit<ImageProps, "className" | "alt" | "fill"> & {
  alt: string;
  className?: string;
  imgClassName?: string;
  fit?: Fit;
  pos?: Pos;
  overlay?: "none" | "soft" | "strong" | "bottom" | "cinematic";
  rounded?: boolean;
  grayscale?: boolean;
  zoomOnHover?: boolean;
  priority?: boolean;
  sizes?: string;
};

const posClass: Record<Pos, string> = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
  "center top": "object-[center_top]",
  "center 18%": "object-[center_18%]",
  "center 22%": "object-[center_22%]",
  "center 28%": "object-[center_28%]",
};

const overlayClass = {
  none: "",
  soft: "after:absolute after:inset-0 after:bg-black/25 after:content-['']",
  strong: "after:absolute after:inset-0 after:bg-black/45 after:content-['']",
  bottom:
    "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/75 after:via-black/20 after:to-transparent after:content-['']",
  cinematic:
    "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black after:via-black/35 after:to-black/50 after:content-['']",
};

export function Media({
  alt,
  className,
  imgClassName,
  fit = "cover",
  pos = "center",
  overlay = "none",
  rounded = false,
  grayscale = false,
  zoomOnHover = false,
  priority,
  sizes = "100vw",
  src,
  ...rest
}: MediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#111]",
        rounded && "rounded-sm",
        overlayClass[overlay],
        zoomOnHover && "group",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          fit === "cover" ? "object-cover" : "object-contain",
          posClass[pos],
          grayscale && "grayscale",
          zoomOnHover && "transition duration-700 group-hover:scale-105",
          "will-change-transform",
          imgClassName,
        )}
        {...rest}
      />
    </div>
  );
}
