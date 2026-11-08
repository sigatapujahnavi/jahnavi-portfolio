import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { IndexList, ProjectIndex } from "@/components/work/ProjectIndex";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Nine case files from Jahnavi Sigatapu: production mobile apps, full-stack web platforms and AI systems, each with the questions that shaped the build.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        kicker="Work · nine case files"
        title={
          <>
            Things I built, and the <span className="text-electric italic">questions</span> behind them.
          </>
        }
        lede="Production mobile apps, full-stack platforms and AI systems. Open any file to see what I built, what I investigated, and what I would tell the next person."
        hand="hover a row to peek inside ↓"
      />

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Suspense fallback={<IndexList filter="all" />}>
          <ProjectIndex />
        </Suspense>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <Reveal>
          <div className="sheet tape ruled flex flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center sm:px-12">
            <div>
              <p className="eyebrow text-electric">Looking for the why?</p>
              <p className="display mt-3 max-w-xl text-3xl sm:text-4xl">The process behind every one of these.</p>
            </div>
            <Link href="/thinking" className="btn btn-solid shrink-0">
              Discover My Thinking <Arrow />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
