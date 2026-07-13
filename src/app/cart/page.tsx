import type { Metadata } from "next";
import { retrieveCart } from "@lib/data/cart";
import { CartPageContent } from "./cart-page-content";

export const metadata: Metadata = {
  title: "Your Cart | Nutranza Foods",
};

export default async function CartPage() {
  const cart = await retrieveCart();
  return <CartPageContent initialCart={cart} />;
}
