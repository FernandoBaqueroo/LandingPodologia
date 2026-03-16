import Image from "next/image";
import { Card } from "@heroui/react";
import type { ServiceItem } from "@/lib/data/constants";

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden p-0 hover:shadow-overlay transition-shadow duration-300">
      {/* Image with overlay gradient on hover */}
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <Card.Header className="px-6 pt-5 pb-1">
        <Card.Title className="text-lg lg:text-xl group-hover:text-accent transition-colors duration-300">
          {service.title}
        </Card.Title>
      </Card.Header>
      <Card.Content className="px-6 pb-6">
        <p className="text-base font-light text-muted leading-relaxed">
          {service.description}
        </p>
      </Card.Content>
    </Card>
  );
};

export default ServiceCard;
