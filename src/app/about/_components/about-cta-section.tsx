import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutCtaSection() {
  return (
    <section
      aria-labelledby="about-cta-title"
      className="mb-14 bg-background px-2.5 pt-4 sm:px-4"
    >
      <div className="Container">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-brand-cocoa/15 bg-[linear-gradient(115deg,var(--brand-mango)_0%,var(--brand-slider)_48%,var(--brand-orange)_100%)] sm:rounded-[2rem]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40 sm:opacity-55 lg:left-auto lg:right-0 lg:w-[48%] lg:opacity-90"
            style={{
              background:
                "radial-gradient(circle at 108% 50%, rgba(255,249,237,0.98) 0 10%, rgba(255,249,237,0.7) 10% 20%, rgba(255,249,237,0.44) 20% 30%, rgba(255,249,237,0.24) 30% 40%, rgba(255,249,237,0.1) 40% 50%, transparent 50%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-2 rounded-[1.3rem] border border-brand-cream/55 sm:rounded-[1.55rem]"
          />

          <div className="relative z-10 max-w-3xl px-6 py-11 text-brand-cocoa-deep sm:px-10 sm:py-13 lg:w-[58%] lg:px-14 lg:py-15 xl:px-16 xl:py-16">
            <p className="inline-flex w-fit items-center gap-2.5 rounded-lg bg-brand-cocoa-deep px-3.5 py-2 text-[0.68rem] font-black uppercase leading-none tracking-[0.14em] text-brand-cream sm:text-xs">
              <span
                aria-hidden="true"
                className="h-4 w-1 rounded-full bg-brand-mango"
              />
              <span>Better Choices Start Here</span>
            </p>
            <h2
              id="about-cta-title"
              className="mt-4 max-w-[16ch] font-heading text-[clamp(2.4rem,4.4vw,4.25rem)] font-black leading-[0.98] tracking-normal text-brand-cocoa-deep"
            >
              Make Better Nutrition Part of Every Day.
            </h2>
            <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
              Discover protein-rich oats and creamy peanut butter made for
              delicious breakfasts, smarter snacks, and healthier everyday
              routines.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button
                href="/products"
                variant="cocoaDeep"
                className="min-h-12 w-full gap-3 px-7 py-2.5 text-base text-brand-cream font-bold shadow-[0_5px_0_#fff] transition-[box-shadow,transform] duration-300 hover:shadow-[0_2px_0_#fff] sm:w-auto"
              >
                Shop Our Products
                <ArrowRight aria-hidden="true" className="size-4.5" />
              </Button>
              <Button
                href="/contact"
                variant="cream"
                className="min-h-12 w-full gap-3 px-7 py-2.5 text-base font-bold sm:w-auto"
              >
                Contact Us
                <ArrowRight aria-hidden="true" className="size-4.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
