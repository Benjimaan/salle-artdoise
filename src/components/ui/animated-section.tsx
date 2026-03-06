"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right";

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

const hiddenVariants: Record<AnimationType, { opacity: number; y?: number; x?: number }> = {
  "fade-up": { opacity: 0, y: 50 },
  "fade-in": { opacity: 0 },
  "slide-left": { opacity: 0, x: -80 },
  "slide-right": { opacity: 0, x: 80 },
};

const visibleVariants: Record<AnimationType, { opacity: number; y?: number; x?: number }> = {
  "fade-up": { opacity: 1, y: 0 },
  "fade-in": { opacity: 1 },
  "slide-left": { opacity: 1, x: 0 },
  "slide-right": { opacity: 1, x: 0 },
};

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={hiddenVariants[animation]}
      animate={isInView ? visibleVariants[animation] : hiddenVariants[animation]}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
