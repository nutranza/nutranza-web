"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { convertToLocale } from "@lib/util/money";
import { useCartStore } from "@modules/cart/context/cart-store-context";
import { useCartSidebar } from "@modules/layout/context/cart-sidebar-context";
import DeleteButton from "@modules/common/components/delete-button";

export default function CartSidebar() {
  const { isOpen, closeCart, cart } = useCartSidebar();
  const {
    optimisticUpdateQuantity,
    isRemoving,
    isUpdating,
    isSyncing,
  } = useCartStore();

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const items = cart?.items || [];
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart?.subtotal ?? cart?.item_subtotal ?? 0;
  const threshold = cart?.free_shipping_threshold || 500;
  const remaining = Math.max(0, threshold - subtotal);
  const progress = threshold > 0 ? Math.min(100, (subtotal / threshold) * 100) : 100;

  return (
    <Dialog open={isOpen} onClose={closeCart} className="relative z-[200]">
      <div className="fixed inset-0 bg-brand-cocoa-deep/45" aria-hidden="true" />
      <div className="fixed inset-0 flex justify-end">
        <DialogPanel
          transition
          className="flex h-full w-full max-w-[480px] flex-col bg-background text-brand-cocoa shadow-2xl transition duration-300 ease-out data-closed:translate-x-full"
        >
          <div className="border-b border-brand-cocoa/15 px-5 py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <DialogTitle className="font-heading text-2xl font-black">
                  Your cart
                </DialogTitle>
                {itemCount > 0 ? (
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-cocoa text-xs font-bold text-white">
                    {itemCount}
                  </span>
                ) : null}
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="inline-flex size-10 items-center justify-center rounded-full border border-brand-cocoa/20 transition hover:bg-brand-cocoa hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            {items.length > 0 ? (
              <div className="mt-4">
                <p className="text-sm font-bold">
                  {remaining === 0
                    ? "You've unlocked FREE SHIPPING!"
                    : `Spend ${convertToLocale({ amount: remaining, currency_code: "INR" })} more for FREE SHIPPING!`}
                </p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-cocoa/15">
                  <div
                    className="h-full rounded-full bg-brand-green transition-[width] duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {items.length ? (
              <div className="space-y-4">
                {[...items]
                  .sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
                  .map((item) => {
                    const maxQuantity =
                      item.variant?.manage_inventory && !item.variant.allow_backorder
                        ? item.variant.inventory_quantity
                        : undefined;
                    const canIncrease = maxQuantity === undefined || item.quantity < maxQuantity;

                    return (
                      <article
                        key={item.id}
                        className="flex gap-3 rounded-xl border border-brand-cocoa/15 bg-white p-3"
                      >
                        <Link
                          href={item.product_handle ? `/products/${item.product_handle}` : "/products"}
                          onClick={closeCart}
                          className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-brand-cream"
                        >
                          {item.thumbnail ? (
                            <Image
                              src={item.thumbnail}
                              alt={item.product_title || item.title}
                              fill
                              sizes="96px"
                              className="object-contain p-1"
                            />
                          ) : (
                            <ShoppingBag className="absolute inset-0 m-auto size-8 text-brand-muted" />
                          )}
                        </Link>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <Link
                                href={item.product_handle ? `/products/${item.product_handle}` : "/products"}
                                onClick={closeCart}
                                className="line-clamp-2 font-heading text-base font-black"
                              >
                                {item.product_title || item.title}
                              </Link>
                              {item.variant?.title && item.variant.title !== "Default" ? (
                                <p className="mt-1 text-xs font-semibold text-brand-muted">
                                  {item.variant.title}
                                </p>
                              ) : null}
                            </div>
                            <span className="shrink-0 text-sm font-black">
                              {convertToLocale({
                                amount: item.total ?? item.unit_price * item.quantity,
                                currency_code: cart?.currency_code || "INR",
                              })}
                            </span>
                          </div>

                          <div className="mt-4 flex items-center justify-between gap-3">
                            <div className="inline-flex items-center rounded-full border border-brand-cocoa/25 bg-background">
                              <button
                                type="button"
                                aria-label={`Decrease ${item.product_title || item.title} quantity`}
                                disabled={item.quantity <= 1 || isUpdating(item.id) || isRemoving(item.id)}
                                onClick={() => void optimisticUpdateQuantity(item.id, item.quantity - 1)}
                                className="inline-flex size-8 items-center justify-center disabled:opacity-35"
                              >
                                <Minus className="size-3.5" />
                              </button>
                              <span className="min-w-7 text-center text-sm font-bold">{item.quantity}</span>
                              <button
                                type="button"
                                aria-label={`Increase ${item.product_title || item.title} quantity`}
                                disabled={!canIncrease || isUpdating(item.id) || isRemoving(item.id)}
                                onClick={() => void optimisticUpdateQuantity(item.id, item.quantity + 1)}
                                className="inline-flex size-8 items-center justify-center disabled:opacity-35"
                              >
                                <Plus className="size-3.5" />
                              </button>
                            </div>
                            <DeleteButton
                              id={item.id}
                              className="shrink-0 font-bold text-brand-muted"
                            />
                          </div>
                        </div>
                      </article>
                    );
                  })}
              </div>
            ) : isSyncing ? (
              <div className="space-y-4" aria-label="Loading cart">
                {[0, 1].map((item) => (
                  <div key={item} className="h-28 animate-pulse rounded-xl bg-brand-cocoa/10" />
                ))}
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand-mango/25">
                  <ShoppingBag className="size-8" />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-black">Your cart is empty</h2>
                <p className="mt-2 text-sm font-semibold text-brand-muted">
                  Add your Nutranza favourites to get started.
                </p>
                <Button href="/products" onClick={closeCart} variant="mango" className="mt-6 py-2 px-4">
                  Continue shopping
                </Button>
              </div>
            )}
          </div>

          <div className="border-t border-brand-cocoa/15 bg-white px-5 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-brand-muted">Subtotal</span>
              <strong className="text-lg">
                {convertToLocale({ amount: subtotal, currency_code: cart?.currency_code || "INR" })}
              </strong>
            </div>
            <div className="mt-4 grid gap-3">
              <Button
                href={items.length ? "/checkout?step=address" : "/products"}
                onClick={closeCart}
                variant="cocoaDeep"
                className="w-full py-2"
              >
                {items.length ? "Proceed to checkout" : "Start shopping"}
              </Button>
              {items.length ? (
                <Button href="/cart" onClick={closeCart} variant="surface" className="w-full py-2">

                  View full cart
                </Button>
              ) : null}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
