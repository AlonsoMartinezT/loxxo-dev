"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export function CountUp({ to, prefix = "", suffix = "", duration = 1.4 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration: shouldReduceMotion ? 0 : duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });

    return () => controls.stop();
  }, [isInView, to, duration, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
