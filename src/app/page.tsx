import { BenefitsTicker } from "@/components/benefits-ticker";
import { Hero } from "@/components/hero";
import { IngredientShowcase } from "@/components/ingredient-showcase";
import { BestSellers } from "@/components/best-sellers";
// import { ShopByCategory } from "@/components/shop-by-category";
import { Reviews } from "@/components/reviews";
import { NewsletterCta } from "@/components/newsletter-cta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <BenefitsTicker />
      <BestSellers />
      {/* <ShopByCategory /> */}
      <IngredientShowcase />
      <Reviews />
      <NewsletterCta />
    </main>
  );
}
