import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutCtaSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="Container">
        <div className="grid overflow-hidden rounded-2xl bg-cocoa text-cream lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-black uppercase text-gold">
                <ShieldCheck aria-hidden="true" className="size-4" />
                Transparent choices
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-black uppercase text-gold">
                <Sparkles aria-hidden="true" className="size-4" />
                Strawberry protein oats
              </span>
            </div>
            <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Make your next breakfast taste like a better choice.
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-cream/70 sm:text-base">
              Start with strawberry protein oats that feel quick, flavorful, and
              easy to repeat. Explore clean snack options made for busy
              mornings, workout routines, and everyday cravings.
            </p>
            <Link
              href="/#shop"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-coral px-6 text-sm font-extrabold uppercase text-cream transition hover:bg-coral/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Explore products
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="relative min-h-[320px] bg-[#fff2df] sm:min-h-[380px]">
            <Image
              src="/assets/images/3.png"
              alt="Nutranza strawberry high protein oats pack"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-contain p-5 sm:p-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
