import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { values } from "@/lib/data";

const stats = [
  { to: 5, prefix: "+", label: "años de experiencia" },
  { to: 20, prefix: "+", label: "proyectos entregados" },
  { to: 100, suffix: "%", label: "código propio y a mano" },
];

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

            <ul className="mt-8 flex flex-wrap gap-2">
              {values.map((value) => (
                <li
                  key={value}
                  className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.05em] text-muted"
                >
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col divide-y divide-border border-t border-border md:border-t-0">
            {stats.map((stat) => (
              <div key={stat.label} className="py-6 first:pt-0">
                <p className="font-display text-5xl font-semibold text-accent">
                  <CountUp to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
