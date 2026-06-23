import type { Metadata } from "next";
import { AboutCtaSection } from "./_components/about-cta-section";
import { AboutHeroSection } from "./_components/about-hero-section";
import { MakersSection } from "./_components/makers-section";
import { OurMissionSection } from "./_components/our-mission-section";
import { OurStorySection } from "./_components/our-story-section";

export const metadata: Metadata = {
  title: "About Nutranza Foods",
  description:
    "Meet Nutranza Foods, a modern nutrition brand crafting peanut butter, protein oats, muesli, and rice cakes with clean ingredients and everyday flavor.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-hidden bg-white">
      <AboutHeroSection />
      <OurStorySection />
      <OurMissionSection />
      <MakersSection />
      <AboutCtaSection />
    </main>
  );
}
