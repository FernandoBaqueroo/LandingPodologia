import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import GsapProvider from "@/components/providers/GsapProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://podologiarrubenbaquero.com"),
  title: "Podólogo en Carabanchel | Rubén Baquero",
  description:
    "Clínica de podología en Carabanchel, Madrid. Especialistas en biomecánica, ecografía del pie, plantillas a medida y cirugía podológica. Más de 9 años de experiencia.",
  icons: {
    icon: "/photos/favicon-round.png",
    apple: "/photos/favicon-round.png",
  },
  openGraph: {
    title: "Podólogo en Carabanchel | Rubén Baquero",
    description:
      "Clínica de podología en Carabanchel, Madrid. Especialistas en biomecánica, ecografía y plantillas a medida.",
    locale: "es_ES",
    type: "website",
  },
};

const RootLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="es" className="light scroll-smooth" data-theme="light">
      <body className={`${poppins.className} bg-background text-foreground`}>
        <GsapProvider>
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
