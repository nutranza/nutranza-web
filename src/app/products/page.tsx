import type { Metadata } from "next";
import { ProductsHeroSection } from "./_components/products-hero-section";
import { ProductsProductSection } from "./_components/products-product-section";
import { listWebsiteProducts } from "@/lib/storefront/nutranza-products";

export const metadata: Metadata = {
  title: "Products | Nutranza Foods",
  description:
    "Explore Nutranza Foods products, including peanut butter, high-protein oats, muesli, rice cakes, and everyday nutrition favorites.",
};

export default async function ProductsPage() {
  const products = await listWebsiteProducts();

  return (
    <main className="flex-1">
      <ProductsHeroSection />
      <ProductsProductSection products={products} />
    </main>
  );
}
