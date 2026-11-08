import type { Metadata } from "next";
import Image from "next/image";
import { Notebook } from "@/components/journal/Notebook";
import { PageHeader } from "@/components/ui/PageHeader";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "Questions that took Jahnavi Sigatapu somewhere: how YouTube stores video, why banks still run COBOL, how Tor works, automation vs AI agents, the history of the GUI, and how notifications find a closed app.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <>
      <PageHeader
        kicker="Field notes · curiosity beyond code"
        title={
          <>
            Questions that took me{" "}
            <span className="relative inline-block text-electric italic">
              somewhere.
              <Scribble immediate delay={500} />
            </span>
          </>
        }
        lede="Not every question I chase belongs to a project. Some start in a film, an interview or a phone that will not charge. Each one gets the same treatment: ask why, dig, write down what I find."
        hand="six pages from the notebook"
      />

      <section aria-label="Notebook on a desk" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
        <Reveal>
          <div className="relative pt-3">
            <Parallax speed={0.04}>
              <div className="sheet tape p-3 sm:p-4">
                <Image
                  src="/images/notebook-desk.jpg"
                  alt="Pencil sketch of an open notebook with diagrams and sticky notes, beside a cup of pencils and stacked books."
                  width={1024}
                  height={576}
                  priority
                  sizes="(min-width: 1152px) 1088px, 92vw"
                  className="h-auto max-h-[26rem] w-full bg-sheet object-cover"
                />
              </div>
            </Parallax>
          </div>
        </Reveal>
      </section>

      <section aria-label="Entries" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <Notebook />
      </section>
    </>
  );
}
