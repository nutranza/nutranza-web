import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const benefitChips = [
  "Protein-rich staples",
  "Clean pantry choices",
  "Ready for daily routines",
] as const;

export function BottomCta() {
  return (
    <section className="bg-[#fff8ed] py-12 lg:py-16">
      <div className="Container">
        <div className="rounded-3xl border border-cocoa/10 bg-white px-5 py-10 text-center shadow-[0_18px_50px_rgba(43,19,12,0.08)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-widest text-coral">
              Stock your pantry
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight text-cocoa sm:text-5xl lg:text-6xl">
              Make Better Snacking Your Daily Habit
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-cocoa/70 sm:text-lg">
              Shop Nutranza staples made for quick breakfasts, lighter snacks,
              and protein-rich everyday routines.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {benefitChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 text-sm font-bold text-cocoa"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-4 text-coral"
                    strokeWidth={2.5}
                  />
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/#best-sellers"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cocoa px-6 text-sm font-extrabold uppercase text-cream transition hover:bg-cocoa/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral sm:px-7"
              >
                Shop Best Sellers
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={3}
                />
              </Link>
              <Link
                href="/#shop-by-category"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cocoa/20 px-6 text-sm font-extrabold uppercase text-cocoa transition hover:border-coral hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral sm:px-7"
              >
                Browse Categories
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={3}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
