import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import GsapProvider from "@/components/providers/GsapProvider";
import ScrollHandler from "@/components/layout/ScrollHandler";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://podologiarubenbaquero.com"),
  title: "Podólogo en Carabanchel | Rubén Baquero",
  description:
    "Clínica de podología en Carabanchel, Madrid. Especialistas en biomecánica, ecografía del pie, plantillas a medida y cirugía podológica. Más de 9 años de experiencia.",
  keywords: [
    "podólogo Carabanchel",
    "podología Carabanchel",
    "podologo Madrid sur",
    "biomecánica del pie",
    "plantillas personalizadas Madrid",
    "uñas encarnadas Carabanchel",
    "ecografía pie Carabanchel",
    "clínica podología Madrid",
    "Rubén Baquero podólogo",
  ],
  icons: {
    icon: "/photos/favicon-round.webp",
    apple: "/photos/favicon-round.webp",
  },
  openGraph: {
    title: "Podólogo en Carabanchel | Rubén Baquero",
    description:
      "Clínica de podología en Carabanchel, Madrid. Especialistas en biomecánica, ecografía y plantillas a medida.",
    url: "https://podologiarubenbaquero.com",
    siteName: "Podología Rubén Baquero",
    locale: "es_ES",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "Podología y Biomecánica Rubén Baquero",
  description:
    "Clínica de podología en Carabanchel, Madrid. Especialistas en biomecánica, ecografía del pie, plantillas a medida y cirugía podológica.",
  url: "https://podologiarubenbaquero.com",
  telephone: "+34914651911",
  email: "podologocarabanchel@gmail.com",
  image: "https://podologiarubenbaquero.com/photos/inicio (2).webp",
  priceRange: "€€",
  medicalSpecialty: "Podology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle de Tucán, 7 Local, D-1, D-2",
    addressLocality: "Carabanchel",
    addressRegion: "Madrid",
    postalCode: "28025",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.3901365,
    longitude: -3.7389468,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Friday"],
      opens: "09:30",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Friday"],
      opens: "16:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.doctoralia.es/ruben-baquero-zamora-2/podologo/madrid",
    "https://www.linkedin.com/in/rub%C3%A9n-baquero-zamora-3aa516107/",
  ],
  founder: {
    "@type": "Person",
    name: "Rubén Baquero Zamora",
    jobTitle: "Podólogo",
  },
};

const RootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="es" className="light scroll-smooth" data-theme="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} bg-background text-foreground`}>
        <GsapProvider>
          <ScrollHandler />
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
          <Analytics />
          <SpeedInsights />
        </GsapProvider>
      </body>
    </html>
  );
};

export default RootLayout;
