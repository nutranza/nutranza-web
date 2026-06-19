"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const slides = [
  {
    id: "mango-peanut-butter",
    title: "Brighten Your Day with Nutranza",
    cta: "Shop by Collections",
    href: "/#shop",
    layout: "image-left",
    leftImage: "/assets/images/first-product.png",
    leftAlt: "Person smiling while holding Nutranza mango peanut butter",
    productImage: "/assets/images/products/4.png",
    productAlt: "Nutranza mango peanut butter jar",
    badgeImage: "/assets/images/heart-new.png",
  },
  {
    id: "chocolate-almond",
    title: "Pop Fun with Nutranza",
    cta: "Explore Now",
    href: "/#best-sellers",
    layout: "content-left",
    rightImage: "/assets/images/second-product.png",
    rightAlt: "Person smiling while holding Nutranza chocolate almond peanut butter",
    productImage: "/assets/images/products/5.png",
    productAlt: "Nutranza chocolate almond peanut butter jar",
    badgeImage: "/assets/images/good_vibes.png",
  },
] as const;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const activeSlide = slides[activeIndex];

  const goToSlide = (nextIndex: number) => {
    setDirection(nextIndex > activeIndex || (activeIndex === slides.length - 1 && nextIndex === 0) ? 1 : -1);
    setActiveIndex((nextIndex + slides.length) % slides.length);
  };

  const showPrevious = () => goToSlide(activeIndex - 1);
  const showNext = () => goToSlide(activeIndex + 1);

  return (
    <section aria-label="Featured products" className="bg-white py-5">
      <div className="w-full px-2.5">
        <div className="group relative overflow-hidden rounded-lg">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={activeSlide.id}
              custom={direction}
              initial={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, x: direction > 0 ? 34 : -34 }
              }
              animate={{ opacity: 1, x: 0 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction > 0 ? -34 : 34 }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.52,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`grid gap-2 ${
                activeSlide.layout === "content-left"
                  ? "lg:grid-cols-[60fr_40fr]"
                  : "lg:grid-cols-[40fr_60fr]"
              }`}
            >
              {activeSlide.layout === "content-left" ? (
                <SecondSlide slide={activeSlide} />
              ) : (
                <FirstSlide slide={activeSlide} />
              )}
            </motion.article>
          </AnimatePresence>

          <button
            type="button"
            aria-label="Previous slide"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#08704b] text-[#dfbf3b] opacity-100 shadow-[4px_5px_0_#003f3a,0_10px_24px_rgba(0,0,0,0.16)] transition duration-300 ease-out hover:-translate-y-[calc(50%+2px)] hover:bg-[#075f41] hover:shadow-[5px_6px_0_#003f3a,0_12px_26px_rgba(0,0,0,0.18)] focus-visible:translate-x-0 focus-visible:scale-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dfbf3b] md:left-4 md:size-12 md:-translate-x-3 md:scale-95 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:scale-100 md:group-hover:opacity-100 md:group-focus-within:translate-x-0 md:group-focus-within:scale-100 md:group-focus-within:opacity-100"
          >
            <ArrowLeft aria-hidden="true" className="size-6" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={showNext}
            className="absolute right-3 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#08704b] text-[#dfbf3b] opacity-100 shadow-[4px_5px_0_#003f3a,0_10px_24px_rgba(0,0,0,0.16)] transition duration-300 ease-out hover:-translate-y-[calc(50%+2px)] hover:bg-[#075f41] hover:shadow-[5px_6px_0_#003f3a,0_12px_26px_rgba(0,0,0,0.18)] focus-visible:translate-x-0 focus-visible:scale-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dfbf3b] md:right-4 md:size-12 md:translate-x-3 md:scale-95 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:scale-100 md:group-hover:opacity-100 md:group-focus-within:translate-x-0 md:group-focus-within:scale-100 md:group-focus-within:opacity-100"
          >
            <ArrowRight aria-hidden="true" className="size-6" strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </section>
  );
}

