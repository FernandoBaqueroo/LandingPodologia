import Image from "next/image";
import { NAV_ITEMS, CONTACT, FOOTER } from "@/lib/data/constants";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-screen-2xl w-full mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand + Logo */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/photos/logo.svg"
                alt="Logo Rubén Baquero"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-semibold">{FOOTER.brand}</span>
                <span className="text-sm font-light opacity-70">
                  {FOOTER.tagline}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium opacity-50 uppercase tracking-wider">
              Navegación
            </span>
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-normal opacity-80 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium opacity-50 uppercase tracking-wider">
              Contacto
            </span>
            <div className="flex flex-col gap-3 text-base font-light opacity-80">
              <span className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0" />
                {CONTACT.address}
              </span>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 hover:opacity-100 transition-opacity"
              >
                <Phone size={16} className="shrink-0" />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 hover:opacity-100 transition-opacity"
              >
                <Mail size={16} className="shrink-0" />
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium opacity-50 uppercase tracking-wider">
              Síguenos
            </span>
            <div className="flex flex-col gap-3">
              {FOOTER.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base font-normal opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.icon === "doctoralia" ? (
                    <Image
                      src="/photos/doctoralia.webp"
                      alt="Doctoralia"
                      width={20}
                      height={20}
                      className="shrink-0 brightness-0 invert"
                    />
                  ) : (
                    <Linkedin size={18} className="shrink-0" />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-sm font-light opacity-50">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
