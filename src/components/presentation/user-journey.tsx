"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Eye,
  Heart,
  Layout,
  Shield,
  FileText,
  Calendar,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Eye,
    title: "Découverte",
    description:
      "Le visiteur arrive sur le site et découvre immédiatement le standing du lieu",
  },
  {
    icon: Heart,
    title: "Projection",
    description:
      "Les visuels immersifs et le storytelling créent une connexion émotionnelle",
  },
  {
    icon: Layout,
    title: "Consultation",
    description:
      "L'exploration des espaces, capacités et prestations renforce l'intérêt",
  },
  {
    icon: Shield,
    title: "Réassurance",
    description:
      "Témoignages, chiffres clés et FAQ lèvent les dernières objections",
  },
  {
    icon: FileText,
    title: "Demande de devis",
    description:
      "Le formulaire intelligent en 8 étapes simplifie la demande",
  },
  {
    icon: Calendar,
    title: "Pré-réservation",
    description:
      "Le système de pré-réservation permet de bloquer une date facilement",
  },
  {
    icon: Phone,
    title: "Contact",
    description:
      "L'accompagnement humain prend le relais pour finaliser",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
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

export default function UserJourney() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-ivory py-28 lg:py-36">
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
            Parcours utilisateur
          </motion.span>

          <motion.h2
            variants={childVariants}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-anthracite leading-tight mb-6"
          >
            Un parcours pensé pour convertir
          </motion.h2>

          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg text-taupe max-w-3xl mx-auto leading-relaxed font-sans"
          >
            Chaque étape du parcours a été conçue pour guider naturellement le
            visiteur vers la prise de contact.
          </motion.p>
        </motion.div>

        {/* Content: Timeline + Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3 relative"
          >
            {/* Gold vertical line */}
            <motion.div
              className="absolute left-5 top-2 bottom-2 w-px origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-gold), var(--color-gold-light), transparent)",
              }}
            />

            <div className="space-y-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={stepVariants}
                    className={cn(
                      "relative flex items-start gap-5 group pl-0 py-4 px-4 rounded-xl transition-colors duration-300 hover:bg-white/70",
                      index % 2 === 0 ? "lg:ml-0" : "lg:ml-4"
                    )}
                  >
                    {/* Icon circle on the line */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-gold/40 flex items-center justify-center premium-shadow transition-all duration-300 group-hover:border-gold group-hover:scale-110">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>

                    {/* Text */}
                    <div className="pt-0.5">
                      <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-gold/70 mb-1 block">
                        Étape {index + 1}
                      </span>
                      <h3 className="font-serif text-lg text-anthracite mb-1 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sm text-taupe font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Screenshot mockup (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-2 sticky top-28"
          >
            <div className="rounded-2xl overflow-hidden premium-shadow-lg border border-beige/30 bg-white">
              {/* Mini browser bar */}
              <div className="flex items-center gap-1.5 px-3 py-2.5 bg-cream border-b border-beige/30">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <div className="flex-1 mx-3">
                  <div className="bg-ivory rounded px-2 py-0.5 max-w-[140px] mx-auto">
                    <span className="text-[9px] font-sans text-taupe/60 select-none">artdoise.fr</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src="/presentation/mockup-espaces.png"
                  alt="Capture d'écran — section espaces du site Art d'Oise"
                  fill
                  className="object-cover object-top"
                  quality={95}
                />
              </div>
            </div>

            {/* Decorative label */}
            <div className="mt-4 text-center">
              <span className="text-[11px] font-sans font-medium uppercase tracking-[0.15em] text-taupe/70">
                Section Espaces
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
