import Link from "next/link";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/Icons";
import { nav, site } from "@/lib/site";

const links = [
  { label: "GitHub", href: site.social.github, icon: GitHubIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedInIcon },
  { label: "X", href: site.social.x, icon: XIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Hecho con Next.js,
          Tailwind CSS y Framer Motion.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
