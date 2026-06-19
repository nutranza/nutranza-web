"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
        <div className="relative z-10 flex justify-between py-12">
          
          <div className="w-2/6 order-1 flex flex-col justify-between items-start">
            <div>
              <p className="text-base font-extrabold leading-none text-cocoa sm:text-lg">
                {activeSlide.eyebrow}
              </p>
              <h1 className="mt-5 font-normal text-[2.75rem] xl:leading-24 leading-18 text-cocoa sm:text-6xl lg:text-5xl xl:text-7xl">
                {activeSlide.headline}
              </h1>
            </div>

            <Link
              href="/#best-sellers"
              className="mt-7 inline-flex min-h-14 min-w-40 items-center justify-center rounded-full border-[3px] border-brand-green-dark bg-brand-green px-8 text-base font-extrabold text-brand-lime shadow-[0_5px_0_var(--brand-green-dark)] transition hover:-translate-y-0.5 hover:bg-brand-green-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green-dark sm:mt-8 lg:mt-0"
            >
              Shop Now
            </Link>
          </div>

          <div className="w-1/4 relative order-2 mt-12 flex flex-col items-center gap-15 lg:mt-0 lg:self-stretch lg:justify-between">
            <div className="relative h-full w-full">
              <Image
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.imageAlt}
                width={404}
                height={612}
                sizes="(max-width: 640px) 74vw, (max-width: 1024px) 340px, 320px"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-2 text-center">
              <p className="text-base font-extrabold leading-none text-cocoa">
                {formatSlideNumber(activeIndex + 1)} /{" "}
                {formatSlideNumber(productSlides.length)}
              </p>
              <h3 className="text-3xl text-cocoa sm:text-4xl">
                {activeSlide.name}
              </h3>
            </div>

            <div className="pointer-events-none absolute inset-x-[-1.25rem] top-[342px] flex items-center justify-between sm:top-[426px] lg:inset-x-[-82px] lg:top-[348px] xl:inset-x-[-94px]">
              <button
                type="button"
                aria-label="Previous product"
                onClick={goToPrevious}
                className="pointer-events-auto inline-flex size-13 items-center justify-center rounded-full border-[3px] border-brand-green-dark bg-transparent text-brand-green-dark shadow-[0_4px_0_var(--brand-green-dark)] transition hover:-translate-y-0.5 hover:bg-brand-green-dark hover:text-brand-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green-dark"
              >
                <ArrowLeft aria-hidden="true" className="size-7" strokeWidth={2.4} />
              </button>
              <button
                type="button"
                aria-label="Next product"
                onClick={goToNext}
                className="pointer-events-auto inline-flex size-13 items-center justify-center rounded-full border-[3px] border-brand-green-dark bg-transparent text-brand-green-dark shadow-[0_4px_0_var(--brand-green-dark)] transition hover:-translate-y-0.5 hover:bg-brand-green-dark hover:text-brand-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green-dark"
              >
                <ArrowRight aria-hidden="true" className="size-7" strokeWidth={2.4} />
              </button>
            </div>
          </div>

          <div className="w-2/6 order-3 text-right flex flex-col justify-between items-end ">
            {activeSlide.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 w-full">
                <p className="text-sm font-extrabold leading-none text-cocoa">
                  {stat.label}
                </p>
                <h3 className="text-3xl font-normal text-cocoa sm:text-4xl">
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
