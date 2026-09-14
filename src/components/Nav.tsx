"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#inicio"
          className="font-display text-lg font-semibold tracking-tight uppercase"
          onClick={() => setOpen(false)}
        >
          {site.handle}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="rounded-sm bg-accent px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent-foreground transition-transform hover:scale-105 active:scale-95"
          >
            Hablemos
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border md:hidden"
        >
          <motion.span className="relative block h-4 w-5" initial={false}>
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-5 bg-foreground"
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 top-[7px] h-0.5 w-5 bg-foreground"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="absolute left-0 top-[14px] h-0.5 w-5 bg-foreground"
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-3 py-3 font-mono text-sm uppercase tracking-[0.1em] text-foreground transition-colors hover:bg-surface-muted"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
