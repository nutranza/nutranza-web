import Image from "next/image";
import { SectionBadge } from "./section-badge";

export function OurStorySection() {
  return (
    <section
      aria-labelledby="our-story-title"
      className="bg-background py-12 sm:py-16 lg:py-20"
    >
      <div className="Container">
        <article className="grid gap-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(520px,1.15fr)] lg:items-stretch lg:gap-14 xl:gap-20">
          <div className="order-2 max-w-2xl lg:order-1">
            <SectionBadge number="01">Our story</SectionBadge>
            <h2
              id="our-story-title"
              className="mt-5 max-w-[17ch] font-heading text-4xl font-black leading-[1.02] tracking-normal text-brand-cocoa-deep sm:text-5xl xl:text-[3.25rem]"
            >
              Every Great Brand Begins With A Simple Idea.
            </h2>
            <p className="mt-6 text-base font-medium leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
              Nutranza began with a simple belief: healthy food should be
              accessible, enjoyable, and made with care. We saw a need for
              nutritious products people could trust without sacrificing great
              taste.
            </p>
            <p className="mt-5 text-base font-medium leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
              From selecting quality products to building meaningful customer
              relationships, every step has followed one purpose: making better
              nutrition part of everyday life.
            </p>
            <p className="mt-5 text-base font-medium leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
              Today, Nutranza serves customers across India and continues to
              grow with the passion that inspired us from day one.
            </p>

          </div>

          <div className="relative order-1 aspect-[3/2] overflow-hidden rounded-3xl border border-brand-line bg-brand-surface shadow-[0_20px_55px_rgba(32,13,7,0.12)] lg:order-2 lg:aspect-auto lg:min-h-[34rem] xl:min-h-[36rem]">
            <Image
              src="/assets/images/our-story.png"
              alt="A family preparing a nutritious breakfast together with Nutranza oats and peanut butter"
              fill
              sizes="(min-width: 1440px) 760px, (min-width: 1024px) 54vw, 100vw"
              className="object-cover lg:object-[55%_center]"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
