"use client";

import { FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/lib/data/constants";

const WhatsAppButton = () => {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
