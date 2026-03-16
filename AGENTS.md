# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# [CLIENT] — Frontend (React App)
# Stack: Next.js · TypeScript · TailwindCSS · HeroUI
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## C1. Librería de UI y Estructura

- **UI:** Utiliza exclusivamente **HeroUI** (`@heroui/react`). Los componentes base se importan directamente desde este paquete.
- **Iconos:** Usa siempre la librería **`lucide-react`**.
- **Componentes:**
  - Verifica existencia en HeroUI antes de crear desde cero (`Button`, `Card`, `Input`, `Modal`, `Navbar`, `Select`, `Table`, etc.).
  - Usa la utilidad `cn()` de `@heroui/react` (o `clsx`/`tailwind-merge`) para combinar clases de Tailwind de forma segura.
  - Mantén los componentes como **Server Components** por defecto (Next.js App Router). Añade `"use client"` solo si hay interactividad, hooks (`useState`, `useEffect`) o acceso a APIs del navegador.
  - Los componentes de HeroUI que requieren interactividad ya incorporan `"use client"` internamente; no es necesario marcarlo en el componente padre si solo se componen.

---

## C2. Estilos y Diseño

- **Tailwind CSS:** Uso estrictamente utilitario. Prohibido crear archivos CSS adicionales salvo `globals.css` para variables globales y fuentes.
- **HeroUI + Tailwind:** HeroUI utiliza Tailwind internamente. Configura el `tailwind.config.ts` incluyendo el preset de HeroUI:

  ```ts
  // tailwind.config.ts
  import { heroui } from "@heroui/react";

  export default {
    content: [
      "./app/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [heroui()],
  };
  ```

- **Colores:** Respeta las variables del sistema definidas en el tema de HeroUI y en `globals.css` (e.g., `bg-background`, `text-primary`, `border-default`). Para personalizar el tema, extiende la configuración del plugin `heroui()` en `tailwind.config.ts` bajo `themes`.
- **Estrategia Responsive:**
  - Adopta **Mobile First**: define primero el diseño base para móviles y escala mediante breakpoints (`md:`, `lg:`, etc.).
  - Usa layouts fluidos con Grid y Flexbox en lugar de anchos fijos.
  - **ESCALADO INTELIGENTE:** Para soportar el sistema de escalado global (que ajusta el `font-size` del `html`), **USA SIEMPRE** clases de Tailwind (que usan `rem`) o unidades `rem` manuales.
  - **PROHIBIDO** usar `px` para tamaños, márgenes o fuentes (e.g., `w-[300px]`, `font-size: 16px`), ya que rompen la proporcionalidad en distintas pantallas.

---

## C3. Animaciones (GSAP y Tailwind)

- **Delegación de Animaciones:** Tailwind CSS es exclusivo para micro-interacciones simples (`hover`, `focus`, `active`). **GSAP es obligatorio** para timelines complejos, secuencias y animaciones basadas en scroll.

**Implementación estricta de GSAP en Next.js:**

- **OBLIGATORIO:** Usa exclusivamente el hook `@gsap/react` (`useGSAP()`) para garantizar la recolección de basura y evitar memory leaks.
- Todos los componentes que usen GSAP deben marcarse con `"use client"`.
- Usa `useRef` para referenciar nodos del DOM. Nunca manipules el DOM directamente.
- **Rendimiento:** Limítate a animar propiedades aceleradas por GPU (`x`, `y`, `rotation`, `scale`, `opacity`). Está **PROHIBIDO** animar propiedades que disparen re-layout (e.g., `width`, `top`, `margin`).
- **ScrollTrigger y Responsividad Activa:** Registra plugins globalmente en un `useEffect` de un componente cliente raíz o en un `provider`. Usa `gsap.matchMedia()` dentro de `useGSAP()` para condicionar animaciones por breakpoint. Deshabilita animaciones complejas de scroll en móviles; actívalas solo desde `lg:`.
- **Prevención de Conflictos:** Nunca animes con GSAP un elemento que tenga clases de transición de Tailwind (`transition-all`, `duration-300`, etc.) aplicadas a las mismas propiedades.

