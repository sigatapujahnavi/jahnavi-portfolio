"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

// A gentle vertical drift tied to scroll. Measures the parent, so its own transform never feeds back.
export function Parallax({ children, speed = 0.06, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    const anchor = node?.parentElement;
    if (!node || !anchor) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const box = anchor.getBoundingClientRect();
      if (box.bottom < -200 || box.top > window.innerHeight + 200) return;
      const offset = (box.top + box.height / 2 - window.innerHeight / 2) * speed;
      node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
