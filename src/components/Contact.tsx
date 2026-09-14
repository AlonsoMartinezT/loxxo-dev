import { Reveal } from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/Icons";
import { site } from "@/lib/site";

const links = [
  { label: "GitHub", href: site.social.github, icon: GitHubIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedInIcon },
  { label: "X", href: site.social.x, icon: XIcon },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-16 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
            Contacto
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-6 flex flex-col gap-6 border border-accent bg-accent px-6 py-10 text-accent-foreground transition-colors sm:flex-row sm:items-center sm:justify-between sm:px-10"
          >
            <h2 className="font-display text-4xl font-medium tracking-tight uppercase text-balance sm:text-5xl lg:text-6xl">
              ¿Un proyecto
              <br />
              en mente? Hablemos.
            </h2>
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-accent-foreground text-2xl transition-transform group-hover:rotate-45">
              ↗
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-sm text-muted transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            <div className="flex items-center gap-4">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
