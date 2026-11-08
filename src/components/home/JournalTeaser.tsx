import Link from "next/link";
import { journal } from "@/data/journal";
import { Arrow } from "@/components/ui/Arrow";
import { Doodle } from "@/components/ui/Doodle";
import { Reveal } from "@/components/ui/Reveal";

const picks = ["youtube", "cobol", "agents"];
const tilt = ["-rotate-[1.4deg]", "rotate-[1deg] lg:mt-12", "-rotate-[0.6deg] lg:mt-4"];

export function JournalTeaser() {
  const entries = picks.map((slug) => journal.find((entry) => entry.slug === slug)).filter((entry) => entry !== undefined);

  return (
    <section aria-labelledby="notes-title" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-electric">Curiosity beyond code</p>
            <h2 id="notes-title" className="display mt-3 max-w-2xl text-4xl sm:text-6xl">
              Questions that took me <span className="text-electric italic">somewhere.</span>
            </h2>
          </div>
          <Link
            href="/journal"
            className="link-arrow inline-flex items-center gap-2 font-semibold underline decoration-electric decoration-2 underline-offset-[6px]"
          >
            Open the notebook <Arrow />
          </Link>
        </div>
      </Reveal>

      <ul className="mt-14 grid gap-8 lg:grid-cols-3">
        {entries.map((entry, index) => (
          <li key={entry.slug}>
            <Reveal delay={index * 120}>
              <Link
                href={`/journal#${entry.slug}`}
                data-cursor
                className={`sheet tape ruled group block px-6 pt-9 pb-7 transition-transform duration-500 hover:-translate-y-1 hover:rotate-0 ${tilt[index]}`}
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="eyebrow text-muted">
                    {entry.topic} · {entry.date}
                  </span>
                  <span className="text-electric">
                    <Doodle name={entry.doodle} animate className="block size-11" />
                  </span>
                </span>
                <span className="mt-5 block font-serif text-2xl leading-snug font-semibold italic">{entry.question}</span>
                <span className="hand mt-5 flex items-center gap-2 text-xl text-electric">
                  read what I found <Arrow className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
