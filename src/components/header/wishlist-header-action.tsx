"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { useWishlist } from "@modules/wishlist/context/wishlist-context";

export function WishlistHeaderAction({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const { count, isInitialized } = useWishlist();
  const visibleCount = isInitialized ? count : 0;
  const label = visibleCount
    ? `Wishlist with ${visibleCount} ${visibleCount === 1 ? "item" : "items"}`
    : "Wishlist";

  return (
    <Link
      href="/wishlist"
      aria-label={label}
      className={`group relative inline-flex items-center justify-center transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa ${
        mobile ? "size-10" : "size-11"
      }`}
    >
      <Heart
        aria-hidden="true"
        className={`${mobile ? "size-5" : "size-6"} transition-transform duration-500 group-hover:rotate-y-180`}
        strokeWidth={2}
      />
      {visibleCount > 0 ? (
        <span
          aria-hidden="true"
          className="absolute right-0.5 top-0.5 inline-flex min-h-4 min-w-4 items-center justify-center rounded-full bg-[#E7353A] px-1 text-[0.625rem] font-black leading-none text-white shadow-sm"
        >
          {visibleCount > 99 ? "99+" : visibleCount}
        </span>
      ) : null}
    </Link>
  );
}
