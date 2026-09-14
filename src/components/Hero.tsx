"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { site } from "@/lib/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.p
            variants={item}
            className="font-mono text-sm uppercase tracking-[0.2em] text-accent"
          >
            {site.role} · {site.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Hola, soy {site.name.split(" ")[0]}.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-muted text-pretty"
          >
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
            >
              Ver proyectos
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground"
            >
              Contáctame
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-accent to-accent-2 opacity-90"
            animate={
              shouldReduceMotion
                ? undefined
                : { rotate: [0, 4, 0, -4, 0] }
            }
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-4 flex items-center justify-center rounded-[2rem] bg-background/90">
            <span className="font-display text-7xl font-semibold tracking-tight">
              {site.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
          </div>
        </motion.div>
      </div>

      <Link
        href="#sobre-mi"
        aria-label="Ir a la sección Sobre mí"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-border p-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </motion.div>
      </Link>
    </section>
  );
}
