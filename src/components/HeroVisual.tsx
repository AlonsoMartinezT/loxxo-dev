"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const cards = [
  { name: "Estudio Andaro", image: "/projects/estudio-andaro.jpg", rotate: -6, x: "-10%", y: "6%", scale: 0.92, z: 10 },
  { name: "Amtixo CRM", image: "/projects/amtixo-crm.jpg", rotate: 5, x: "12%", y: "-4%", scale: 0.96, z: 20 },
  { name: "Orvelle", image: "/projects/orvelle.jpg", rotate: -1, x: "0%", y: "14%", scale: 1, z: 30 },
] as const;

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-[4/5] w-full max-w-sm lg:max-w-none">
      {cards.map((card, i) => (
        <motion.div
          key={card.name}
          className="absolute inset-x-[8%] top-[6%] aspect-[16/11] overflow-hidden rounded-lg border border-border bg-surface shadow-xl"
          style={{ zIndex: card.z, rotate: card.rotate, x: card.x, scale: card.scale }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: "24%" }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: card.y }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.12 }}
          whileHover={{ scale: card.scale * 1.03, zIndex: 40 }}
        >
          <div className="flex h-6 items-center gap-1.5 border-b border-border bg-surface-muted px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
          </div>
          <div className="relative h-[calc(100%-1.5rem)] w-full">
            <Image
              src={card.image}
              alt={card.name}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
