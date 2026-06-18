import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const coreProducts = [
  {
    name: "Mango Peanut Butter",
    image: "/assets/images/products/product-1.png",
    className: "bg-[#ffd36a]",
  },
  {
    name: "Chocolate Almond Peanut Butter",
    image: "/assets/images/products/10.png",
    className: "z-10 size-20 bg-[#2b130c] shadow-[0_14px_30px_rgba(43,19,12,0.24)]",
  },
  {
    name: "Strawberry Peanut Butter",
    image: "/assets/images/products/product-3.png",
    className: "bg-[#fff0e5]",
  },
] as const;

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-line py-10 sm:py-14 lg:py-18">
      <div className="Container">
        <h1 className="mb-8 text-center text-4xl font-bold capitalize leading-[0.9] text-cocoa sm:text-7xl lg:mb-15">
          Crafted for Conscience
        </h1>
        <div className="relative flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-8">
          <Image
            src="/assets/images/hero.png"
            alt="Nutranza peanut butter jars"
            width={500}
            height={500}
            priority
            className="order-2 mx-auto h-auto w-[min(82vw,360px)] lg:pointer-events-none lg:absolute lg:-bottom-32 lg:left-1/2 lg:z-0 lg:w-[min(44vw,520px)] lg:-translate-x-1/2"
          />

          {/* Left - Content */}
          <div className="relative z-10 order-1 mx-auto w-full max-w-sm text-center lg:mx-0 lg:text-left">
            <div className="">
              <p className="text-base font-semibold lg:text-lg">
                Crafted with care, every spoonfull deliver pure ingredientas, simple pleasures, and quiet luxury.
              </p>
              <div className="mt-7 flex items-center justify-center gap-2 lg:justify-start">
                <Link
                  href="/#shop"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-coral px-7 font-extrabold uppercase text-cream transition hover:bg-coral/90 focus-visible:outline-0 sm:px-8"
                >
                  Explore now
                </Link>
                <Link
                  href="/#shop"
                  aria-label="Explore products"
                  className="inline-flex size-12 items-center justify-center rounded-lg bg-coral text-cream transition hover:bg-coral/90 focus-visible:outline-0"
                >
                  <ArrowUpRight aria-hidden="true" className="size-5" strokeWidth={2.4} />
                </Link>
              </div>
            </div>

            <div className="mt-10 lg:mt-12">
              <h3 className="text-2xl font-extrabold uppercase text-cocoa">
                Our Core Products
              </h3>
              <div className="mt-4 flex items-center justify-center gap-2 lg:justify-start">
                {coreProducts.map((product) => (
                  <div
                    key={product.name}
                    className={`relative flex size-18 shrink-0 items-center justify-center overflow-hidden rounded-full sm:size-20 ${product.className}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="relative z-10 order-3 mx-auto hidden w-full max-w-72 shrink-0 overflow-hidden rounded-2xl bg-gold px-4 py-6 lg:mx-0 lg:block">
            <h4 className="text-center text-3xl font-extrabold uppercase leading-[0.95] text-cocoa sm:text-[2rem]">
              Mornings Taste Better
            </h4>
            <p className="mt-3 text-center text-sm font-semibold text-cocoa">
              Devotion to purity simplicity.
            </p>
            
            <Image
              src="/assets/images/dish.png"
              alt="Toast topped with nut butter on a plate"
              width={420}
              height={300}
              className="absolute -right-14 -bottom-8 z-10 h-auto w-64 max-w-none sm:w-72 lg:w-64"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
