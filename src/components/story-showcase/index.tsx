import {
  ArrowRight,
  CookingPot,
  Dumbbell,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const promiseStats = [
  { value: "4.8", label: "Average Rating", icon: Star },
  { value: "1500+", label: "Happy Customers", icon: Users },
  { value: "500,00+", label: "Healthy Breakfasts Served", icon: CookingPot },
  { value: "28g", label: "Protein Per Serving", icon: Dumbbell },
] as const;

export function StoryShowcase() {
  return (
    <section
      aria-labelledby="story-showcase-title"
      className="relative overflow-hidden bg-background px-3 py-12 sm:px-4 sm:py-16 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 size-72 rounded-full bg-brand-mango/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 size-80 rounded-full bg-brand-green/7 blur-3xl"
      />

      <div className="Container relative">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <div className="relative min-w-0">
            <div className="relative aspect-[1/1.08] overflow-hidden rounded-[1.6rem] bg-brand-cocoa sm:aspect-square lg:aspect-[1.08/1]">
              <Image
                src="/assets/images/our-story.jpeg"
                alt="Nutranza dark chocolate high protein oats surrounded by oats, chocolate and berries"
                fill
                sizes="(max-width: 1023px) 92vw, 56vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-center px-2 text-center sm:px-5 lg:items-start lg:px-0 lg:text-left xl:pr-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-green sm:text-sm">
              Our Promise
            </p>
            <h2
              id="story-showcase-title"
              className="mt-4 max-w-xl font-heading text-[clamp(2.15rem,3.5vw,3.6rem)] font-black leading-[1.05] tracking-normal text-brand-cocoa-deep"
            >
              Why Thousands Choose Nutranza Every Morning
            </h2>
            <p className="mt-6 max-w-xl text-base font-semibold leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
              Every Nutranza product is crafted with premium ingredients,
              delicious taste and nutrition that fits your everyday lifestyle.
            </p>

            <ul className="mt-8 grid w-full max-w-xl grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">
              {promiseStats.map(({ value, label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex min-w-0 flex-col items-center border-brand-line px-2 text-center sm:border-r sm:last:border-r-0 lg:px-3"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-7 fill-brand-mango/15 text-brand-mango sm:size-8"
                    strokeWidth={2.35}
                  />
                  <strong className="mt-2 text-lg font-black leading-none text-brand-cocoa-deep sm:text-xl">
                    {value}
                  </strong>
                  <span className="mt-1.5 max-w-24 text-[0.68rem] font-bold leading-4 text-brand-muted sm:text-xs">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              href="/about"
              variant="mango"
              className="mt-9 gap-3 px-7 py-2.5 text-base font-bold transition-[box-shadow] duration-300 sm:px-9 sm:py-3"
            >
              Our Story
              <ArrowRight aria-hidden="true" className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
