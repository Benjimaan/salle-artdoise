"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Maximize2,
  Sparkles,
  Music,
  ChefHat,
  Sun,
  Heart,
  Car,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { BENEFITS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Maximize2,
  Sparkles,
  Music,
  ChefHat,
  Sun,
  Heart,
  Car,
  MapPin,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
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

export function BenefitsSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="avantages" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          overtitle="Vos Avantages"
          title="Pourquoi choisir L'Art d'Oise pour votre mariage"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {BENEFITS.map((benefit) => {
            const Icon = iconMap[benefit.icon];

            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                className={cn(
                  "bg-cream rounded-2xl p-8",
                  "transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                )}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne">
                  {Icon && <Icon className="h-5 w-5 text-bronze" />}
                </div>

                {/* Title */}
                <h3 className="mt-4 font-serif text-lg text-anthracite">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-taupe">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
