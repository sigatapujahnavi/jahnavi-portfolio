// Runs once per full page load, pure CSS, and lifts away by itself. It never waits on JavaScript.
export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="flex flex-col items-center gap-5">
        <svg
          className="mark text-electric"
          viewBox="0 0 120 64"
          width="120"
          height="64"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path pathLength={1} d="M34 12 L10 32 L34 52" />
          <path pathLength={1} d="M86 12 L110 32 L86 52" />
          <path pathLength={1} d="M70 6 L50 58" />
        </svg>
        <p className="hand text-3xl text-ink">opening the notebook…</p>
        <span className="bar block h-0.5 w-40 bg-ink" />
      </div>
    </div>
  );
}
