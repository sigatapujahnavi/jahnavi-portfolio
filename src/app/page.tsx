import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { JournalTeaser } from "@/components/home/JournalTeaser";
import { ProcessRibbon } from "@/components/home/ProcessRibbon";
import { FeaturedCase } from "@/components/work/FeaturedCase";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const featured = projects.filter((project) => project.featured);

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Software engineer",
  description: site.description,
  email: site.email,
  sameAs: [site.linkedin, site.github],
  knowsAbout: ["React Native", "Full-stack development", "Backend systems", "LLM applications", "AI agents"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <Hero />
      <ProcessRibbon />

      <section aria-labelledby="work-title" className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-electric">Selected case files</p>
              <h2 id="work-title" className="display mt-3 text-4xl sm:text-6xl">
                Work, with the reasoning left in.
              </h2>
            </div>
            <Link
              href="/work"
              className="link-arrow inline-flex items-center gap-2 font-semibold underline decoration-electric decoration-2 underline-offset-[6px]"
            >
              All nine case files <Arrow />
            </Link>
          </div>
        </Reveal>
        <div className="mt-16 space-y-24 sm:space-y-32">
          {featured.map((project, index) => (
            <FeaturedCase key={project.slug} project={project} flip={index % 2 === 1} />
          ))}
        </div>
      </section>

      <JournalTeaser />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <div className="sheet tape ruled px-6 py-12 text-center sm:px-14 sm:py-16">
            <p className="eyebrow text-electric">A problem worth investigating?</p>
            <p className="display mx-auto mt-5 max-w-3xl text-4xl sm:text-6xl">
              Bring me the question behind the feature.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-solid">
                Connect With Me <Arrow />
              </Link>
              <Link href="/about" className="btn btn-line">
                Meet the person
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
