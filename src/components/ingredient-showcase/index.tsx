import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Bean, Flower2, Milk, Wheat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ingredient-showcase.module.css";

type Ingredient = {
  title: string;
  description: string;
  Icon: LucideIcon;
  badgeClassName: string;
};

const leftIngredients = [
  {
    title: "Almond Milk",
    description:
      "Adds a creamy, smooth taste and plant-based richness to every spoonful.",
    Icon: Milk,
    badgeClassName: "bg-[#a86a4b] text-[#fff4df]",
  },
  {
    title: "Dates",
    description:
      "Natural sweetness with a caramel-like flavor, without relying on refined sugar.",
    Icon: Bean,
    badgeClassName: "bg-[#fff0c9] text-[#8f5435]",
  },
] as const satisfies readonly Ingredient[];

const rightIngredients = [
  {
    title: "Rolled Oats",
    description:
      "Whole grain oats bring fiber, slow-release carbs, and a satisfying texture.",
    Icon: Wheat,
    badgeClassName: "bg-sage text-[#fff4df]",
  },
  {
    title: "Vanilla Extract",
    description:
      "Warm vanilla notes round out the flavor with simple, familiar sweetness.",
    Icon: Flower2,
    badgeClassName: "bg-gold text-cocoa",
  },
] as const satisfies readonly Ingredient[];

function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
  return (
    <article className="flex gap-4 sm:gap-5 lg:max-w-92">
      <div
        className={`${styles.badge} flex size-16 shrink-0 items-center justify-center shadow-[0_12px_28px_rgba(43,19,12,0.08)] sm:size-20 ${ingredient.badgeClassName}`}
      >
        <ingredient.Icon
          aria-hidden="true"
          className="size-8 sm:size-10"
          strokeWidth={1.8}
        />
      </div>

      <div className="min-w-0 pt-1">
        <h3 className="font-heading text-2xl font-extrabold uppercase leading-none text-[#965d3e] sm:text-[2rem]">
          {ingredient.title}
        </h3>
        <Link
          href="/#shop"
          className="mt-3 inline-flex items-center gap-1 border-b-2 border-cocoa pb-0.5 text-xs font-extrabold uppercase leading-none text-cocoa transition hover:border-coral hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
        >
          Learn More
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5"
            strokeWidth={2.4}
          />
        </Link>
        <p className="mt-6 max-w-72 text-sm font-semibold leading-6 text-cocoa sm:text-base sm:leading-7">
          {ingredient.description}
        </p>
      </div>
    </article>
  );
}

export function IngredientShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="Container">
        <h2 className="mx-auto max-w-5xl text-center font-heading text-4xl font-extrabold uppercase leading-[0.9] text-cocoa sm:text-6xl lg:text-[4.75rem]">
          Protein Oats Snackable Nutrition
        </h2>

        <div className="relative mx-auto mt-12 grid max-w-7xl gap-10 lg:mt-14 lg:min-h-128 lg:grid-cols-[minmax(0,360px)_minmax(320px,460px)_minmax(0,360px)] lg:items-center lg:justify-center lg:gap-10 xl:gap-14">
          <div className="order-2 grid gap-10 sm:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:gap-16">
            {leftIngredients.map((ingredient) => (
              <IngredientCard key={ingredient.title} ingredient={ingredient} />
            ))}
          </div>

          <div className="order-1 mx-auto flex w-full max-w-[20rem] justify-center sm:max-w-[24rem] lg:order-2 lg:max-w-md">
            <div className="relative w-full">
              <div className="absolute inset-x-10 bottom-2 h-20 rounded-full bg-cocoa/10 blur-2xl" />
              <Image
                src="/assets/images/main-product.png"
                alt="Nutranza mango high protein oats pack held in hand"
                width={1254}
                height={1254}
                sizes="(min-width: 1024px) 448px, 82vw"
                className="relative h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="order-3 grid gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-16">
            {rightIngredients.map((ingredient) => (
              <IngredientCard key={ingredient.title} ingredient={ingredient} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
