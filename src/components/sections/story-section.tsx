"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";

export function StorySection() {
  return (
    <section id="histoire" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          overtitle="L'Art de Recevoir"
          title="Une réception à la hauteur de vos plus beaux instants"
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column — copywriting */}
          <AnimatedSection animation="slide-left">
            <div className="flex flex-col gap-6">
              <p className="font-sans text-lg leading-relaxed text-anthracite/80">
                Dès le premier regard, L&rsquo;Art d&rsquo;Oise impose son
                élégance. Ses volumes généreux, baignés d&rsquo;une lumière
                naturelle enveloppante, créent une atmosphère à la fois
                majestueuse et chaleureuse. Chaque espace a été pensé pour
                sublimer les instants précieux&nbsp;: l&rsquo;émotion
                d&rsquo;une cérémonie, la convivialité d&rsquo;un cocktail, la
                magie d&rsquo;une première danse.
              </p>

              {/* Gold divider */}
              <span
                className="block h-px w-16 bg-gradient-to-r from-gold to-champagne"
                aria-hidden="true"
              />

              <p className="font-sans text-lg leading-relaxed text-anthracite/80">
                Ici, la fluidité de votre réception est une évidence. Du vin
                d&rsquo;honneur en terrasse au dîner dans la Grande Salle,
                chaque transition se fait naturellement, portée par
                l&rsquo;harmonie des lieux. Vos invités circulent, découvrent,
                s&rsquo;émerveillent — et vous profitez pleinement du plus beau
                jour de votre vie.
              </p>
            </div>
          </AnimatedSection>

          {/* Right column — placeholder image */}
          <AnimatedSection animation="slide-right" delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <Image
                src="/images/clearpix_1772783592605.png"
                alt="Grande salle dressée avec drapés blancs et lustres"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
