import { ArrowRight, MapPin, Sparkles, Truck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustPoints = [
  { label: "Free Shipping", icon: Truck },
  { label: "Cash On Delivery available", icon: Wallet },
  { label: "Pan India Delivery", icon: MapPin },
] as const;

export function BottomCta() {
  return (
    <section
      aria-labelledby="bottom-cta-title"
      className="bg-background px-3 py-12 sm:px-4 sm:py-14 lg:py-16"
    >
      <div className="Container">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-brand-mango/35 bg-[linear-gradient(135deg,var(--brand-cocoa-deep)_0%,#321409_52%,#4a240d_100%)] px-5 py-12 text-center shadow-[0_24px_70px_rgba(32,13,7,0.22)] sm:rounded-[2rem] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-2 rounded-[1.3rem] border border-white/8 sm:rounded-[1.55rem]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-28 size-80 rounded-full bg-brand-mango/22 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-20 size-96 rounded-full bg-brand-mango/18 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl sm:size-96"
          />

          <Sparkles
            aria-hidden="true"
            className="absolute left-[8%] top-[25%] hidden size-8 rotate-[-12deg] text-brand-mango/65 sm:block lg:left-[13%] lg:size-10"
            strokeWidth={1.7}
          />
          <Sparkles
            aria-hidden="true"
            className="absolute bottom-[22%] right-[8%] hidden size-7 rotate-12 text-brand-mango/50 sm:block lg:right-[13%] lg:size-9"
            strokeWidth={1.7}
          />

          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="mx-auto rounded-full text-lg capitalize font-semibold text-brand-mango">
              Made for Better Mornings
            </p>
            <h2
              id="bottom-cta-title"
              className="mx-auto mt-5 max-w-3xl font-heading text-[clamp(2.15rem,5vw,4.5rem)] font-semibold leading-[1.03] tracking-normal text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.12)]"
            >
              Ready to Upgrade Your Breakfast?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-white/80 sm:text-lg sm:leading-8">
              Discover protein-packed oats and delicious peanut butter made
              for healthier, easier mornings.
            </p>

            <Button
              href="/products"
              variant="mango"
              className="mt-8 min-h-13 w-full max-w-72 gap-3 px-7 py-3 text-base font-semibold shadow-[0_7px_0_#8a4e00,0_16px_30px_rgba(0,0,0,0.2)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_9px_0_#8a4e00,0_20px_35px_rgba(0,0,0,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0.5 sm:w-auto sm:max-w-none sm:px-10 sm:text-lg"
            >
              Shop All Products
              <ArrowRight aria-hidden="true" className="size-5" strokeWidth={2.6} />
            </Button>

            <ul className="mx-auto mt-8 flex max-w-2xl flex-col justify-center gap-2.5 sm:flex-row sm:gap-3">
              {trustPoints.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/7 px-4 py-2 text-sm font-bold text-brand-mango-soft backdrop-blur-sm sm:px-5"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-4.5 shrink-0 text-brand-mango"
                    strokeWidth={2.3}
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-mango to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
