"use client";

import { useEffect, useRef } from "react";

// A soft ink ring that trails the pointer and swells over anything clickable. Fine pointers only.
export function CursorDot() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ringEl = ring.current;
    const dotEl = dot.current;
    if (!ringEl || !dotEl) return;
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;
    let visible = false;

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ringEl.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = Math.abs(x - rx) + Math.abs(y - ry) > 0.2 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        rx = x;
        ry = y;
        ringEl.classList.add("on");
        dotEl.classList.add("on");
      }
      dotEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      const hot = (event.target as Element | null)?.closest?.("a, button, [data-cursor]");
      ringEl.classList.toggle("big", Boolean(hot));
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      visible = false;
      ringEl.classList.remove("on", "big");
      dotEl.classList.remove("on");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}
