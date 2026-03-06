"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  overtitle?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  overtitle,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const alignmentClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("flex flex-col gap-4 mb-12", alignmentClasses, className)}
    >
      {overtitle && (
        <span className="text-xs font-sans font-semibold uppercase tracking-[0.25em] text-bronze">
          {overtitle}
        </span>
      )}

      {/* Decorative gold line divider */}
      <span
        className={cn(
          "block h-px w-16 bg-gradient-to-r from-gold to-champagne",
          align === "center" && "mx-auto"
        )}
        aria-hidden="true"
      />

      <h2 className="font-serif text-3xl leading-tight text-anthracite sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-taupe sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
