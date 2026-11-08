"use client";

import { useSyncExternalStore, type KeyboardEvent } from "react";
import { journal } from "@/data/journal";
import { Arrow } from "@/components/ui/Arrow";
import { Doodle } from "@/components/ui/Doodle";

function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

const readHash = () => window.location.hash.slice(1);
const serverHash = () => "";

function Part({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h4 className="eyebrow text-electric">{label}</h4>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function Notebook() {
  const hash = useSyncExternalStore(subscribe, readHash, serverHash);
  const fallback = journal[0].slug;
  const current = journal.some((entry) => entry.slug === hash) ? hash : fallback;

  const select = (slug: string) => {
    window.history.replaceState(null, "", `#${slug}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  const onKey = (event: KeyboardEvent) => {
    const index = journal.findIndex((entry) => entry.slug === current);
    let nextIndex = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (index + 1) % journal.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (index - 1 + journal.length) % journal.length;
    else return;
    event.preventDefault();
    select(journal[nextIndex].slug);
    document.getElementById(`tab-${journal[nextIndex].slug}`)?.focus();
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="min-w-0 lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow text-muted">Contents · {journal.length} entries</p>
          <div
            role="tablist"
            aria-label="Field notes"
            aria-orientation="vertical"
            onKeyDown={onKey}
            className="no-scrollbar -mx-5 mt-4 flex gap-3 overflow-x-auto px-5 pb-3 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t-[1.5px] lg:border-ink lg:px-0 lg:pb-0"
          >
            {journal.map((entry, index) => {
              const on = entry.slug === current;
              return (
                <button
                  key={entry.slug}
                  id={`tab-${entry.slug}`}
                  role="tab"
                  aria-selected={on}
                  aria-controls={`panel-${entry.slug}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => select(entry.slug)}
                  data-cursor
                  className={`group flex shrink-0 items-center gap-4 border-[1.5px] px-4 py-3 text-left transition-colors lg:border-0 lg:border-b lg:px-2 lg:py-4 ${
                    on ? "border-ink bg-ink text-paper lg:bg-sun/30 lg:text-ink" : "border-rule hover:border-ink lg:border-rule lg:hover:bg-sun/15"
                  }`}
                >
                  <span className={`font-mono text-xs ${on ? "text-sun lg:text-electric" : "text-muted"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`size-9 shrink-0 ${on ? "text-sun lg:text-electric" : "text-electric"}`}>
                    <Doodle name={entry.doodle} className="size-9" />
                  </span>
                  <span className="min-w-0">
                    <span className="display block text-xl whitespace-nowrap lg:whitespace-normal">{entry.topic}</span>
                    <span className={`block font-mono text-[0.68rem] tracking-wide uppercase ${on ? "text-paper/70 lg:text-muted" : "text-muted"}`}>
                      {entry.date}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="min-w-0 lg:col-span-8">
        {journal.map((entry) => (
          <article
            key={entry.slug}
            id={entry.slug}
            role="tabpanel"
            aria-labelledby={`tab-${entry.slug}`}
            hidden={entry.slug !== current}
            className="page-turn sheet ruled tape scroll-mt-28 px-6 pt-12 pb-10 sm:px-10"
          >
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] tracking-[0.18em] text-muted uppercase">
              <span className="text-electric">{entry.topic}</span>
              <span aria-hidden>·</span>
              <span>{entry.date}</span>
              <span aria-hidden>·</span>
              <span>{entry.origin}</span>
            </p>

            <h3 className="mt-5 font-serif text-3xl leading-[1.15] font-semibold italic sm:text-[2.6rem]">{entry.question}</h3>

            <Part label="Why it caught me">
              <p className="text-lg leading-[2rem] text-ink-soft">{entry.why}</p>
            </Part>

            <Part label="What I investigated">
              <ul className="space-y-2">
                {entry.investigated.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-[2rem] text-ink-soft">
                    <span aria-hidden className="mt-[0.7rem] block size-2 shrink-0 rotate-45 bg-electric" />
                    {item}
                  </li>
                ))}
              </ul>
            </Part>

            <Part label="What I learned">
              <ul className="space-y-2">
                {entry.learned.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-[2rem]">
                    <span aria-hidden className="hand text-2xl text-ember">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Part>

            <div className="note mt-12 -rotate-[0.8deg] px-6 py-6">
              <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase">Technical takeaway</p>
              <p className="hand mt-2 text-[1.7rem] leading-snug sm:text-3xl">{entry.takeaway}</p>
            </div>

            {entry.post ? (
              <a
                href={entry.post}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-8 inline-flex items-center gap-2 font-semibold underline decoration-electric decoration-2 underline-offset-[6px]"
              >
                Read the original post on LinkedIn <Arrow />
              </a>
            ) : (
              <p className="hand mt-8 text-xl text-muted">Written from production work, not a public post.</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
