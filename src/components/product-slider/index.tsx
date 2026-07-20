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
  headlineLead: string;
  headlineAccent: string;
  href: string;
  image: string;
  imageAlt: string;
  backgroundClassName: string;
  waveClassName: string;
  copyClassName: string;
  accentClassName: string;
  ctaButtonClassName: string;
  navButtonClassName: string;
  stats: readonly ProductStat[];
};

const productSlides = [
  {
    eyebrow: "Protein-Packed Favorite",
    headlineLead: "Dark Chocolate",
    headlineAccent: "Protein Oats",
    href: "/products",
    image: "/assets/images/product-3-cropped.png",
    imageAlt: "Nutranza dark chocolate high protein oats pack",
    backgroundClassName: "bg-[#526eea]",
    waveClassName: "text-[#526eea]",
    copyClassName: "text-white",
    accentClassName: "text-brand-mango",
    ctaButtonClassName: "",
    navButtonClassName:
      "[--button-bg:var(--brand-mango)] [--button-border:var(--brand-cocoa)] [--button-color:var(--brand-cocoa)]",
    stats: [
      { label: "Protein", value: "26g" },
      { label: "Fibre", value: "10g" },
      { label: "Flavour", value: "Rich Chocolate" },
      { label: "Refined Sugar", value: "No" },
    ],
  },
  {
    eyebrow: "Bright, Fruity & Filling",
    headlineLead: "Mango",
    headlineAccent: "Protein Oats",
    href: "/products",
    image: "/assets/images/2.png",
    imageAlt: "Nutranza mango high protein oats pack",
    backgroundClassName: "bg-brand-slider-light",
    waveClassName: "text-brand-slider-light",
    copyClassName: "text-white",
    accentClassName: "text-[#9C4443]",
    ctaButtonClassName:
      "[--button-bg:#9C4443] [--button-border:var(--brand-cocoa)] [--button-color:#fff]",
    navButtonClassName:
      "[--button-bg:#9C4443] [--button-border:var(--brand-cocoa)] [--button-color:#fff]",
    stats: [
      { label: "Protein", value: "26g" },
      { label: "Fibre", value: "10g" },
      { label: "Flavour", value: "Tangy Mango" },
      { label: "Cooking Required", value: "No" },
    ],
  },
] as const satisfies readonly ProductSlide[];

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
      className={`relative overflow-visible py-14 transition-colors duration-500 sm:py-18 lg:py-20 ${activeSlide.backgroundClassName} ${activeSlide.copyClassName}`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-px z-10 h-16 -translate-y-full transition-colors duration-500 sm:h-20 lg:h-28 ${activeSlide.waveClassName}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 130"
          preserveAspectRatio="none"
          className="block h-full w-full"
        >
          <path
            fill="currentColor"
            d="M0 77C95 41 201 33 330 48C458 63 564 89 704 53C842 18 927 -11 1072 24C1189 52 1317 93 1440 36V130H0V77Z"
          />
        </svg>
      </div>

      <div className="Container">
        <div className="relative z-10 grid min-h-[680px] grid-cols-1 items-center gap-y-10 sm:min-h-[720px] lg:min-h-[700px] lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,1.25fr)_minmax(0,0.7fr)] lg:gap-x-4 xl:min-h-[740px] xl:gap-x-8">
          <div className="order-1 flex min-w-0 w-full flex-col items-center text-center lg:h-[610px] lg:items-start lg:justify-center lg:py-8 lg:pr-4 lg:text-left xl:h-[650px]">
            <div className="w-full min-w-0">
              <div
                key={`slider-copy-${activeSlide.headlineLead}`}
                className="product-slider-copy-left"
              >
                {/* <p className="text-sm font-extrabold leading-none sm:text-base xl:text-lg">
                  {activeSlide.eyebrow}
                </p> */}
                <h2 className="mx-auto mt-5 max-w-3xl font-heading text-[clamp(2.75rem,7vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.035em] lg:mx-0 lg:max-w-[10ch] lg:text-[clamp(3.25rem,4.25vw,5.25rem)]">
                  <span className="block">{activeSlide.headlineLead}</span>
                  <span className={`mt-2 block ${activeSlide.accentClassName}`}>
                    {activeSlide.headlineAccent}
                  </span>
                </h2>
              </div>
            </div>

          </div>

          <div className="relative order-2 flex w-full flex-col items-center justify-center">
            <div className="relative h-[430px] w-full max-w-[620px] sm:h-[500px] lg:h-[610px] xl:h-[650px]">
              <div className="absolute inset-x-12 inset-y-0 sm:inset-x-16 lg:inset-x-10 xl:inset-x-12">
                <Image
                  key={activeSlide.image}
                  src={activeSlide.image}
                  alt={activeSlide.imageAlt}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 520px, 42vw"
                  className="product-slider-product-enter object-contain drop-shadow-[0_28px_32px_rgba(36,17,8,0.2)]"
                />
              </div>

            </div>

            <div className="mt-6 flex w-full max-w-sm items-center justify-center gap-5 sm:max-w-md sm:gap-8">
              <IconButton
                aria-label="Previous product"
                onClick={goToPrevious}
                variant="sliderLight"
                className={`size-10 shrink-0 transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa sm:size-12 lg:size-14 ${activeSlide.navButtonClassName}`}
              >
                <ArrowLeft
                  aria-hidden="true"
                  className="size-5 lg:size-7"
                  strokeWidth={2.4}
                />
              </IconButton>

              <Button
                href={activeSlide.href}
                variant="mango"
                className={`min-w-45 px-8 py-2.5 text-base font-bold sm:min-w-64 sm:px-10 sm:py-3 sm:text-lg ${activeSlide.ctaButtonClassName}`}
              >
                Buy Now
              </Button>

              <IconButton
                aria-label="Next product"
                onClick={goToNext}
                variant="sliderLight"
                className={`size-10 shrink-0 transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa sm:size-12 lg:size-14 ${activeSlide.navButtonClassName}`}
              >
                <ArrowRight
                  aria-hidden="true"
                  className="size-5 lg:size-7"
                  strokeWidth={2.4}
                />
              </IconButton>
            </div>
          </div>

          <div className="order-3 grid w-full grid-cols-2 gap-x-6 gap-y-8 text-center lg:h-[610px] lg:grid-cols-1 lg:content-between lg:py-8 lg:text-right xl:h-[650px]">
            {activeSlide.stats.map((stat) => (
              <div key={stat.label} className="min-h-20 overflow-hidden">
                <div
                  key={`${activeSlide.headlineLead}-${stat.label}-${stat.value}`}
                  className="product-slider-copy-right"
                >
                  <p
                    className={`font-heading text-[clamp(1.7rem,4.5vw,3.4rem)] font-black leading-[0.95] ${activeSlide.accentClassName}`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-3xl font-bold font-heading leading-none mt-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
