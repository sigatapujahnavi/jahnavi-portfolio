import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/site";
import { Arrow } from "@/components/ui/Arrow";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";

type FeaturedCaseProps = {
  project: Project;
  flip?: boolean;
};

export function FeaturedCase({ project, flip = false }: FeaturedCaseProps) {
  const { slug, number, name, kind, summary, facts, image, imageAlt } = project;

  return (
    <Reveal>
      <article className="grid items-center gap-9 lg:grid-cols-12 lg:gap-14">
        <Link
          href={`/work/${slug}`}
          data-cursor
          aria-label={`${name}, open the case file`}
          className={`group relative block lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
        >
          <Parallax speed={0.035}>
            <div
              className={`sheet tape p-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.015] sm:p-4 ${
                flip ? "rotate-[1.2deg]" : "-rotate-[1.2deg]"
              }`}
            >
              <Image
                src={image}
                alt={imageAlt}
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 560px, 92vw"
                className="h-auto w-full bg-sheet"
              />
            </div>
          </Parallax>
        </Link>

        <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
          <p className="eyebrow text-electric">Case file {number}</p>
          <h3 className="display mt-3 text-5xl sm:text-6xl">
            <Link href={`/work/${slug}`} className="transition-colors hover:text-electric">
              {name}
            </Link>
          </h3>
          <p className="eyebrow mt-3 text-muted">{kind}</p>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {facts.slice(0, 3).map((fact) => (
              <li key={fact.label} className="chip">
                <strong className="mr-1.5 font-medium text-electric">{fact.value}</strong>
                {fact.label}
              </li>
            ))}
          </ul>
          <Link href={`/work/${slug}`} className="btn btn-line mt-8">
            Read the case file <Arrow />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
