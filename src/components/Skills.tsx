import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="habilidades"
      className="scroll-mt-16 border-t border-border py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
            Habilidades
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Con qué trabajo
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-border">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="group flex flex-col gap-4 border-b border-border py-8 transition-colors sm:flex-row sm:items-center sm:gap-8">
                <span className="font-mono text-sm text-muted">
                  ({String(i + 1).padStart(2, "0")})
                </span>
                <h3 className="font-display text-2xl font-medium tracking-tight uppercase transition-colors group-hover:text-accent sm:text-3xl sm:w-64 sm:shrink-0">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2 sm:justify-end sm:flex-1">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.05em] text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