---

## C4. Arquitectura y Estándares de Código

- **Lenguaje:** TypeScript estricto en todo el proyecto. Nunca uses `any`; prefiere tipos explícitos o `unknown`.
- **Sintaxis:** Usa exclusivamente Arrow Functions (`const Component = (): JSX.Element => {}`) para componentes React y funciones utilitarias.
- **Imports:** Usa siempre alias de paths (`@/components/...`, `@/lib/...`) configurados en `tsconfig.json`.

**Modularidad y Composición:**

- **Máxima Granularidad:** Mantén los componentes pequeños y enfocados en una sola responsabilidad.
- **Refactorización Activa:** Si un componente agrupa demasiada lógica de UI, múltiples secciones o supera las 200 líneas, **DEBES** abstraer y extraer sus partes en sub-componentes antes de continuar.

---

## C5. Estructura de Componentes y Proyecto

> **REGLA ESTRICTA: Ningún archivo debe superar las 200 líneas de código.**

### Organización de Carpetas

```
├── app/                        # App Router de Next.js
│   ├── layout.tsx              # Root layout (HeroUIProvider aquí)
│   ├── page.tsx                # Página raíz
│   └── [feature]/
│       ├── page.tsx            # Solo composición y estado de página
│       └── loading.tsx         # Suspense UI por ruta
├── components/
│   ├── ui/                     # Wrappers propios sobre HeroUI si se necesitan
│   ├── <feature>/              # Componentes específicos de cada feature
│   │   └── steps/              # Sub-componentes para wizards/multi-step
│   ├── illustrations/          # Ilustraciones SVG como componentes React
│   ├── layout/                 # Header, Footer, Sidebar, etc.
│   └── providers/              # Providers globales (HeroUIProvider, tema, etc.)
├── lib/
│   ├── api/                    # Cliente HTTP hacia Hono (fetch wrappers)
│   ├── hooks/                  # Custom hooks reutilizables
│   ├── types/                  # Tipos e interfaces TypeScript compartidos
│   └── utils/                  # Utilidades puras (cn, formatters, etc.)
├── public/                     # Assets estáticos (robots.txt, imágenes .webp)
└── server/                     # Servidor Hono (si es monorepo o collocated)
    ├── index.ts                # Entry point de Hono
    └── routes/                 # Definición de rutas Hono
```

### Reglas de Separación

1. **Páginas (`app/**/page.tsx`):** Solo composición de componentes y lógica de estado mínima. Sin JSX extenso ni lógica de negocio directa.
2. **Wizards/Multi-step:** Cada paso es un componente separado en `components/<feature>/steps/`.
3. **Componentes reutilizables:** Si se usan en más de un lugar, deben estar en `components/`.
4. **Ilustraciones SVG:** Extraer a `components/illustrations/` cuando excedan 50 líneas.
5. **Provider raíz:** El `HeroUIProvider` (y cualquier otro provider global) debe vivir en `app/layout.tsx` o en `components/providers/Providers.tsx`, envolviendo toda la app.

```tsx
// app/layout.tsx
import { HeroUIProvider } from "@heroui/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
```

### Ejemplo de Refactorización

```tsx
// ❌ MAL: Todo en una página
const MigrationPage = () => {
  // 400 líneas de código...
}

// ✅ BIEN: Página compone componentes
const MigrationPage = () => {
  return (
    <Card>
      <StepIndicator currentStep={step} />
      {step === 1 && <CardNumberStep {...props} />}
      {step === 2 && <DocumentStep {...props} />}
    </Card>
  );
};
```

---

## C6. Responsive Design y Sistema de Breakpoints

| Breakpoint | Tamaño | Descripción |
|---|---|---|
| `default` (sin prefijo) | < 640px | Móviles pequeños. Layout completamente vertical y centrado. |
| `sm:` | ≥ 640px | Móviles grandes / Tablets en vertical. Márgenes ampliados. |
| `md:` | ≥ 768px | Tablets horizontales. Introducción de tamaños intermedios. |
| `lg:` | ≥ 1024px | Punto de quiebre principal. Layout horizontal, alineación izquierda. |
| `xl:` | ≥ 1280px | Desktops. Ajustes finos opcionales. |
| `2xl:` | ≥ 1536px | Monitores grandes. Límites de anchura máxima. |

