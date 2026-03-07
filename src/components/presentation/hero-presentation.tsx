"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function HeroPresentation() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/clearpix_1772783477746.png"
          alt="Salle de réception Art d'Oise — cadre prestigieux"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl"
      >
        {/* Label */}
        <motion.span
          variants={childVariants}
          className="text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-6"
        >
          Présentation Projet
        </motion.span>

        {/* Gold decorative line */}
        <motion.div
          variants={childVariants}
          className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
          aria-hidden="true"
        />

        {/* Title */}
        <motion.h1
          variants={childVariants}
          className="font-serif text-white leading-[1.1] mb-8"
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
            Art d&rsquo;Oise
          </span>
          <span className="block mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-champagne-light/90 leading-snug font-light max-w-4xl mx-auto">
            Une expérience digitale à la hauteur
            <br className="hidden sm:block" />
            de vos réceptions d&rsquo;exception
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={childVariants}
          className="text-base sm:text-lg md:text-xl text-champagne-light/70 max-w-3xl leading-relaxed mb-12 font-sans"
        >
          Conception et développement d&rsquo;un site vitrine premium pour
          sublimer l&rsquo;un des lieux de réception les plus prestigieux de
          l&rsquo;Oise
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projet"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 font-sans font-medium text-dark text-sm tracking-wide transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-lg"
          >
            Découvrir le projet
          </a>
          <a
            href="https://salle-artdoise.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-4 font-sans font-medium text-white text-sm tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            Voir le site en ligne
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-white/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
