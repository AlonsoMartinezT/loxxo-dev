"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const lines = ["NADA DE", "INTERFACES", "ABURRIDAS."];

export function Manifesto() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 },
    },
  };

  const line: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: "0.4em" },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
          Manifiesto
        </p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-6 font-display text-6xl leading-[0.95] font-medium tracking-tight sm:text-7xl lg:text-8xl"
        >
          {lines.map((text) => (
            <motion.span key={text} variants={line} className="block overflow-hidden">
              {text}
            </motion.span>
          ))}
        </motion.h2>

        <p className="mt-8 max-w-xl text-lg text-muted text-pretty">
          Construyo productos que la gente disfruta usar, con atención
          obsesiva al detalle: la transición correcta, el estado vacío bien
          pensado, el borde que no se rompe en móvil.
        </p>
      </div>
    </section>
  );
}
