"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, TreePine, Car, Heart, ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const trustBadges = [
  { icon: Users, label: "Jusqu'à 850 invités" },
  { icon: TreePine, label: "Terrasse & extérieurs" },
  { icon: Car, label: "Parking sur place" },
  { icon: Heart, label: "Mariages & réceptions" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/clearpix_1772783477746.png"
          alt="Grande salle de réception L'Art d'Oise avec lustres et tables dressées"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Overtitle */}
        <motion.span
          variants={childVariants}
          className="text-sm font-sans uppercase tracking-widest text-champagne-light mb-6"
        >
          Lieu de réception d&rsquo;exception — Saint-Maximin
        </motion.span>

        {/* Main title */}
        <motion.h1
          variants={childVariants}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-tight mb-6"
        >
          Là où vos plus beaux instants prennent vie
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={childVariants}
          className="text-lg text-champagne-light/80 max-w-2xl leading-relaxed mb-10"
        >
          Célébrez votre mariage dans un cadre prestigieux de 750&nbsp;m²,
          sublimé par une terrasse de 300&nbsp;m² et des espaces
          d&rsquo;exception.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <a
            href="#devis"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold via-bronze to-gold px-8 py-4 font-sans font-medium text-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Demander un devis
          </a>
          <a
            href="#espaces"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-4 font-sans font-medium text-white transition-colors duration-300 hover:bg-white/10"
          >
            Découvrir le lieu
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={childVariants}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 text-sm text-white/70"
            >
              <Icon className="h-4 w-4" />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-white/50" />
      </motion.div>
    </section>
  );
}
