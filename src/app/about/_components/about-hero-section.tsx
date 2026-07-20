import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutHeroSection() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="bg-background px-2.5 pb-3"
    >
      <div className="relative isolate overflow-hidden rounded bg-brand-surface xl:min-h-[37rem]">
        <div className="relative min-h-[18rem] overflow-hidden sm:min-h-[23rem] md:min-h-[26rem] xl:absolute xl:inset-0 xl:min-h-0">
          <Image
            src="/assets/images/about-hero.png"
            alt="Nutranza high-protein oats and chocolate peanut butter arranged in a bright breakfast kitchen"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[66%_center] sm:object-[60%_center] md:object-center xl:translate-x-[2%] xl:scale-[1.04]"
          />
        </div>

        <div className="relative z-10 py-5 sm:p-4 md:p-5 xl:flex xl:min-h-[37rem] xl:items-center xl:px-[clamp(2.5rem,4vw,4.5rem)] xl:py-8">
          <div className="mx-auto grid w-full max-w-5xl gap-5 rounded-2xl border border-brand-line bg-brand-surface p-4 text-brand-cocoa sm:p-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-8 md:p-8 xl:mx-0 xl:block xl:w-[43%] xl:max-w-[40rem] xl:border-white/60 xl:bg-brand-surface/80 xl:p-8 xl:backdrop-blur-[1px]">
            <div>
              <p className="inline-flex rounded-full bg-brand-mango px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-brand-cocoa sm:px-3.5 sm:text-xs">
                About Nutranza Foods
              </p>
              <h1
                id="about-hero-title"
                className="mt-4 max-w-[15ch] font-heading text-[2.4rem] font-black leading-[0.98] tracking-normal text-brand-cocoa-deep sm:text-[3rem] md:text-[3.4rem] xl:text-[clamp(2.6rem,4vw,4.25rem)] xl:leading-[0.96]"
              >
                Making Healthy Eating Delicious Every Day.
              </h1>
            </div>

            <div className="xl:mt-4">
              <p className="text-sm font-semibold leading-6 text-brand-cocoa/85 sm:text-base sm:leading-7 xl:text-lg xl:leading-8">
                At Nutranza Foods, we make healthy eating delicious, simple,
                and practical for modern lifestyles. From protein-rich peanut
                butter to wholesome oats, every product brings together
                quality, taste, and everyday nutrition.
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-brand-cocoa/85 sm:text-base sm:leading-7 xl:text-lg xl:leading-8">
                We help individuals and families choose better food without
                compromising on flavor.
              </p>

              <Button
                href="/products"
                variant="mango"
                className="mt-5 w-full gap-2 px-6 py-2.5 text-sm font-bold transition-[box-shadow] duration-300 sm:w-fit sm:px-8 sm:py-3 sm:text-base xl:mt-6 xl:text-lg"
              >
                Explore Our Products
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
