import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const bestSellers = [
  {
    name: "Organic Peanut Butter",
    protein: "27% Protein",
    price: "Rs. 299",
    image: "/assets/images/products/10.png",
  },
  {
    name: "Chocolate Protein Oats",
    protein: "25% Protein",
    price: "Rs. 349",
    image: "/assets/images/products/product-1.png",
  },
  {
    name: "Natural Peanut Crunch",
    protein: "24% Protein",
    price: "Rs. 329",
    image: "/assets/images/products/7.png",
  },
] as const;

export function BestSellers() {
  return (
    <section id="best-sellers" className="bg-white py-12 lg:py-16">
      <div className="Container">
        <div className="relative overflow-hidden rounded-xl bg-[#f8f0eb] px-4 py-6 sm:rounded-2xl sm:px-6 sm:py-8 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="max-w-4xl text-3xl font-black leading-tight text-cocoa sm:text-4xl lg:text-5xl">
              Our Best Sellers
            </h2>
            <div className="flex shrink-0 items-center gap-2 sm:pt-1">
              <Link
                href="/#cart"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-coral px-5 text-sm font-semibold text-cream transition hover:bg-coral/90 focus-visible:outline-0 sm:h-12 sm:px-7 sm:text-base"
              >
                Add to cart
              </Link>
              <Link
                href="/#best-sellers"
                aria-label="Shop best sellers"
                className="inline-flex size-11 items-center justify-center rounded-lg bg-coral text-cream transition hover:bg-coral/90 focus-visible:outline-0 sm:size-12"
              >
                <ArrowRight
                  aria-hidden="true"
                  className="size-5 -rotate-45"
                  strokeWidth={3}
                />
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {bestSellers.map((product) => (
              <article
                key={product.name}
                className="flex flex-col gap-4 rounded-xl bg-white p-4"
              >
                <div className="relative mx-auto flex h-48 w-full items-center justify-center sm:h-56 lg:h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 44vw, 30vw"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 text-center sm:gap-4">
                  <h3 className="text-lg font-bold text-cocoa sm:text-xl">
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold text-cocoa sm:text-base">
                    {product.protein}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="/#cart"
                      aria-label={`Add ${product.name} to cart`}
                      className="group flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border border-cocoa bg-white pl-3 pr-1 text-left text-xs font-bold uppercase text-cocoa transition hover:border-coral hover:bg-coral hover:text-white focus-visible:outline-0 sm:min-h-12 sm:pl-4 sm:text-sm"
                    >
                      <span className="min-w-0 leading-tight">
                        Add to cart - {product.price}
                      </span>
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-gold text-cocoa transition group-hover:bg-white sm:size-10">
                        <ShoppingBag
                          aria-hidden="true"
                          className="size-5 sm:size-6"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
