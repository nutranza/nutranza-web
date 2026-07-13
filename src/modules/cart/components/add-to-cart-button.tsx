"use client";

import { useRouter } from "next/navigation";
import {
  useState,
  type ComponentPropsWithoutRef,
  type MouseEvent,
} from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { useCartStore } from "@modules/cart/context/cart-store-context";
import { useCartSidebar } from "@modules/layout/context/cart-sidebar-context";

type AddToCartButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "children" | "onClick"
> & {
  product: Pick<Product, "name" | "href" | "soldOut" | "cart">;
  variant?: ButtonProps["variant"];
  quantity?: number;
  selectedVariantId?: string;
  buyNow?: boolean;
  children?: React.ReactNode;
};

export function AddToCartButton({
  product,
  quantity = 1,
  selectedVariantId,
  buyNow = false,
  children,
  disabled,
  ...buttonProps
}: AddToCartButtonProps) {
  const router = useRouter();
  const { optimisticAdd } = useCartStore();
  const { openCart } = useCartSidebar();
  const [pending, setPending] = useState(false);
  const cartData = product.cart;
  const selectedVariant = selectedVariantId
    ? cartData?.variants.find((variant) => variant.id === selectedVariantId)
    : cartData?.defaultVariant;
  const unavailable = disabled || product.soldOut || !cartData?.available;

  const handleAdd = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!cartData || unavailable || pending) return;

    if (cartData.requiresSelection && !selectedVariant) {
      router.push(product.href);
      return;
    }

    setPending(true);
    try {
      const addRequest = optimisticAdd({
        product: cartData.product,
        variant: selectedVariant,
        quantity: Math.max(1, quantity),
        countryCode: "in",
      });

      if (!buyNow) {
        openCart({ skipReload: true });
      }

      await addRequest;

      if (buyNow) {
        router.push("/checkout?step=address");
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <Button
      {...buttonProps}
      type="button"
      disabled={Boolean(unavailable || pending)}
      aria-busy={pending}
      aria-label={`${buyNow ? "Buy" : "Add"} ${product.name}${buyNow ? " now" : " to cart"}`}
      onClick={handleAdd}
      data-no-drag
    >
      {pending
        ? "Adding..."
        : unavailable
          ? "Out of stock"
          : cartData?.requiresSelection && !selectedVariant
            ? "Choose options"
            : children || (buyNow ? "Buy it now" : "Add to cart")}
    </Button>
  );
}
