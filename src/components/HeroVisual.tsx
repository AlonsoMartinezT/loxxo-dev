"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#020217] lg:max-w-none">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04044a] via-[#000675] to-[#020217]" />

      {/* Sky-blue blob */}
      <motion.div
        aria-hidden
        className="absolute -left-1/4 top-0 h-3/4 w-3/4 rounded-full bg-[#00a4ff] blur-3xl"
        style={{ opacity: 0.55, mixBlendMode: "screen" }}
        animate={
          shouldReduceMotion
            ? undefined
            : { x: ["0%", "20%", "-5%", "0%"], y: ["0%", "15%", "25%", "0%"] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Neon cyan blob */}
      <motion.div
        aria-hidden
        className="absolute -bottom-1/4 -right-1/4 h-3/4 w-3/4 rounded-full bg-[#00e7ff] blur-3xl"
        style={{ opacity: 0.45, mixBlendMode: "screen" }}
        animate={
          shouldReduceMotion
            ? undefined
            : { x: ["0%", "-15%", "10%", "0%"], y: ["0%", "-20%", "-5%", "0%"] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Deep royal-blue core, keeps the center from washing out */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#000675] blur-3xl"
        style={{ opacity: 0.6 }}
      />

      {/* Diagonal light sweep */}
      <motion.div
        aria-hidden
        className="absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-2xl"
        style={{ mixBlendMode: "screen" }}
        animate={shouldReduceMotion ? undefined : { left: ["-60%", "120%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
      />

      <div className="absolute inset-0 border border-white/10" />
    </div>
  );
}
