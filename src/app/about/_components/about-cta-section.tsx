import { ArrowRight, HeartHandshake, ShieldCheck, Star } from "lucide-react";
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
                <Star aria-hidden="true" className="size-4" />
                Repeat-worthy taste
              </span>
            </div>
            <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Bring better snacks into your next breakfast, workout, or evening
              break.
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-cream/70 sm:text-base">
              Explore our current range and build a pantry that is simple,
              practical, and ready for the way your day actually moves.
            </p>
            <Link
              href="/#shop"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-coral px-6 text-sm font-extrabold uppercase text-cream transition hover:bg-coral/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Explore products
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="relative min-h-[260px] bg-gold">
            <Image
              src="/assets/images/dish.png"
              alt="Toast topped with nut butter on a plate"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-contain p-6"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white px-4 py-3 text-cocoa shadow-[0_18px_40px_rgba(43,19,12,0.18)]">
              <div className="flex items-center gap-3">
                <HeartHandshake
                  aria-hidden="true"
                  className="size-6 shrink-0 text-coral"
                />
                <p className="text-sm font-black uppercase leading-5">
                  Made to make clean eating easier to repeat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
