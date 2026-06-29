import type { CSSProperties } from "react";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, IconButton } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { products } from "@/lib/products";
import styles from "@/components/best-sellers/best-sellers.module.css";

const inStockProductSlugs = ["chocolate-almond", "dark-chocolate-oats"];

type ProductCardItem = Pick<
  Product,
  | "slug"
  | "name"
  | "href"
  | "image"
  | "imageAlt"
  | "themeBg"
  | "badge"
  | "soldOut"
  | "rating"
  | "price"
  | "compareAt"
  | "swatches"
>;

const extraProductCards: readonly ProductCardItem[] = [
  {
    slug: "mix-fruit-peanut-butter",
    name: "Mix Fruit Peanut Butter",
    href: "/products",
    image: "/assets/images/products/9.png",
    imageAlt: "Nutranza mix fruit peanut butter jar",
    themeBg: "#ffe8e8",
    soldOut: true,
    rating: 4,
    price: "$24.00",
    compareAt: "$30.00",
    swatches: [
      "/assets/images/products/9.png",
      "/assets/images/products/10.png",
      "/assets/images/products/6.png",
    ],
  },
  {
    slug: "classic-peanut-butter",
    name: "Classic Peanut Butter",
    href: "/products",
    image: "/assets/images/products/10.png",
    imageAlt: "Nutranza classic peanut butter jar",
    themeBg: "#e6f4d8",
    soldOut: true,
    rating: 5,
    price: "$21.00",
    compareAt: "$28.00",
    swatches: [
      "/assets/images/products/10.png",
      "/assets/images/products/4.png",
      "/assets/images/products/7.png",
    ],
  },
  {
    slug: "strawberry-peanut-butter",
    name: "Strawberry Peanut Butter",
    href: "/products",
    image: "/assets/images/products/6.png",
    imageAlt: "Nutranza strawberry peanut butter jar",
    themeBg: "#ffe0e3",
    soldOut: true,
    rating: 4,
    price: "$23.00",
    compareAt: "$29.00",
    swatches: [
      "/assets/images/products/6.png",
      "/assets/images/products/9.png",
      "/assets/images/products/5.png",
    ],
  },
  {
    slug: "cookies-cream-peanut-butter",
    name: "Cookies & Cream Peanut Butter",
    href: "/products",
    image: "/assets/images/products/7.png",
    imageAlt: "Nutranza cookies and cream peanut butter jar",
    themeBg: "#e7edff",
    soldOut: true,
    rating: 5,
    price: "$26.00",
    compareAt: "$32.00",
    swatches: [
      "/assets/images/products/7.png",
      "/assets/images/products/5.png",
      "/assets/images/products/10.png",
    ],
  },
];

const productCards: readonly ProductCardItem[] = [...products, ...extraProductCards];

export function ProductsProductSection() {
  return (
    <section
      aria-labelledby="products-list-title"
      className="relative overflow-hidden bg-brand-cocoa text-brand-cream pb-16 my-20"
    >
      <div className="border-b border-brand-line/40 px-4 pb-5 pt-14 text-center sm:pb-6 sm:pt-16 lg:pt-18">
        <p className="text-base font-extrabold leading-none text-brand-cream">
          Explore Products
        </p>
        <h2
          id="products-list-title"
          className="mx-auto mt-4 max-w-7xl font-heading text-[clamp(2rem,3.5vw,3.85rem)] font-black leading-[1.08] tracking-normal text-brand-cream"
        >
          Choose Your Favorite
        </h2>
      </div>

      <div className={styles.productTrack}>
        {productCards.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            isOutOfStock={!inStockProductSlugs.includes(product.slug)}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  product,
  isOutOfStock,
}: {
  product: ProductCardItem;
  isOutOfStock: boolean;
}) {
  const discountLabel = getDiscountLabel(product);

  return (
    <article
      className={`${styles.productCard} group`}
      style={{ "--product-bg": product.themeBg } as CSSProperties}
    >
      <div className="relative z-10 rounded-md bg-[var(--product-bg)] p-2.5 transition duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-[1.05/1] overflow-hidden rounded-md">
          <Link
            href={product.href}
            aria-label={`View ${product.name}`}
            className="absolute inset-0 z-10"
          />

          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 42vw, 420px"
            className="object-contain px-9 py-8 transition duration-500 ease-out group-hover:scale-105 sm:px-10 lg:px-12"
          />

          {discountLabel && (
            <span className="absolute left-2 top-2 z-20 inline-flex min-h-7 items-center justify-center rounded-full border-2 border-brand-cocoa-deep bg-brand-mango px-3 text-xs font-bold text-brand-cocoa shadow-[3px_4px_0_#200d07]">
              {discountLabel}
            </span>
          )}

          <IconButton
            aria-label={`Add ${product.name} to wishlist`}
            variant="mango"
            className="absolute right-2 top-2 z-30 size-10 transition-[opacity,transform,box-shadow] duration-300 sm:size-12 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <Heart
              aria-hidden="true"
              className="size-5 sm:size-6"
              strokeWidth={2.3}
            />
          </IconButton>

          <Button
            href="/#cart"
            variant="mango"
            aria-label={`Add ${product.name} to cart`}
            className="absolute inset-x-4 bottom-2 z-20 w-auto px-5 py-1.5 text-sm font-medium transition-[opacity,transform,box-shadow] duration-300 sm:inset-x-2 sm:px-9 sm:py-3 sm:text-lg sm:opacity-0 sm:group-hover:opacity-100"
          >
            {isOutOfStock ? "Out of stock" : "Add to cart"}
          </Button>
        </div>
      </div>

      <Link
        href={product.href}
        aria-label={`View ${product.name}`}
        className="relative z-10 mt-4 flex flex-1 flex-col items-start"
      >
        <Rating value={product.rating} />
        <h3 className="mt-2 font-heading lg:text-2xl text-xl font-black leading-tight text-brand-cream">
          {product.name}
        </h3>
        <p className="mt-2 flex items-center gap-2 text-lg font-black text-brand-cream">
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
      </Link>
    </article>
  );
}

function getDiscountLabel(product: ProductCardItem) {
  if (product.badge) {
    return product.badge;
  }

  if (!product.compareAt) {
    return null;
  }

  const price = Number(product.price.replace(/[^0-9.]/g, ""));
  const compareAt = Number(product.compareAt.replace(/[^0-9.]/g, ""));

  if (!price || !compareAt || compareAt <= price) {
    return null;
  }

  return `-${Math.round(((compareAt - price) / compareAt) * 100)}%`;
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
