"use client";

import { Check, Lock, PackageCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import type { Cart } from "@/lib/supabase/types";
import { completeCheckout } from "@lib/actions/complete-checkout";
import { convertToLocale } from "@lib/util/money";

type AddressState = {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  city: string;
  province: string;
  postal_code: string;
  country_code: string;
  phone: string;
};

const emptyAddress: AddressState = {
  first_name: "",
  last_name: "",
  address_1: "",
  address_2: "",
  city: "",
  province: "",
  postal_code: "",
  country_code: "in",
  phone: "",
};

const inputClass =
  "h-12 w-full rounded-xl border border-brand-cocoa/20 bg-white px-4 text-sm font-semibold text-brand-cocoa outline-none transition placeholder:text-brand-muted/70 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20";

export function CheckoutForm({ cart }: { cart: Cart }) {
  const router = useRouter();
  const [email, setEmail] = useState(cart.email || "");
  const [shippingAddress, setShippingAddress] = useState<AddressState>({
    ...emptyAddress,
    ...(cart.shipping_address || {}),
    first_name: cart.shipping_address?.first_name || "",
    last_name: cart.shipping_address?.last_name || "",
    address_1: cart.shipping_address?.address_1 || "",
    address_2: cart.shipping_address?.address_2 || "",
    city: cart.shipping_address?.city || "",
    province: cart.shipping_address?.province || "",
    postal_code: cart.shipping_address?.postal_code || "",
    country_code: cart.shipping_address?.country_code || "in",
    phone: cart.shipping_address?.phone || "",
  });
  const [billingAddress, setBillingAddress] = useState<AddressState>({ ...emptyAddress });
  const [billingSame, setBillingSame] = useState(true);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateAddress = (
    target: "shipping" | "billing",
    field: keyof AddressState,
    value: string,
  ) => {
    const setter = target === "shipping" ? setShippingAddress : setBillingAddress;
    setter((current) => ({ ...current, [field]: value }));
  };

  const shipping = cart.shipping_methods?.[0]?.amount || 0;
  const subtotal = cart.subtotal ?? cart.item_subtotal ?? 0;
  const finalShipping =
    cart.shipping_methods?.[0]?.min_order_free_shipping &&
    subtotal >= cart.shipping_methods[0].min_order_free_shipping!
      ? 0
      : shipping;
  const total = Math.max(0, subtotal + finalShipping - (cart.discount_total || 0));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;

    setPending(true);
    setError(null);
    try {
      const result = await completeCheckout({
        cartId: cart.id,
        email: email.trim(),
        shippingAddress,
        billingAddress: billingSame ? shippingAddress : billingAddress,
        paymentMethod: "pp_system_default",
        rewardsToApply: 0,
        saveAddress: false,
      });

      if (!result.success || !result.orderId) {
        setError(result.error || "Failed to place your order. Please try again.");
        return;
      }

      router.replace(`/order/confirmed/${result.orderId}`);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Failed to place your order. Please try again.",
      );
    } finally {
      setPending(false);
    }
  };

  return (
    <main className="flex-1 bg-brand-cream px-4 py-10 text-brand-cocoa sm:py-14">
      <form onSubmit={handleSubmit} className="Container">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="font-heading text-4xl font-black sm:text-5xl">Checkout</h1>
          <Link href="/cart" className="text-sm font-bold underline underline-offset-4">Back to cart</Link>
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_400px]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-brand-cocoa/15 bg-white p-5 sm:p-7">
              <h2 className="font-heading text-2xl font-black">Contact</h2>
              <label className="mt-5 block text-sm font-bold">
                Email address
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={`${inputClass} mt-2`}
                  placeholder="you@example.com"
                />
              </label>
            </section>

            <AddressSection
              title="Shipping address"
              address={shippingAddress}
              onChange={(field, value) => updateAddress("shipping", field, value)}
            />

            <section className="rounded-2xl border border-brand-cocoa/15 bg-white p-5 sm:p-7">
              <label className="flex cursor-pointer items-center gap-3 font-bold">
                <input
                  type="checkbox"
                  checked={billingSame}
                  onChange={() => setBillingSame((current) => !current)}
                  className="size-5 accent-brand-orange"
                />
                Billing address is the same as shipping
              </label>
            </section>

            {!billingSame ? (
              <AddressSection
                title="Billing address"
                address={billingAddress}
                onChange={(field, value) => updateAddress("billing", field, value)}
                includePhone={false}
              />
            ) : null}

            <section className="rounded-2xl border border-brand-cocoa/15 bg-white p-5 sm:p-7">
              <h2 className="font-heading text-2xl font-black">Payment Method</h2>
              <div className="mt-5 flex items-center gap-4 rounded-xl border-2 border-brand-green bg-brand-green/5 p-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                  <PackageCheck className="size-6" />
                </span>
                <div className="flex-1">
                  <p className="font-black">Cash on Delivery</p>
                  <p className="mt-1 text-sm font-semibold text-brand-muted">Pay with cash when your order arrives.</p>
                </div>
                <Check className="size-6 text-brand-green" />
              </div>
            </section>
          </div>

          <aside className="h-fit space-y-4 lg:sticky lg:top-5">
            <section className="rounded-2xl border border-brand-cocoa/15 bg-white p-5 sm:p-6">
              <h2 className="font-heading text-2xl font-black">Order summary</h2>
              <div className="mt-5 max-h-72 space-y-4 overflow-y-auto pr-1">
                {(cart.items || []).map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-brand-cream">
                      {item.thumbnail ? <Image src={item.thumbnail} alt={item.product_title || item.title} fill sizes="64px" className="object-contain p-1" /> : null}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-black">{item.product_title || item.title}</p>
                      {item.variant?.title && item.variant.title !== "Default" ? <p className="text-xs font-semibold text-brand-muted">{item.variant.title}</p> : null}
                      <p className="mt-1 text-xs font-bold text-brand-muted">Qty: {item.quantity}</p>
                    </div>
                    <strong className="text-sm">{convertToLocale({ amount: item.total, currency_code: "INR" })}</strong>
                  </div>
                ))}
              </div>
              <dl className="mt-6 space-y-3 border-t border-brand-cocoa/15 pt-5 text-sm font-semibold">
                <div className="flex justify-between"><dt>Subtotal</dt><dd>{convertToLocale({ amount: subtotal, currency_code: "INR" })}</dd></div>
                <div className="flex justify-between"><dt>Shipping</dt><dd>{finalShipping === 0 ? "Free" : convertToLocale({ amount: finalShipping, currency_code: "INR" })}</dd></div>
                <div className="flex justify-between"><dt>Taxes</dt><dd>{convertToLocale({ amount: 0, currency_code: "INR" })}</dd></div>
                <div className="flex justify-between border-t border-brand-cocoa/15 pt-4 text-lg font-black"><dt>Total</dt><dd>{convertToLocale({ amount: total, currency_code: "INR" })}</dd></div>
              </dl>
            </section>

            <section className="rounded-2xl border border-brand-cocoa/15 bg-white p-5 sm:p-6">
              <h2 className="font-heading text-2xl font-black">Complete Order</h2>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-green-700">
                <Lock className="size-4 shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold">Secure checkout - Your information is protected</span>
              </div>
              <p className="mt-4 text-xs font-semibold leading-relaxed text-brand-muted">
                By placing this order, you agree to our Terms of Service and Privacy Policy.
              </p>
              {error ? <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p> : null}
              <Button type="submit" disabled={pending} variant="cocoaDeep" className="mt-5 min-h-12 w-full">
                {pending ? "Placing order..." : "Place order"}
              </Button>
            </section>
          </aside>
        </div>
      </form>
    </main>
  );
}

