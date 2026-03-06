"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SPACES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

const spaceImages: Record<string, string> = {
  "salle-principale": "/images/clearpix_1772783525942.png",
  "salle-2": "/images/clearpix_1772782564490.png",
  "salle-3": "/images/clearpix_1772782619141.png",
  "loge-vip": "/images/clearpix_1772782135266.png",
  "terrasse": "/images/clearpix_1772783976917.png",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

export function VenueSpacesSection() {
  const featuredSpace = SPACES.find((space) => space.featured);
  const otherSpaces = SPACES.filter((space) => !space.featured);

  return (
    <section id="espaces" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overtitle="Les Espaces"
          title="Des espaces d'exception pour chaque moment"
        />

        {/* Featured Space — La Grande Salle */}
        {featuredSpace && (
          <AnimatedSection animation="fade-up" className="mb-16">
            <div className="overflow-hidden rounded-2xl bg-ivory premium-shadow-lg premium-border">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[16/10]">
                  <Image
                    src={spaceImages[featuredSpace.id]}
                    alt={featuredSpace.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h3 className="font-serif text-3xl text-anthracite">
                    {featuredSpace.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center rounded-full bg-champagne/50 px-4 py-1.5 text-xs font-sans font-medium uppercase tracking-wider text-anthracite">
                      {featuredSpace.surface}
                    </span>
                    {featuredSpace.capacitySeated && (
                      <span className="inline-flex items-center rounded-full bg-champagne/50 px-4 py-1.5 text-xs font-sans font-medium uppercase tracking-wider text-anthracite">
                        {featuredSpace.capacitySeated} assis
                      </span>
                    )}
                    {featuredSpace.capacityStanding && (
                      <span className="inline-flex items-center rounded-full bg-champagne/50 px-4 py-1.5 text-xs font-sans font-medium uppercase tracking-wider text-anthracite">
                        {featuredSpace.capacityStanding} debout
                      </span>
                    )}
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-taupe">
                    {featuredSpace.description}
                  </p>

                  <p className="mt-4 text-sm font-sans font-medium uppercase tracking-wider text-bronze">
                    {featuredSpace.usage}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Other Spaces Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {otherSpaces.map((space) => (
            <motion.div
              key={space.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              className="overflow-hidden rounded-xl bg-ivory premium-shadow premium-border"
            >
              {spaceImages[space.id] && (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={spaceImages[space.id]}
                    alt={space.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className="p-8">
              <h3 className="font-serif text-xl text-anthracite">
                {space.name}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-champagne/40 px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider text-anthracite">
                  {space.surface}
                </span>
                {space.capacitySeated && (
                  <span className="inline-flex items-center rounded-full bg-champagne/40 px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider text-anthracite">
                    {space.capacitySeated} assis
                  </span>
                )}
                {space.capacityStanding && (
                  <span className="inline-flex items-center rounded-full bg-champagne/40 px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider text-anthracite">
                    {space.capacityStanding} debout
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-taupe">
                {space.description}
              </p>

              <p className="mt-3 text-xs font-sans font-medium uppercase tracking-wider text-bronze">
                {space.usage}
              </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
