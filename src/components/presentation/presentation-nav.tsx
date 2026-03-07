"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Projet", href: "#projet" },
  { label: "Solution", href: "#solution" },
  { label: "Fonctionnalit\u00e9s", href: "#fonctionnalites" },
  { label: "Impact", href: "#impact" },
];

export default function PresentationNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-header" : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="/presentation" className="text-gradient-gold font-serif text-xl lg:text-2xl font-bold tracking-tight">
          BF Studio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-sans font-medium tracking-wide transition-colors duration-200",
                scrolled ? "text-anthracite hover:text-gold" : "text-anthracite/80 hover:text-gold"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact Button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:inline-flex bg-gold text-dark text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gold-light transition-colors duration-300"
        >
          Contact
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-anthracite" />
          ) : (
            <Menu className="h-5 w-5 text-anthracite" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="md:hidden absolute top-full left-0 right-0 glass-header border-t border-beige/20"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-sans font-medium text-anthracite hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex justify-center bg-gold text-dark text-sm font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
