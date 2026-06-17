import { BenefitsTicker } from "@/components/benefits-ticker";
import { Hero } from "@/components/hero";
import { IngredientShowcase } from "@/components/ingredient-showcase";
import { BestSellers } from "@/components/best-sellers";
import { Reviews } from "@/components/reviews";

export default function Home() {
  return (
    <main className="flex-1 mb-20">
      <Hero />
      <BenefitsTicker />
      <IngredientShowcase />
      <BestSellers />
      <Reviews />
    </main>
  );
}
