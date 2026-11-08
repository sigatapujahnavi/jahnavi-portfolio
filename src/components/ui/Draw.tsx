"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type DrawProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  immediate?: boolean;
  /** "stroke" traces shapes that use pathLength={1}. "wipe" reveals stretched marks left to right. */
  mode?: "stroke" | "wipe";
};

export function Draw({
  children,
  className = "",
  delay = 0,
  duration = 1100,
  immediate = false,
  mode = "stroke",
}: DrawProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (immediate) {
      const id = window.setTimeout(() => setDrawn(true), 30);
      return () => window.clearTimeout(id);
    }

    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  const vars = { "--delay": `${delay}ms`, "--dur": `${duration}ms` } as CSSProperties;

  // Wipe mode clips with clip-path. The clip lives on an inner node so the observed outer node keeps its size,
  // otherwise the IntersectionObserver would see a zero-width box and never fire.
  if (mode === "wipe") {
    return (
      <span ref={ref} className={className}>
        <span className={`wipe block h-full w-full ${drawn ? "is-drawn" : ""}`} style={vars}>
          {children}
        </span>
      </span>
    );
  }

  return (
    <span ref={ref} className={`draw ${drawn ? "is-drawn" : ""} ${className}`} style={vars}>
      {children}
    </span>
  );
}
