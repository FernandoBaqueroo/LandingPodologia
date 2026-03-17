"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { ScheduleModal } from "./ScheduleModal";
import { CONTACT } from "@/lib/data/constants";
import ContactForm from "@/components/contact/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const WhatsAppContactIcon = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <FaWhatsapp size={size} className={className} />
);

const CONTACT_ITEMS = [
  { icon: MapPin, label: "Dirección", value: CONTACT.address },
  { icon: Clock, label: "Horario", value: CONTACT.hours },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Teléfono", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { icon: WhatsAppContactIcon, label: "WhatsApp", value: "Enviar mensaje", href: CONTACT.whatsappUrl },
];

const ContactSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.from("[data-contact-item]", {
          y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: "[data-contact-row]", start: "top 85%", once: true },
        });
        gsap.from("[data-contact-map]", {
          scale: 0.95, opacity: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: "[data-contact-map]", start: "top 85%", once: true },
        });
        gsap.from("[data-contact-form]", {
          y: 40, opacity: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: "[data-contact-form]", start: "top 85%", once: true },
        });
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.from("[data-contact-item], [data-contact-map], [data-contact-form]", {
          y: 25, opacity: 0, stagger: 0.1, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 85%", once: true },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="ubicacion" className="py-20 lg:py-32 bg-surface">
      <div className="max-w-screen-2xl w-full mx-auto px-6 lg:px-10">
        <h2 className="text-3xl lg:text-5xl font-semibold text-foreground text-center mb-5">
          {CONTACT.title}
        </h2>
        <p className="text-lg lg:text-xl font-light text-muted text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          Estamos en Carabanchel, Madrid. Pide tu cita y te atenderemos encantados.
        </p>

        {/* Contact info — symmetrical grid of cards */}
        <div
          data-contact-row
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-16 lg:mb-24"
        >
          {CONTACT_ITEMS.map((item) => {
            const Icon = item.icon;
            const isInteractive = !!item.href || item.label === "Horario";
            const content = (
              <div className={`flex flex-col items-center justify-center text-center gap-4 p-6 lg:p-8 h-full rounded-2xl bg-background border border-border hover:border-accent hover:shadow-soft transition-all duration-400 group ${isInteractive ? "cursor-pointer" : ""}`}>
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-surface border border-border shrink-0 group-hover:bg-accent/5 group-hover:border-accent transition-all duration-300">
                  <Icon size={24} className="text-accent" />
                </div>
                <div className="flex flex-col items-center gap-2 w-full min-w-0 overflow-hidden">
                  <p className="text-[10px] lg:text-xs text-muted font-semibold uppercase tracking-[0.2em] truncate w-full">
                    {item.label}
                  </p>
                  <span className={`block text-sm lg:text-base leading-relaxed break-all w-full text-center max-w-full ${item.label === "Horario" ? "text-accent font-medium underline underline-offset-4 decoration-accent/60" : "text-foreground font-normal"}`}>
                    {item.value}
                  </span>
                </div>
              </div>
            );

            if (item.href) {
              const isExternal = item.href.startsWith("https");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  data-contact-item
                  className="block h-full"
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {content}
                </a>
              );
            }
            if (item.label === "Horario") {
              return (
                <button
                  key={item.label}
                  onClick={() => setIsScheduleOpen(true)}
                  data-contact-item
                  className="block h-full w-full text-left"
                >
                  {content}
                </button>
              );
            }

            return (
              <div key={item.label} data-contact-item className="h-full">
                {content}
              </div>
            );
          })}
        </div>

        <ScheduleModal isOpen={isScheduleOpen} onOpenChange={setIsScheduleOpen} />

        {/* Map + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">
          <div
            data-contact-map
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-overlay aspect-video lg:aspect-auto lg:min-h-128"
          >
            <iframe
              src={CONTACT.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la clínica en Google Maps"
            />
          </div>

          <div data-contact-form className="lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-2">
              Envíanos un mensaje
            </h3>
            <p className="text-base font-light text-muted mb-6">
              Rellena el formulario y nos pondremos en contacto contigo.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
