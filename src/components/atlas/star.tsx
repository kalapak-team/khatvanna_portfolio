"use client";

/** Precomputed star rays — avoids SSR/client float mismatch */
const RAYS = [
  [200, 20],
  [246.19, 26.54],
  [287.94, 45.58],
  [321.42, 75.58],
  [343.01, 113.97],
  [350.72, 157.94],
  [343.01, 201.91],
  [321.42, 240.3],
  [287.94, 270.3],
  [246.19, 289.34],
  [200, 295.88],
  [153.81, 289.34],
  [112.06, 270.3],
  [78.58, 240.3],
  [56.99, 201.91],
  [49.28, 157.94],
  [56.99, 113.97],
  [78.58, 75.58],
  [112.06, 45.58],
  [153.81, 26.54],
  [200, 20],
  [246.19, 26.54],
  [287.94, 45.58],
  [321.42, 75.58],
] as const;

export function StarGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" aria-hidden>
      {RAYS.map(([x2, y2], i) => (
        <line
          key={i}
          x1="200"
          y1="200"
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="0.7"
        />
      ))}
      <circle cx="200" cy="200" r="9" fill="currentColor" />
      <polygon points="200,12 206,26 194,26" fill="currentColor" />
      <polygon points="200,388 206,374 194,374" fill="currentColor" />
      <polygon points="388,200 374,206 374,194" fill="currentColor" />
      <polygon points="12,200 26,206 26,194" fill="currentColor" />
    </svg>
  );
}
