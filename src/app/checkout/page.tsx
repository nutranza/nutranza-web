import type { Metadata } from "next";
import { redirect } from "next/navigation";
import type { ShippingMethod } from "@/lib/supabase/types";
import { autoSelectStandardShipping, retrieveCart } from "@lib/data/cart";
import { CheckoutForm } from "./checkout-form";

export const metadata: Metadata = {
  title: "Checkout | Nutranza Foods",
};

export default async function CheckoutPage() {
  const cart = await retrieveCart();
  if (!cart?.items?.length) redirect("/cart");

  if (!cart.shipping_methods?.length) {
    const method = await autoSelectStandardShipping(cart.id, true);
    if (method) cart.shipping_methods = [method as ShippingMethod];
  }

  return <CheckoutForm cart={cart} />;
}