- **Contención General:** El contenedor padre principal debe usar `max-w-screen-2xl w-full mx-auto` con `px-6 lg:px-0`.
- **Patrón Show/Hide:** Cuando el layout cambie radicalmente entre móvil y desktop, usa `lg:hidden` / `hidden lg:flex`. No uses la propiedad `order-*` para reordenar estructuralmente.
- **Adaptación de Botones HeroUI:** En móvil, apila los botones (`flex-col items-center`). En `lg:` y superiores, ponlos en fila (`flex-row gap-4`).

---

## C7. Sistema de Tipografía y Pesos

| Elemento | Peso recomendado | Notas |
|---|---|---|
| Títulos de Impacto / H1 | `font-semibold` | `font-bold` restringido a casos excepcionales |
| Títulos de Sección / H2 / H3 | `font-normal` o `font-medium` | — |
| Textos de Cuerpo / Párrafos | `font-light` o `font-normal` | Evitar pesos superiores en bloques largos |
| Navegación y Footer | `font-normal` | Siempre |
| Botones HeroUI | `font-normal` o `font-medium` | Respetar los estilos base del componente |
| Labels y Formularios | `font-normal` | Evitar `font-semibold` |

---

## C8. Optimización y Rendimiento (Lighthouse First)

**SEO & Accesibilidad:**
- **Metadata API:** Usa la `Metadata` API de Next.js en cada `page.tsx` y `layout.tsx` para definir `title`, `description` y Open Graph. Nunca edites `<head>` manualmente.

  ```ts
  // app/page.tsx
  import type { Metadata } from "next";
  export const metadata: Metadata = {
    title: "Mi App",
    description: "Descripción clara de la página",
  };
  ```

- **`robots.txt` y `sitemap.xml`:** Genera ambos mediante las convenciones de ficheros de Next.js en `app/robots.ts` y `app/sitemap.ts`.
- **Contraste WCAG:** Antes de aplicar un color de texto sobre un fondo, verifica el ratio de contraste **Level AA** (mínimo 4.5:1). HeroUI cumple WCAG por defecto; no lo comprometas con overrides de color.

**Optimización de Imágenes:**
- **Componente `<Image>`:** Usa **siempre** el componente `next/image` en lugar de `<img>`. Proporciona siempre `width`, `height` y `alt`.
- **Formato Moderno:** Usa `.webp` o `.avif` para imágenes estáticas en `public/`.
- **Carga Inteligente:**
  - `loading="lazy"` es el comportamiento por defecto en `next/image` para imágenes fuera del viewport.
  - Usa `priority` (equivalente a `fetchpriority="high"`) exclusivamente para el elemento principal del Hero (LCP).

**Rendimiento de Carga:**
- **Code Splitting:** Usa `next/dynamic` con `ssr: false` para componentes pesados que no necesiten SSR (mapas, editores, gráficos).

  ```ts
  import dynamic from "next/dynamic";
  const HeavyChart = dynamic(() => import("@/components/HeavyChart"), { ssr: false });
  ```

- **Fuentes Locales:** Está **PROHIBIDO** enlazar fuentes externas (Google Fonts API). Usa `next/font/google` (que las descarga en build time y las sirve localmente) o `next/font/local` para fuentes propias.

  ```ts
  // app/layout.tsx
  import { Geist } from "next/font/google";
  const geist = Geist({ subsets: ["latin"] });
  ```

- **Streaming y Suspense:** Aprovecha el App Router para hacer streaming de UI con `loading.tsx` y `<Suspense>` en rutas de datos lentos.
- **Terceros:** Minimiza scripts de terceros. Si son necesarios, usa `next/script` con `strategy="lazyOnload"` o `"afterInteractive"`.

---