"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { KEY_FIGURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: string;
  unit: string;
}

function AnimatedCounter({ value, unit }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const target = parseInt(value, 10);
      animate(motionValue, target, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className="flex items-baseline justify-center gap-1">
      <motion.span className="font-serif text-5xl font-light text-white md:text-6xl">
        {rounded}
      </motion.span>
      {unit && (
        <span className="text-2xl text-gold">{unit}</span>
      )}
    </span>
  );
}

export function KeyFiguresSection() {
  return (
    <section id="chiffres" className="bg-dark py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Overtitle */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-sans uppercase tracking-widest text-gold">
            En Chiffres
          </span>
          <span
            className="block h-px w-12 bg-gradient-to-r from-gold to-champagne"
            aria-hidden="true"
          />
        </div>

        {/* Figures grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {KEY_FIGURES.map((figure, index) => (
            <motion.div
              key={figure.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={cn(
                "flex flex-col items-center text-center",
                index < KEY_FIGURES.length - 1 &&
                  "md:border-r md:border-gold/20"
              )}
            >
              <AnimatedCounter value={figure.value} unit={figure.unit} />
              <p className="mt-2 text-sm uppercase tracking-wider text-white/60">
                {figure.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
