"use client";

import React from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function FinalCtaSection() {
  return (
    <section className="bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center">
            {/* Decorative gold line */}
            <span
              className="block w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12"
              aria-hidden="true"
            />

            {/* Overtitle */}
            <p className="text-gold text-sm uppercase tracking-widest">
              Votre Réception d&apos;Exception
            </p>

            {/* Main title */}
            <h2 className="font-serif text-3xl md:text-5xl text-white max-w-3xl mx-auto mt-6">
              Écrivez le plus beau chapitre de votre histoire
            </h2>

            {/* Subtitle */}
            <p className="text-white/60 text-lg max-w-xl mx-auto mt-6">
              Contactez-nous dès aujourd&apos;hui pour transformer votre vision
              en une célébration inoubliable.
            </p>

            {/* CTA buttons */}
            <div className="flex gap-4 justify-center flex-wrap mt-10">
              <a
                href="#devis"
                className="bg-gradient-to-r from-gold to-bronze text-white rounded-full px-8 py-4 font-medium transition hover:opacity-90"
              >
                Demander un devis
              </a>
              <a
                href="#prereservation"
                className="border border-white/30 text-white rounded-full px-8 py-4 font-medium hover:bg-white/10 transition"
              >
                Pré-réserver une date
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
