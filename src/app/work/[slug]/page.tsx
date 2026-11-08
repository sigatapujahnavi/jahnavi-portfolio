import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SmartHireFlow } from "@/components/work/SmartHireFlow";
import { Arrow } from "@/components/ui/Arrow";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";
import { Draw } from "@/components/ui/Draw";
import { getNeighbours, getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.summary} ${project.kind}.`,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: `${project.name} · Jahnavi Sigatapu`, description: project.summary, images: [project.image] },
  };
}

function Check() {
  return (
    <Draw className="mt-1.5 inline-block size-6 shrink-0 text-electric" duration={700}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-full w-full" aria-hidden>
        <path pathLength={1} d="M3 13 C 6 15, 8 18, 9 20 C 12 11, 16 6, 22 3" />
      </svg>
    </Draw>
  );
}

function CaseSkeleton() {
  return (
    <div aria-busy="true" className="mx-auto max-w-6xl px-5 pt-14 pb-32 sm:px-8">
      <p className="eyebrow text-electric">Opening the case file…</p>
      <div className="mt-6 h-16 w-2/3 max-w-xl animate-pulse bg-ink/10" />
      <div className="mt-6 h-5 w-full max-w-2xl animate-pulse bg-ink/10" />
      <div className="mt-3 h-5 w-5/6 max-w-xl animate-pulse bg-ink/10" />
    </div>
  );
}

export default function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<CaseSkeleton />}>
      <CaseStudy params={params} />
    </Suspense>
  );
}

async function CaseStudy({ params }: { params: PageProps<"/work/[slug]">["params"] }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { previous, next } = getNeighbours(project.slug);

  return (
    <article>
      <header className="mx-auto max-w-6xl px-5 pt-10 pb-14 sm:px-8 sm:pt-14 sm:pb-20">
        <Link href="/work" className="link-arrow inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted uppercase hover:text-electric">
          <span className="rotate-180">
            <Arrow />
          </span>
          All case files
        </Link>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-12">
          <div className="rise lg:col-span-6">
            <p className="eyebrow text-electric">
              Case file {project.number} · {project.context}
            </p>
            <h1 className="display mt-4 text-[3.1rem] sm:text-7xl lg:text-[5.2rem]">
              <span className="relative inline-block">
                {project.name}
                <Scribble kind="double" immediate delay={500} className="text-electric" />
              </span>
            </h1>
            <p className="eyebrow mt-5 text-muted">{project.kind}</p>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">{project.intro}</p>
            <p className="note hand mt-8 inline-block -rotate-1 px-4 py-2.5 text-2xl">{project.status}</p>
          </div>

          <div className="lg:col-span-6">
            <Parallax speed={0.04}>
              <div className="sheet tape rotate-[1.3deg] p-3 sm:p-4">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1024}
                  height={768}
                  priority
                  sizes="(min-width: 1024px) 540px, 92vw"
                  className="h-auto w-full bg-sheet"
                />
              </div>
            </Parallax>
          </div>
        </div>
      </header>

      <section aria-label="Key facts" className="border-y-[1.5px] border-ink bg-sheet/60">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 sm:px-8 lg:grid-cols-4">
          {project.facts.map((fact) => (
            <div key={fact.label} className="px-1 py-7 sm:px-5 lg:border-l lg:border-rule lg:first:border-l-0">
              <dt className="sr-only">{fact.label}</dt>
              <dd>
                <span className="display block text-3xl sm:text-4xl">{fact.value}</span>
                <span className="mt-2 block font-mono text-[0.72rem] tracking-wide text-muted uppercase">{fact.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="built" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-electric">01 · The build</p>
            <h2 id="built" className="display mt-3 text-4xl sm:text-5xl">
              What I built
            </h2>
            <p className="hand mt-4 text-2xl text-electric">the parts I can vouch for</p>
          </Reveal>
          <ul className="space-y-6 lg:col-span-8">
            {project.built.map((item, index) => (
              <li key={item}>
                <Reveal delay={index * 50}>
                  <div className="flex gap-4">
                    <Check />
                    <p className="text-lg leading-relaxed text-ink-soft">{item}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.howItWorks === "smarthire" && (
        <section aria-labelledby="how" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
          <Reveal>
            <p className="eyebrow text-electric">02 · How it works</p>
            <h2 id="how" className="display mt-3 max-w-3xl text-4xl sm:text-5xl">
              One morning, <span className="text-electric italic">no human involved.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft">
              Tap a step, or let it play. Each node is a real piece of the production system.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10">
              <SmartHireFlow />
            </div>
          </Reveal>
        </section>
      )}

      {project.investigations.length > 0 && (
        <section aria-labelledby="investigated" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
          <Reveal>
            <p className="eyebrow text-electric">{project.howItWorks ? "03" : "02"} · The research</p>
            <h2 id="investigated" className="display mt-3 text-4xl sm:text-5xl">
              What I investigated
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {project.investigations.map((item, index) => (
              <Reveal key={item.question} delay={index * 100}>
                <div
                  className={`sheet tape ruled h-full px-6 pt-10 pb-8 sm:px-8 ${index % 2 === 0 ? "-rotate-[0.7deg]" : "rotate-[0.7deg] lg:mt-8"}`}
                >
                  <p className="font-serif text-2xl leading-snug font-semibold italic sm:text-3xl">{item.question}</p>
                  <p className="mt-5 text-lg leading-[2rem] text-ink-soft">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {project.note && (
            <Reveal delay={150}>
              <Link
                href={project.note.href}
                className="link-arrow hand mt-12 inline-flex items-center gap-3 text-2xl text-electric underline decoration-2 underline-offset-[6px]"
              >
                {project.note.label} <Arrow />
              </Link>
            </Reveal>
          )}
        </section>
      )}

      <section aria-labelledby="stack" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid gap-10 border-t-[1.5px] border-ink pt-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-electric">Tools on the table</p>
            <h2 id="stack" className="display mt-3 text-4xl sm:text-5xl">
              Stack
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-electric">See it for yourself</p>
            {project.links.length > 0 ? (
              <ul className="mt-5 space-y-3">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow display inline-flex items-center gap-3 text-3xl underline decoration-electric decoration-2 underline-offset-[8px] transition-colors hover:text-electric"
                    >
                      {link.label} <Arrow />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                This one is a client or in-house product, so there is no public repository to link. I am happy to walk through it on a call.
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <nav aria-label="Other case files" className="border-t-[1.5px] border-ink bg-sheet/60">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-2">
          <Link href={`/work/${previous.slug}`} data-cursor className="group border-b border-rule px-5 py-10 transition-colors hover:bg-sun/20 sm:border-r sm:border-b-0 sm:px-8">
            <span className="eyebrow text-muted">← Previous · {previous.number}</span>
            <span className="display mt-3 block text-3xl transition-transform duration-300 group-hover:-translate-x-1 sm:text-4xl">{previous.name}</span>
          </Link>
          <Link href={`/work/${next.slug}`} data-cursor className="group px-5 py-10 text-left transition-colors hover:bg-sun/20 sm:px-8 sm:text-right">
            <span className="eyebrow text-muted">Next · {next.number} →</span>
            <span className="display mt-3 block text-3xl transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">{next.name}</span>
          </Link>
        </div>
      </nav>
    </article>
  );
}
