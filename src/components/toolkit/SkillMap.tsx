"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { Arrow } from "@/components/ui/Arrow";

const nameOf = (slug: string) => projects.find((project) => project.slug === slug)?.name ?? slug;

export function SkillMap() {
  const [selected, setSelected] = useState<string | null>(null);

  const lookup = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const group of skillGroups) for (const skill of group.skills) map.set(skill.name, skill.usedIn ?? []);
    return map;
  }, []);

  const usedIn = selected ? (lookup.get(selected) ?? []) : [];
  const dimming = selected !== null && usedIn.length > 0;

  const isRelated = (name: string) => {
    if (!selected || name === selected) return true;
    const mine = lookup.get(name) ?? [];
    return mine.some((slug) => usedIn.includes(slug));
  };

  const panel = (
    <div className="sheet border-l-4 !border-l-electric px-4 py-4 shadow-lg sm:px-6 lg:py-6" aria-live="polite">
      {selected ? (
        <>
          <p className="eyebrow text-electric">Selected</p>
          <p className="display mt-2 text-3xl">{selected}</p>
          {usedIn.length > 0 ? (
            <>
              <p className="mt-4 font-mono text-[0.7rem] tracking-[0.18em] text-muted uppercase">Used in</p>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 lg:block lg:space-y-1.5">
                {usedIn.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/work/${slug}`}
                      className="link-arrow inline-flex items-center gap-2 font-semibold underline decoration-electric decoration-2 underline-offset-4"
                    >
                      {nameOf(slug)} <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="hand mt-3 hidden text-xl text-electric lg:block">related skills stay lit</p>
            </>
          ) : (
            <p className="mt-4 leading-relaxed text-ink-soft">
              Part of my working knowledge, but not tied to a case file on this site, so I will not pretend otherwise.
            </p>
          )}
          <button type="button" onClick={() => setSelected(null)} className="mt-5 font-mono text-xs tracking-wider text-muted uppercase underline underline-offset-4 hover:text-electric">
            Clear
          </button>
        </>
      ) : (
        <>
          <p className="eyebrow text-electric">Pick a tool</p>
          <p className="hand mt-2 text-2xl leading-tight lg:mt-3 lg:text-3xl">Tap anything. I will show you where it has been used in real projects.</p>
        </>
      )}
    </div>
  );

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-14">
      <div className="sticky top-[4.6rem] z-20 lg:order-2 lg:col-span-4 lg:self-start lg:top-28">{panel}</div>

      <div className="mt-10 space-y-12 lg:order-1 lg:col-span-8 lg:mt-0">
        {skillGroups.map((group, index) => (
          <section key={group.id} aria-labelledby={`g-${group.id}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 border-b-[1.5px] border-ink pb-2">
              <h3 id={`g-${group.id}`} className="display text-3xl sm:text-4xl">
                <span className="mr-3 font-mono text-sm font-normal text-electric">{String(index + 1).padStart(2, "0")}</span>
                {group.title}
              </h3>
              <p className="hand text-xl text-electric sm:text-2xl">{group.hand}</p>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => {
                const on = selected === skill.name;
                const lit = isRelated(skill.name);
                const linked = (skill.usedIn?.length ?? 0) > 0;
                return (
                  <li key={skill.name}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => setSelected(on ? null : skill.name)}
                      data-cursor
                      className={`border-[1.5px] px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                        on
                          ? "border-ink bg-ink text-paper shadow-[3px_3px_0_var(--electric)]"
                          : linked
                            ? "border-ink/70 bg-sheet hover:-translate-y-0.5 hover:border-electric hover:text-electric"
                            : "border-rule bg-transparent hover:border-ink"
                      } ${dimming && !lit ? "opacity-30" : ""}`}
                    >
                      {skill.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
