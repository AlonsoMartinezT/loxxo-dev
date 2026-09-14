export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: readonly string[];
  href: string;
  accent: "coral" | "teal" | "amber" | "violet";
};

export const projects: readonly Project[] = [
  {
    slug: "nimbus",
    name: "Nimbus",
    description:
      "Panel de analítica en tiempo real para equipos de producto, con dashboards configurables y alertas.",
    tags: ["Next.js", "TypeScript", "tRPC", "PostgreSQL"],
    href: "https://github.com/AlonsoMartinezT/nimbus",
    accent: "coral",
  },
  {
    slug: "sendero",
    name: "Sendero",
    description:
      "App móvil de rutas de senderismo con mapas offline, registro de actividad y comunidad de exploradores.",
    tags: ["React Native", "Expo", "Supabase"],
    href: "https://github.com/AlonsoMartinezT/sendero",
    accent: "teal",
  },
  {
    slug: "cuadra",
    name: "Cuadra",
    description:
      "Plataforma de reservas para estudios de yoga y fitness boutique, con pagos y gestión de clases.",
    tags: ["Next.js", "Stripe", "Prisma"],
    href: "https://github.com/AlonsoMartinezT/cuadra",
    accent: "amber",
  },
  {
    slug: "lector",
    name: "Lector",
    description:
      "Extensión de navegador que resume artículos largos con IA para lectura rápida y guardado offline.",
    tags: ["TypeScript", "Chrome Extensions", "OpenAI API"],
    href: "https://github.com/AlonsoMartinezT/lector",
    accent: "violet",
  },
] as const;

export type SkillGroup = {
  title: string;
  skills: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "PostgreSQL", "Prisma", "tRPC", "REST / GraphQL"],
  },
  {
    title: "Herramientas",
    skills: ["Git", "Docker", "Vercel", "Figma", "Playwright"],
  },
] as const;

export const values = [
  "Código limpio",
  "Diseño centrado en el usuario",
  "Código abierto",
  "Café de especialidad",
] as const;
