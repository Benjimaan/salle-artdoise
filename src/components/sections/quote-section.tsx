"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedSection } from "@/components/ui/animated-section";
import QuoteMultiStepForm from "@/components/forms/quote-multi-step-form";

export function QuoteSection() {
  return (
    <section id="devis" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overtitle="Votre Projet"
          title="Demandez votre devis personnalisé"
          subtitle="Quelques étapes suffisent pour nous faire part de votre projet. Notre équipe vous recontacte sous 48h."
        />
        <AnimatedSection delay={0.2}>
          <div className="mt-16">
            <QuoteMultiStepForm />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
