"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const headingVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const eventOptions = [
  { label: "Mariage", selected: true },
  { label: "Réception privée", selected: false },
  { label: "Événement corporate", selected: false },
  { label: "Anniversaire", selected: false },
];

const stepBadges = [
  "Type d\u2019événement",
  "Nombre d\u2019invités",
  "Date souhaitée",
  "Besoins spécifiques",
  "Budget indicatif",
];

export default function QuoteMockup() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-ivory py-28 lg:py-36">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="text-center mb-20"
        >
          <motion.span
            variants={headingVariants}
            className="inline-block text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-4"
          >
            Devis intelligent
          </motion.span>

          <motion.h2
            variants={headingVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-anthracite leading-tight mb-6"
          >
            Un formulaire pensé pour convertir
          </motion.h2>

          <motion.div
            variants={headingVariants}
            className="section-divider mx-auto mb-8"
            aria-hidden="true"
          />

          <motion.p
            variants={headingVariants}
            className="text-base sm:text-lg text-taupe max-w-2xl mx-auto leading-relaxed font-sans"
          >
            En seulement 8 étapes intuitives, le visiteur qualifie sa demande
            sans effort.
          </motion.p>
        </motion.div>

        {/* Form Mockup Card */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          className="mx-auto max-w-3xl"
        >
          <div className="bg-white rounded-3xl premium-shadow-lg border border-beige/50 p-8 sm:p-10">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-sans font-medium text-taupe uppercase tracking-wider">
                  Étape 3 sur 8
                </span>
                <span className="text-xs font-sans font-medium text-gold">
                  37%
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-beige/40">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                  style={{ width: "37.5%" }}
                />
              </div>
            </div>

            {/* Step Label */}
            <h3 className="font-serif text-xl sm:text-2xl text-anthracite mb-6">
              Type d&rsquo;événement
            </h3>

            {/* Option Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {eventOptions.map((option) => (
                <div
                  key={option.label}
                  className={cn(
                    "relative rounded-xl border-2 px-5 py-4 text-center font-sans text-sm transition-all cursor-default",
                    option.selected
                      ? "border-gold bg-champagne-light/40 text-anthracite font-medium"
                      : "border-beige/60 bg-white text-taupe hover:border-beige"
                  )}
                >
                  {option.selected && (
                    <div className="absolute top-2.5 right-2.5 h-4 w-4 rounded-full bg-gold flex items-center justify-center">
                      <svg
                        viewBox="0 0 12 12"
                        className="h-2.5 w-2.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="2.5 6 5 8.5 9.5 3.5" />
                      </svg>
                    </div>
                  )}
                  {option.label}
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-beige px-6 py-2.5 text-sm font-sans font-medium text-taupe transition-colors cursor-default"
              >
                <ChevronLeft className="h-4 w-4" />
                Précédent
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-sans font-medium text-dark transition-colors cursor-default"
              >
                Suivant
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Step Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === 2
                      ? "w-6 bg-gold"
                      : i < 2
                        ? "w-2 bg-gold/40"
                        : "w-2 bg-beige/60"
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Step Badges */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.5 },
            },
          }}
          className="flex flex-wrap items-center justify-center gap-3 mt-12"
        >
          {stepBadges.map((badge) => (
            <motion.span
              key={badge}
              variants={badgeVariants}
              className="rounded-full bg-champagne-light text-bronze px-4 py-1.5 text-sm font-sans"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
