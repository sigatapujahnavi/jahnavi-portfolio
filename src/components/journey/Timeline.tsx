"use client";

import { useEffect, useRef } from "react";
import { stops } from "@/data/journey";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  const root = useRef<HTMLOListElement>(null);
  const fill = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const list = root.current;
    const bar = fill.current;
    if (!list || !bar) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const box = list.getBoundingClientRect();
      const reached = window.innerHeight * 0.6 - box.top;
      const ratio = Math.min(1, Math.max(0, reached / box.height));
      bar.style.transform = `scaleY(${ratio.toFixed(4)})`;
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
  }, []);

  return (
    <ol ref={root} className="relative">
      <span aria-hidden className="absolute top-2 bottom-2 left-[0.95rem] w-px bg-ink/20 lg:left-1/2" />
      <span
        ref={fill}
        aria-hidden
        className="absolute top-2 bottom-2 left-[0.95rem] w-[3px] -translate-x-[1px] origin-top bg-electric lg:left-1/2"
        style={{ transform: "scaleY(0)" }}
      />

      {stops.map((stop, index) => {
        const right = index % 2 === 1;
        return (
          <li key={stop.org} className="relative pb-16 pl-12 last:pb-0 sm:pb-24 lg:grid lg:grid-cols-2 lg:gap-24 lg:pl-0">
            <span
              aria-hidden
              className={`absolute top-1.5 left-0 z-10 grid size-8 place-items-center rounded-full border-[1.5px] bg-paper lg:left-1/2 lg:-translate-x-1/2 ${
                stop.current ? "border-electric" : "border-ink"
              }`}
            >
              <span className={`size-3 rounded-full ${stop.current ? "pulse-dot !size-3" : "bg-ink"}`} />
            </span>

            <Reveal className={right ? "lg:col-start-2" : "lg:col-start-1 lg:text-right"}>
              <p className="eyebrow text-electric">
                {stop.period}
                {stop.current && <span className="note ml-3 inline-block -rotate-2 px-2 py-0.5 text-ink">now</span>}
              </p>
              <h3 className="display mt-3 text-3xl sm:text-5xl">{stop.org}</h3>
              <p className="mt-2 font-serif text-xl italic">{stop.title}</p>
              <p className="eyebrow mt-2 text-muted">{stop.place}</p>

              <ul className={`mt-6 space-y-3 ${right ? "" : "lg:ml-auto"} max-w-xl`}>
                {stop.points.map((point) => (
                  <li key={point} className={`flex gap-3 text-ink-soft ${right ? "" : "lg:flex-row-reverse"}`}>
                    <span aria-hidden className="mt-[0.62rem] block size-1.5 shrink-0 rotate-45 bg-electric" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="hand mt-6 text-2xl text-ember sm:text-3xl">{stop.shift}</p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
