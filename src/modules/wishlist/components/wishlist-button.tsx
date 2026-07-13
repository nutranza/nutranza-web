"use client";

import type { MouseEvent } from "react";
import { Heart } from "lucide-react";
import { IconButton } from "@/components/ui/button";
import { useWishlist } from "@modules/wishlist/context/wishlist-context";

type WishlistButtonProps = {
  productId: string;
  productTitle: string;
  className?: string;
  variant?: "surface" | "mango" | "line";
  inactiveTone?: "light" | "dark";
};

export function WishlistButton({
  productId,
  productTitle,
  className,
  variant = "surface",
  inactiveTone = "dark",
}: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isActive = isInWishlist(productId);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    toggleWishlist(productId);
  };

  return (
    <IconButton
      aria-label={`${isActive ? "Remove" : "Add"} ${productTitle} ${
        isActive ? "from" : "to"
      } wishlist`}
      aria-pressed={isActive}
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      <Heart
        aria-hidden="true"
        className={`size-5 transition-colors duration-200 ${
          isActive
            ? "fill-[#E7353A] text-[#E7353A]"
            : inactiveTone === "light"
              ? "fill-transparent text-white"
              : "fill-transparent text-brand-cocoa"
        }`}
        strokeWidth={2.6}
      />
    </IconButton>
  );
}
