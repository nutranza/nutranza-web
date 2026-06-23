import Image from "next/image";
import { Button } from "@/components/ui/button";

export function OurStorySection() {
  return (
    <section
      aria-labelledby="our-story-title"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="Container">
        <article className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(480px,0.92fr)] lg:items-center lg:gap-16 xl:gap-24">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold leading-none text-brand-muted sm:text-base">
              Our Story
            </p>
            <h2
              id="our-story-title"
              className="mt-5 font-heading text-4xl font-black leading-tight tracking-normal text-brand-cocoa-deep sm:text-5xl"
            >
              Made for Real Routines
            </h2>
            <p className="mt-6 text-base font-medium leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
              Nutranza Foods started with a simple belief: everyday nutrition
              should be easy to understand and enjoyable to eat. We reimagined
              familiar pantry favorites with protein-forward recipes and
              flavors people can look forward to.
            </p>
            <p className="mt-5 text-base font-medium leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
              From creamy peanut butter to high-protein oats, muesli, and rice
              cakes, our range is made for busy mornings, active days, and
              better everyday snacking without making food feel complicated.
            </p>

            <Button
              href="/#best-sellers"
              variant="mango"
              className="mt-8 px-7 py-2.5 text-base font-medium transition-[box-shadow] duration-300 sm:px-8 sm:py-3 sm:text-lg"
            >
              View Products
            </Button>
          </div>

          <div className="relative isolate min-h-90 overflow-hidden rounded-2xl bg-brand-mango-soft sm:min-h-120 lg:min-h-150">
            <div className="absolute inset-x-[17%] bottom-[7%] h-7 rounded-full bg-brand-cocoa/15 blur-xl" />

            <div
              aria-hidden="true"
              className="absolute left-[4%] top-[12%] z-10 h-[84%] w-[50%] -rotate-10 drop-shadow-xl sm:left-[4%]"
            >
              <Image
                src="/assets/images/products/5.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 290px, 44vw"
                className="object-contain"
              />
            </div>

            <div className="absolute right-[2%] top-[7%] z-20 h-[84%] w-[55%] rotate-3 drop-shadow-xl sm:right-[2%]">
              <Image
                src="/assets/images/products/4.png"
                alt="Nutranza mango peanut butter jar"
                fill
                sizes="(min-width: 1024px) 350px, 54vw"
                className="object-contain"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
