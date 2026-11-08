export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`arrow ${className}`}
      aria-hidden
    >
      <path d="M4 12 H19" />
      <path d="M13 6 L19 12 L13 18" />
    </svg>
  );
}
