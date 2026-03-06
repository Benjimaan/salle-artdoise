import { HeroSection } from "@/components/sections/hero-section";
import { StorySection } from "@/components/sections/story-section";
import { VenueSpacesSection } from "@/components/sections/venue-spaces-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { KeyFiguresSection } from "@/components/sections/key-figures-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { PreBookingSection } from "@/components/sections/pre-booking-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <VenueSpacesSection />
      <GallerySection />
      <BenefitsSection />
      <KeyFiguresSection />
      <QuoteSection />
      <PreBookingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
