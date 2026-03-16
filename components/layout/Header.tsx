"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/data/constants";
import MobileMenu from "@/components/layout/MobileMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 border-b ${scrolled
          ? "bg-surface/90 backdrop-blur-xl border-border shadow-surface"
          : "bg-background border-border/50"
          }`}
      >
        <nav className="max-w-screen-2xl w-full mx-auto flex items-center justify-between px-6 py-5 lg:py-6 lg:px-10">
          {/* Logo + Brand */}
          <a href="#hero" className="flex items-center gap-3">
            <Image
              src="/photos/logo.svg"
              alt="Rubén Baquero Podología — Logo"
              width={44}
              height={44}
              className="w-10 h-10 lg:w-15 lg:h-15"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base lg:text-xl font-semibold text-foreground">
                Rubén Baquero
              </span>
              <span className="text-sm font-light text-muted hidden sm:block">
                Biomecánica |{" "}
                <span className="text-accent">Podología</span> | Ecografía
              </span>
            </div>
          </a>

          {/* Desktop Nav — text links only */}
          <ul className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-base font-normal text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle only */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
