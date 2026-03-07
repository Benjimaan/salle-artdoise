"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Award,
  BarChart3,
  Layers,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const headingVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const dividerVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

interface ArgumentBlock {
  icon: LucideIcon;
  title: string;
  description: string;
}

const arguments_: ArgumentBlock[] = [
  {
    icon: TrendingUp,
    title: "Désirabilité renforcée",
    description:
      "Un design premium qui sublime chaque espace et crée un désir immédiat de découvrir le lieu en personne.",
  },
  {
    icon: Award,
    title: "Crédibilité instantanée",
    description:
      "Une première impression digitale à la hauteur du standing réel de la salle, qui inspire confiance dès le premier regard.",
  },
  {
    icon: BarChart3,
    title: "Conversion optimisée",
    description:
      "Un parcours utilisateur pensé pour guider chaque visiteur vers la demande de devis, avec un taux de conversion maximisé.",
  },
  {
    icon: Layers,
    title: "Cohérence de marque",
    description:
      "L\u2019expérience en ligne s\u2019aligne parfaitement avec l\u2019expérience physique, renforçant l\u2019identité premium d\u2019Art d\u2019Oise.",
  },
  {
    icon: Zap,
    title: "Leads qualifiés",
    description:
      "Le formulaire intelligent filtre et qualifie les demandes, permettant de se concentrer sur les prospects les plus pertinents.",
  },
];

export default function WhyDifference() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-dark py-28 lg:py-36">
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
            Impact
          </motion.span>

          <motion.h2
            variants={headingVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6"
          >
            Pourquoi ce site fera la différence
          </motion.h2>

          <motion.div
            variants={headingVariants}
            className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            aria-hidden="true"
          />
        </motion.div>

        {/* Argument Blocks */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="max-w-4xl mx-auto"
        >
          {arguments_.map((arg, index) => {
            const Icon = arg.icon;
            const isEven = index % 2 === 0;

            return (
              <React.Fragment key={arg.title}>
                <motion.div
                  variants={blockVariants}
                  className={cn(
                    "flex flex-col items-center gap-6 py-10",
                    "sm:flex-row sm:gap-8",
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  )}
                >
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light">
                      <Icon className="h-7 w-7 text-dark" />
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={cn(
                      "text-center sm:text-left",
                      !isEven && "sm:text-right"
                    )}
                  >
                    <h3 className="font-serif text-2xl text-white mb-2">
                      {arg.title}
                    </h3>
                    <p className="text-sm sm:text-base text-taupe leading-relaxed font-sans">
                      {arg.description}
                    </p>
                  </div>
                </motion.div>

                {/* Divider (not after last item) */}
                {index < arguments_.length - 1 && (
                  <motion.div
                    variants={dividerVariants}
                    className="h-px w-full bg-gradient-to-r from-transparent via-gold/25 to-transparent"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
