"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Home, Compass } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NotFound = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-404-icon]", { scale: 0, rotation: -20, duration: 1, ease: "back.out(1.7)" })
        .from("[data-404-title]", { y: 40, opacity: 0, duration: 0.8 }, "-=0.4")
        .from("[data-404-text]", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from("[data-404-cta]", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background overflow-hidden"
    >
      <div className="relative mb-8">
        <div 
          data-404-icon
          className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-accent/5 flex items-center justify-center border border-accent/20"
        >
          <Compass size={48} className="text-accent lg:size-16" />
        </div>
        <div className="absolute -top-2 -right-2 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-soft">
          404
        </div>
      </div>

      <h1 
        data-404-title
        className="text-4xl lg:text-6xl font-semibold text-foreground mb-4 tracking-tight"
      >
        Página no encontrada
      </h1>
      
      <p 
        data-404-text
        className="text-lg lg:text-xl font-light text-muted max-w-lg mb-10 leading-relaxed"
      >
        Lo sentimos, la página que buscas no existe o ha sido movida. 
        Tus pies están en buenas manos, solo falta encontrar el camino correcto.
      </p>

      <div data-404-cta>
        <Link href="/">
          <Button
            size="lg"
            className="font-medium text-base shadow-soft hover:shadow-overlay transition-shadow"
          >
            <Home size={18} className="mr-2" />
            Volver al inicio
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
