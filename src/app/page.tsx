import { BenefitsTicker } from "@/components/benefits-ticker";
import { Hero } from "@/components/hero";
import { IngredientShowcase } from "@/components/ingredient-showcase";

export default function Home() {
  return (
    <main className="flex-1 mb-20">
      <Hero />
      <BenefitsTicker />
      <IngredientShowcase />
    </main>
  );
}
