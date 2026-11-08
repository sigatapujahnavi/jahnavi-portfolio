import Link from "next/link";
import { processSteps } from "@/data/process";
import { Arrow } from "@/components/ui/Arrow";
import { Draw } from "@/components/ui/Draw";
import { Reveal } from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";

export function ProcessRibbon() {
  return (
    <section aria-labelledby="process-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-electric">How I work</p>
            <h2 id="process-title" className="display mt-3 text-4xl sm:text-6xl">
              Before I build,
              <br />
              <span className="relative inline-block text-electric italic">
                I investigate.
                <Scribble delay={200} />
              </span>
            </h2>
          </div>
          <Link
            href="/thinking"
            className="link-arrow inline-flex items-center gap-2 font-semibold underline decoration-electric decoration-2 underline-offset-[6px]"
          >
            See the whole process <Arrow />
          </Link>
        </div>
      </Reveal>

      <div className="relative mt-16">
        <Draw className="pointer-events-none absolute top-[1.35rem] left-0 hidden h-6 w-full text-electric/70 lg:block" duration={1800}>
          <svg viewBox="0 0 1000 24" preserveAspectRatio="none" className="h-full w-full overflow-visible" aria-hidden>
            <path
              pathLength={1}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              d="M20 12 C 80 2, 130 22, 190 12 S 300 2, 350 12 S 470 22, 520 12 S 640 2, 690 12 S 810 22, 860 12 S 950 4, 985 12"
            />
          </svg>
        </Draw>

        <ol className="relative grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 90}>
                <Link href="/thinking" className="group block text-center">
                  <span className="mx-auto grid size-11 place-items-center rounded-full border-[1.5px] border-ink bg-paper font-mono text-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-electric group-hover:bg-electric group-hover:text-paper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="display mt-4 block text-xl sm:text-2xl">{step.title}</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal delay={120}>
        <p className="hand mt-12 text-center text-2xl text-ink-soft sm:text-3xl">
          …and then it starts again with a better question.
        </p>
      </Reveal>
    </section>
  );
}
