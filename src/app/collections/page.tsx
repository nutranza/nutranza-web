import type { Metadata } from "next";
import { CollectionsHeroSection } from "./_components/collections-hero-section";
import { CollectionsProductSection } from "./_components/collections-product-section";

export const metadata: Metadata = {
  title: "Collections | Nutranza Foods",
  description:
    "Explore Nutranza Foods collections, including peanut butter, high-protein oats, muesli, rice cakes, and everyday nutrition favorites.",
};

export default function CollectionsPage() {
  return (
    <main className="flex-1">
      <CollectionsHeroSection />
      <CollectionsProductSection />
    </main>
  );
}
