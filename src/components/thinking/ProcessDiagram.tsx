"use client";

import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { processSteps } from "@/data/process";
import { Arrow } from "@/components/ui/Arrow";

export function ProcessDiagram() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  const onKey = (event: KeyboardEvent) => {
    const last = processSteps.length - 1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setActive((value) => (value === last ? 0 : value + 1));
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setActive((value) => (value === 0 ? last : value - 1));
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="The seven steps of how I work"
        onKeyDown={onKey}
        className="relative grid grid-cols-4 gap-x-1 gap-y-5 sm:grid-cols-7 sm:gap-2"
      >
        <span aria-hidden className="absolute top-[2.3rem] right-[7%] left-[7%] hidden h-px bg-ink/25 sm:block" />
        <span
          aria-hidden
          className="absolute top-[2.3rem] left-[7%] hidden h-[3px] bg-electric transition-all duration-700 ease-out sm:block"
          style={{ width: `${(active / (processSteps.length - 1)) * 86}%` }}
        />
        {processSteps.map((item, index) => {
          const on = index === active;
          const done = index < active;
          return (
            <button
              key={item.title}
              role="tab"
              id={`step-tab-${index}`}
              aria-selected={on}
              aria-controls="step-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(index)}
              data-cursor
              className="group relative flex flex-col items-center gap-2 py-1 text-center sm:gap-3 sm:py-2"
            >
              <span
                className={`relative z-10 grid size-[2.9rem] shrink-0 sm:size-[3.4rem] place-items-center rounded-full border-[1.5px] font-mono text-sm transition-all duration-300 ${
                  on
                    ? "scale-110 border-ink bg-ink text-sun shadow-[4px_4px_0_var(--electric)]"
                    : done
                      ? "border-electric bg-electric text-paper"
                      : "border-ink/60 bg-paper group-hover:-translate-y-1 group-hover:border-electric"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`display text-[0.95rem] transition-colors sm:text-xl lg:text-2xl ${on ? "text-electric" : ""}`}>{item.title}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="step-panel"
        aria-labelledby={`step-tab-${active}`}
        key={active}
        className="page-turn sheet ruled tape mt-12 grid gap-8 px-6 pt-12 pb-9 sm:px-10 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-7">
          <p className="eyebrow text-electric">
            Step {active + 1} · {step.title}
          </p>
          <p className="hand mt-4 text-3xl text-electric sm:text-4xl">{step.ask}</p>
          <p className="mt-6 text-lg leading-[2rem] text-ink-soft">{step.meaning}</p>
        </div>
        <aside className="lg:col-span-5">
          <div className="note -rotate-1 px-5 py-5">
            <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase">For example · {step.example.where}</p>
            <p className="hand mt-3 text-2xl leading-snug">{step.example.text}</p>
            {step.example.href && (
              <Link href={step.example.href} className="link-arrow mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
                See it in context <Arrow />
              </Link>
            )}
          </div>
        </aside>
      </div>

      <p className="hand mt-8 text-center text-2xl text-ink-soft">use the arrow keys, or tap a step</p>
    </div>
  );
}
