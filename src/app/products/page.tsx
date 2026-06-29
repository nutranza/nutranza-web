import type { Metadata } from "next";
import { ProductsHeroSection } from "./_components/products-hero-section";
import { ProductsProductSection } from "./_components/products-product-section";

export const metadata: Metadata = {
  title: "Products | Nutranza Foods",
  description:
    "Explore Nutranza Foods products, including peanut butter, high-protein oats, muesli, rice cakes, and everyday nutrition favorites.",
};

export default function ProductsPage() {
  return (
    <main className="flex-1">
      <ProductsHeroSection />
      <ProductsProductSection />
    </main>
  );
}
