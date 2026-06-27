"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button, IconButton } from "@/components/ui/button";

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
  backgroundClassName: string;
  stats: readonly ProductStat[];
};

const productSlides = [
  {
    eyebrow: "Protein-Packed Favorite",
    headline: "Dark Chocolate Protein Oats",
    name: "High Protein Oats",
    image: "/assets/images/product-3-cropped.png",
    imageAlt: "Nutranza dark chocolate high protein oats pack",
    backgroundClassName: "bg-[#dbe8ff]",
    stats: [
      { label: "Protein", value: "26g" },
      { label: "Color", value: "Cocoa Blue" },
      { label: "Pack", value: "1kg" },
      { label: "Flavor", value: "Dark Chocolate" },
    ],
  },
  {
    eyebrow: "Award-Winning Flavor",
    headline: "Mango Protein Oats",
    name: "High Protein Oats",
    image: "/assets/images/2.png",
    imageAlt: "Nutranza mango high protein oats pack",
    backgroundClassName: "bg-brand-slider-light",
    stats: [
      { label: "Protein", value: "30g" },
      { label: "Color", value: "Mango Gold" },
      { label: "Pack", value: "500kg" },
      { label: "Flavor", value: "Mango" },
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
      className={`relative overflow-hidden py-14 text-cocoa transition-colors duration-500 lg:py-20 ${activeSlide.backgroundClassName}`}
    >
      <div className="Container">
        <div className="relative z-10 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 md:gap-x-12 lg:flex lg:justify-between lg:gap-0">

          <div className="order-1 flex w-full flex-col items-center justify-between gap-6 text-center sm:order-2 sm:min-h-[240px] sm:items-start sm:text-left lg:order-1 lg:w-2/6 lg:min-h-0">
            <div className="overflow-hidden">
              <div
                key={`slider-copy-${activeSlide.headline}`}
                className="product-slider-copy-left space-y-4"
              >
                <p className="font-extrabold leading-none text-cocoa lg:text-base xl:text-lg">
                  {activeSlide.eyebrow}
                </p>
                <h1 className="max-w-72 font-normal text-3xl leading-[1.02] text-cocoa sm:max-w-none sm:text-5xl sm:leading-[1.05] lg:text-5xl lg:leading-18 xl:text-7xl xl:leading-24">
                  {activeSlide.headline}
                </h1>
              </div>
            </div>

            <div
              key={`slider-cta-${activeSlide.headline}`}
              className="product-slider-copy-left"
            >
              <Button
                href="/#best-sellers"
                variant="cocoa"
                className="px-7 py-2.5 text-base font-medium sm:px-9 sm:py-3 sm:text-lg"
              >
                Shop Now
              </Button>
            </div>
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
              <IconButton
                aria-label="Previous product"
                onClick={goToPrevious}
                variant="sliderLight"
                className="pointer-events-auto size-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa sm:size-10 lg:size-13"
              >
                <ArrowLeft aria-hidden="true" className="size-5 lg:size-7" strokeWidth={2.4} />
              </IconButton>
              <IconButton
                aria-label="Next product"
                onClick={goToNext}
                variant="sliderLight"
                className="pointer-events-auto size-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa sm:size-10 lg:size-13"
              >
                <ArrowRight aria-hidden="true" className="size-5 lg:size-7" strokeWidth={2.4} />
              </IconButton>
            </div>
          </div>

          <div className="order-3 flex w-full flex-col items-center justify-between gap-8 overflow-hidden text-center sm:min-h-[240px] sm:items-end sm:text-right lg:w-2/6 lg:min-h-0 lg:gap-0">
            {activeSlide.stats.map((stat) => (
              <div key={stat.label} className="flex w-full flex-col gap-2.5">
                <p className="font-semibold leading-none text-cocoa text-sm">
                  {stat.label}
                </p>
                <div className="overflow-hidden">
                  <h3
                    key={`${activeSlide.headline}-${stat.label}-${stat.value}`}
                    className="product-slider-copy-right text-2xl font-normal leading-[1.05] text-cocoa sm:text-4xl"
                  >
                    {stat.value}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
