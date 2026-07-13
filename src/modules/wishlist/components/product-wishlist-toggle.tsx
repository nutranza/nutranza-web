"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@modules/wishlist/context/wishlist-context";

export function ProductWishlistToggle({
  productId,
  productTitle,
}: {
  productId: string;
  productTitle: string;
}) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isActive = isInWishlist(productId);

  return (
    <button
      type="button"
      aria-pressed={isActive}
      aria-label={`${isActive ? "Remove" : "Add"} ${productTitle} ${
        isActive ? "from" : "to"
      } wishlist`}
      onClick={() => toggleWishlist(productId)}
      className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-[#E7353A] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-cocoa"
    >
      <Heart
        aria-hidden="true"
        className={`size-4 transition-colors ${
          isActive
            ? "fill-[#E7353A] text-[#E7353A]"
            : "fill-transparent"
        }`}
      />
      {isActive ? "In Your Wishlist" : "Add to Wishlist"}
    </button>
  );
}
