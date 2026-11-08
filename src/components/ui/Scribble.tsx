import { Draw } from "./Draw";

type ScribbleProps = {
  kind?: "underline" | "double" | "circle" | "curl";
  className?: string;
  delay?: number;
  immediate?: boolean;
};

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

// A hand-drawn mark that sketches itself in. Underline and circle go inside a `relative` element.
export function Scribble({ kind = "underline", className = "", delay = 0, immediate = false }: ScribbleProps) {
  if (kind === "circle") {
    return (
      <Draw
        mode="wipe"
        className={`pointer-events-none absolute -inset-x-3 -inset-y-1 block ${className}`}
        delay={delay}
        immediate={immediate}
        duration={900}
      >
        <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="h-full w-full overflow-visible" aria-hidden>
          <path
            {...common}
            strokeWidth={2.4}
            vectorEffect="non-scaling-stroke"
            d="M34 42 C 18 14, 84 4, 132 8 C 186 12, 200 50, 150 68 C 100 80, 28 72, 16 44 C 12 30, 40 16, 72 14"
          />
        </svg>
      </Draw>
    );
  }

  if (kind === "curl") {
    return (
      <Draw className={`inline-block ${className}`} delay={delay} immediate={immediate} duration={900}>
        <svg viewBox="0 0 120 90" className="h-full w-full overflow-visible" aria-hidden>
          <path pathLength={1} {...common} strokeWidth={2.4} d="M6 10 C 44 -6, 104 20, 98 70" />
          <path pathLength={1} {...common} strokeWidth={2.4} d="M85 58 L98 76 L110 56" />
        </svg>
      </Draw>
    );
  }

  return (
    <Draw
      mode="wipe"
      className={`pointer-events-none absolute inset-x-0 -bottom-[0.14em] block h-[0.3em] w-full ${className}`}
      delay={delay}
      immediate={immediate}
      duration={900}
    >
      <svg viewBox="0 0 200 14" preserveAspectRatio="none" className="h-full w-full overflow-visible" aria-hidden>
        <path
          {...common}
          strokeWidth={3}
          vectorEffect="non-scaling-stroke"
          d="M3 9 C 30 3, 52 13, 85 7 S 150 4, 197 8"
        />
        {kind === "double" && (
          <path
            {...common}
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
            d="M14 13 C 60 9, 120 14, 188 11"
          />
        )}
      </svg>
    </Draw>
  );
}
