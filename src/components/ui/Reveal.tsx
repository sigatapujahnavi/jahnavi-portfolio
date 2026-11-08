"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type State = "shown" | "waiting" | "revealed";

// Content renders visible. Only blocks that start below the fold are hidden, then eased in once.
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("shown");

  useEffect(() => {
    const node = ref.current;
    if (!node || node.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    setState("waiting");
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stateClass = state === "shown" ? "" : state === "waiting" ? "reveal" : "reveal is-visible";

  return (
    <div
      ref={ref}
      className={`${stateClass} ${className}`}
      style={{ "--rd": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
