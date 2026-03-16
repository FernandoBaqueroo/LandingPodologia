"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/lib/data/constants";
import ServiceCard from "@/components/services/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.from("[data-service-card]", {
          y: 60,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.from("[data-service-card]", {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-20 lg:py-32 bg-background"
    >
      <div className="max-w-screen-2xl w-full mx-auto px-6 lg:px-10">
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground text-center mb-5">
          Servicios
        </h2>
        <p className="text-lg lg:text-xl font-light text-muted text-center max-w-2xl mx-auto mb-14 lg:mb-20">
          Ofrecemos una amplia gama de tratamientos podológicos con tecnología
          avanzada y atención personalizada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, index) => (
            <div key={index} data-service-card>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
