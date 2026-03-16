"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button, Separator } from "@heroui/react";
import { ArrowRight, Quote } from "lucide-react";
import { ABOUT } from "@/lib/data/constants";
import Timeline from "@/components/about/Timeline";
import ExpandableQuote from "@/components/about/ExpandableQuote";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.from("[data-about-photo]", {
          x: -50, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%", once: true },
        });
        gsap.from("[data-about-timeline]", {
          x: 50, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%", once: true },
        });
        gsap.from("[data-about-quote]", {
          y: 40, opacity: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: "[data-about-quote]", start: "top 85%", once: true },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="sobre-mi" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-screen-2xl w-full mx-auto px-6 lg:px-10">
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground text-center mb-12 lg:mb-20">
          {ABOUT.title}
        </h2>

        {/* Photo + Timeline — side-by-side desde md (768px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-20 items-start mb-12 lg:mb-24">
          <div
            data-about-photo
            className="relative rounded-2xl overflow-hidden shadow-overlay aspect-3/4 md:aspect-auto md:min-h-96 lg:min-h-128 2xl:min-h-160"
          >
            <Image
              src={ABOUT.image}
              alt="Rubén Baquero — Podólogo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div data-about-timeline className="py-2">
            <Timeline />
          </div>
        </div>

        <Separator className="mb-12 lg:mb-20" />

        {/* Bio as clean quote */}
        <div data-about-quote className="max-w-4xl mx-auto relative">
          <Quote
            size={48}
            className="text-accent-soft absolute -top-4 -left-1 lg:-left-6"
          />
          <div className="pl-6 lg:pl-10">
            <ExpandableQuote text={ABOUT.bio} author="Rubén Baquero, Podólogo" />
          </div>
          <div className="mt-8 lg:mt-10 flex justify-center">
            <a href="#contact" className="group">
              <Button size="lg" className="font-normal text-base">
                Ven a conocernos
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
