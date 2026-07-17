import Image from "next/image";
import { ArrowDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const productBenefits = [
  "High-protein choices",
  "Easy everyday nutrition",
  "Flavours worth craving",
] as const;

export function ProductsHeroSection() {
  return (
    <section
      aria-labelledby="products-hero-title"
      className="bg-background px-2.5 pb-3"
    >
      <div className="relative isolate min-h-[39rem] overflow-hidden rounded-3xl bg-brand-mango sm:min-h-[42rem] lg:min-h-[38rem]">
        <Image
          src="/assets/images/products-hero-v2.png"
          alt="Nutranza high-protein oats and peanut butter range displayed together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[64%_center] lg:object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,244,218,0.04)_0%,rgba(255,244,218,0.68)_48%,rgba(255,244,218,0.97)_66%,#fff4da_100%)] sm:bg-[linear-gradient(90deg,#fff4da_0%,rgba(255,244,218,0.96)_28%,rgba(255,244,218,0.58)_37%,rgba(255,244,218,0.12)_47%,transparent_57%)]"
        />

        <div className="relative z-10 flex min-h-[39rem] items-end px-6 py-8 text-brand-cocoa sm:min-h-[42rem] sm:items-center sm:px-10 sm:py-12 lg:min-h-[38rem] lg:px-[clamp(3rem,6vw,7rem)]">
          <div className="w-full max-w-xl">
            <p className="inline-flex items-center rounded-full text-lg font-bold capitalize">
              The Nutranza range
            </p>
            <h1
              id="products-hero-title"
              className="mt-5 max-w-lg font-heading text-[clamp(2.8rem,5.2vw,5.4rem)] font-black leading-[0.94] tracking-normal"
            >
              Everyday nutrition, made delicious.
            </h1>
            <p className="mt-5 max-w-lg text-base font-semibold leading-7 sm:text-lg sm:leading-8">
              Explore high-protein oats and creamy peanut butter made for quick
              breakfasts, smarter snacks, and seriously satisfying flavour.
            </p>

            <ul className="mt-5 flex max-w-lg flex-wrap gap-x-5 gap-y-2.5" aria-label="Product benefits">
              {productBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm font-extrabold sm:text-base">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-mango text-brand-cocoa">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <Button
              href="#products"
              variant="mango"
              className="mt-7 gap-2 px-7 py-2.5 text-base font-bold transition-[box-shadow] duration-300 sm:px-8 sm:py-3 sm:text-lg"
            >
              Explore products
              <ArrowDown className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
