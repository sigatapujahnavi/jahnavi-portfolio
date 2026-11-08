import type { Metadata } from "next";
import { Arrow } from "@/components/ui/Arrow";
import { Doodle } from "@/components/ui/Doodle";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jahnavi Sigatapu by email, LinkedIn or GitHub, or download her resume.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "LinkedIn", note: "Best for longer conversations", href: site.linkedin, text: "jahnavi-sigatapu", kind: "external" },
  { label: "GitHub", note: "Where the code lives", href: site.github, text: "sigatapujahnavi", kind: "external" },
  { label: "Resume", note: "Experience, education, projects", href: site.resume, text: "Download PDF", kind: "download" },
  { label: "Phone", note: "For a quick call", href: site.phoneHref, text: site.phone, kind: "plain" },
] as const;

const attrs = {
  external: { target: "_blank", rel: "noopener noreferrer" },
  download: { download: true },
  plain: {},
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact · say hello"
        title={
          <>
            Got a question worth{" "}
            <span className="relative inline-block text-electric italic">
              chasing?
              <Scribble immediate delay={500} />
            </span>
          </>
        }
        lede="I like problems where the obvious answer is not enough. If you have one, or just want to talk about how something works, write to me."
      />

      <section aria-label="Email" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <Reveal>
          <a
            href={`mailto:${site.email}`}
            data-cursor
            className="group sheet tape ruled relative block px-6 pt-12 pb-10 transition-transform duration-500 hover:-rotate-[0.6deg] sm:px-12"
          >
            <span className="eyebrow text-electric">Email me</span>
            <span className="display mt-4 block text-[1.12rem] [overflow-wrap:anywhere] sm:text-3xl md:text-[2.6rem] lg:text-6xl">{site.email}</span>
            <span className="hand mt-5 inline-flex items-center gap-3 text-2xl text-electric">
              opens your mail app <Arrow className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute top-8 right-6 text-electric/70 sm:right-12">
              <Doodle name="bulb" animate className="block size-12 sm:size-16" />
            </span>
          </a>
        </Reveal>
      </section>

      <section aria-label="Other places to find me" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        <ul className="grid gap-px border-y-[1.5px] border-ink bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, index) => (
            <li key={channel.label} className="bg-paper">
              <Reveal delay={index * 90}>
                <a
                  href={channel.href}
                  data-cursor
                  {...attrs[channel.kind]}
                  className="group block px-5 py-9 transition-colors hover:bg-sun/20 sm:px-7"
                >
                  <span className="eyebrow text-muted">{channel.note}</span>
                  <span className="display mt-3 block text-4xl">{channel.label}</span>
                  <span className="link-arrow mt-4 inline-flex items-center gap-2 font-semibold text-electric">
                    {channel.text} <Arrow />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={100}>
          <p className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-wider text-muted uppercase">
            <span className="pulse-dot" aria-hidden />
            {site.currentRole} · {site.currentFocus}
            <span aria-hidden>·</span>
            {site.location}
          </p>
        </Reveal>
      </section>
    </>
  );
}
