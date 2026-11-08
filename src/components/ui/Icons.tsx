const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function MailIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7 L12 13 L20.5 7" />
    </svg>
  );
}

export function PhoneIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 4 H9 L11 9 L8.5 10.8 C9.6 13 11 14.4 13.2 15.5 L15 13 L20 15 V19 C20 19.6 19.6 20 19 20 C10.7 19.6 4.4 13.3 4 5 C4 4.4 4.4 4 5 4 Z" />
    </svg>
  );
}
