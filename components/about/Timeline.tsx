"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Chip } from "@heroui/react";
import { MapPin, Calendar } from "lucide-react";
import { TIMELINE } from "@/lib/data/constants";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.from("[data-timeline-card]", {
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        });
        gsap.from("[data-timeline-line]", {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.from("[data-timeline-card]", {
          y: 30,
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
    <div ref={containerRef} className="h-full py-4">
      <div className="relative h-full flex flex-col">
        {/* Vertical line */}
        <div
          data-timeline-line
          className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-accent/30 rounded-full"
        />

        <div className="h-full flex flex-col justify-between">
          {TIMELINE.map((item, index) => (
            <div
              key={index}
              data-timeline-card
              className="relative pl-16 lg:pl-20"
            >
              {/* Numbered dot */}
              <div className="absolute left-3.5 lg:left-5.5 top-3 flex items-center justify-center w-5 h-5 rounded-full bg-accent text-accent-foreground ring-4 ring-surface z-10">
                <span className="text-xs font-medium">{index + 1}</span>
              </div>

              {/* Content — no card, just clean layout with bottom border */}
              <div className="pb-5 border-b border-border/60 last:border-b-0">
                <Chip color="accent" variant="soft" size="sm" className="mb-2">
                  <Calendar size={12} />
                  <Chip.Label>{item.year}</Chip.Label>
                </Chip>
                <h3 className="text-base lg:text-lg font-medium text-foreground mb-1">
                  {item.title}
                </h3>
                <span className="flex items-center gap-1.5 text-sm font-light text-muted">
                  <MapPin size={13} className="shrink-0 text-accent/60" />
                  {item.institution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
