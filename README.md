# 🦶 Podología Rubén Baquero — Landing Page

Landing page profesional para la clínica de podología de Rubén Baquero en Carabanchel, Madrid.

🌐 **Live:** [www.podologiarubenbaquero.com](https://www.podologiarubenbaquero.com)

---

## ✨ Características

| Sección | Descripción |
|---------|-------------|
| **Hero** | Sección de impacto con imagen a pantalla completa, CTA y animación de entrada |
| **Sobre Mí** | Biografía profesional, timeline de formación con GSAP y cita expandible |
| **Servicios** | Grid de tarjetas con imagen, hover interactivo y descripciones |
| **Contacto** | Formulario funcional con envío de email, mapa embebido, info de contacto y modal de horarios |
| **WhatsApp** | Botón flotante para contacto directo vía WhatsApp |
| **404** | Página de error personalizada con animaciones GSAP |

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| **Framework** | Next.js (App Router + Turbopack) | 16.1.6 |
| **Librería UI** | React | 19.2.3 |
| **Componentes** | HeroUI (`@heroui/react`) | RC |
| **Estilos** | Tailwind CSS v4 | ^4 |
| **Animaciones** | GSAP + ScrollTrigger + `@gsap/react` | ^3.12 |
| **Iconos** | Lucide React | ^0.469 |
| **Email** | Resend | ^6.9 |
| **Fuente** | Poppins (via `next/font/google`) | — |
| **Analítica** | Vercel Analytics + Speed Insights | — |
| **Lenguaje** | TypeScript (strict) | ^5 |
| **Linting** | ESLint | ^9 |
| **Optimización de imagen** | Sharp | ^0.34 |

---

## 📁 Estructura del Proyecto

```
├── app/
│   ├── api/contact/route.ts    # API de envío de emails (Resend)
│   ├── globals.css             # Paleta de colores y sistema de escalado
│   ├── layout.tsx              # Root layout (providers, fuentes, metadata)
│   ├── page.tsx                # Composición de secciones
│   ├── not-found.tsx           # Página 404 personalizada
│   ├── robots.ts               # robots.txt generado
│   └── sitemap.ts              # sitemap.xml generado
├── components/
│   ├── about/                  # AboutSection, Timeline, ExpandableQuote
│   ├── contact/                # ContactSection, ContactForm, ContactInfo, ScheduleModal
│   ├── hero/                   # HeroSection
│   ├── layout/                 # Header, Footer, MobileMenu, ScrollHandler
│   ├── providers/              # GsapProvider
│   ├── services/               # ServicesSection, ServiceCard
│   └── ui/                     # WhatsAppButton
├── lib/
│   ├── data/constants.ts       # Datos centralizados (servicios, contacto, timeline)
│   └── utils/
│       ├── dates.ts            # Utilidad para calcular años de experiencia
│       ├── rate-limiter.ts     # Rate limiter in-memory por IP
│       └── sanitize.ts         # Sanitización y validación de inputs
├── public/photos/              # Imágenes estáticas (.webp, .svg)
└── next.config.ts              # Rewrites para clean URLs
```

---

## 🔒 Seguridad del Formulario de Contacto

El endpoint `/api/contact` implementa **10 capas de seguridad** secuenciales:

| # | Medida | Detalle |
|---|--------|---------|
| 1 | **Config check** | Verifica existencia de `RESEND_API_KEY` |
| 2 | **Content-Type** | Solo acepta `application/json` |
| 3 | **Rate limiting** | Máx. 3 peticiones por IP cada 15 minutos |
| 4 | **Honeypot** | Campo oculto que los bots rellenan → silenciosamente rechazado |
| 5 | **Timestamp anti-bot** | Rechaza envíos en < 3 segundos (bots instantáneos) |
| 6 | **Campos obligatorios** | `name`, `email`, `message` requeridos |
| 7 | **Sanitización HTML** | Elimina etiquetas `<script>`, `<img>`, etc. de todos los campos |
| 8 | **Validación email** | Formato RFC válido |
| 9 | **Validación teléfono** | Solo dígitos, espacios y `+` (máx. 20 chars) |
| 10 | **Longitudes máximas** | name: 100, email: 254, phone: 20, message: 2000 |

---

## 🎨 Sistema de Diseño

- **Paleta de colores** basada en OKLCH con tema claro definido en `globals.css`
- **Color primario (accent):** Bronce/dorado — WCAG AA compliant
- **Tipografía:** Poppins con pesos ligeros (`300`–`600`)
- **Escalado responsive:** `font-size` en `html` varía por breakpoint para que todo el sistema `rem` escale proporcionalmente
- **Animaciones:** GSAP para transiciones de scroll complejas, Tailwind para micro-interacciones
- **Diseño Mobile First** con breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)

---

## ⚡ Rendimiento y SEO (Lighthouse)

- ✅ `next/image` con `priority` en imágenes LCP (Hero + About)
- ✅ Imágenes en formato `.webp` optimizadas con Sharp
- ✅ Fuente Poppins cargada localmente vía `next/font/google` (sin requests externos)
- ✅ Metadata API de Next.js (title, description, Open Graph)
- ✅ `robots.txt` y `sitemap.xml` generados automáticamente
- ✅ Heading hierarchy semántica (`h1` → `h2` → `h3`)
- ✅ Contraste WCAG AA en todos los textos
- ✅ Clean URLs (`/sobre-mi`, `/servicios`) con rewrites en `next.config.ts`
- ✅ Vercel Analytics y Speed Insights integrados

---

## 🚀 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/FernandoBaqueroo/LandingPodologia.git
cd LandingPodologia

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus claves reales
```

### Variables de entorno necesarias

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API Key de [Resend](https://resend.com) para envío de emails |

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con Turbopack
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

---

## 🌍 Despliegue

El proyecto está desplegado en **Vercel** con deploy automático en cada push a `main`.

**Requisitos en Vercel:**
1. Configurar `RESEND_API_KEY` en Environment Variables
2. Dominio `podologiarubenbaquero.com` verificado en Resend para envío de emails

---

## 📄 Licencia

Proyecto privado. Todos los derechos reservados.
