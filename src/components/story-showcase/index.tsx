import Image from "next/image";
import Link from "next/link";

export function StoryShowcase() {
  return (
    <section
      aria-labelledby="story-showcase-title"
      className="bg-white py-6 sm:py-8 lg:py-10"
    >
      <div className="Container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,54fr)_minmax(340px,46fr)] lg:items-stretch lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[1.6rem] bg-brand-green px-3 py-3 shadow-[0_18px_50px_rgba(43,19,12,0.08)] sm:px-4 sm:py-4 lg:px-4 lg:py-4">
              <div className="overflow-hidden rounded-[1.35rem] bg-[#ecf6d2]">
                <div className="relative aspect-[1.35/1] min-h-[90px] sm:aspect-[1.28/1] sm:min-h-[116px] lg:aspect-[1.24/1] lg:min-h-[140px] xl:min-h-[154px]">
                  <Image
                    src="/assets/images/first-product.png"
                    alt="Nutranza product display"
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="px-3 pb-2 pt-4 text-center sm:px-5 sm:pb-3 sm:pt-5">
                <p className="text-sm font-extrabold leading-none text-brand-lime sm:text-base">
                  Our Story
                </p>
                <h2
                  id="story-showcase-title"
                  className="mx-auto mt-3 max-w-3xl font-heading text-[clamp(1.8rem,3.5vw,3rem)] font-black leading-[1.10] tracking-normal text-brand-lime"
                >
                  Real Ingredients, Big Flavor, Every Day
                </h2>
              </div>
            </div>
          </div>

          <div className="order-1 flex min-h-[280px] flex-col items-center justify-center text-center lg:order-2 lg:h-full lg:min-h-[calc(100%)] lg:items-start lg:justify-center lg:text-left lg:pl-6 xl:pl-10">
            <div className="w-full max-w-2xl">
              <p className="text-sm font-extrabold leading-none text-brand-cocoa-deep sm:text-base">
                Who We Are
              </p>
              <h3 className="mt-4 font-heading text-[clamp(2.4rem,5.1vw,4.6rem)] font-black leading-[1.04] tracking-normal text-brand-cocoa-deep">
                Bringing Bold Flavors to Every Bite
              </h3>
              <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-brand-cocoa/90 sm:text-[1.35rem] sm:leading-9 lg:mt-6">
                Discover Our Everyday Food Favorites
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full border-2 border-brand-cocoa-deep bg-brand-mango px-8 text-sm font-extrabold text-brand-cocoa shadow-[0_6px_0_#2b130c] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f7bf10] hover:shadow-[0_9px_0_#2b130c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mango sm:min-h-14 sm:px-10 sm:text-base"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
