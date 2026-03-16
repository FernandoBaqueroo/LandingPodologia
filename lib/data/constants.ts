import type { LucideIcon } from "lucide-react";

/* ─── Navigation ─── */
export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mí", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Ubicación", href: "#contact" },
];

/* ─── Hero ─── */
export const HERO = {
  title: "Tu podólogo en Carabanchel.",
  subtitle:
    "En la consulta de Podología y Biomecánica Rubén Baquero diagnosticamos y tratamos problemas comunes del pie, como durezas, callos, uñas encarnadas y afecciones de la piel. Además, estamos especializados en estudios de la pisada, diseño de plantillas a medida y ecografía del pie y tobillo.",
  ctaPrimary: "Pedir Cita",
  ctaSecondary: "Saber Más",
};

/* ─── About ─── */
export const ABOUT = {
  title: "Sobre Mí",
  bio: "Hola, soy Rubén Baquero, podólogo con más de 9 años de experiencia. A lo largo de mi carrera he trabajado en diversas clínicas de Madrid, colaborando con grandes profesionales que me han permitido especializarme en ecografía del pie y tobillo, biomecánica, pie diabético y cirugía podológica.\n\nLa pasión por mi profesión me motivó a realizar un Experto Universitario en Pie Diabético en 2016 y un máster en Cirugía Mínimamente Invasiva en 2018, además de completar una residencia en Cirugía del Pie y Tobillo en Barcelona en 2020. También he participado en programas de formación continuada, tanto a nivel nacional como en Estados Unidos, lo que me ha permitido seguir perfeccionando mis habilidades.\n\nMi objetivo es ofrecerte un cuidado cercano y de calidad, utilizando los últimos avances en podología para que tus pies estén siempre en las mejores manos. ¡Ven a conocernos!",
  image: "/photos/about_me.webp",
};

export interface TimelineItem {
  year: string;
  institution: string;
  title: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2011–2015",
    institution: "Universidad de Extremadura",
    title: "Grado en Podología",
  },
  {
    year: "2015–2016",
    institution: "Universidad de Extremadura",
    title: "Especialista en Pie Diabético",
  },
  {
    year: "2017–2018",
    institution: "Universidad Católica de Valencia",
    title: "Máster en Cirugía Podológica",
  },
  {
    year: "2019–2022",
    institution: "The Podiatry Institute Inc. (Atlanta)",
    title: "Surgical Skills Training Program",
  },
  {
    year: "2020",
    institution: "Residencia en Barcelona",
    title: "Cirugía del pie y tobillo",
  },
];

/* ─── Servicios ─── */
export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Quiropodia",
    description:
      "Tratamiento integral: corte y fresado de uñas, eliminación de durezas (helomas e hiperqueratosis) y cuidado de la piel.",
    image: "/photos/services/quiropodia.webp",
  },
  {
    title: "Uñas encarnadas",
    description:
      "Soluciones efectivas mediante tratamientos conservadores o cirugía menor definitiva para eliminar el dolor y prevenir infecciones.",
    image: "/photos/services/cirugia_una.webp",
  },
  {
    title: "Estudio biomecánico de la pisada",
    description:
      "Análisis detallado de la marcha y postura mediante tecnología avanzada para identificar anomalías y prevenir lesiones.",
    image: "/photos/services/estudio_biomecanica_pisada.webp",
  },
  {
    title: "Plantillas personalizadas",
    description:
      "Diseño y fabricación a medida para corregir la pisada, aliviar dolores crónicos y mejorar el rendimiento deportivo.",
    image: "/photos/services/plantillas.webp",
  },
  {
    title: "Ortesis de silicona",
    description:
      "Dispositivos personalizados para corregir deformidades en los dedos (dedos en garra, juanetes) y aliviar presión.",
    image: "/photos/services/ortesis_silicona.webp",
  },
  {
    title: "Ecografía del pie",
    description:
      "Diagnóstico preciso y no invasivo de lesiones en tejidos blandos (tendinitis, fascitis, neuromas) con alta resolución.",
    image: "/photos/services/ecografia.webp",
  },
  {
    title: "Cultivo micológico",
    description:
      "Análisis especializado para detectar infecciones fúngicas y hongos en uñas y piel, garantizando un tratamiento preciso.",
    image: "/photos/services/cultivo_micologico.webp",
  },
];

/* ─── Contacto ─── */
export const CONTACT = {
  title: "Ubicación y Contacto",
  address: "Calle de Tucán, 7 Local, D-1, D-2, Carabanchel, 28025 Madrid",
  phone: "914 65 19 11",
  email: "podologocarabanchel@gmail.com",
  hours: "Lunes a Viernes · Cita previa",
  whatsappUrl: "https://wa.me/34657351637",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.8446068072626!2d-3.7389467999999995!3d40.390136500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227e2791e2b11%3A0xc44c9508e6c86e40!2sPodolog%C3%ADa%20y%20Biomec%C3%A1nica%20Rub%C3%A9n%20Baquero%20%7C%20Policl%C3%ADnica%20Alondra!5e0!3m2!1ses!2ses!4v1730374745972!5m2!1ses!2ses",
};

/* ─── Footer ─── */
export const FOOTER = {
  brand: "Rubén Baquero",
  tagline: "Biomecánica · Podología · Ecografía",
  copyright: `© ${new Date().getFullYear()} Rubén Baquero Podología. Todos los derechos reservados.`,
  socialLinks: [
    {
      label: "Doctoralia",
      href: "https://www.doctoralia.es/ruben-baquero-zamora-2/podologo/madrid",
      icon: "doctoralia" as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rub%C3%A9n-baquero-zamora-3aa516107/",
      icon: "linkedin" as const,
    },
  ],
};
