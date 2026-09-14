"use client";

import { motion, type Variants } from "framer-motion";
import { HeroVisual } from "@/components/HeroVisual";
import { Marquee } from "@/components/Marquee";
import { StatusBar } from "@/components/StatusBar";
import { site } from "@/lib/site";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const marqueeItems = [
  site.role,
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
];

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col pt-16">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.div variants={item}>
            <StatusBar />
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <motion.h1
                variants={item}
                className="font-display text-5xl leading-[0.98] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
              >
                Hola, soy {site.name.split(" ")[0]}.
                <span className="block text-muted">{site.role}.</span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-8 max-w-lg text-lg text-muted text-pretty"
              >
                {site.tagline}
              </motion.p>

              <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
                <motion.a
                  href="#proyectos"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent-foreground"
                >
                  Ver proyectos
                  <span aria-hidden>↗</span>
                </motion.a>
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
                >
                  Contáctame
                </motion.a>
              </motion.div>
            </div>

            <motion.div variants={item} className="lg:ml-auto lg:w-full">
              <HeroVisual />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="border-y border-border py-4">
        <Marquee>
          {marqueeItems.map((text) => (
            <span
              key={text}
              className="mx-4 flex items-center gap-4 font-display text-2xl uppercase tracking-tight text-muted sm:text-3xl"
            >
              {text}
              <span aria-hidden className="text-accent">
                •
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
