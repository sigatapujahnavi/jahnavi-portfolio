"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type CSSProperties, type PointerEvent } from "react";
import { pillars, proof, site } from "@/data/site";
import { Arrow } from "@/components/ui/Arrow";
import { Doodle } from "@/components/ui/Doodle";
import { Scribble } from "@/components/ui/Scribble";

const layer = (sx: number, sy: number) => ({ "--sx": `${sx}px`, "--sy": `${sy}px` }) as CSSProperties;

export function Hero() {
  const root = useRef<HTMLElement>(null);

  const onMove = (event: PointerEvent<HTMLElement>) => {
    const node = root.current;
    if (!node || event.pointerType !== "mouse") return;
    const box = node.getBoundingClientRect();
    node.style.setProperty("--mx", (((event.clientX - box.left) / box.width - 0.5) * 2).toFixed(3));
    node.style.setProperty("--my", (((event.clientY - box.top) / box.height - 0.5) * 2).toFixed(3));
  };

  const onLeave = () => {
    root.current?.style.setProperty("--mx", "0");
    root.current?.style.setProperty("--my", "0");
  };

  return (
    <section
      ref={root}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto max-w-6xl px-5 pt-8 pb-6 sm:px-8 sm:pt-12"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
        <div className="rise relative z-10">
          <div className="note inline-flex -rotate-1 items-center gap-3 px-4 py-2.5">
            <span className="pulse-dot" aria-hidden />
            <p className="eyebrow">Current status: building &amp; exploring</p>
          </div>
          <p className="mt-3 text-sm text-muted">
            {site.currentRole}, {site.location.split(",")[0]} · {site.currentFocus}
          </p>

          <h1 className="mt-9">
            <span className="block font-serif text-sm font-medium tracking-[0.32em] uppercase">{site.name}</span>
            <span className="display mt-4 block text-[3.3rem] sm:text-7xl xl:text-[5.4rem]">
              The{" "}
              <span className="relative inline-block text-electric italic">
                Curious
                <Scribble immediate delay={700} />
              </span>{" "}
              Engineer.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft sm:text-xl">{site.intro}</p>

          <blockquote className="mt-7 flex max-w-lg gap-4">
            <span aria-hidden className="w-1 shrink-0 bg-electric" />
            <p className="hand text-[1.5rem] leading-snug text-ink-soft sm:text-[1.65rem]">{site.signature}</p>
          </blockquote>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
            <Link href="/work" className="btn btn-solid">
              Explore My Work <Arrow />
            </Link>
            <Link href="/thinking" className="btn btn-line">
              Discover My Thinking
            </Link>
            <Link
              href="/contact"
              className="link-arrow inline-flex items-center gap-2 font-semibold underline decoration-electric decoration-2 underline-offset-[6px]"
            >
              Connect With Me <Arrow />
            </Link>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-4 gap-3 border-t border-rule pt-5">
            {proof.map((item) => (
              <div key={item.label}>
                <dt className="font-serif text-2xl font-bold sm:text-3xl">{item.value}</dt>
                <dd className="eyebrow mt-1 text-[0.58rem] leading-snug text-muted">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-none">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/hero-sketch.jpg"
              alt="Pencil sketch of an engineer at her desk, chin on her hand, thinking, beside a laptop, a stack of books and a notebook of diagrams."
              fill
              priority
              sizes="(min-width: 1024px) 560px, 92vw"
              className="photo-mask object-contain"
            />

            <div className="stage-layer absolute top-[1%] left-[47%]" style={layer(-12, -8)}>
              <p className="hand -rotate-3 text-2xl text-electric sm:text-3xl">why this solution?</p>
              <Scribble kind="curl" immediate delay={1200} className="-mt-1 -ml-6 h-12 w-14 -rotate-[28deg] -scale-x-100 text-electric sm:h-14 sm:w-16" />
            </div>

            <div className="stage-layer bob absolute top-[0%] right-[2%] text-electric" style={layer(14, -10)}>
              <Doodle name="bulb" animate delay={700} className="block size-14 sm:size-[4.5rem]" />
            </div>

            <div className="stage-layer absolute top-[23%] left-[56%] hidden text-electric sm:block" style={layer(10, 6)}>
              <Doodle name="flow" animate delay={1000} className="block size-24" />
              <p className="hand -mt-2 text-lg leading-none text-ink-soft">research · compare · build</p>
            </div>

            <div className="stage-layer absolute top-[34%] right-0 hidden sm:block" style={layer(16, 4)}>
              <p className="hand rotate-2 text-2xl leading-tight text-electric">
                what else
                <br />
                could work?
              </p>
            </div>

            <div className="stage-layer absolute -bottom-3 left-[1%]" style={layer(-6, 10)}>
              <p className="note hand -rotate-3 px-4 py-3 text-xl leading-tight sm:text-2xl">
                Obvious route closed?
                <br />
                Find another.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <p className="eyebrow flex items-center justify-between gap-4 text-muted">
          <span className="flex items-center gap-2">
            <Doodle name="pin" className="size-4" strokeWidth={3} />
            {site.location}
          </span>
          <span className="hidden sm:inline">{site.coordinates}</span>
        </p>
        <ul className="mt-3 grid grid-cols-2 border-t border-ink/80 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <li key={pillar.index} className="border-b border-rule lg:border-b-0 lg:border-l lg:first:border-l-0">
              <Link href={pillar.href} className="group flex items-center justify-between gap-3 px-1 py-6 lg:px-6 lg:first:pl-0">
                <span>
                  <span className="font-serif text-2xl font-bold text-electric sm:text-3xl">{pillar.index}</span>
                  <span className="relative mt-1 block text-sm leading-snug font-semibold tracking-[0.04em] uppercase sm:text-[0.8rem]">
                    {pillar.label}
                    <span className="absolute -bottom-1 left-0 block h-0.5 w-0 bg-electric transition-all duration-300 group-hover:w-full" />
                  </span>
                </span>
                <span className="text-ink transition-all duration-300 group-hover:-translate-y-1 group-hover:text-electric">
                  <Doodle name={pillar.doodle} className="size-10 sm:size-12" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
