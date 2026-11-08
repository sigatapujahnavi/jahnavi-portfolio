import type { Metadata } from "next";
import Link from "next/link";
import { Timeline } from "@/components/journey/Timeline";
import { Arrow } from "@/components/ui/Arrow";
import { Draw } from "@/components/ui/Draw";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";
import { milestones, threads } from "@/data/journey";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Jahnavi Sigatapu's career, newest first: C-DAC, Cyepro, Technoji Global and RGUKT Srikakulam, and how she grew from web to mobile to integrations to AI.",
  alternates: { canonical: "/journey" },
};

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        kicker="Engineering journey"
        title={
          <>
            Four stops. One habit:{" "}
            <span className="relative inline-block text-electric italic">
              ask why.
              <Scribble immediate delay={500} />
            </span>
          </>
        }
        lede="Newest first. Today: backend for Dial 112 at C-DAC. Before that, a production app at Cyepro, a team lead role at Technoji Global, and the computer science degree where the questions started."
        hand="latest at the top, scroll back in time ↓"
      />

      <section aria-label="Timeline" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <Timeline />
      </section>

      <section aria-labelledby="threads" className="border-y-[1.5px] border-ink bg-sheet/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-electric">The same four years, as a skill path</p>
            <h2 id="threads" className="display mt-3 max-w-3xl text-4xl sm:text-6xl">
              Web <span className="text-electric">→</span> Mobile <span className="text-electric">→</span> Integrations{" "}
              <span className="text-electric">→</span> AI
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <Draw
              className="pointer-events-none absolute top-[0.9rem] left-0 hidden h-6 w-full text-electric/60 lg:block"
              duration={1800}
            >
              <svg viewBox="0 0 1000 24" preserveAspectRatio="none" className="h-full w-full overflow-visible" aria-hidden>
                <path
                  pathLength={1}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  d="M20 12 C 100 2, 180 22, 260 12 S 420 2, 500 12 S 660 22, 740 12 S 900 4, 985 12"
                />
              </svg>
            </Draw>

            <ol className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {threads.map((thread, index) => (
                <li key={thread.title}>
                  <Reveal delay={index * 120}>
                    <span className="grid size-9 place-items-center rounded-full border-[1.5px] border-ink bg-paper font-mono text-xs">
                      {thread.index}
                    </span>
                    <h3 className="display mt-5 text-4xl">{thread.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{thread.text}</p>
                    <ul className="mt-5 space-y-2">
                      {thread.projects.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="link-arrow inline-flex items-center gap-2 text-sm font-semibold underline decoration-electric decoration-2 underline-offset-4"
                          >
                            {item.label} <Arrow />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section aria-labelledby="numbers" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow text-electric">Numbers I can stand behind</p>
          <h2 id="numbers" className="display mt-3 text-4xl sm:text-5xl">
            Only the ones that are true.
          </h2>
        </Reveal>
        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-3">
          {milestones.map((item, index) => (
            <Reveal key={item.label} delay={index * 70}>
              <div className="border-t-[1.5px] border-ink pt-5">
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="display block text-5xl text-electric sm:text-6xl">{item.value}</span>
                  <span className="mt-3 block max-w-[16rem] leading-snug text-ink-soft">{item.label}</span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>
    </>
  );
}