function FirstSlide({ slide }: { slide: (typeof slides)[0] }) {
  return (
    <>
      <div className="relative min-h-95 overflow-hidden rounded-lg bg-[#eff8df] sm:min-h-130 lg:min-h-155 xl:min-h-187.5">
        <Image
          src={slide.leftImage}
          alt={slide.leftAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative overflow-hidden rounded-lg bg-[#11704b] px-8 py-10 text-white sm:px-12 sm:py-14 lg:min-h-155 lg:px-14 xl:min-h-160 xl:px-16">
        <div className="grid h-full items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(260px,0.8fr)] lg:gap-10 xl:gap-12">
          <div className="relative z-10 max-w-xl">
            <h1 className={`${styles.heroTitle} w-full text-[clamp(1rem,5vw,5rem)] font-black leading-[1.08] tracking-normal text-white`}>
              {slide.title}
            </h1>
            <div className="mt-8">
              <Link
                href={slide.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#DFBF3B] px-8 text-sm font-bold text-[#442211] shadow-[0_8px_0_rgba(0,61,43,0.38)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_11px_0_rgba(0,61,43,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-14 sm:px-9 sm:text-base"
              >
                {slide.cta}
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden min-h-97.5 items-center justify-center md:flex">
            <div className="relative flex h-[min(42vw,560px)] w-[min(34vw,380px)] items-center justify-center overflow-hidden rounded-t-full bg-[#eff8df]">
              <Image
                src={slide.productImage}
                alt={slide.productAlt}
                fill
                sizes="(max-width: 1024px) 34vw, 26vw"
                className="object-contain p-10"
              />
            </div>

            <Image
              src={slide.badgeImage}
              alt="Love badge"
              width={175}
              height={175}
              className={`${styles.heartBadge} absolute -bottom-4 -left-5 h-auto w-30 drop-shadow-[12px_13px_0_rgba(0,77,81,0.62)] lg:-bottom-16 lg:-left-16 sm:w-40 lg:w-42`}
            />
          </div>
        </div>

        <Image
          src={slide.badgeImage}
          alt="Love badge"
          width={175}
          height={175}
          className={`${styles.heartBadge} absolute bottom-4 right-5 h-auto w-20 drop-shadow-[8px_9px_0_rgba(0,77,81,0.55)] md:hidden`}
        />
      </div>
    </>
  );
}

function SecondSlide({ slide }: { slide: (typeof slides)[1] }) {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg bg-[#11704b] px-7 py-10 text-white sm:px-10 sm:py-12 lg:min-h-155 lg:px-8 xl:min-h-160 xl:px-10">
        <div className="grid h-full items-center gap-8 md:grid-cols-[minmax(250px,0.85fr)_minmax(0,1fr)] lg:gap-9 xl:gap-12">
          <div className="relative z-10 mx-auto hidden min-h-105 w-full max-w-90 items-center justify-center md:flex">
            <div className="relative flex h-[min(46vw,500px)] w-[min(28vw,330+px)] items-center justify-center overflow-hidden rounded-t-full rounded-b-lg bg-[#f5ffe6]">
              <Image
                src={slide.productImage}
                alt={slide.productAlt}
                fill
                sizes="(max-width: 1024px) 34vw, 24vw"
                className="object-contain p-8 lg:p-9"
              />
            </div>

            <Image
              src={slide.badgeImage}
              alt="Good vibes badge"
              width={208}
              height={181}
              className={`${styles.goodVibesSticker} absolute bottom-0 right-0 h-auto w-36 lg:-bottom-10 lg:-right-18 lg:w-40 xl:w-48`}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-117.5 text-center md:mx-0 md:text-left lg:pl-2">
            <h1 className={`${styles.heroTitle} text-[clamp(3rem,5vw,4rem)] font-black leading-[1.20] tracking-normal text-white`}>
              {slide.title}``
            </h1>
            <div className="mt-8 flex justify-center md:justify-end">
              <Link
                href={slide.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1C3298] px-8 text-sm font-medium text-white shadow-[0_7px_0_rgba(0,77,81,0.72)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_0_rgba(0,77,81,0.62)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:min-h-14 sm:px-10 sm:text-base"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-95 overflow-hidden rounded-lg bg-[#eff8df] sm:min-h-130 lg:min-h-155 xl:min-h-187.5">
        <Image
          src={slide.rightImage}
          alt={slide.rightAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-center"
        />
      </div>
    </>
  );
}
