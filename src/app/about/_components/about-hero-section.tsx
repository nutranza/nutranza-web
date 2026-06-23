import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutHeroSection() {
  return (
    <section aria-labelledby="about-hero-title" className="bg-white px-3 py-2">
      <div className="grid gap-2 md:grid-cols-2 lg:items-stretch">
        <div className="relative lg:min-h-120 min-h-80 overflow-hidden rounded-2xl bg-brand-mango lg:block">
          <Image
            src="/assets/images/4.jpg"
            alt="Nutranza dark chocolate high protein oats with its nutrition highlights"
            fill
            priority
            sizes="(min-width: 1440px) 704px, (min-width: 1024px) 50vw, 0px"
            className="object-contain"
          />
        </div>

        <div className="flex min-h-100 items-center rounded-2xl bg-brand-cocoa-deep p-6 text-brand-surface sm:min-h-105 sm:p-8 lg:min-h-108 lg:p-12 xl:p-14">
          <div className="w-full max-w-2xl">
            <h1
              id="about-hero-title"
              className="font-heading text-4xl font-black leading-tight tracking-normal sm:text-5xl xl:text-6xl"
            >
              About Us
            </h1>
            <p className="mt-4 text-base font-semibold leading-7 sm:text-lg sm:leading-8">
              At Nutranza Foods, we make protein-rich everyday food that fits
              real routines. From creamy peanut butter to high-protein oats,
              muesli, and rice cakes, every product brings together clean
              ingredients, satisfying flavor, and convenient nutrition to help
              you eat better every day.
            </p>

            <Button
              href="/#collections"
              variant="mango"
              className="mt-7 px-7 py-2.5 text-base font-medium transition-[box-shadow] duration-300 sm:px-8 sm:py-3 sm:text-lg"
            >
              Shop by Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
