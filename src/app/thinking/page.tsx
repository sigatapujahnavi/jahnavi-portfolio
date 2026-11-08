import type { Metadata } from "next";
import Link from "next/link";
import { ProcessDiagram } from "@/components/thinking/ProcessDiagram";
import { Arrow } from "@/components/ui/Arrow";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";
import { investigations, questions } from "@/data/process";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "How Jahnavi Sigatapu works: question, research, compare, experiment, implement, validate, improve. Real investigations behind Shiprocket, LandsTime, push notifications and iOS builds without a Mac.",
  alternates: { canonical: "/thinking" },
};

export default function ThinkingPage() {
  return (
    <>
      <PageHeader
        kicker="Thinking · my process"
        title={
          <>
            Before I build,
            <br />
            <span className="relative inline-block text-electric italic">
              I investigate.
              <Scribble immediate delay={500} />
            </span>
          </>
        }
        lede={site.signature}
        hand="seven steps, and then it starts again"
      />

      <section aria-label="The process" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <ProcessDiagram />
      </section>

      <section aria-labelledby="stories" className="border-y-[1.5px] border-ink bg-sheet/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-electric">Proof, not promises</p>
            <h2 id="stories" className="display mt-3 max-w-3xl text-4xl sm:text-6xl">
              Five times the obvious answer <span className="text-electric italic">wasn&apos;t enough.</span>
            </h2>
          </Reveal>

          <ol className="mt-16 space-y-20 sm:space-y-28">
            {investigations.map((item, index) => (
              <li key={item.id} id={item.id} className="scroll-mt-28">
                <Reveal>
                  <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
                    <div className={`lg:col-span-4 ${index % 2 ? "lg:order-2" : ""}`}>
                      <p className="display text-7xl text-electric/25 sm:text-8xl">{String(index + 1).padStart(2, "0")}</p>
                      <p className="eyebrow mt-2 text-muted">{item.where}</p>
                      <p className="hand mt-5 inline-block -rotate-2 text-2xl text-ember sm:text-3xl">{item.margin}</p>
                    </div>
                    <div className={`lg:col-span-8 ${index % 2 ? "lg:order-1" : ""}`}>
                      <h3 className="display text-3xl sm:text-5xl">{item.title}</h3>
                      <div className="mt-6 space-y-5">
                        {item.body.map((paragraph) => (
                          <p key={paragraph} className="max-w-2xl text-lg leading-relaxed text-ink-soft">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <Link
                        href={item.href}
                        className="link-arrow mt-7 inline-flex items-center gap-2 font-semibold underline decoration-electric decoration-2 underline-offset-[6px]"
                      >
                        See where it landed <Arrow />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="questions" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-electric">The standing questions</p>
            <h2 id="questions" className="display mt-3 text-4xl sm:text-6xl">
              Seven things I <span className="marker">always</span> ask.
            </h2>
            <p className="hand mt-5 text-2xl text-electric">stuck on the first page of every project</p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <ol className="sheet ruled margin-line px-6 py-4 pl-14 sm:px-10 sm:pl-20">
              {questions.map((question, index) => (
                <li key={question} className="flex gap-4 py-[0.38rem] text-lg leading-[1.6rem] sm:text-xl">
                  <span className="absolute left-4 font-mono text-sm text-ember sm:left-7">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-serif font-medium italic">{question}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="display mx-auto max-w-4xl text-4xl sm:text-6xl">{site.tagline}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/work" className="btn btn-solid">
                Explore My Work <Arrow />
              </Link>
              <Link href="/journal" className="btn btn-line">
                Read the field notes
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
