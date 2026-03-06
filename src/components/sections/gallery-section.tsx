"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

const CATEGORIES = ["Tous", "Salle", "Terrasse", "Ambiance", "Détails"] as const;
type Category = (typeof CATEGORIES)[number];

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Category;
  aspect: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/images/clearpix_1772783424946.png",
    alt: "Grande salle avec lustres et chandeliers",
    category: "Salle",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    src: "/images/clearpix_1772783865706.png",
    alt: "Extérieur du lieu avec palmiers",
    category: "Terrasse",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    src: "/images/clearpix_1772781943393.png",
    alt: "Ambiance soirée dansante",
    category: "Ambiance",
    aspect: "aspect-[3/4]",
  },
  {
    id: 4,
    src: "/images/clearpix_1772783812659.png",
    alt: "Détail table dressée avec verres et numéro doré",
    category: "Détails",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    src: "/images/clearpix_1772783759153.png",
    alt: "Grande salle avec buffet et lustres",
    category: "Salle",
    aspect: "aspect-[4/3]",
  },
  {
    id: 6,
    src: "/images/clearpix_1772784126826.png",
    alt: "Terrasse et salon extérieur avec palmiers",
    category: "Terrasse",
    aspect: "aspect-[3/4]",
  },
  {
    id: 7,
    src: "/images/clearpix_1772783003529.png",
    alt: "Piste de danse avec DJ et jeux de lumière",
    category: "Ambiance",
    aspect: "aspect-[4/3]",
  },
  {
    id: 8,
    src: "/images/clearpix_1772782845254.png",
    alt: "Buffet cocktail raffiné",
    category: "Détails",
    aspect: "aspect-[3/4]",
  },
  {
    id: 9,
    src: "/images/clearpix_1772783694303.png",
    alt: "Grande salle vide montrant les volumes",
    category: "Salle",
    aspect: "aspect-[4/3]",
  },
  {
    id: 10,
    src: "/images/clearpix_1772782328547.png",
    alt: "Vue aérienne de la terrasse",
    category: "Terrasse",
    aspect: "aspect-[4/3]",
  },
  {
    id: 11,
    src: "/images/clearpix_1772782944711.png",
    alt: "Décor lumineux avec rideau de lumières",
    category: "Ambiance",
    aspect: "aspect-[3/4]",
  },
  {
    id: 12,
    src: "/images/clearpix_1772782791921.png",
    alt: "Pièce montée et arrangements floraux",
    category: "Détails",
    aspect: "aspect-[3/4]",
  },
  {
    id: 13,
    src: "/images/clearpix_1772782447490.png",
    alt: "Grande salle dressée avec éclairage d'ambiance",
    category: "Salle",
    aspect: "aspect-[4/3]",
  },
  {
    id: 14,
    src: "/images/clearpix_1772783923927.png",
    alt: "Parc arboré autour du lieu",
    category: "Terrasse",
    aspect: "aspect-[4/3]",
  },
  {
    id: 15,
    src: "/images/clearpix_1772783124912.png",
    alt: "DJ avec jeux de lumières spectaculaires",
    category: "Ambiance",
    aspect: "aspect-[4/3]",
  },
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<Category>("Tous");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === "Tous"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galerie" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overtitle="Galerie"
          title="Un cadre qui inspire l'émotion"
        />

        {/* Category Filter Tabs */}
        <AnimatedSection animation="fade-up" delay={0.1}>
          <div className="mb-12 flex flex-wrap justify-center gap-6">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "relative cursor-pointer pb-2 text-sm font-sans uppercase tracking-wider transition-colors duration-300",
                  activeFilter === category
                    ? "text-anthracite"
                    : "text-taupe hover:text-anthracite"
                )}
              >
                {category}
                {activeFilter === category && (
                  <motion.span
                    layoutId="gallery-tab-underline"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-gold"
                    transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 gap-4 md:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="mb-4 break-inside-avoid"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-xl",
                    item.aspect
                  )}
                  onClick={() => setLightboxItem(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-dark/0 transition-colors duration-300 group-hover:bg-dark/20">
                    <ZoomIn className="h-8 w-8 text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 p-4"
              onClick={() => setLightboxItem(null)}
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute right-6 top-6 z-10 cursor-pointer rounded-full bg-ivory/10 p-2 text-ivory transition-colors hover:bg-ivory/20"
                aria-label="Fermer"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Enlarged image */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
