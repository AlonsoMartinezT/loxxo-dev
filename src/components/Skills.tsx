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

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <h3 className="font-display text-lg font-semibold">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
