import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  GitCompareArrows,
  Heart,
  Minus,
  Plus,
  Ruler,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import { ProductGallery } from "./_components/product-gallery";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Nutranza Foods",
    };
  }

  return {
    title: `${product.name} | Nutranza Foods`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug);

  return (
    <main
      className="flex-1"
      style={{ "--product-page-bg": product.pageBg } as CSSProperties}
    >
      <section className="bg-[var(--product-page-bg)] px-4 py-8 sm:py-10 lg:py-12">
        <div className="Container">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-2 text-sm font-semibold text-brand-cocoa"
          >
            <Link href="/" className="transition hover:text-brand-muted">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/collections"
              className="transition hover:text-brand-muted"
            >
              {product.category}
            </Link>
            <span aria-hidden="true">/</span>
            <span>{product.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start lg:gap-10 xl:gap-14">
            <ProductGallery product={product} />

            <div className="flex flex-col lg:sticky lg:top-28 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto lg:pr-3">
              <h1 className="font-heading text-4xl font-black leading-tight tracking-normal text-brand-cocoa-deep sm:text-5xl">
                {product.name}
              </h1>

              <Rating value={product.rating} />

              <p className="mt-3 flex items-center gap-3 text-xl font-black text-brand-cocoa">
                <span>{product.price}</span>
                {product.compareAt && (
                  <span className="text-base font-extrabold text-brand-muted line-through">
                    {product.compareAt}
                  </span>
                )}
              </p>

              <p className="mt-4 max-w-xl border-b border-brand-cocoa/20 pb-5 text-base font-semibold leading-7 text-brand-cocoa">
                {product.shortDescription}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-brand-cocoa">
                <span className="inline-flex size-3 rounded-full bg-green-400 ring-2 ring-green-200" />
                In stock
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-[5.25rem_1fr]">
                <div className="inline-flex h-11 items-center justify-between rounded-full border-2 border-brand-green-dark bg-brand-surface px-3 text-brand-cocoa">
                  <Minus aria-hidden="true" className="size-4" />
                  <span className="text-sm font-bold">1</span>
                  <Plus aria-hidden="true" className="size-4" />
                </div>

                <Button
                  href="/#cart"
                  variant="mango"
                  className="h-11 w-full px-7 text-base font-medium"
                >
                  Add to cart
                </Button>
              </div>

              <Button
                href="/#checkout"
                variant="orange"
                className="mt-3 h-11 w-full px-7 text-base font-bold"
              >
                Buy it now
              </Button>

              <div className="mt-5 border-y border-brand-cocoa/20 py-4">
                <p className="flex items-start gap-2 text-sm font-bold text-brand-cocoa">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-brand-green"
                  />
                  Pickup available at Nutranza Foods. Usually ready in 24
                  hours.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 border-b border-brand-cocoa/20 py-4 text-sm font-semibold text-brand-cocoa">
                <span className="inline-flex items-center gap-1.5">
                  <Heart aria-hidden="true" className="size-4 fill-current" />
                  In Your Wishlist
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GitCompareArrows aria-hidden="true" className="size-4" />
                  Compare
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Ruler aria-hidden="true" className="size-4" />
                  Size Chart
                </span>
              </div>

              <div className="mt-5">
                <h2 className="font-heading text-2xl font-black leading-tight text-brand-cocoa-deep">
                  Pairs well with
                </h2>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {relatedProducts.map((related) => (
                    <Link
                      key={related.slug}
                      href={related.href}
                      className="group block rounded-lg bg-brand-surface p-2 text-center transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div
                        className="relative aspect-square rounded-md"
                        style={{ backgroundColor: related.themeBg }}
                      >
                        <Image
                          src={related.image}
                          alt={related.imageAlt}
                          fill
                          sizes="120px"
                          className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-2 text-xs font-extrabold leading-tight text-brand-cocoa">
                        {related.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-green px-4 py-8 text-brand-lime sm:py-10">
        <div className="Container">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-5">
            {product.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-black leading-none sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-extrabold sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--product-page-bg)] px-4 py-10 sm:py-14">
        <div className="Container">
          <div className="mx-auto text-brand-cocoa">
            <div className="space-y-5 text-base font-semibold leading-7">
              {product.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <ProductList title="Why You'll Love It" items={product.loveList} />
              <ProductList title="Key Details" items={product.details} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Rating({ value }: { value: number }) {
  return (
    <div
      className="mt-3 flex items-center gap-0.5 text-brand-cocoa"
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={`size-5 ${index < value ? "fill-current" : ""}`}
          strokeWidth={2.4}
        />
      ))}
    </div>
  );
}

function ProductList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <h2 className="font-heading text-3xl font-black leading-tight text-brand-cocoa-deep sm:text-4xl">
        {title}
      </h2>
      <ul className="mt-5 list-disc space-y-2 pl-5 text-base font-semibold leading-7">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
