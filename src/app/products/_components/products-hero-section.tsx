import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProductsHeroSection() {
  return (
    <section
      aria-labelledby="products-hero-title"
      className="bg-white px-2.5 pb-10"
    >
      <div className="grid gap-2 md:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-80 overflow-hidden rounded-2xl bg-brand-mango lg:min-h-120">
          <Image
            src="/assets/images/collection.png"
            alt="Nutranza product range with protein foods and everyday favorites"
            fill
            priority
            sizes="(min-width: 1440px) 704px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex min-h-100 items-center rounded-2xl bg-brand-cocoa/90 p-6 text-brand-surface sm:min-h-105 sm:p-8 lg:min-h-108 lg:p-12 xl:p-14">
          <div className="w-full max-w-2xl">
            <h1
              id="products-hero-title"
              className="font-heading text-4xl font-black leading-tight tracking-normal sm:text-5xl xl:text-6xl"
            >
              Products
            </h1>
            <p className="mt-4 text-base font-semibold leading-7 sm:text-lg sm:leading-8">
              Discover Nutranza Foods favorites made for real daily routines.
              From creamy peanut butter and high-protein oats to muesli and
              rice cakes, every product brings satisfying flavor, practical
              nutrition, and easy everyday choices.
            </p>

            <Button
              href="/#best-sellers"
              variant="mango"
              className="mt-7 px-7 py-2.5 text-base font-medium transition-[box-shadow] duration-300 sm:px-8 sm:py-3 sm:text-lg"
            >
              Shop Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
