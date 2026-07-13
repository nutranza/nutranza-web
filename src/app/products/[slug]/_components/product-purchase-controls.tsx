"use client";

import { Minus, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { AddToCartButton } from "@modules/cart/components/add-to-cart-button";

export function ProductPurchaseControls({ product }: { product: Product }) {
  const availableVariants = useMemo(
    () =>
      (product.cart?.variants || []).filter(
        (variant) =>
          !variant.manage_inventory ||
          variant.allow_backorder ||
          variant.inventory_quantity > 0,
      ),
    [product.cart?.variants],
  );
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.cart?.defaultVariant?.id || availableVariants[0]?.id || "",
  );
  const [quantity, setQuantity] = useState(1);
  const selectedVariant = availableVariants.find(
    (variant) => variant.id === selectedVariantId,
  );
  const maxQuantity =
    selectedVariant?.manage_inventory && !selectedVariant.allow_backorder
      ? selectedVariant.inventory_quantity
      : undefined;
  const canIncrease = maxQuantity === undefined || quantity < maxQuantity;

  return (
    <div className="mt-4">
      {product.cart?.requiresSelection ? (
        <label className="mb-3 block text-sm font-bold text-brand-cocoa">
          Choose option
          <select
            value={selectedVariantId}
            onChange={(event) => {
              setSelectedVariantId(event.target.value);
              setQuantity(1);
            }}
            className="mt-2 h-11 w-full rounded-full border-2 border-brand-green-dark bg-white px-4 font-semibold outline-none focus:ring-2 focus:ring-brand-orange"
          >
            {availableVariants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.title}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-[5.25rem_1fr]">
        <div className="inline-flex h-11 items-center justify-between rounded-full border-2 border-brand-green-dark bg-brand-surface px-2 text-brand-cocoa">
          <button
            type="button"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className="inline-flex size-8 items-center justify-center disabled:opacity-35"
          >
            <Minus aria-hidden="true" className="size-4" />
          </button>
          <span className="text-sm font-bold">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((current) => current + 1)}
            disabled={!canIncrease}
            aria-label="Increase quantity"
            className="inline-flex size-8 items-center justify-center disabled:opacity-35"
          >
            <Plus aria-hidden="true" className="size-4" />
          </button>
        </div>

        <AddToCartButton
          product={product}
          quantity={quantity}
          selectedVariantId={selectedVariantId || undefined}
          variant="mango"
          className="h-11 w-full px-7 text-base font-medium"
        />
      </div>

      <AddToCartButton
        product={product}
        quantity={quantity}
        selectedVariantId={selectedVariantId || undefined}
        buyNow
        variant="orange"
        className="mt-3 h-11 w-full px-7 text-base font-bold"
      />
    </div>
  );
}