function AddressSection({
  title,
  address,
  onChange,
  includePhone = true,
}: {
  title: string;
  address: AddressState;
  onChange: (field: keyof AddressState, value: string) => void;
  includePhone?: boolean;
}) {
  return (
    <section className="rounded-2xl border border-brand-cocoa/15 bg-white p-5 sm:p-7">
      <h2 className="font-heading text-2xl font-black">{title}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <input required autoComplete="given-name" value={address.first_name} onChange={(e) => onChange("first_name", e.target.value)} className={inputClass} placeholder="First name" />
        <input required autoComplete="family-name" value={address.last_name} onChange={(e) => onChange("last_name", e.target.value)} className={inputClass} placeholder="Last name" />
        <input required autoComplete="address-line1" value={address.address_1} onChange={(e) => onChange("address_1", e.target.value)} className={`${inputClass} sm:col-span-2`} placeholder="Address" />
        <input autoComplete="address-line2" value={address.address_2} onChange={(e) => onChange("address_2", e.target.value)} className={`${inputClass} sm:col-span-2`} placeholder="Apartment, suite, etc. (optional)" />
        <input required autoComplete="address-level2" value={address.city} onChange={(e) => onChange("city", e.target.value)} className={inputClass} placeholder="City" />
        <input required autoComplete="address-level1" value={address.province} onChange={(e) => onChange("province", e.target.value)} className={inputClass} placeholder="State" />
        <input required inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{6}" title="Enter a valid 6-digit Indian postal code" value={address.postal_code} onChange={(e) => onChange("postal_code", e.target.value.replace(/\D/g, "").slice(0, 6))} className={inputClass} placeholder="Postal code" />
        <input readOnly value="India" className={`${inputClass} bg-brand-cream/50`} aria-label="Country" />
        {includePhone ? <input required type="tel" inputMode="tel" autoComplete="tel" value={address.phone} onChange={(e) => onChange("phone", e.target.value)} className={`${inputClass} sm:col-span-2`} placeholder="Phone number" /> : null}
      </div>
    </section>
  );
}
