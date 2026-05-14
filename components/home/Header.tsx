"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from '@/public/Logo.jpeg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Feedback", href: "#feedback" },
    { label: "Projects", href: "#projects" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="flex w-full items-center gap-6 px-4 py-3 sm:px-8">
        <a href="#home" className="group flex items-center gap-3 font-heading text-xl uppercase tracking-wider">
          <Image
            src={Logo}
            alt="Baba Faarid Roofing logo"
            width={112}
            height={112}
            priority
            className="rounded-sm object-cover w-14 h-14"
          />
          <span className="font-bold text-primary hidden sm:block">Baba Faarid Roofing</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden flex-1 flex-wrap items-center justify-end gap-x-8 gap-y-2 text-xs font-bold uppercase tracking-wide sm:text-sm lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-secondary hover:text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            className="rounded-full bg-gradient-to-r from-primary to-primary/80 px-6 py-2.5 text-on-primary hover:shadow-lg hover:shadow-primary/30 hover:scale-105 font-bold transition-all"
          >
            Free Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 text-primary hover:bg-primary/10 lg:hidden transition-colors"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-primary/10 bg-white/98 backdrop-blur px-4 py-4 animate-in fade-in slide-in-from-top-2 duration-300 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-bold uppercase tracking-wide text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquiry"
              className="mt-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-4 py-2.5 text-center text-sm font-bold uppercase text-on-primary hover:shadow-lg hover:shadow-primary/30 transition-all"
              onClick={closeMenu}
            >
              Free Quote
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
