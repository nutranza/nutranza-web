"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@modules/cart/context/cart-store-context";
import { useCartSidebar } from "@modules/layout/context/cart-sidebar-context";

export function CartHeaderAction({ mobile = false }: { mobile?: boolean }) {
  const { cart } = useCartStore();
  const { openCart } = useCartSidebar();
  const count = cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <button
      type="button"
      onClick={() => openCart()}
      aria-label={`Cart${count ? `, ${count} items` : ""}`}
      className={`group relative inline-flex items-center justify-center transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa ${mobile ? "size-10" : "size-11"}`}
    >
      <ShoppingCart
        aria-hidden="true"
        className={`${mobile ? "size-5" : "size-6"} transition-transform duration-500 group-hover:rotate-y-180`}
        strokeWidth={2}
      />
      {count > 0 ? (
        <span className="absolute right-0 top-0 inline-flex min-w-5 items-center justify-center rounded-full bg-brand-orange px-1 text-[0.65rem] font-black leading-5 text-white">
          {count > 99 ? "99+" : count}
        </span>
      ) : null}
    </button>
  );
}
