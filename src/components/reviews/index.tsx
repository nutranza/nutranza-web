"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useRef } from "react";

const reviews = [
  {
    name: "Riya P.",
    product: "Chocolate Protein Oats",
    title: "Perfect morning bowl",
    quote:
      "The oats taste rich without feeling too sweet. I can make breakfast fast and it keeps me full until lunch.",
    initials: "RP",
  },
  {
    name: "Aarav M.",
    product: "Organic Peanut Butter",
    title: "Smooth and filling",
    quote:
      "Roasted flavour is strong, texture is smooth, and it spreads well on toast. It is now my post-workout snack.",
    initials: "AM",
  },
  {
    name: "Nisha S.",
    product: "Rice Cakes",
    title: "Light snack done right",
    quote:
      "Crisp, clean, and easy to pair with peanut butter. I keep a pack in my office drawer for busy days.",
    initials: "NS",
  },
  {
    name: "Dev K.",
    product: "Fruit and Nut Muesli",
    title: "Crunch stays fresh",
    quote:
      "The muesli has a balanced crunch and does not turn soggy quickly. It feels like a proper breakfast upgrade.",
    initials: "DK",
  },
  {
    name: "Meera T.",
    product: "Classic Peanut Butter",
    title: "Clean ingredient taste",
    quote:
      "It tastes natural and not oily. My kids like it on toast, and I like that it does not feel heavy.",
    initials: "MT",
  },
  {
    name: "Kabir S.",
    product: "Protein Oats",
    title: "Great after gym",
    quote:
      "Good protein, good texture, and no odd aftertaste. It fits easily into my evening workout routine.",
    initials: "KS",
  },
  {
    name: "Anaya R.",
    product: "Rice Cakes",
    title: "Easy travel snack",
    quote:
      "The cakes are light but satisfying. I carry them during travel and top them with peanut butter.",
    initials: "AR",
  },
  {
    name: "Jatin B.",
    product: "Muesli",
    title: "Balanced sweetness",
    quote:
      "The sweetness is controlled and the mix feels premium. It works with milk, curd, or straight from the pack.",
    initials: "JB",
  },
] as const;

export function Reviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function getSlideDistance() {
    const scroller = scrollerRef.current;
    const firstCard = scroller?.querySelector<HTMLElement>("[data-review-card]");

    if (!scroller || !firstCard) {
      return 0;
    }

    const styles = window.getComputedStyle(scroller);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");

    return firstCard.offsetWidth + gap;
  }

  function scrollReview(direction: "previous" | "next") {
    const scroller = scrollerRef.current;
    const distance = getSlideDistance();

    if (!scroller || distance === 0) {
      return;
    }

    scroller.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-cream py-12 lg:scroll-mt-28 lg:py-16"
    >
      <div className="Container">
        <div className="max-w-xl">
          <h2 className="text-3xl font-black leading-tight text-cocoa sm:text-4xl lg:text-5xl">
            Ratings and Reviews
          </h2>
          <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-cocoa/76 sm:text-base">
            Hear the feedback of real customers who use Nutranza peanut butter,
            protein oats, rice cakes, and muesli in everyday routines.
          </p>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex justify-end gap-2">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => scrollReview("previous")}
              className="inline-flex size-11 items-center justify-center rounded-lg bg-coral text-cream transition hover:bg-coral/90 focus-visible:outline-0 sm:size-12"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => scrollReview("next")}
              className="inline-flex size-11 items-center justify-center rounded-lg bg-coral text-cream transition hover:bg-coral/90 focus-visible:outline-0 sm:size-12"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>

          <div
            ref={scrollerRef}
            className="grid grid-flow-col auto-cols-[100%] snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-none sm:auto-cols-[calc((100%-1rem)/2)] lg:auto-cols-[calc((100%-2rem)/3)] xl:auto-cols-[calc((100%-3rem)/4)] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => (
              <article
                key={review.name}
                data-review-card
                className="flex h-72 snap-start flex-col overflow-hidden rounded-xl border border-cocoa bg-white p-5"
              >
                <Quote
                  aria-hidden="true"
                  className="size-8 fill-cocoa/60  text-transparent"
                />

                <div className="mt-5">
                  <h3 className="text-lg font-black text-cocoa">
                    {review.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm font-medium leading-relaxed text-cocoa/60">
                    {review.quote}
                  </p>
                </div>

                <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gold text-sm text-cocoa">
                      {review.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-cocoa">
                        {review.name}
                      </p>
                      <p className="truncate text-xs text-cocoa/60">
                        {review.product}
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex shrink-0 text-gold"
                    aria-label="Rated 5 out of 5"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        aria-hidden="true"
                        className="size-4 fill-current"
                        strokeWidth={1.4}
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
