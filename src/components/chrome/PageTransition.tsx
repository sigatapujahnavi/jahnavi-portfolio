"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Every route change draws a blue pen line across the top and lets the new page settle in.
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div key={`sweep-${pathname}`} className="ink-sweep" aria-hidden />
      <div key={pathname} className="page-enter">
        {children}
      </div>
    </>
  );
}
