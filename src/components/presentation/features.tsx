"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Images,
  Building,
  FileText,
  Calendar,
  Users,
  MapPin,
  Star,
  MessageCircle,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Images,
    title: "Galerie immersive",
    description:
      "Navigation fluide entre les photos avec filtres par catégorie et lightbox plein écran",
  },
  {
    icon: Building,
    title: "Présentation des espaces",
    description:
      "Chaque espace détaillé avec surface, capacité et usages pour aider à la projection",
  },
  {
    icon: FileText,
    title: "Devis intelligent",
    description:
      "Formulaire multi-étapes guidé qui qualifie la demande en moins de 2 minutes",
  },
  {
    icon: Calendar,
    title: "Pré-réservation",
    description:
      "Système intuitif permettant de bloquer une date et d'initier le processus",
  },
  {
    icon: Users,
    title: "Capacités détaillées",
    description:
      "Informations claires sur les capacités d'accueil de chaque configuration",
  },
  {
    icon: MapPin,
    title: "Informations pratiques",
    description:
      "Accès, localisation et détails logistiques présentés de manière claire",
  },
  {
    icon: Star,
    title: "Réassurance client",
    description:
      "Témoignages vérifiés, chiffres clés et FAQ pour lever toutes les objections",
  },
  {
    icon: MessageCircle,
    title: "Contact rapide",
    description:
      "Multiple points de contact accessibles à tout moment de la navigation",
  },
  {
    icon: Smartphone,
    title: "Mobile premium",
    description:
      "Expérience optimisée sur mobile avec un design adapté et des performances natives",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fonctionnalites" ref={ref} className="bg-champagne-light py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            variants={childVariants}
            className="inline-block text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-5"
          >
            Fonctionnalités clés
          </motion.span>

          <motion.h2
            variants={childVariants}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-anthracite leading-tight mb-6"
          >
            Chaque détail au service de la conversion
          </motion.h2>

          <motion.div
            variants={childVariants}
            className="section-divider mx-auto"
            aria-hidden="true"
          />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl premium-shadow premium-border p-7 transition-shadow duration-300 hover:premium-shadow-lg group cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-champagne-light flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-5 h-5 text-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg text-anthracite mb-2 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-taupe font-sans leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
