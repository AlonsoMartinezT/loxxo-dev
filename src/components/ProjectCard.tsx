"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={`/projects/${project.slug}.svg`}
          alt=""
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted text-pretty">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-surface-muted px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
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
