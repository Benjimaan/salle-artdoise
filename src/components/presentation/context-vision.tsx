"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Target, Shield, Heart, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface VisionCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const visionCards: VisionCard[] = [
  {
    icon: Sparkles,
    title: "Image de marque",
    description:
      "Refléter en ligne le standing et l'élégance du lieu pour créer une première impression mémorable.",
  },
  {
    icon: Target,
    title: "Conversion",
    description:
      "Transformer chaque visiteur en demande de devis qualifiée grâce à un parcours pensé pour convertir.",
  },
  {
    icon: Shield,
    title: "Réassurance",
    description:
      "Inspirer confiance immédiatement avec des témoignages, des visuels immersifs et une navigation fluide.",
  },
  {
    icon: Heart,
    title: "Expérience",
    description:
      "Offrir une expérience digitale émotionnelle qui donne envie de visiter et de réserver.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export default function ContextVision() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projet" className="bg-ivory py-28 lg:py-36">
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
            Vision &amp; Contexte
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={headingVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-anthracite leading-tight mb-6"
          >
            Sublimer le digital à la hauteur du lieu
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={headingVariants}
            className="section-divider mx-auto mb-8"
            aria-hidden="true"
          />

          {/* Intro paragraph */}
          <motion.p
            variants={headingVariants}
            className="text-base sm:text-lg text-taupe max-w-2xl mx-auto leading-relaxed font-sans"
          >
            L&rsquo;Art d&rsquo;Oise est un lieu de réception d&rsquo;exception
            dont le prestige réel méritait une présence digitale à la mesure de
            son standing. Le défi : concevoir un site qui soit à la fois une
            vitrine émotionnelle et un outil de conversion performant.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {visionCards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className={cn(
                  "bg-white rounded-2xl premium-shadow premium-border p-8",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                )}
              >
                {/* Icon circle */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-champagne-light mb-5">
                  <Icon className="h-6 w-6 text-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-anthracite mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-taupe font-sans">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
