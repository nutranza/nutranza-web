"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Product as CommerceProduct } from "@/lib/supabase/types";
import type { Product as WebsiteProduct } from "@/lib/products";
import { DEFAULT_COUNTRY_CODE } from "@/lib/constants/region";
import { mapCommerceProduct } from "@/lib/storefront/product-mapper";
import { StorefrontProductCard } from "@/app/products/_components/products-product-section";
import { useWishlist } from "@modules/wishlist/context/wishlist-context";

const PRODUCT_BATCH_SIZE = 100;

type ProductsPayload = {
  products?: CommerceProduct[];
  message?: string;
};

async function fetchProductsByIds(productIds: string[]) {
  const batches: string[][] = [];

  for (let index = 0; index < productIds.length; index += PRODUCT_BATCH_SIZE) {
    batches.push(productIds.slice(index, index + PRODUCT_BATCH_SIZE));
  }

  const responses = await Promise.all(
    batches.map(async (ids) => {
      const response = await fetch("/api/storefront/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
          countryCode: DEFAULT_COUNTRY_CODE,
          limit: ids.length,
          productsIds: ids,
          includeDetails: true,
        }),
      });

      const payload = (await response.json()) as ProductsPayload;

      if (!response.ok) {
        throw new Error(payload.message || "Failed to load saved products");
      }

      return payload.products ?? [];
    }),
  );

  return responses.flat();
}

export function WishlistContent() {
  const {
    items,
    count,
    isInitialized,
    clearWishlist,
    removeItems,
  } = useWishlist();
  const [products, setProducts] = useState<WebsiteProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    if (!isInitialized) {
      return;
    }

    if (items.length === 0) {
      setProducts([]);
      setError(null);
      setIsLoading(false);
      return;
    }

    let active = true;
    const requestedIds = [...items];
    setIsLoading(true);
    setError(null);

    fetchProductsByIds(requestedIds)
      .then((commerceProducts) => {
        if (!active) {
          return;
        }

        const fetchedIds = new Set(commerceProducts.map((product) => product.id));
        const unavailableIds = requestedIds.filter((id) => !fetchedIds.has(id));

        setProducts(commerceProducts.map(mapCommerceProduct));

        if (unavailableIds.length > 0) {
          removeItems(unavailableIds);
        }
      })
      .catch((fetchError: unknown) => {
        if (!active) {
          return;
        }

        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Failed to load saved products",
        );
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [isInitialized, items, removeItems, retryKey]);

  const orderedProducts = useMemo(() => {
    const order = new Map(items.map((id, index) => [id, index]));

    return products
      .filter((product) => order.has(product.id))
      .sort(
        (first, second) =>
          (order.get(first.id) ?? 0) - (order.get(second.id) ?? 0),
      );
  }, [items, products]);

  const retry = useCallback(() => setRetryKey((current) => current + 1), []);

  if (!isInitialized) {
    return <WishlistSkeleton />;
  }

  if (count === 0) {
    return (
      <div className="my-12 rounded-2xl border-2 border-dashed border-brand-cocoa/25 bg-brand-surface px-6 py-14 text-center">
        <h2 className="font-heading text-3xl font-black text-brand-cocoa-deep">
          Your wishlist is empty
        </h2>
        <p className="mx-auto mt-3 max-w-lg font-semibold leading-7 text-brand-cocoa/70">
          Tap the heart on any product and it will be saved here for later.
        </p>
        <Link
          href="/products"
          className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-cocoa px-7 text-sm font-black text-white transition hover:bg-brand-cocoa-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <section className="py-10" aria-labelledby="saved-products-title">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <p id="saved-products-title" className="font-bold text-brand-cocoa/75">
          You have <span className="text-brand-cocoa">{count}</span> saved{
            count === 1 ? " product" : " products"
          }.
        </p>
        <button
          type="button"
          onClick={clearWishlist}
          className="text-sm font-black text-[#E7353A] transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#E7353A]"
        >
          Clear Wishlist
        </button>
      </div>

      {error ? (
        <div
          role="alert"
          className="mb-7 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-red-300 bg-red-50 px-5 py-4 text-sm font-semibold text-red-800"
        >
          <span>{error}. Your saved items have not been removed.</span>
          <button
            type="button"
            onClick={retry}
            className="font-black underline underline-offset-4"
          >
            Retry
          </button>
        </div>
      ) : null}

      {isLoading ? (
        <WishlistSkeleton compact />
      ) : orderedProducts.length > 0 ? (
        <div
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4"
          data-testid="wishlist-grid"
        >
          {orderedProducts.map((product) => (
            <StorefrontProductCard
              key={product.id}
              product={product}
              isOutOfStock={Boolean(product.soldOut)}
            />
          ))}
        </div>
      ) : error ? null : (
        <p className="rounded-xl border border-brand-cocoa/15 bg-brand-surface px-5 py-8 text-center font-semibold text-brand-cocoa/70">
          No available products were found in your wishlist.
        </p>
      )}
    </section>
  );
}

function WishlistSkeleton({ compact = false }: { compact?: boolean }) {
  return (
    <div
      aria-label="Loading wishlist"
      className={`grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 ${
        compact ? "" : "py-10"
      }`}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="h-96 animate-pulse rounded-2xl bg-brand-cocoa/10"
        />
      ))}
    </div>
  );
}
