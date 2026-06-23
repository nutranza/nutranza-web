import Image from "next/image";
import { Button } from "@/components/ui/button";

export function OurMissionSection() {
  return (
    <section
      aria-labelledby="our-mission-title"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="Container">
        <article className="grid gap-10 lg:grid-cols-[minmax(480px,0.92fr)_minmax(0,1fr)] lg:items-center lg:gap-16 xl:gap-24">
          <div className="relative isolate order-2 min-h-90 overflow-hidden rounded-2xl bg-[#ffe0ee] sm:min-h-120 lg:order-1 lg:min-h-150">
            <div className="absolute inset-x-[16%] bottom-[6%] h-7 rounded-full bg-brand-cocoa/15 blur-xl" />

            <div className="absolute left-[5%] top-[10%] z-20 h-[80%] w-[53%] -rotate-3 drop-shadow-xl sm:left-[2%]">
              <Image
                src="/assets/images/2.png"
                alt="Nutranza mango high protein oats pouch"
                fill
                sizes="(min-width: 1024px) 310px, 50vw"
                className="object-contain"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute right-[5%] top-[15%] z-10 h-[74%] w-[49%] rotate-3 drop-shadow-xl sm:right-[6%]"
            >
              <Image
                src="/assets/images/3.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 280px, 46vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="order-1 max-w-2xl lg:order-2">
            <p className="text-sm font-extrabold leading-none text-brand-muted sm:text-base">
              Our Mission
            </p>
            <h2
              id="our-mission-title"
              className="mt-5 font-heading text-4xl font-black leading-tight tracking-normal text-brand-cocoa-deep sm:text-5xl"
            >
              Making Better Food an Everyday Choice
            </h2>
            <p className="mt-6 text-base font-medium leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
              At Nutranza Foods, our mission is to make protein-rich food easier
              to enjoy in everyday life. We create familiar favorites with
              satisfying flavor and practical nutrition, so better choices fit
              naturally into busy routines.
            </p>
            <p className="mt-5 text-base font-medium leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
              From quick breakfasts to post-workout meals and everyday snacks,
              we focus on products that are convenient, dependable, and
              enjoyable enough to choose again.
            </p>

            <Button
              href="/#best-sellers"
              variant="mango"
              className="mt-8 px-7 py-2.5 text-base font-medium transition-[box-shadow] duration-300 sm:px-8 sm:py-3 sm:text-lg"
            >
              View Products
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
