import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@heroui/react";
import { CONTACT } from "@/lib/data/constants";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <Card.Content className="flex flex-col gap-5">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 shrink-0">
              <MapPin size={20} className="text-accent" />
            </div>
            <span className="text-base font-light text-foreground leading-relaxed">
              {CONTACT.address}
            </span>
          </div>

          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-center gap-4 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 shrink-0">
              <Phone size={20} className="text-accent" />
            </div>
            <span className="text-base font-normal text-foreground group-hover:text-accent transition-colors">
              {CONTACT.phone}
            </span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-4 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 shrink-0">
              <Mail size={20} className="text-accent" />
            </div>
            <span className="text-base font-normal text-foreground group-hover:text-accent transition-colors">
              {CONTACT.email}
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 shrink-0">
              <Clock size={20} className="text-accent" />
            </div>
            <span className="text-base font-light text-foreground">
              {CONTACT.hours}
            </span>
          </div>
        </Card.Content>
      </Card>

      {/* Google Maps iframe */}
      <div className="rounded-2xl overflow-hidden shadow-overlay aspect-4/3">
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
    </div>
  );
};

export default ContactInfo;
