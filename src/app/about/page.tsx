import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { Doodle } from "@/components/ui/Doodle";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";
import { growth, interests, mindset, strengths } from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The mindset, strengths, growth areas and genuine interests of Jahnavi Sigatapu, a research-driven software engineer who asks why before she builds.",
  alternates: { canonical: "/about" },
};

const tilts = ["-rotate-[0.8deg]", "rotate-[0.9deg] lg:mt-10", "-rotate-[0.5deg]", "rotate-[0.7deg] lg:mt-10", "-rotate-[1deg]"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About · the person behind the questions"
        title={
          <>
            Curious first.{" "}
            <span className="relative inline-block text-electric italic">
              Engineer always.
              <Scribble immediate delay={500} />
            </span>
          </>
        }
        hand="based in Thiruvananthapuram"
      />

      <section aria-label="Mindset" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            {mindset.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 90}>
                <p className={index === 0 ? "font-serif text-2xl leading-snug sm:text-[1.9rem]" : "text-lg leading-relaxed text-ink-soft"}>
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
            <div className="sheet tape ruled px-6 pt-10 pb-8">
              <span className="text-electric">
                <Doodle name="bulb" animate className="block size-14" />
              </span>
              <p className="hand mt-4 text-3xl leading-snug">{site.signature}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Quote" className="border-y-[1.5px] border-ink bg-ink py-20 text-paper sm:py-28">
        <Reveal>
          <p className="display mx-auto max-w-5xl px-5 text-center text-4xl sm:px-8 sm:text-6xl lg:text-7xl">
            &ldquo;{site.quote}&rdquo;
          </p>
          <p className="hand mx-auto mt-8 max-w-2xl px-6 text-center text-3xl text-sun">{site.tagline}</p>
        </Reveal>
      </section>

      <section aria-labelledby="strengths" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow text-electric">What I bring</p>
          <h2 id="strengths" className="display mt-3 text-4xl sm:text-6xl">
            Strengths, with receipts.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 80}>
                <div className={`sheet tape h-full px-6 pt-10 pb-8 ${tilts[index]}`}>
                  <p className="hand text-2xl text-ember">{item.hand}</p>
                  <h3 className="display mt-2 text-3xl">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="growth" className="border-y-[1.5px] border-ink bg-sheet/60 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-electric">Honest edges</p>
            <h2 id="growth" className="display mt-3 text-4xl sm:text-5xl">
              Still sharpening.
            </h2>
            <p className="hand mt-4 text-2xl text-electric">naming it is half the work</p>
          </Reveal>
          <ol className="space-y-8 lg:col-span-8">
            {growth.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 90}>
                  <div className="flex gap-5 border-t border-rule pt-6">
                    <span className="font-mono text-sm text-ember">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="display text-2xl sm:text-3xl">{item.title}</h3>
                      <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="interests" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow text-electric">Off the clock, still curious</p>
          <h2 id="interests" className="display mt-3 text-4xl sm:text-6xl">
            What pulls my attention.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {interests.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 70}>
                <h3 className="font-serif text-2xl font-semibold italic">
                  <span className="marker">{item.title}</span>
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal delay={100}>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn btn-solid">
              Connect With Me <Arrow />
            </Link>
            <Link href="/journal" className="btn btn-line">
              Read the field notes
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
