"use client";

import { useEffect, useState, type KeyboardEvent } from "react";

type Step = {
  title: string;
  tool: string;
  detail: string;
};

// Every step comes from the SmartHire build notes on the resume.
const steps: Step[] = [
  {
    title: "Wake up",
    tool: "node-cron",
    detail: "A scheduler fires at 8 AM every day. Nobody presses a button, so this is where the system stops being a script someone runs and starts being something that runs itself.",
  },
  {
    title: "Discover",
    tool: "JSearch API",
    detail: "It pulls live job listings through the JSearch API, so the pool it judges is today's, not a stored list.",
  },
  {
    title: "Read resume",
    tool: "PDF parsing",
    detail: "The uploaded resume is stored in Cloudinary and its text is extracted from the PDF, ready to be compared with real job descriptions.",
  },
  {
    title: "Judge",
    tool: "Groq · LLaMA 3.3",
    detail: "The model reads the whole job description against the whole resume and returns matched skills, missing skills and a verdict: Apply, Consider or Skip. Meaning, not keyword counting.",
  },
  {
    title: "Rank",
    tool: "Top 5 + cover letter",
    detail: "The five strongest matches are kept. For the number one match, a personalised cover letter is written too.",
  },
  {
    title: "Deliver",
    tool: "Brevo email",
    detail: "Everything lands in the user's inbox as one email. The agent finished its job where the person actually looks.",
  },
  {
    title: "Track",
    tool: "Saved → Rejected",
    detail: "Jobs move through Saved, Applied, Interview, Offer and Rejected, so the search has a memory beyond a single morning.",
  },
];

// Wide layout: a snake. Row one runs left to right, row two comes back right to left.
const W = 210;
const H = 92;
const positions = [
  { x: 10, y: 20 },
  { x: 265, y: 20 },
  { x: 520, y: 20 },
  { x: 775, y: 20 },
  { x: 775, y: 228 },
  { x: 520, y: 228 },
  { x: 265, y: 228 },
];

const links = [
  "M220 66 L265 66",
  "M475 66 L520 66",
  "M730 66 L775 66",
  "M880 112 L880 228",
  "M775 274 L730 274",
  "M520 274 L475 274",
];

export function SmartHireFlow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => setActive((current) => (current + 1) % steps.length), 2600);
    return () => window.clearInterval(id);
  }, [paused, reduced]);

  const pick = (index: number) => {
    setActive(index);
    setPaused(true);
  };

  const onKey = (index: number) => (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      pick(index);
    }
  };

  const step = steps[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="sheet ruled px-4 py-8 sm:px-8 sm:py-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow text-electric">Architecture · one morning, start to finish</p>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
          className="chip transition-colors hover:border-ink"
        >
          {paused ? "▶ Play" : "❚❚ Pause"}
        </button>
      </div>

      {/* wide diagram */}
      <svg viewBox="0 0 1000 340" role="group" aria-label="SmartHire architecture, seven steps" className="mt-6 hidden h-auto w-full lg:block">
        {links.map((d, index) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth={index < active ? 2.5 : 1.6}
            strokeLinecap="round"
            className={`transition-colors duration-500 ${index < active ? "text-electric" : "text-ink/30"} ${
              index === active - 1 && !reduced ? "flow-line" : ""
            }`}
          />
        ))}
        {positions.map((position, index) => {
          const on = index === active;
          const done = index < active;
          return (
            <g
              key={steps[index].title}
              role="button"
              tabIndex={0}
              aria-label={`Step ${index + 1}: ${steps[index].title}`}
              aria-pressed={on}
              onClick={() => pick(index)}
              onKeyDown={onKey(index)}
              className="cursor-pointer outline-none [&:focus-visible>rect]:stroke-electric"
              data-cursor
            >
              <rect
                x={position.x}
                y={position.y}
                width={W}
                height={H}
                rx={3}
                fill={on ? "#1b1a17" : "#fcf8ee"}
                stroke={on ? "#1b1a17" : done ? "#1f4fe0" : "rgba(27,26,23,0.5)"}
                strokeWidth={on ? 2 : 1.5}
                className="transition-all duration-500"
              />
              {on && <rect x={position.x + 6} y={position.y + 6} width={W} height={H} rx={3} fill="none" stroke="#1f4fe0" strokeWidth={2} />}
              <text x={position.x + 16} y={position.y + 28} fontSize={13} fontFamily="var(--font-plex-mono), monospace" fill={on ? "#f4c542" : "#1f4fe0"}>
                {String(index + 1).padStart(2, "0")}
              </text>
              <text x={position.x + 16} y={position.y + 58} fontSize={24} fontFamily="var(--font-playfair), serif" fontWeight={700} fill={on ? "#f6f0e3" : "#1b1a17"}>
                {steps[index].title}
              </text>
              <text x={position.x + 16} y={position.y + 80} fontSize={13} fontFamily="var(--font-plex-mono), monospace" fill={on ? "#f6f0e3" : "#6b655a"}>
                {steps[index].tool}
              </text>
            </g>
          );
        })}
        <text x={20} y={176} fontFamily="var(--font-caveat), cursive" fontSize={26} fill="#1f4fe0">
          starts at 8 AM,
        </text>
        <text x={20} y={204} fontFamily="var(--font-caveat), cursive" fontSize={26} fill="#1f4fe0">
          on its own
        </text>
        <path d="M118 160 C 126 146, 126 130, 118 120" fill="none" stroke="#1f4fe0" strokeWidth={2} strokeLinecap="round" />
        <path d="M109 129 L118 118 L128 127" fill="none" stroke="#1f4fe0" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <text x={20} y={262} fontFamily="var(--font-caveat), cursive" fontSize={26} fill="#e7782f">
          …and ends in
        </text>
        <text x={20} y={290} fontFamily="var(--font-caveat), cursive" fontSize={26} fill="#e7782f">
          your inbox.
        </text>
      </svg>

      {/* tall diagram */}
      <ol className="relative mt-6 lg:hidden">
        <span aria-hidden className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-ink/25" />
        {steps.map((item, index) => {
          const on = index === active;
          return (
            <li key={item.title} className="relative">
              <button
                type="button"
                onClick={() => pick(index)}
                aria-pressed={on}
                className="flex w-full items-center gap-4 py-2.5 text-left"
              >
                <span
                  className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full border-[1.5px] font-mono text-xs transition-all duration-300 ${
                    on
                      ? "scale-110 border-ink bg-ink text-sun"
                      : index < active
                        ? "border-electric bg-electric text-paper"
                        : "border-ink/50 bg-sheet"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className={`display block text-2xl ${on ? "text-electric" : ""}`}>{item.title}</span>
                  <span className="font-mono text-xs text-muted">{item.tool}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="relative mt-8 border-l-4 border-electric bg-paper/70 px-5 py-5 sm:px-7" aria-live="polite">
        <p className="eyebrow text-muted">
          Step {active + 1} of {steps.length}
        </p>
        <p className="display mt-2 text-3xl">{step.title}</p>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink-soft">{step.detail}</p>
      </div>
    </div>
  );
}
