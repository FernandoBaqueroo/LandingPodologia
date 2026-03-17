"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Solo manejamos las rutas de secciones definidas
    const sections = ["/inicio", "/sobre-mi", "/servicios", "/ubicacion"];
    
    if (sections.includes(pathname)) {
      const targetId = pathname === "/inicio" ? "inicio" : pathname.replace("/", "");
      
      // Pequeño delay para asegurar que el DOM está listo y GSAP/ScrollTrigger han cargado
      const timeoutId = setTimeout(() => {
        if (targetId === "inicio") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
};

export default ScrollHandler;
