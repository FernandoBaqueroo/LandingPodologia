"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@heroui/react";
import { Phone, ArrowDown } from "lucide-react";
import { HERO } from "@/lib/data/constants";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero-title]", { y: 60, opacity: 0, duration: 1 })
          .from("[data-hero-text]", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
          .from("[data-hero-cta]", { y: 30, opacity: 0, stagger: 0.15, duration: 0.6 }, "-=0.4")
          .from("[data-hero-image]", { x: 60, opacity: 0, duration: 1 }, "-=1");
      });
      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero-title]", { y: 40, opacity: 0, duration: 0.8 })
          .from("[data-hero-text]", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
          .from("[data-hero-cta]", { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.3")
          .from("[data-hero-image]", { y: 40, opacity: 0, duration: 0.8 }, "-=0.6");
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="inicio" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden bg-background">
      <div className="max-w-screen-2xl w-full mx-auto px-6 lg:px-10 py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left order-2 lg:order-1">
            <h1
              data-hero-title
              className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight"
            >
              {HERO.title}
            </h1>
            <p
              data-hero-text
              className="text-base lg:text-xl font-light text-muted leading-relaxed"
            >
              {HERO.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-2">
              <a href="tel:914651911" data-hero-cta className="group w-full sm:w-auto">
                <Button size="lg" fullWidth className="sm:w-auto font-normal text-base">
                  <Phone size={18} />
                  {HERO.ctaPrimary}
                </Button>
              </a>
              <a href="#about" data-hero-cta className="group w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  className="sm:w-auto font-normal text-base"
                >
                  {HERO.ctaSecondary}
                  <ArrowDown
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </Button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            data-hero-image
            className="relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-overlay aspect-4/3 lg:aspect-auto lg:min-h-96 2xl:min-h-128"
          >
            <Image
              src="/photos/inicio (2).webp"
              alt="Consulta podológica profesional"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
