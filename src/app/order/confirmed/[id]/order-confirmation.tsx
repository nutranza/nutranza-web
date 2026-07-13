"use client";

import { CheckCircle2, PackageCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import type { Order } from "@/lib/supabase/types";
import { clearCheckoutCart } from "@lib/actions/clear-checkout-cart";
import { convertToLocale } from "@lib/util/money";
import { useCartStore } from "@modules/cart/context/cart-store-context";

export function OrderConfirmation({ order }: { order: Order }) {
  const { clearCart } = useCartStore();
  const cleared = useRef(false);

  useEffect(() => {
    if (cleared.current) return;
    cleared.current = true;
    clearCart();
    void clearCheckoutCart();
  }, [clearCart]);

  const address = order.shipping_address;
  const total = order.total ?? order.total_amount ?? 0;

  return (
    <main className="flex-1 bg-brand-cream px-4 py-12 text-brand-cocoa sm:py-16">
      <div className="Container max-w-4xl">
        <div className="rounded-3xl border border-brand-cocoa/15 bg-white p-6 shadow-sm sm:p-10">
          <div className="text-center">
            <CheckCircle2 className="mx-auto size-16 text-brand-green" />
            <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Order confirmed</p>
            <h1 className="mt-2 font-heading text-4xl font-black sm:text-5xl">Thank you for your order!</h1>
            <p className="mt-3 font-semibold text-brand-muted">
              Order #{order.display_id || order.id.slice(0, 8)} has been placed successfully.
            </p>
          </div>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            <section className="rounded-2xl bg-brand-cream p-5">
              <h2 className="font-heading text-xl font-black">Delivery details</h2>
              {address ? (
                <address className="mt-3 not-italic text-sm font-semibold leading-6 text-brand-muted">
                  <p className="font-black text-brand-cocoa">{address.first_name} {address.last_name}</p>
                  <p>{address.address_1}</p>
                  {address.address_2 ? <p>{address.address_2}</p> : null}
                  <p>{address.city}, {address.province} {address.postal_code}</p>
                  <p>India</p>
                  {address.phone ? <p>{address.phone}</p> : null}
                </address>
              ) : null}
            </section>
            <section className="rounded-2xl bg-brand-green/10 p-5">
              <div className="flex items-center gap-3">
                <PackageCheck className="size-7 text-brand-green" />
                <div>
                  <h2 className="font-heading text-xl font-black">Cash on Delivery</h2>
                  <p className="mt-1 text-sm font-semibold text-brand-muted">Payment is due when your order arrives.</p>
                </div>
              </div>
              <p className="mt-4 inline-flex rounded-full bg-brand-mango px-3 py-1 text-xs font-black uppercase tracking-wide">COD pending</p>
            </section>
          </div>

          <section className="mt-7">
            <h2 className="font-heading text-2xl font-black">Order summary</h2>
            <div className="mt-4 divide-y divide-brand-cocoa/10 rounded-2xl border border-brand-cocoa/15">
              {(order.items || []).map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-brand-cream">
                    {item.thumbnail ? <Image src={item.thumbnail} alt={item.product_title || item.title} fill sizes="64px" className="object-contain p-1" /> : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-black">{item.product_title || item.title}</p>
                    <p className="text-sm font-semibold text-brand-muted">Quantity: {item.quantity}</p>
                  </div>
                  <strong>{convertToLocale({ amount: item.total, currency_code: "INR" })}</strong>
                </div>
              ))}
            </div>
            <dl className="ml-auto mt-5 max-w-sm space-y-2 text-sm font-semibold">
              <div className="flex justify-between"><dt>Subtotal</dt><dd>{convertToLocale({ amount: order.subtotal || 0, currency_code: "INR" })}</dd></div>
              <div className="flex justify-between"><dt>Shipping</dt><dd>{order.shipping_total ? convertToLocale({ amount: order.shipping_total, currency_code: "INR" }) : "Free"}</dd></div>
              <div className="flex justify-between border-t border-brand-cocoa/15 pt-3 text-lg font-black"><dt>Total</dt><dd>{convertToLocale({ amount: total, currency_code: "INR" })}</dd></div>
            </dl>
          </section>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/products" variant="mango">Continue shopping</Button>
            <Button href="/contact" variant="surface">Contact support</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
