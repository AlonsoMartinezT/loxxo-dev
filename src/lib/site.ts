export const site = {
  name: "Alonso Martínez",
  handle: "loxxo",
  role: "Desarrollador Full Stack",
  tagline:
    "Construyo productos web rápidos, accesibles y con buen gusto — del diseño al despliegue.",
  location: "Remoto · LATAM",
  email: "loxxo.work@gmail.com",
  url: "https://loxxo-dev.vercel.app",
  social: {
    github: "https://github.com/AlonsoMartinezT",
    linkedin: "https://www.linkedin.com/in/alonso-martinez-dev",
    x: "https://x.com/loxxodev",
  },
} as const;

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
] as const;
