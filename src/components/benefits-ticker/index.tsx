"use client";

import type { LucideIcon } from "lucide-react";
import { Boxes, Leaf, Sprout, WheatOff, Zap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import styles from "./benefits-ticker.module.css";

type Benefit = {
  label: string;
  Icon: LucideIcon;
};

const benefits = [
  { label: "Energy Boost", Icon: Zap },
  { label: "15G Plant Protein", Icon: Leaf },
  { label: "Gluten Free", Icon: WheatOff },
  { label: "Clean Ingredients", Icon: Sprout },
  { label: "No Refined Sugar", Icon: Boxes },
  { label: "Gluten Free", Icon: WheatOff },
] as const satisfies readonly Benefit[];

const tickerGroup = [...benefits, ...benefits] as const;

function BenefitList({ isDuplicate = false }: { isDuplicate?: boolean }) {
  return (
    <ul
      aria-hidden={isDuplicate ? "true" : undefined}
      className="flex shrink-0 items-center gap-10 px-5 sm:gap-12 sm:px-6 lg:gap-14"
    >
      {tickerGroup.map((benefit, index) => (
        <li
          key={`${benefit.label}-${index}`}
          className="flex shrink-0 items-center gap-3 whitespace-nowrap text-cocoa"
        >
          <benefit.Icon
            aria-hidden="true"
            className="size-6 shrink-0"
            strokeWidth={1.8}
          />
          <span className="font-heading text-lg font-extrabold uppercase leading-none sm:text-xl">
            {benefit.label}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function BenefitsTicker() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Nutranza product benefits"
      className="mt-20"
    >
      <div className={`${styles.strip} overflow-hidden py-6 text-cocoa sm:py-7`}>
        {prefersReducedMotion ? (
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5">
            {benefits.map((benefit, index) => (
              <div
                key={`${benefit.label}-${index}`}
                className="flex items-center gap-3 whitespace-nowrap text-cocoa"
              >
                <benefit.Icon
                  aria-hidden="true"
                  className="size-6 shrink-0"
                  strokeWidth={1.8}
                />
                <span className="font-heading text-lg font-extrabold uppercase leading-none sm:text-xl">
                  {benefit.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <BenefitList />
            <BenefitList isDuplicate />
          </motion.div>
        )}
      </div>
    </section>
  );
}
