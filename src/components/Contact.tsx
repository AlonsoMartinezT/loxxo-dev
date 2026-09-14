import { Reveal } from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon, XIcon } from "@/components/Icons";
import { site } from "@/lib/site";

const links = [
  { label: "GitHub", href: site.social.github, icon: GitHubIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedInIcon },
  { label: "X", href: site.social.x, icon: XIcon },
];

export function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-16 border-t border-border py-24"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
            Contacto
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            ¿Tienes un proyecto en mente? Hablemos.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-105 active:scale-95"
          >
            <MailIcon className="h-4 w-4" />
            {site.email}
          </a>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10 flex items-center justify-center gap-4">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
