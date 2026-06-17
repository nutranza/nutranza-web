import { Hero } from "@/components/hero";
import { BestSellers } from "@/components/best-sellers";
import { Reviews } from "@/components/reviews";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      
      <BestSellers />
      <Reviews />
    </main>
  );
}
