import type { Metadata } from "next";
import { SkillMap } from "@/components/toolkit/SkillMap";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Toolkit",
  description:
    "An interactive map of the languages, frameworks, AI tools, integrations and cloud services Jahnavi Sigatapu uses, linked to the projects where each one shipped.",
  alternates: { canonical: "/toolkit" },
};

export default function ToolkitPage() {
  return (
    <>
      <PageHeader
        kicker="Toolkit · a map, not a scoreboard"
        title={
          <>
            What&apos;s on the <span className="text-electric italic">workbench.</span>
          </>
        }
        lede="No percentage bars. A skill is only worth listing if I can point to where it shipped, so tools with a solid outline link to real case files."
        hand="solid outline = used in a project"
      />
      <section aria-label="Skill map" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <SkillMap />
      </section>
    </>
  );
}
