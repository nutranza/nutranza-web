import type { CSSProperties } from "react";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, IconButton } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import styles from "@/components/best-sellers/best-sellers.module.css";

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

export function ProductsProductSection({
  products,
}: {
  products: readonly ProductCardItem[];
}) {
  return (
    <section
      aria-labelledby="products-list-title"
      className="relative overflow-hidden bg-background text-brand-cocoa pb-16"
    >
      <div className="border-b border-brand-cocoa/15 px-4 pb-5 pt-14 text-center sm:pb-6 sm:pt-16 lg:pt-18">
        <p className="text-base font-extrabold leading-none text-brand-cocoa">
          Explore Products
        </p>
        <h2
          id="products-list-title"
          className="mx-auto mt-4 max-w-7xl font-heading text-[clamp(2rem,3.5vw,3.85rem)] font-black leading-[1.08] tracking-normal text-brand-cocoa"
        >
          Choose Your Favorite
        </h2>
      </div>

      <div className={styles.productTrack}>
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            isOutOfStock={Boolean(product.soldOut)}
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
      <div className="relative z-10 rounded-xl bg-[var(--product-bg)] p-3 transition duration-300 group-hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden">
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
            className="object-contain py-8 transition duration-300 ease-out group-hover:scale-105"
          />

          {discountLabel && (
            <span className="absolute left-2 top-2 z-20 inline-flex min-h-6 items-center justify-center rounded-full border-2 border-brand-cocoa-deep bg-brand-mango px-2.5 text-[0.68rem] font-bold leading-none text-brand-cocoa shadow-[2px_3px_0_#200d07] sm:min-h-7 sm:px-3 sm:text-xs">
              {discountLabel}
            </span>
          )}

          <IconButton
            aria-label={`Add ${product.name} to wishlist`}
            variant="mango"
            className="absolute right-2 top-2 z-30 size-8 transition-[opacity,transform,box-shadow] duration-300 sm:size-9 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <Heart
              aria-hidden="true"
              className="size-4 sm:size-5"
              strokeWidth={2.3}
            />
          </IconButton>

          <Button
            href="/#cart"
            variant="mango"
            aria-label={`Add ${product.name} to cart`}
            className="absolute inset-x-6 bottom-2 z-20 min-h-9 w-auto px-4 py-1.5 text-sm font-semibold leading-none transition-[opacity,transform,box-shadow] duration-300 sm:inset-x-5 sm:min-h-10 sm:px-6 sm:py-2 sm:text-base sm:opacity-0 sm:group-hover:opacity-100"
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
        <h3 className="mt-2 font-heading lg:text-2xl text-xl font-black leading-tight text-brand-cocoa">
          {product.name}
        </h3>
        <p className="mt-2 flex items-center gap-2 text-lg font-black text-brand-cocoa">
          <span>{product.price}</span>
          {product.compareAt && (
            <span className="text-sm font-extrabold text-brand-muted line-through">
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
      className="flex items-center gap-0.5 text-brand-cocoa"
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
