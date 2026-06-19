"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type ProductStat = {
  label: string;
  value: string;
};

type ProductSlide = {
  eyebrow: string;
  headline: string;
  name: string;
  image: string;
  imageAlt: string;
  stats: readonly ProductStat[];
};

const productSlides = [
  {
    eyebrow: "Award-Winning Flavor",
    headline: "Mango Protein Oats",
    name: "Mango Oats",
    image: "/assets/images/2.png",
    imageAlt: "Nutranza mango high protein oats pack",
    stats: [
      { label: "Protein", value: "26g" },
      { label: "Color", value: "Mango Gold" },
      { label: "Pack", value: "1kg" },
      { label: "Flavor", value: "Mango" },
    ],
  },
  {
    eyebrow: "Award-Winning Flavor",
    headline: "Berry-Pure Strawberry Oats",
    name: "Strawberry Protein Oats",
    image: "/assets/images/3.png",
    imageAlt: "Nutranza strawberry high protein oats pack",
    stats: [
      { label: "Protein", value: "26g" },
      { label: "Color", value: "Berry Pink" },
      { label: "Pack", value: "1kg" },
      { label: "Flavor", value: "Strawberry" },
    ],
  },
] as const satisfies readonly ProductSlide[];

function formatSlideNumber(value: number) {
  return value.toString().padStart(2, "0");
}

export function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = productSlides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? productSlides.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === productSlides.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      aria-label="Featured Nutranza protein oats"
      className="relative overflow-hidden bg-brand-lime text-cocoa"
    >
      <div className="Container">
        <div className="relative z-10 grid grid-cols-1 gap-y-8 py-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 sm:py-10 md:gap-x-12 lg:flex lg:justify-between lg:gap-0 lg:py-12">

          <div className="order-1 flex w-full flex-col items-center justify-between text-center sm:order-2 sm:min-h-[240px] sm:items-start sm:text-left lg:order-1 lg:w-2/6 lg:min-h-0 gap-6">
            <div className="space-y-4">
              <p className="font-extrabold leading-none text-cocoa lg:text-base xl:text-lg">
                {activeSlide.eyebrow}
              </p>
              <h1 className="max-w-72 font-normal text-3xl leading-[1.02] text-cocoa sm:max-w-none sm:text-5xl sm:leading-[1.05] lg:text-5xl lg:leading-18 xl:text-7xl xl:leading-24">
                {activeSlide.headline}
              </h1>
            </div>

            <Button
              href="/#best-sellers"
              className="px-7 py-2.5 text-base font-medium sm:px-9 sm:py-3 sm:text-lg"
            >
              Shop Now
            </Button>
          </div>

          <div className="relative order-2 flex w-full flex-col items-center gap-5 sm:order-1 sm:col-span-2 sm:gap-6 lg:order-2 lg:col-span-1 lg:w-1/4 lg:gap-15 lg:self-stretch lg:justify-between">
            <div className="relative flex h-[360px] w-full justify-center sm:h-[390px] md:h-[430px] lg:h-full">
              <Image
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.imageAlt}
                width={404}
                height={612}
                sizes="(max-width: 640px) 72vw, (max-width: 1024px) 420px, 320px"
                className="h-full w-auto max-w-[82vw] object-contain sm:max-w-[340px] md:max-w-[370px] lg:h-auto lg:w-full"
              />
            </div>

            <div className="flex flex-col gap-2 text-center">
              <p className="font-semibold leading-none text-cocoa text-sm lg:text-base">
                {formatSlideNumber(activeIndex + 1)} /{" "}
                {formatSlideNumber(productSlides.length)}
              </p>
              <h3 className="max-w-48 text-2xl leading-[1.05] text-cocoa sm:max-w-none sm:text-3xl lg:text-3xl xl:text-4xl">
                {activeSlide.name}
              </h3>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-[292px] flex items-center justify-between sm:top-[318px] md:top-[350px] lg:inset-x-[-82px] lg:top-[348px] xl:inset-x-[-94px]">
              <button
                type="button"
                aria-label="Previous product"
                onClick={goToPrevious}
                className="pointer-events-auto inline-flex size-8 items-center justify-center rounded-full border-2 border-brand-green-dark bg-transparent text-brand-green-dark shadow-[0_2px_0_var(--brand-green-dark)] transition hover:-translate-y-0.5 hover:bg-brand-green-dark hover:text-brand-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green-dark sm:size-10 lg:size-13 lg:border-[3px] lg:shadow-[0_4px_0_var(--brand-green-dark)]"
              >
                <ArrowLeft aria-hidden="true" className="size-5 lg:size-7" strokeWidth={2.4} />
              </button>
              <button
                type="button"
                aria-label="Next product"
                onClick={goToNext}
                className="pointer-events-auto inline-flex size-8 items-center justify-center rounded-full border-2 border-brand-green-dark bg-transparent text-brand-green-dark shadow-[0_2px_0_var(--brand-green-dark)] transition hover:-translate-y-0.5 hover:bg-brand-green-dark hover:text-brand-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green-dark sm:size-10 lg:size-13 lg:border-[3px] lg:shadow-[0_4px_0_var(--brand-green-dark)]"
              >
                <ArrowRight aria-hidden="true" className="size-5 lg:size-7" strokeWidth={2.4} />
              </button>
            </div>
          </div>

          <div className="order-3 flex w-full flex-col items-center justify-between gap-8 text-center sm:min-h-[240px] sm:items-end lg:gap-0 sm:text-right lg:w-2/6 lg:min-h-0">
            {activeSlide.stats.map((stat) => (
              <div key={stat.label} className="flex w-full flex-col gap-2.5">
                <p className="font-semibold leading-none text-cocoa text-sm">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-normal leading-[1.05] text-cocoa sm:text-4xl">
                  {stat.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
