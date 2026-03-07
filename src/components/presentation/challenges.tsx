"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Challenge {
  number: string;
  title: string;
  description: string;
}

const challenges: Challenge[] = [
  {
    number: "01",
    title: "Prestige digital",
    description:
      "Refléter fidèlement le prestige et la qualité réelle de la salle dans l'espace numérique",
  },
  {
    number: "02",
    title: "Première impression",
    description:
      "Inspirer confiance et émotion dès les premières secondes de navigation sur le site",
  },
  {
    number: "03",
    title: "Simplification devis",
    description:
      "Rendre la demande de devis intuitive, rapide et sans friction pour maximiser les conversions",
  },
  {
    number: "04",
    title: "Pré-réservation fluide",
    description:
      "Permettre aux clients de pré-réserver facilement et de se projeter dans leur événement",
  },
  {
    number: "05",
    title: "Envie de visite",
    description:
      "Créer une envie irrésistible de découvrir le lieu en personne grâce au storytelling visuel",
  },
  {
    number: "06",
    title: "Leads qualifiés",
    description:
      "Augmenter significativement le volume de demandes qualifiées et pertinentes",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Challenges() {
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
          {/* Overtitle */}
          <motion.span
            variants={headingVariants}
            className="inline-block text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-4"
          >
            Enjeux Stratégiques
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={headingVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-anthracite leading-tight mb-6"
          >
            Les défis d&rsquo;une présence digitale premium
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={headingVariants}
            className="section-divider mx-auto"
            aria-hidden="true"
          />
        </motion.div>

        {/* Challenge Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.number}
              variants={cardVariants}
              className={cn(
                "relative bg-white rounded-2xl premium-shadow premium-border p-8 pt-12",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
                "overflow-hidden"
              )}
            >
              {/* Large faded number */}
              <span
                className="absolute -top-3 -left-1 font-serif text-8xl font-bold text-gold/10 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                {challenge.number}
              </span>

              {/* Small gold number */}
              <span className="relative inline-block font-serif text-sm font-semibold text-gold mb-3 tracking-wide">
                {challenge.number}
              </span>

              {/* Title */}
              <h3 className="relative font-serif text-xl text-anthracite mb-3">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="relative text-sm leading-relaxed text-taupe font-sans">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
