"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface LazyMapProps {
  embedUrl: string;
}

const LazyMap = ({ embedUrl }: LazyMapProps) => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de la clínica en Google Maps"
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="relative w-full h-full group cursor-pointer"
      aria-label="Cargar mapa de Google Maps"
    >
      {/* Static placeholder image */}
      <Image
        src="/photos/map-placeholder.webp"
        alt="Ubicación de la clínica"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />

      {/* Overlay with CTA */}
      <div className="absolute inset-0 bg-foreground/30 flex flex-col items-center justify-center gap-3 transition-colors group-hover:bg-foreground/40">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-surface shadow-overlay">
          <MapPin size={24} className="text-accent" />
        </div>
        <span className="text-sm font-medium text-white drop-shadow-md">
          Pulsa para cargar el mapa
        </span>
      </div>
    </button>
  );
};

export default LazyMap;
