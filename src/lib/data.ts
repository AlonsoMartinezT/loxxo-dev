export type Project = {
  slug: string;
  name: string;
  description: string;
  tags: readonly string[];
  href: string;
  image: string;
  accent: "coral" | "teal" | "amber" | "violet";
};

export const projects: readonly Project[] = [
  {
    slug: "orvelle",
    name: "Orvelle",
    description:
      "E-commerce de belleza en Tulum con carrito real, base de datos Supabase, autenticación y panel de administrador con CRUD de productos e imágenes.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    href: "https://alonsomartinezt.github.io/orvelle/",
    image: "/projects/orvelle.jpg",
    accent: "coral",
  },
  {
    slug: "amtixo-crm",
    name: "Amtixo CRM",
    description:
      "CRM completo con pipeline de ventas en Kanban (drag & drop nativo), gestión de contactos, tareas y notas, todo con autenticación real y base de datos Supabase.",
    tags: ["Next.js", "Supabase", "TypeScript", "Auth"],
    href: "https://alonsomartinezt.github.io/amtixo-crm/",
    image: "/projects/amtixo-crm.jpg",
    accent: "violet",
  },
  {
    slug: "estudio-andaro",
    name: "Estudio Andaro",
    description:
      "Sitio multipágina para un despacho de arquitectura: 17 rutas estáticas, fichas de proyecto, filtros por categoría y formulario de contacto vía WhatsApp.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Static Export"],
    href: "https://alonsomartinezt.github.io/estudio-andaro/",
    image: "/projects/estudio-andaro.jpg",
    accent: "amber",
  },
  {
    slug: "torque-cinco",
    name: "Torque Cinco",
    description:
      "Sitio de un taller mecánico con 20 rutas: diagnóstico interactivo por síntomas, cotizador de 4 pasos con estimado en vivo, y transiciones de página con <ViewTransition> de React.",
    tags: ["Next.js", "React 19", "TypeScript"],
    href: "https://alonsomartinezt.github.io/torque-cinco/",
    image: "/projects/torque-cinco.jpg",
    accent: "teal",
  },
  {
    slug: "zancada",
    name: "Zancada",
    description:
      "E-commerce de streetwear con animación por scroll nativa (animation-timeline: view()), barra de progreso y apariciones escalonadas, con respaldo IntersectionObserver.",
    tags: ["Next.js", "CSS Scroll-Driven Animations", "TypeScript"],
    href: "https://alonsomartinezt.github.io/zancada/",
    image: "/projects/zancada.jpg",
    accent: "coral",
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
