import Link from "next/link";
import { nav, site, socials } from "@/data/site";
import { MailIcon, PhoneIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/80">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <p className="eyebrow text-electric">The last page of the notebook</p>
          <p className="display mt-6 max-w-4xl text-[2.6rem] sm:text-7xl lg:text-[5.2rem]">
            Still{" "}
            <span className="relative inline-block text-electric italic">
              curious.
              <Scribble kind="double" />
            </span>{" "}
            Still building. Always exploring.
          </p>
          <p className="hand mt-6 text-2xl text-ink-soft sm:text-3xl">{site.tagline}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-rule pt-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="eyebrow text-muted">Say hello</p>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-3 font-serif text-xl font-medium [overflow-wrap:anywhere] underline decoration-electric/40 decoration-2 underline-offset-[6px] transition-colors hover:decoration-electric sm:text-2xl"
                >
                  <MailIcon className="size-6 shrink-0 text-electric transition-transform group-hover:-rotate-6" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="group inline-flex items-center gap-3 font-serif text-xl font-medium underline decoration-electric/40 decoration-2 underline-offset-[6px] transition-colors hover:decoration-electric sm:text-2xl"
                >
                  <PhoneIcon className="size-6 shrink-0 text-electric transition-transform group-hover:rotate-6" />
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted">Elsewhere</p>
            <ul className="mt-3 space-y-2">
              {socials
                .filter((social) => social.label !== "Email")
                .map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="font-medium underline decoration-ink/25 underline-offset-4 transition-colors hover:text-electric hover:decoration-electric"
                      {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}
                    >
                      {social.label === "Resume" ? "Resume (PDF)" : social.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted">In this notebook</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {[...nav, { label: "Contact", href: "/contact" }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-electric">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="eyebrow mt-14 flex flex-wrap justify-between gap-2 text-muted">
          <span>
            {site.name} · {site.location}
          </span>
          <span>{site.coordinates}</span>
        </p>
      </div>
    </footer>
  );
}
