"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const TIME_ZONE = "America/Mexico_City";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("es-MX", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: TIME_ZONE,
  }).format(date);
}

function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("es-MX", {
    month: "short",
    year: "2-digit",
    timeZone: TIME_ZONE,
  })
    .format(date)
    .replace(".", "");
}

export function StatusBar() {
  // Lazy initializer: en el servidor no hay `window`, así que el primer
  // render (y el del cliente antes de hidratar) no depende de la hora.
  // suppressHydrationWarning cubre el único frame donde ambos difieren.
  const [now, setNow] = useState<Date | null>(() =>
    typeof window !== "undefined" ? new Date() : null
  );

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
      <span className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
        </span>
        Disponible para proyectos
      </span>
      <span suppressHydrationWarning>{now ? formatMonth(now) : " "}</span>
      <span suppressHydrationWarning>{now ? formatTime(now) : " "}</span>
      <span>{site.location}</span>
    </div>
  );
}
