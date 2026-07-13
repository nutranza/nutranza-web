"use client";

import { Minus, Plus, ShieldCheck, ShoppingBag, Trash2, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import type { Cart } from "@/lib/supabase/types";
import { convertToLocale } from "@lib/util/money";
import { useCartStore } from "@modules/cart/context/cart-store-context";

export function CartPageContent({ initialCart }: { initialCart: Cart | null }) {
  const {
    cart: clientCart,
    setFromServer,
    optimisticRemove,
    optimisticUpdateQuantity,
    isRemoving,
    isUpdating,
  } = useCartStore();

  useEffect(() => {
    if (initialCart) setFromServer(initialCart);
  }, [initialCart, setFromServer]);

  const cart = clientCart ?? initialCart;
  const items = cart?.items || [];
  const subtotal = cart?.subtotal ?? cart?.item_subtotal ?? 0;
  const shipping = cart?.shipping_total ?? 0;
  const total = cart?.total ?? subtotal + shipping;

  if (!items.length) {
    return (
      <main className="flex flex-1 items-center bg-brand-cream px-4 py-20 text-brand-cocoa">
        <div className="Container text-center">
          <ShoppingBag className="mx-auto size-16" />
          <h1 className="mt-5 font-heading text-4xl font-black">Your cart is empty</h1>
          <p className="mx-auto mt-3 max-w-lg font-semibold text-brand-muted">
            Explore Nutranza favourites and add something delicious to your cart.
          </p>
          <Button href="/products" variant="mango" className="mt-7">
            Shop products
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-brand-cream px-4 py-10 text-brand-cocoa sm:py-14">
      <div className="Container">
        <h1 className="font-heading text-4xl font-black sm:text-5xl">Your cart</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
          <section aria-label="Cart items" className="space-y-4">
            {items.map((item) => {
              const maxQuantity =
                item.variant?.manage_inventory && !item.variant.allow_backorder
                  ? item.variant.inventory_quantity
                  : undefined;
              const canIncrease = maxQuantity === undefined || item.quantity < maxQuantity;

              return (
                <article
                  key={item.id}
                  className="grid gap-4 rounded-2xl border border-brand-cocoa/15 bg-white p-4 sm:grid-cols-[128px_1fr]"
                >
                  <Link
                    href={item.product_handle ? `/products/${item.product_handle}` : "/products"}
                    className="relative aspect-square overflow-hidden rounded-xl bg-brand-cream"
                  >
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail}
                        alt={item.product_title || item.title}
                        fill
                        sizes="128px"
                        className="object-contain p-2"
                      />
                    ) : null}
                  </Link>
                  <div className="flex min-w-0 flex-col justify-between gap-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link
                          href={item.product_handle ? `/products/${item.product_handle}` : "/products"}
                          className="font-heading text-xl font-black"
                        >
                          {item.product_title || item.title}
                        </Link>
                        {item.variant?.title && item.variant.title !== "Default" ? (
                          <p className="mt-1 text-sm font-semibold text-brand-muted">{item.variant.title}</p>
                        ) : null}
                      </div>
                      <strong>
                        {convertToLocale({
                          amount: item.total ?? item.unit_price * item.quantity,
                          currency_code: cart?.currency_code || "INR",
                        })}
                      </strong>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center rounded-full border-2 border-brand-green-dark bg-background">
                        <button
                          type="button"
                          disabled={item.quantity <= 1 || isUpdating(item.id) || isRemoving(item.id)}
                          onClick={() => void optimisticUpdateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="inline-flex size-9 items-center justify-center disabled:opacity-35"
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="min-w-8 text-center font-bold">{item.quantity}</span>
                        <button
                          type="button"
                          disabled={!canIncrease || isUpdating(item.id) || isRemoving(item.id)}
                          onClick={() => void optimisticUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="inline-flex size-9 items-center justify-center disabled:opacity-35"
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => void optimisticRemove(item.id)}
                        disabled={isRemoving(item.id)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-muted hover:text-red-600 disabled:opacity-50"
                      >
                        <Trash2 className="size-4" /> Remove
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          <aside className="h-fit rounded-2xl border border-brand-cocoa/15 bg-white p-6 lg:sticky lg:top-5">
            <h2 className="font-heading text-2xl font-black">Order summary</h2>
            <dl className="mt-5 space-y-3 text-sm font-semibold">
              <div className="flex justify-between"><dt>Subtotal</dt><dd>{convertToLocale({ amount: subtotal, currency_code: "INR" })}</dd></div>
              <div className="flex justify-between"><dt>Shipping</dt><dd>{shipping > 0 ? convertToLocale({ amount: shipping, currency_code: "INR" }) : "Calculated at checkout"}</dd></div>
              <div className="flex justify-between border-t border-brand-cocoa/15 pt-4 text-lg font-black"><dt>Total</dt><dd>{convertToLocale({ amount: total, currency_code: "INR" })}</dd></div>
            </dl>
            <Button href="/checkout?step=address" variant="cocoaDeep" className="mt-6 w-full">
              Proceed to checkout
            </Button>
            <Button href="/products" variant="surface" className="mt-3 w-full">
              Continue shopping
            </Button>
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-brand-cocoa/15 pt-5 text-center text-xs font-bold">
              <span className="flex flex-col items-center gap-1"><ShieldCheck className="size-5" />Secure checkout</span>
              <span className="flex flex-col items-center gap-1"><Truck className="size-5" />Reliable delivery</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
