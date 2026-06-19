import type { CSSProperties } from "react";
import {
  ArrowRight,
  Heart,
  ShoppingBag,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./best-sellers.module.css";

type BestSeller = {
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  themeBg: string;
  badge?: string;
  soldOut?: boolean;
  rating: number;
  price: string;
  compareAt?: string;
  swatches: readonly string[];
};

const bestSellers = [
  {
    name: "Chocolate Almond",
    href: "/#best-sellers",
    image: "/assets/images/products/5.png",
    imageAlt: "Nutranza chocolate almond peanut butter jar",
    themeBg: "#fffdf8",
    badge: "-33%",
    rating: 5,
    price: "$20.00",
    compareAt: "$30.00",
    swatches: [
      "/assets/images/products/5.png",
      "/assets/images/products/4.png",
      "/assets/images/products/7.png",
    ],
  },
  {
    name: "Mango Peanut Butter",
    href: "/#best-sellers",
    image: "/assets/images/products/4.png",
    imageAlt: "Nutranza mango peanut butter jar",
    themeBg: "#fff1b8",
    badge: "-16%",
    rating: 4,
    price: "$25.00",
    compareAt: "$30.00",
    swatches: [
      "/assets/images/products/4.png",
      "/assets/images/products/5.png",
      "/assets/images/products/6.png",
    ],
  },
  {
    name: "Dark Chocolate Oats",
    href: "/#best-sellers",
    image: "/assets/images/product-3-cropped.png",
    imageAlt: "Nutranza dark chocolate high protein oats pack",
    themeBg: "#dfe8ff",
    badge: "-24%",
    rating: 5,
    price: "$19.00",
    compareAt: "$25.00",
    swatches: [
      "/assets/images/product-3-cropped.png",
      "/assets/images/product-04.png",
      "/assets/images/products/product-1.png",
    ],
  },
  {
    name: "Strawberry Oats",
    href: "/#best-sellers",
    image: "/assets/images/product-04.png",
    imageAlt: "Nutranza strawberry high protein oats pack",
    themeBg: "#ffe0ee",
    badge: "-26%",
    rating: 4,
    price: "$29.00",
    compareAt: "$35.00",
    swatches: [
      "/assets/images/product-04.png",
      "/assets/images/product-3-cropped.png",
      "/assets/images/products/product-2.png",
    ],
  },
] as const satisfies readonly BestSeller[];

export function BestSellers() {
  return (
    <section
      id="best-sellers"
      aria-labelledby="best-sellers-title"
      className="relative mt-15 scroll-mt-36 overflow-hidden bg-brand-cocoa text-brand-cream"
    >
      <div className="border-b border-brand-line/40 px-4 pb-5 pt-14 text-center sm:pb-6 sm:pt-16 lg:pt-18">
        <p className="text-base font-extrabold leading-none text-brand-cream">
          Our Best Picks
        </p>
        <h2
          id="best-sellers-title"
          className="mx-auto mt-4 max-w-7xl font-heading text-[clamp(2rem,3.5vw,3.85rem)] font-black leading-[1.08] tracking-normal text-brand-cream"
        >
          Protein Favorites
        </h2>
      </div>

      <div className={styles.productTrack}>
        {bestSellers.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      <div className="border-y border-brand-line/40 text-center">
        <Link
          href="/#shop-by-category"
          className="inline-flex min-h-16 items-center justify-center gap-2 px-6 text-base font-extrabold text-brand-cream transition hover:text-brand-mango focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mango"
        >
          View All
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={3} />
        </Link>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: BestSeller }) {
  return (
    <article
      className={`${styles.productCard} group`}
      style={{ "--product-bg": product.themeBg } as CSSProperties}
    >
      <Link
        href={product.href}
        aria-label={`View ${product.name}`}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 rounded-md bg-[var(--product-bg)] p-2.5 transition duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-[1.05/1] overflow-hidden rounded-md">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 22vw"
            className="object-contain px-9 py-8 transition duration-500 ease-out group-hover:scale-105 sm:px-10 lg:px-12"
          />

          {(product.badge || product.soldOut) && (
            <span className="absolute left-2 top-2 inline-flex min-h-7 items-center justify-center rounded-full border-2 border-brand-cocoa-deep bg-brand-mango px-3 text-xs font-bold text-brand-cocoa shadow-[3px_4px_0_#200d07]">
              {product.soldOut ? "Sold out" : product.badge}
            </span>
          )}

          <button
            type="button"
            aria-label={`Add ${product.name} to wishlist`}
            className="absolute right-2 top-2 inline-flex size-10 items-center justify-center rounded-full border-2 border-brand-cocoa-deep bg-brand-mango text-brand-cocoa shadow-[3px_4px_0_#200d07] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mango sm:translate-x-3 sm:opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100"
          >
            <Heart aria-hidden="true" className="size-5" strokeWidth={2.3} />
          </button>

          <Link
            href="/#cart"
            aria-label={`Add ${product.name} to cart`}
            className="absolute inset-x-2 bottom-2 z-20 inline-flex min-h-11 translate-y-0 items-center justify-center gap-2 rounded-full border-2 border-brand-cocoa-deep bg-brand-mango px-5 text-sm font-semibold text-brand-cocoa shadow-[3px_4px_0_#200d07] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mango sm:translate-y-5 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          >
            <ShoppingBag
              aria-hidden="true"
              className="size-4"
              strokeWidth={2.4}
            />
            Add to cart
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-4 flex flex-1 flex-col items-start">
        <Rating value={product.rating} />
        <h3 className="mt-2 font-heading text-2xl font-black leading-tight text-brand-cream">
          {product.name}
        </h3>
        <p className="mt-3 flex items-center gap-2 text-lg font-black text-brand-cream">
          <span>{product.price}</span>
          {product.compareAt && (
            <span className="text-sm font-extrabold text-brand-cream/70 line-through">
              {product.compareAt}
            </span>
          )}
        </p>

        {product.swatches.length > 0 && (
          <div className="mt-4 flex items-center gap-3">
            {product.swatches.map((swatch, index) => (
              <span
                key={`${product.name}-${swatch}-${index}`}
                className="relative inline-flex size-10 items-center justify-center overflow-hidden rounded-full bg-brand-surface shadow-sm"
              >
                <Image
                  src={swatch}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Rating({ value }: { value: number }) {
  if (value === 0) {
    return <div className="h-5" aria-hidden="true" />;
  }

  return (
    <div
      className="flex items-center gap-0.5 text-brand-cream"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={`size-4 ${index < value ? "fill-current" : ""}`}
          strokeWidth={2.5}
        />
      ))}
    </div>
  );
}
