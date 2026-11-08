"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";
import { Arrow } from "@/components/ui/Arrow";

type Filter = "all" | "mobile" | "web" | "ai";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "ai", label: "AI & ML" },
];

function parseFilter(value: string | null): Filter {
  return value === "mobile" || value === "web" || value === "ai" ? value : "all";
}

export function ProjectIndex() {
  const params = useSearchParams();
  return <IndexList filter={parseFilter(params.get("filter"))} />;
}

export function IndexList({ filter }: { filter: Filter }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  const active = projects.find((project) => project.slug === hovered);

  function follow(event: MouseEvent) {
    const node = preview.current;
    if (!node) return;
    const width = 272;
    const height = 330;
    const left = event.clientX + 32 + width > window.innerWidth ? event.clientX - 32 - width : event.clientX + 32;
    const top = Math.min(Math.max(event.clientY - height / 2, 84), window.innerHeight - height - 16);
    node.style.transform = `translate3d(${left}px, ${top}px, 0)`;
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <nav aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map((item) => {
            const on = item.id === filter;
            return (
              <Link
                key={item.id}
                href={item.id === "all" ? "/work" : `/work?filter=${item.id}`}
                replace
                scroll={false}
                aria-current={on ? "true" : undefined}
                className={`border-[1.5px] px-4 py-2 font-mono text-xs tracking-wider uppercase transition-colors ${
                  on ? "border-ink bg-ink text-paper" : "border-rule hover:border-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="eyebrow text-muted" aria-live="polite">
          Showing {visible.length} of {projects.length}
        </p>
      </div>

      <ul className="mt-8 border-t-[1.5px] border-ink" onMouseMove={follow} onMouseLeave={() => setHovered(null)}>
        {visible.map((project) => (
          <li key={project.slug} className="border-b border-rule">
            <Link
              href={`/work/${project.slug}`}
              data-cursor
              onMouseEnter={() => setHovered(project.slug)}
              onFocus={() => setHovered(null)}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-1 py-6 transition-colors hover:bg-sun/15 sm:gap-x-8 sm:py-8 md:grid-cols-[4rem_1fr_16rem_auto]"
            >
              <span className="font-mono text-sm text-muted transition-colors group-hover:text-electric">{project.number}</span>
              <span className="min-w-0">
                <span className="display block text-3xl transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl">
                  {project.name}
                </span>
                <span className="mt-2 block text-ink-soft md:hidden">{project.summary}</span>
              </span>
              <span className="hidden md:block">
                <span className="eyebrow block text-electric">{project.kind}</span>
                <span className="mt-2 block text-sm text-muted">{project.context}</span>
              </span>
              <Image
                src={project.image}
                alt=""
                width={96}
                height={72}
                className="photo-mask h-14 w-[4.5rem] object-cover md:hidden"
              />
              <span className="hidden text-electric md:block">
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={preview}
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 z-40 hidden w-[17rem] transition-opacity duration-200 [@media(hover:hover)]:lg:block ${
          active ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "translate3d(-999px, -999px, 0)" }}
      >
        {active && (
          <div className="sheet tape -rotate-2 p-2">
            <Image src={active.image} alt="" width={544} height={408} className="h-auto w-full bg-sheet" />
            <p className="hand px-1 pt-2 text-xl text-electric">{active.summary.split(".")[0]}.</p>
          </div>
        )}
      </div>
    </div>
  );
}
