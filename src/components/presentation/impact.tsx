"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Crown, Route, TrendingUp, FileCheck, Smile, Eye, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImpactMetric {
  icon: LucideIcon;
  metric: string;
  description: string;
}

const impactMetrics: ImpactMetric[] = [
  {
    icon: Crown,
    metric: "Image premium",
    description:
      "Une identit\u00e9 digitale qui refl\u00e8te enfin le standing r\u00e9el du lieu",
  },
  {
    icon: Route,
    metric: "Parcours fluide",
    description:
      "Un tunnel de conversion optimis\u00e9 pour chaque profil de visiteur",
  },
  {
    icon: TrendingUp,
    metric: "+40%",
    description:
      "Augmentation estim\u00e9e des demandes de devis qualifi\u00e9es",
  },
  {
    icon: FileCheck,
    metric: "2x plus",
    description:
      "De demandes de devis gr\u00e2ce au formulaire intelligent",
  },
  {
    icon: Smile,
    metric: "Exp\u00e9rience client",
    description:
      "Une navigation premium qui renforce la satisfaction et la confiance",
  },
  {
    icon: Eye,
    metric: "Projection \u00e9motionnelle",
    description:
      "Le visiteur se projette dans son \u00e9v\u00e9nement avant m\u00eame de visiter",
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

export default function Impact() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="bg-ivory py-28 lg:py-36">
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
            R&eacute;sultats attendus
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={headingVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-anthracite leading-tight mb-6"
          >
            Un investissement aux retomb&eacute;es mesurables
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={headingVariants}
            className="section-divider mx-auto"
            aria-hidden="true"
          />
        </motion.div>

        {/* Impact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {impactMetrics.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.metric}
                variants={cardVariants}
                className={cn(
                  "bg-white rounded-2xl premium-shadow premium-border p-8",
                  "text-center",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                )}
              >
                {/* Icon circle */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-champagne-light mx-auto mb-6">
                  <Icon className="h-7 w-7 text-gold" />
                </div>

                {/* Metric */}
                <h3 className="font-serif text-2xl text-dark mb-3">
                  {item.metric}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-taupe font-sans">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
