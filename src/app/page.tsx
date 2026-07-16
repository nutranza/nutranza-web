import { BenefitsTicker } from "@/components/benefits-ticker";
import { Hero } from "@/components/hero";
// import { IngredientShowcase } from "@/components/ingredient-showcase";
import { BestSellers } from "@/components/best-sellers";
import { ProductSlider } from "@/components/product-slider";
// import { ShopByCategory } from "@/components/shop-by-category";
import { StoryShowcase } from "@/components/story-showcase";
// import { ShopByCategory } from "@/components/shop-by-category";
import { Reviews } from "@/components/reviews";
import { listWebsiteProducts } from "@/lib/storefront/nutranza-products";

export default async function Home() {
  const products = await listWebsiteProducts(3);

  return (
    <main className="flex-1">
      <Hero />
      <BenefitsTicker />
      {/* <ShopByCategory /> */}
      <BestSellers products={products} />
      <ProductSlider />
      {/* <ShopByCategory /> */}
      {/* <IngredientShowcase /> */}
      <StoryShowcase />
      <Reviews />
    </main>
  );
}
