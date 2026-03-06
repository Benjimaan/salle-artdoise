"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const premiumButtonVariants = cva(
  "relative inline-flex items-center justify-center font-sans font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-gold via-bronze to-gold text-white shadow-md hover:shadow-lg",
        secondary:
          "border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-white",
        ghost:
          "text-gold bg-transparent underline-offset-4 hover:underline decoration-gold",
      },
      size: {
        sm: "h-9 px-5 text-sm rounded",
        md: "h-11 px-8 text-base rounded-md",
        lg: "h-14 px-12 text-lg rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface PremiumButtonProps
  extends VariantProps<typeof premiumButtonVariants> {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string;
  type?: "button" | "submit" | "reset";
}

const motionProps = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 400, damping: 20 },
};

export function PremiumButton({
  variant,
  size,
  children,
  className,
  onClick,
  href,
  type = "button",
}: PremiumButtonProps) {
  const classes = cn(premiumButtonVariants({ variant, size }), className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}

export { premiumButtonVariants };
