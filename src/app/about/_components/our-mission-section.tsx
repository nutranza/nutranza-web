import Image from "next/image";
import { SectionBadge } from "./section-badge";

export function OurMissionSection() {
  return (
    <section
      aria-labelledby="our-mission-title"
      className="bg-background py-12 sm:py-16 lg:py-20"
    >
      <div className="Container">
        <article className="grid gap-9 lg:grid-cols-[minmax(520px,1.08fr)_minmax(0,0.92fr)] lg:items-stretch lg:gap-14 xl:gap-20">
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-3xl border border-brand-line bg-brand-surface shadow-[0_20px_55px_rgba(32,13,7,0.12)] lg:aspect-auto lg:min-h-[34rem] xl:min-h-[36rem]">
            <Image
              src="/assets/images/our-mission.jpeg"
              alt="Nutranza team members carefully packing peanut butter and high-protein oats orders"
              fill
              sizes="(min-width: 1440px) 760px, (min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="order-2 flex max-w-2xl items-center">
            <div>
              <SectionBadge number="02">Our mission</SectionBadge>
              <h2
                id="our-mission-title"
                className="mt-5 max-w-[15ch] font-heading text-4xl font-black leading-[1.02] tracking-normal text-brand-cocoa-deep sm:text-5xl xl:text-[3.5rem]"
              >
                Inspiring Healthier Lives, One Meal At A Time.
              </h2>
              <p className="mt-6 text-base font-medium leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
                Our mission is to make premium nutrition simple, delicious, and
                accessible for everyone. We are committed to offering products
                that combine exceptional taste with trusted quality, helping
                people build healthier habits every day.
              </p>
              <p className="mt-5 text-base font-medium leading-7 text-brand-cocoa/85 sm:text-lg sm:leading-8">
                As we grow, our focus remains the same—to inspire confidence in
                every meal and become a trusted nutrition partner for families
                across India and beyond.
              </p>

            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
