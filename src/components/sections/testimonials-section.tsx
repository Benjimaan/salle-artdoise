"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/constants";

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

export function TestimonialsSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="temoignages" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          overtitle="Témoignages"
          title="Ils nous ont fait confiance"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="bg-cream rounded-2xl p-8 md:p-10 premium-border"
            >
              {/* Quotation mark */}
              <span className="block font-serif text-6xl text-gold/30 leading-none select-none">
                &ldquo;
              </span>

              {/* Testimonial text */}
              <p className="font-sans text-anthracite/80 text-lg leading-relaxed italic mt-2">
                {testimonial.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="mt-4">
                <p className="font-serif text-base text-anthracite font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-sm text-taupe">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
