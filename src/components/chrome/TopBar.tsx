"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav, site, socials } from "@/data/site";

const links = [...nav, { label: "Contact", href: "/contact" }];

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      width="34"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 6 L4 20 L18 34" />
      <path d="M46 6 L60 20 L46 34" />
      <path d="M37 3 L27 37" />
    </svg>
  );
}

export function TopBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [bar, setBar] = useState({ left: 0, width: 0, show: false });
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const active = links.find((link) => pathname === link.href || pathname.startsWith(`${link.href}/`))?.href ?? null;
  const target = hovered ?? active;

  const measure = useCallback(() => {
    const el = target ? refs.current[target] : null;
    if (!el) {
      setBar((previous) => ({ ...previous, show: false }));
      return;
    }
    setBar({ left: el.offsetLeft, width: el.offsetWidth, show: true });
  }, [target]);

  useEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-ink/80 bg-paper/92 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.1rem] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-4" aria-label={`${site.name}, home`}>
          <Mark className="text-electric transition-transform duration-300 group-hover:-rotate-6" />
          <span aria-hidden className="h-7 w-px bg-ink/80" />
          <span className="font-serif text-[0.95rem] font-medium tracking-[0.12em] uppercase sm:text-base">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block" onPointerLeave={() => setHovered(null)}>
          <ul className="relative flex items-center gap-1 pb-1.5">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    ref={(el) => {
                      refs.current[link.href] = el;
                    }}
                    aria-current={isActive ? "page" : undefined}
                    onPointerEnter={() => setHovered(link.href)}
                    onFocus={() => setHovered(link.href)}
                    onBlur={() => setHovered(null)}
                    className={`block px-3 py-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 ${
                      isActive ? "text-electric" : "text-ink hover:text-electric"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-2 w-full">
              <span
                className="absolute top-0 left-0 block h-full text-electric transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{
                  width: bar.width,
                  transform: `translateX(${bar.left}px)`,
                  opacity: bar.show ? 1 : 0,
                }}
              >
                <svg viewBox="0 0 100 8" preserveAspectRatio="none" className="h-full w-full overflow-visible">
                  <path
                    d="M2 5 C 20 1, 34 8, 52 4 S 82 2, 98 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="flex items-center gap-3 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="eyebrow">{open ? "Close" : "Menu"}</span>
          <span aria-hidden className="relative block h-3.5 w-7">
            <span
              className={`absolute left-0 h-0.5 w-full bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 bg-ink transition-all duration-300 ${
                open ? "top-1.5 w-full -rotate-45" : "top-3 w-4"
              }`}
            />
          </span>
        </button>
      </div>
    </header>

    {/* Rendered outside the header: its backdrop-filter would otherwise trap this fixed layer. */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[calc(4.1rem+1px)] bottom-0 z-40 overflow-y-auto bg-paper bg-[linear-gradient(rgba(31,79,224,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(31,79,224,0.075)_1px,transparent_1px)] bg-[size:28px_28px] lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-6xl flex-col justify-between px-5 py-8 sm:px-8">
            <ul className="rise space-y-1">
              {links.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.href ? "page" : undefined}
                    className="group flex items-baseline gap-4 border-b border-rule py-3"
                  >
                    <span className="eyebrow w-6 text-electric">{String(index + 1).padStart(2, "0")}</span>
                    <span
                      className={`display text-4xl sm:text-5xl ${
                        active === link.href ? "text-electric italic" : "group-hover:italic"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="eyebrow text-ink-soft hover:text-electric"
                  {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
