import { Reveal } from "@/components/Reveal";
import { values } from "@/lib/data";

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-16 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
            Sobre mí
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_0.7fr]">
          <Reveal delay={0.05}>
            <p className="font-display text-2xl leading-relaxed text-balance sm:text-3xl">
              Llevo más de 5 años diseñando y construyendo productos digitales,
              desde dashboards para equipos internos hasta apps que usan miles
              de personas todos los días. Me obsesiona el detalle: la
              transición que se siente bien, el código que se lee solo, la
              interfaz que no necesita instrucciones.
            </p>
            <p className="mt-6 text-lg text-muted text-pretty">
              Cuando no estoy programando, ando explorando rutas de
              senderismo, probando cafés de especialidad o contribuyendo a
              proyectos de código abierto.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-display text-4xl font-semibold text-accent">
                +5
              </p>
              <p className="mt-1 text-sm text-muted">años de experiencia</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {values.map((value) => (
                  <li
                    key={value}
                    className="rounded-full border border-border bg-surface-muted px-3 py-1.5 text-xs text-foreground"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
