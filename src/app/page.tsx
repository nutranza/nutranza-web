import { BenefitsTicker } from "@/components/benefits-ticker";
import { Hero } from "@/components/hero";
// import { IngredientShowcase } from "@/components/ingredient-showcase";
import { BestSellers } from "@/components/best-sellers";
import { ProductSlider } from "@/components/product-slider";
// import { ShopByCategory } from "@/components/shop-by-category";
import { StoryShowcase } from "@/components/story-showcase";
// import { ShopByCategory } from "@/components/shop-by-category";
import { Reviews } from "@/components/reviews";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <BenefitsTicker />
      <BestSellers />
      <ProductSlider />
      {/* <ShopByCategory /> */}
      {/* <ShopByCategory /> */}
      {/* <IngredientShowcase /> */}
      <StoryShowcase />
      <Reviews />
    </main>
  );
}
