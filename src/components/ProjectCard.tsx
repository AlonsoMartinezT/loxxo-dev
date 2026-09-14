"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/data";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden border border-border bg-surface transition-colors hover:border-accent"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={`/projects/${project.slug}.svg`}
          alt=""
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-sm bg-background/80 px-2 py-1 font-mono text-xs text-muted backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-medium tracking-tight uppercase">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted text-pretty">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs uppercase tracking-[0.05em] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span className="mt-5 inline-flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent">
          Ver proyecto
          <svg
            aria-hidden
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </motion.a>
  );
}
