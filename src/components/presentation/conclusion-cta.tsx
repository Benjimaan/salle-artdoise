"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

export default function ConclusionCta() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/clearpix_1772783592605.png"
        alt="Salle Art d'Oise"
        fill
        className="object-cover"
        quality={90}
        priority={false}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark/70" aria-hidden="true" />

      {/* Content */}
      <div ref={sectionRef} className="relative z-10 mx-auto max-w-4xl px-6 py-28 lg:py-36 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Overtitle */}
          <motion.span
            variants={childVariants}
            className="inline-block text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-5"
          >
            Pr&ecirc;t &agrave; d&eacute;marrer ?
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={childVariants}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6"
          >
            Donnons vie &agrave; l&rsquo;exp&eacute;rience digitale que m&eacute;rite Art d&rsquo;Oise
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg text-beige max-w-2xl mx-auto leading-relaxed font-sans mb-10"
          >
            Un projet pens&eacute; avec exigence, con&ccedil;u pour durer et transformer chaque visite en opportunit&eacute;.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gold text-dark font-semibold px-10 py-4 rounded-full hover:bg-gold-light transition-colors duration-300 text-sm sm:text-base tracking-wide"
            >
              D&eacute;marrer le projet
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base tracking-wide"
            >
              Planifier un &eacute;change
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
