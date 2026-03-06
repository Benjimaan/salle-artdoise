"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-500",
          scrolled ? "glass-header text-charcoal shadow-lg" : "bg-transparent text-white"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <a href="#" className="font-serif text-xl tracking-wider">
            {SITE_NAME}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-sans text-sm uppercase tracking-widest transition-colors duration-300 hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#devis"
              className={cn(
                "rounded-full border px-5 py-2 font-sans text-xs uppercase tracking-widest transition-all duration-300",
                scrolled
                  ? "border-charcoal/30 text-charcoal hover:border-gold hover:text-gold"
                  : "border-white/40 text-white hover:border-gold hover:text-gold"
              )}
            >
              Demander un devis
            </a>
            <a
              href="#prereservation"
              className="rounded-full bg-gold px-5 py-2 font-sans text-xs uppercase tracking-widest text-white transition-all duration-300 hover:bg-bronze"
            >
              Pre-reserver
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-dark text-white"
          >
            {/* Close button */}
            <div className="flex justify-end px-6 py-4">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="font-serif text-2xl tracking-wider transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile CTAs */}
              <div className="mt-8 flex flex-col items-center gap-4">
                <a
                  href="#devis"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-white/30 px-8 py-3 font-sans text-sm uppercase tracking-widest transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  Demander un devis
                </a>
                <a
                  href="#prereservation"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-gold px-8 py-3 font-sans text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-bronze"
                >
                  Pre-reserver
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
