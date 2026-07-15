"use client";

import type {
  CSSProperties,
  KeyboardEvent,
  MouseEvent,
  PointerEvent,
} from "react";
import { useRef, useState } from "react";
import {
  Ban,
  Dumbbell,
  Flame,
  Leaf,
  Package,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Trophy,
  Waves,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { WishlistButton } from "@modules/wishlist/components/wishlist-button";
import { AddToCartButton } from "@modules/cart/components/add-to-cart-button";
import styles from "./best-picks.module.css";

const cardBadges = [
  { label: "Bestseller", tone: "green" },
  { label: "Staff Pick", tone: "gold" },
  { label: "Most Loved", tone: "red" },
] as const;

export function BestSellers({ products }: { products: readonly Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    active: false,
    moved: false,
    pointerId: -1,
    startX: 0,
    scrollLeft: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const scrollBySlide = (direction: "previous" | "next") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollBy({
      left: track.clientWidth * (direction === "next" ? 0.72 : -0.72),
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const target = event.target;

    if (
      !track ||
      event.button !== 0 ||
      (target instanceof Element &&
        Boolean(
          target.closest(
            "button, a, input, select, textarea, [role='button'], [data-no-drag]",
          ),
        ))
    ) {
      return;
    }

    dragStateRef.current = {
      active: true,
      moved: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };

    track.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || !dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;

    if (Math.abs(deltaX) > 5) {
      dragState.moved = true;
    }

    track.scrollLeft = dragState.scrollLeft - deltaX;
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || !dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    dragState.active = false;

    window.setTimeout(() => {
      dragState.moved = false;
      setIsDragging(false);
    }, 0);
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!dragStateRef.current.moved) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollBySlide("next");
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollBySlide("previous");
    }
  };

  return (
    <section
      id="best-sellers"
      aria-labelledby="best-sellers-title"
      className={styles.section}
    >
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 0H1440V52C1287 125 1122 77 1007 38C890 0 837 0 710 55C563 119 337 43 166 58C79 66 26 83 0 99V0Z" />
        </svg>
      </div>

      <div className={styles.header}>
        <h4 className="text-xl text-brand-cocoa font-bold tracking-tight sm:text-2xl mb-3">
          Find Your
        </h4>

        <h2 id="best-sellers-title" className={styles.heading}>
          Perfect Breakfast
        </h2>

        <p className="text-base text-brand-cocoa max-w-2xl mx-auto sm:text-lg mt-3 font-medium sm:leading-7">
          Crafted for every goal, every morning and every lifestyle.
        </p>
      </div>

      <div className={styles.carouselShell}>
        <div
          ref={trackRef}
          className={`${styles.productTrack} ${
            isDragging ? styles.productTrackDragging : ""
          }`}
          role="region"
          aria-label="Best picks product carousel"
          tabIndex={0}
          onClickCapture={handleClickCapture}
          onKeyDown={handleKeyDown}
          onPointerCancel={finishDrag}
          onPointerDown={handlePointerDown}
          onPointerLeave={finishDrag}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
        >
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={product.id} product={product} slotIndex={index} />
          ))}
        </div>
      </div>

    </section>
  );
}

function ProductCard({
  product,
  slotIndex,
}: {
  product: Product;
  slotIndex: number;
}) {
  const cardBadge = cardBadges[slotIndex] || cardBadges[0];
  const highlights = product.stats.slice(0, 3);

  return (
    <article
      className={styles.productCard}
      style={{ "--product-theme": product.themeBg } as CSSProperties}
    >
      <div className={styles.mediaWrap} data-slot={slotIndex}>
        <span className={styles.sceneOrb} aria-hidden="true" />
        <span className={styles.sceneAccent} aria-hidden="true" />
        <span className={styles.sceneSpeckles} aria-hidden="true" />

        <span
          className={`${styles.cardBadge} ${styles[`cardBadge${cardBadge.tone}`]}`}
        >
          <CardBadgeIcon slotIndex={slotIndex} />
          {cardBadge.label}
        </span>

        <Link
          href={product.href}
          aria-label={`View ${product.name}`}
          className={styles.mediaLink}
        >
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 68vw, (max-width: 1024px) 31vw, 260px"
            className={styles.productImage}
          />
        </Link>
      </div>

      <div className={styles.productContent}>
        <Rating value={product.rating} reviewCount={product.reviewCount} />
        <Link href={product.href} className={styles.productNameLink}>
          <h3 className={styles.productName}>{product.name}</h3>
        </Link>

        <ul className={styles.highlights} aria-label={`${product.name} highlights`}>
          {highlights.map((highlight) => (
            <li key={`${highlight.value}-${highlight.label}`}>
              <HighlightIcon label={highlight.label} />
              <span>{highlight.value} {highlight.label}</span>
            </li>
          ))}
        </ul>

        <p className={styles.priceRow}>
          <span className={styles.currentPrice}>{product.price}</span>
          {product.compareAt && (
            <span className={styles.compareAt}>{product.compareAt}</span>
          )}
          {product.discountPercent ? (
            <span className={styles.saveBadge}>
              Save {product.discountPercent}%
            </span>
          ) : null}
        </p>

        <div className={styles.productActions}>
          <AddToCartButton
            product={product}
            variant="mango"
            className={styles.cartButton}
          >
            <ShoppingCart aria-hidden="true" className="size-5" />
            Add to Cart
          </AddToCartButton>
          <WishlistButton
            productId={product.id}
            productTitle={product.name}
            variant="surface"
            inactiveTone="dark"
            className={styles.wishlistButton}
          />
        </div>
      </div>
    </article>
  );
}

function CardBadgeIcon({ slotIndex }: { slotIndex: number }) {
  if (slotIndex === 0) {
    return <Trophy aria-hidden="true" className="size-3.5" />;
  }

  if (slotIndex === 1) {
    return <Star aria-hidden="true" className="size-3.5 fill-current" />;
  }

  if (slotIndex === 2) {
    return <Flame aria-hidden="true" className="size-3.5" />;
  }

  return <Sparkles aria-hidden="true" className="size-3.5" />;
}

function HighlightIcon({ label }: { label: string }) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("protein")) {
    return <Dumbbell aria-hidden="true" />;
  }

  if (
    normalizedLabel.includes("fibre") ||
    normalizedLabel.includes("vegan") ||
    normalizedLabel.includes("vegetarian")
  ) {
    return <Leaf aria-hidden="true" />;
  }

  if (normalizedLabel.includes("fat") || normalizedLabel.includes("sugar")) {
    return <Ban aria-hidden="true" />;
  }

  if (normalizedLabel.includes("flavor") || normalizedLabel.includes("flavour")) {
    return <Sparkles aria-hidden="true" />;
  }

  if (normalizedLabel.includes("texture") || normalizedLabel.includes("smooth")) {
    return <Waves aria-hidden="true" />;
  }

  if (normalizedLabel.includes("pack") || normalizedLabel.includes("weight")) {
    return <Package aria-hidden="true" />;
  }

  return <ShieldCheck aria-hidden="true" />;
}

function Rating({
  value,
  reviewCount,
}: {
  value: number;
  reviewCount: number;
}) {
  if (value === 0) {
    return <div className={styles.ratingSpacer} aria-hidden="true" />;
  }

  return (
    <div
      className={styles.rating}
      aria-label={`${value} out of 5 stars from ${reviewCount} reviews`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={`size-4 ${index < value ? "fill-current" : ""}`}
          strokeWidth={2.5}
        />
      ))}
      <span>{value.toFixed(1)} ({reviewCount} Reviews)</span>
    </div>
  );
}
