"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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

const pills = [
  "Next.js & React",
  "Design sur-mesure",
  "Responsive Premium",
  "Animations fluides",
];

export default function Solution() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" ref={ref} className="relative bg-dark py-28 lg:py-36 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Overtitle */}
          <motion.span
            variants={childVariants}
            className="inline-block text-xs font-sans font-medium uppercase tracking-[0.3em] text-gold mb-5"
          >
            Solution digitale
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={childVariants}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6"
          >
            Un site vitrine pensé pour l&rsquo;excellence
          </motion.h2>

          {/* Intro */}
          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg text-beige max-w-3xl mx-auto leading-relaxed font-sans"
          >
            Une plateforme sur-mesure alliant esthétique premium, parcours de
            conversion optimisé et storytelling émotionnel.
          </motion.p>
        </motion.div>

        {/* Mockups */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-14 justify-center"
        >
          {/* Desktop Browser Mockup */}
          <motion.div variants={childVariants} className="w-full lg:w-[75%] max-w-5xl">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-charcoal/50 shadow-2xl shadow-black/40">
              {/* Browser Top Bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#2a2a2a] border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <div className="flex-1 mx-6">
                  <div className="max-w-sm mx-auto bg-dark/80 rounded-lg px-4 py-1.5">
                    <span className="text-xs font-sans text-white/50 select-none">
                      artdoise.fr
                    </span>
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative aspect-[16/10]">
                <Image
                  src="/presentation/mockup-hero.png"
                  alt="Capture d'écran du site Art d'Oise — version desktop"
                  fill
                  className="object-cover object-top"
                  quality={95}
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div
            variants={childVariants}
            className="w-[220px] sm:w-[240px] lg:w-[220px] flex-shrink-0 lg:-mb-12"
          >
            <div className="rounded-[2.5rem] border-[6px] border-[#2a2a2a] overflow-hidden bg-dark shadow-2xl shadow-black/50">
              {/* Phone notch / dynamic island */}
              <div className="relative bg-[#2a2a2a] pt-3 pb-2 flex justify-center">
                <div className="w-24 h-6 bg-dark rounded-full" />
              </div>
              {/* Phone screen */}
              <div className="relative aspect-[9/18]">
                <Image
                  src="/presentation/mockup-mobile-hero.png"
                  alt="Capture d'écran du site Art d'Oise — version mobile"
                  fill
                  className="object-cover object-top"
                  quality={95}
                />
              </div>
              {/* Home indicator */}
              <div className="bg-dark py-2 flex justify-center">
                <div className="w-28 h-1 bg-white/20 rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-3 mt-12 lg:mt-16"
        >
          {pills.map((pill) => (
            <motion.span
              key={pill}
              variants={childVariants}
              className="bg-charcoal border border-gold/30 text-gold rounded-full px-5 py-2 text-sm font-sans font-medium tracking-wide"
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
