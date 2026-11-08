import type { ReactNode } from "react";
import type { DoodleName } from "@/types/site";
import { Draw } from "./Draw";

type DoodleProps = {
  name: DoodleName;
  className?: string;
  animate?: boolean;
  delay?: number;
  strokeWidth?: number;
};

const p = { pathLength: 1 } as const;

const shapes: Record<DoodleName, ReactNode> = {
  bulb: (
    <>
      <path {...p} d="M32 8 C 21 8, 15 16, 15 25 C 15 32, 20 36, 23 41 L23 46 L41 46 L41 41 C 44 36, 49 32, 49 25 C 49 16, 43 8, 32 8 Z" />
      <path {...p} d="M25 52 L39 52" />
      <path {...p} d="M28 57 L36 57" />
      <path {...p} d="M6 12 L10 15" />
      <path {...p} d="M58 12 L54 15" />
      <path {...p} d="M3 28 L8 28" />
      <path {...p} d="M61 28 L56 28" />
    </>
  ),
  flow: (
    <>
      <rect {...p} x="3" y="22" width="16" height="16" rx="2" />
      <rect {...p} x="24" y="22" width="16" height="16" rx="2" />
      <rect {...p} x="45" y="22" width="16" height="16" rx="2" />
      <path {...p} d="M19 30 L24 30" />
      <path {...p} d="M40 30 L45 30" />
    </>
  ),
  phone: (
    <>
      <rect {...p} x="18" y="6" width="28" height="52" rx="5" />
      <path {...p} d="M28 12 L36 12" />
      <circle {...p} cx="32" cy="51" r="2" />
      <path {...p} d="M24 24 L40 24" />
      <path {...p} d="M24 31 L36 31" />
    </>
  ),
  pin: (
    <>
      <path {...p} d="M32 58 C 32 58, 14 40, 14 26 C 14 16, 22 8, 32 8 C 42 8, 50 16, 50 26 C 50 40, 32 58, 32 58 Z" />
      <circle {...p} cx="32" cy="26" r="6" />
    </>
  ),
  bell: (
    <>
      <path {...p} d="M32 8 C 22 8, 18 16, 18 26 L18 38 L12 46 L52 46 L46 38 L46 26 C 46 16, 42 8, 32 8 Z" />
      <path {...p} d="M26 52 C 28 58, 36 58, 38 52" />
      <path {...p} d="M32 3 L32 8" />
    </>
  ),
  layers: (
    <>
      <ellipse {...p} cx="32" cy="35" rx="22" ry="22" />
      <ellipse {...p} cx="32" cy="35" rx="14" ry="17" />
      <ellipse {...p} cx="32" cy="35" rx="7" ry="11" />
      <path {...p} d="M32 13 C 30 8, 35 5, 37 2" />
    </>
  ),
  bank: (
    <>
      <path {...p} d="M6 24 L32 8 L58 24 Z" />
      <path {...p} d="M14 28 L14 48" />
      <path {...p} d="M26 28 L26 48" />
      <path {...p} d="M38 28 L38 48" />
      <path {...p} d="M50 28 L50 48" />
      <path {...p} d="M6 54 L58 54" />
    </>
  ),
  video: (
    <>
      <rect {...p} x="6" y="12" width="52" height="36" rx="4" />
      <path {...p} d="M26 22 L42 30 L26 38 Z" />
      <path {...p} d="M14 56 L50 56" />
    </>
  ),
  window: (
    <>
      <rect {...p} x="6" y="10" width="52" height="44" rx="3" />
      <path {...p} d="M6 22 L58 22" />
      <circle {...p} cx="13" cy="16" r="1.5" />
      <circle {...p} cx="19" cy="16" r="1.5" />
      <path {...p} d="M14 32 L34 32" />
      <path {...p} d="M14 40 L26 40" />
    </>
  ),
  loop: (
    <>
      <path {...p} d="M12 32 C 12 18, 24 10, 36 12 L44 14" />
      <path {...p} d="M38 6 L45 14 L36 20" />
      <path {...p} d="M52 32 C 52 46, 40 54, 28 52 L20 50" />
      <path {...p} d="M26 58 L19 50 L28 44" />
    </>
  ),
  spark: (
    <path {...p} d="M32 4 L36 28 L60 32 L36 36 L32 60 L28 36 L4 32 L28 28 Z" />
  ),
  laptop: (
    <>
      <path {...p} d="M12 14 L52 14 L52 40 L12 40 Z" />
      <path {...p} d="M6 46 L58 46 L52 40 L12 40 Z" />
      <path {...p} d="M25 22 L20 27 L25 32" />
      <path {...p} d="M39 22 L44 27 L39 32" />
    </>
  ),
  agent: (
    <>
      <circle {...p} cx="32" cy="32" r="6" />
      <path {...p} d="M32 8 A 24 24 0 0 1 56 32" />
      <path {...p} d="M32 56 A 24 24 0 0 1 8 32" />
      <circle {...p} cx="56" cy="32" r="3" />
      <circle {...p} cx="8" cy="32" r="3" />
      <path {...p} d="M32 14 L32 20" />
      <path {...p} d="M32 44 L32 50" />
    </>
  ),
  book: (
    <>
      <path {...p} d="M8 12 L30 16 L30 54 L8 50 Z" />
      <path {...p} d="M56 12 L34 16 L34 54 L56 50 Z" />
      <path {...p} d="M14 24 L24 26" />
      <path {...p} d="M14 32 L24 34" />
    </>
  ),
  magnifier: (
    <>
      <circle {...p} cx="26" cy="26" r="16" />
      <path {...p} d="M38 38 L56 56" />
      <path {...p} d="M18 24 C 20 18, 26 16, 30 17" />
    </>
  ),
  brackets: (
    <>
      <path {...p} d="M22 14 L8 32 L22 50" />
      <path {...p} d="M42 14 L56 32 L42 50" />
      <path {...p} d="M37 10 L27 54" />
    </>
  ),
};

export function Doodle({ name, className = "size-12", animate = false, delay = 0, strokeWidth = 2 }: DoodleProps) {
  const svg = (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={animate ? "h-full w-full" : className}
      aria-hidden
    >
      {shapes[name]}
    </svg>
  );

  if (!animate) return svg;

  return (
    <Draw className={`inline-block ${className}`} delay={delay} duration={900}>
      {svg}
    </Draw>
  );
}
