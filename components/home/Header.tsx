"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-secondary/20 bg-surface/90 backdrop-blur">
      <div className="flex w-full items-center gap-6 px-4 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-3 font-heading text-2xl uppercase tracking-widest">
          <Image
            src="/Logo.jpeg"
            alt="Baba Farid Roofing logo"
            width={56}
            height={56}
            quality={100}
            sizes="56px"
            className="h-14 w-14 rounded-md object-cover shadow-sm ring-1 ring-secondary/20"
            priority
          />
          <span className="font-bold text-primary">Baba Farid Roofing</span>
        </a>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/20 text-primary transition hover:border-primary/40 hover:bg-primary/5 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
        <nav className="ml-auto hidden flex-1 flex-wrap items-center justify-end gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wide sm:text-sm lg:flex lg:gap-x-8">
          <a href="#services" className="hover:text-primary">
            Services
          </a>
          <a href="#reviews" className="hover:text-primary">
            Reviews
          </a>
          <a href="#feedback" className="hover:text-primary">
            Feedback
          </a>
          <a href="#projects" className="hover:text-primary">
            Projects
          </a>
          <a href="#faq" className="hover:text-primary">
            FAQ
          </a>
          <a href="#enquiry" className="rounded-full bg-primary px-4 py-2 text-on-primary hover:bg-primary/90">
            Free Quote
          </a>
        </nav>
      </div>
      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-secondary/10 px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-3 text-sm font-bold uppercase tracking-wide">
            <a href="#services" className="hover:text-primary" onClick={closeMenu}>
              Services
            </a>
            <a href="#reviews" className="hover:text-primary" onClick={closeMenu}>
              Reviews
            </a>
            <a href="#feedback" className="hover:text-primary" onClick={closeMenu}>
              Feedback
            </a>
            <a href="#projects" className="hover:text-primary" onClick={closeMenu}>
              Projects
            </a>
            <a href="#faq" className="hover:text-primary" onClick={closeMenu}>
              FAQ
            </a>
            <a
              href="#enquiry"
              className="mt-1 inline-flex w-fit rounded-full bg-primary px-4 py-2 text-on-primary hover:bg-primary/90"
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
