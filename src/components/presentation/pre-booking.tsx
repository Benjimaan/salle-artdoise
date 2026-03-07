"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const headingVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const benefitVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "Simplicité",
    description:
      "Un processus en 3 étapes, sans création de compte ni formulaire complexe",
  },
  {
    title: "Rapidité",
    description:
      "Moins de 2 minutes pour soumettre une demande de pré-réservation complète",
  },
  {
    title: "Accompagnement humain",
    description:
      "Chaque demande est suivie d\u2019un appel personnalisé sous 24h",
  },
  {
    title: "Sans friction",
    description:
      "Aucun engagement ferme : le client se sent libre et en confiance",
  },
];

// Calendar data for Mars 2026
const calendarDays = [
  // Row 1: starts on Sunday
  { day: null }, { day: null }, { day: null }, { day: null }, { day: null }, { day: null }, { day: 1, status: "available" },
  // Row 2
  { day: 2, status: "available" }, { day: 3, status: "available" }, { day: 4, status: "available" }, { day: 5, status: "available" }, { day: 6, status: "available" }, { day: 7, status: "reserved" }, { day: 8, status: "available" },
  // Row 3
  { day: 9, status: "available" }, { day: 10, status: "available" }, { day: 11, status: "available" }, { day: 12, status: "available" }, { day: 13, status: "available" }, { day: 14, status: "option" }, { day: 15, status: "available" },
  // Row 4
  { day: 16, status: "available" }, { day: 17, status: "available" }, { day: 18, status: "available" }, { day: 19, status: "available" }, { day: 20, status: "available" }, { day: 21, status: "selected" }, { day: 22, status: "available" },
  // Row 5
  { day: 23, status: "available" }, { day: 24, status: "available" }, { day: 25, status: "available" }, { day: 26, status: "option" }, { day: 27, status: "available" }, { day: 28, status: "reserved" }, { day: 29, status: "available" },
  // Row 6
  { day: 30, status: "available" }, { day: 31, status: "available" }, { day: null }, { day: null }, { day: null }, { day: null }, { day: null },
] as const;

const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

function getStatusClasses(status: string | undefined) {
  switch (status) {
    case "selected":
      return "bg-gold text-dark font-semibold ring-2 ring-gold/30";
    case "reserved":
      return "bg-charcoal/10 text-charcoal/40 line-through";
    case "option":
      return "bg-amber-100 text-amber-700";
    default:
      return "text-anthracite hover:bg-champagne-light/50";
  }
}

export default function PreBooking() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-cream py-28 lg:py-36">
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
            Pré-réservation
          </motion.span>

          <motion.h2
            variants={headingVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-anthracite leading-tight mb-6"
          >
            Réserver n&rsquo;a jamais été aussi simple
          </motion.h2>

          <motion.div
            variants={headingVariants}
            className="section-divider mx-auto mb-8"
            aria-hidden="true"
          />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: Text Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            }}
          >
            <motion.p
              variants={leftVariants}
              className="text-base sm:text-lg text-taupe leading-relaxed font-sans mb-10"
            >
              Le système de pré-réservation permet aux futurs clients de bloquer
              une date en quelques clics, sans engagement ferme. Une approche
              rassurante qui favorise le passage à l&rsquo;action.
            </motion.p>

            <div className="space-y-6">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={benefitVariants}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-anthracite mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-taupe font-sans leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Calendar Mockup */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={rightVariants}
          >
            <div className="bg-white rounded-2xl premium-shadow-lg border border-beige/50 p-6 sm:p-8">
              {/* Month Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  type="button"
                  className="h-8 w-8 rounded-full flex items-center justify-center text-taupe hover:bg-champagne-light/50 transition-colors cursor-default"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <h4 className="font-serif text-lg text-anthracite">
                  Mars 2026
                </h4>
                <button
                  type="button"
                  className="h-8 w-8 rounded-full flex items-center justify-center text-taupe hover:bg-champagne-light/50 transition-colors cursor-default"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((d) => (
                  <div
                    key={d}
                    className="text-center text-[11px] font-sans font-medium uppercase tracking-wider text-taupe/60 py-1"
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((cell, i) => (
                  <div
                    key={i}
                    className={cn(
                      "aspect-square flex items-center justify-center rounded-lg text-sm font-sans transition-colors cursor-default",
                      cell.day ? getStatusClasses(cell.status) : ""
                    )}
                  >
                    {cell.day ?? ""}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-4 mt-5 pt-5 border-t border-beige/40">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-gold" />
                  <span className="text-[11px] font-sans text-taupe">
                    Sélectionné
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-100 border border-amber-300" />
                  <span className="text-[11px] font-sans text-taupe">
                    En option
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-charcoal/20" />
                  <span className="text-[11px] font-sans text-taupe">
                    Réservé
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-gold px-6 py-3 text-sm font-sans font-medium text-dark transition-colors cursor-default"
              >
                Pré-réserver cette date
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
