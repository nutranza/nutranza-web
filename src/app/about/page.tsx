import type { Metadata } from "next";
import { AboutCtaSection } from "./_components/about-cta-section";
import { MissionVisionSection } from "./_components/mission-vision-section";
import { ProductNutritionSection } from "./_components/product-nutrition-section";
import { WhyChooseUsSection } from "./_components/why-choose-us-section";

export const metadata: Metadata = {
  title: "About Nutranza Foods",
  description:
    "Meet Nutranza Foods, a modern nutrition brand crafting peanut butter, protein oats, muesli, and rice cakes with clean ingredients and everyday flavor.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-hidden bg-white">
      <ProductNutritionSection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <AboutCtaSection />
    </main>
  );
}
