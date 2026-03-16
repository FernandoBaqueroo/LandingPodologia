"use client";

import { Button } from "@heroui/react";
import { X, Phone } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data/constants";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-surface shadow-overlay transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="text-lg font-semibold text-foreground">Menú</span>
          <button
            onClick={onClose}
            className="p-2 text-foreground"
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="px-4 py-3 rounded-lg text-base font-normal text-foreground hover:bg-default transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <a href="tel:914651911">
            <Button fullWidth className="font-normal">
              <Phone size={16} />
              Pedir Cita
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
