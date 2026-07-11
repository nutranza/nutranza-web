import Image from "next/image";
import { Button } from "@/components/ui/button";

export function StoryShowcase() {
  return (
    <section
      aria-labelledby="story-showcase-title"
      className="bg-background py-10 sm:py-12 lg:py-14"
    >
      <div className="Container">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.88fr)] lg:items-center lg:gap-14">
          <div className="order-2 mx-auto w-full max-w-[34rem] lg:order-1">
            <div className="overflow-hidden rounded-xl bg-brand-mango/90 p-2.5 shadow-[0_18px_44px_rgba(43,19,12,0.08)] sm:p-4">
              <div className="overflow-hidden rounded-xl bg-[#ecf6d2]">
                <div className="relative aspect-square">
                  <Image
                    src="/assets/images/our-storys.jpeg"
                    alt="Nutranza product display"
                    fill
                    priority
                    sizes="(min-width: 1024px) 480px, 92vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="px-4 py-4 text-center sm:px-5">
                <p className="text-xs font-extrabold leading-none text-brand-cocoa sm:text-sm">
                  Our Story
                </p>
                <h2
                  id="story-showcase-title"
                  className="mx-auto mt-2 max-w-xl font-heading text-[clamp(1.55rem,3vw,2.35rem)] font-black leading-[1.08] tracking-normal text-brand-cocoa"
                >
                  Real Ingredients, Big Flavor, Every Day
                </h2>
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
            <div className="w-full max-w-xl">
              <p className="text-xs font-extrabold leading-none text-brand-green sm:text-sm">
                Who We Are
              </p>
              <h3 className="mt-3 font-heading text-[clamp(2.15rem,4.2vw,4rem)] font-black leading-[1.04] tracking-normal text-brand-cocoa-deep">
                Bringing Bold Flavors to Every Bite
              </h3>
              <p className="mt-4 max-w-lg text-base font-semibold leading-7 text-brand-cocoa/90 sm:text-lg sm:leading-8">
                Discover Our Everyday Food Favorites
              </p>

              <Button
                href="/about"
                variant="mango"
                className="mt-6 px-7 py-2.5 text-base font-medium transition-[box-shadow] duration-300 sm:px-9 sm:py-3"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
