import type { Metadata } from "next";
import HeroPresentation from "@/components/presentation/hero-presentation";
import ContextVision from "@/components/presentation/context-vision";
import Challenges from "@/components/presentation/challenges";
import Solution from "@/components/presentation/solution";
import UserJourney from "@/components/presentation/user-journey";
import Features from "@/components/presentation/features";
import QuoteMockup from "@/components/presentation/quote-mockup";
import PreBooking from "@/components/presentation/pre-booking";
import WhyDifference from "@/components/presentation/why-difference";
import Impact from "@/components/presentation/impact";
import ConclusionCta from "@/components/presentation/conclusion-cta";

export const metadata: Metadata = {
  title: "Art d'Oise — Présentation Projet Digital Premium | BF Studio",
  description:
    "Présentation du projet de création d'un site vitrine premium pour la salle de réception Art d'Oise à Saint-Maximin.",
};

export default function PresentationPage() {
  return (
    <main>
      <HeroPresentation />
      <ContextVision />
      <Challenges />
      <Solution />
      <UserJourney />
      <Features />
      <QuoteMockup />
      <PreBooking />
      <WhyDifference />
      <Impact />
      <ConclusionCta />
    </main>
  );
}
