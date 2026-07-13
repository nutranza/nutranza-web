"use client";

import type { KeyboardEvent, MouseEvent, PointerEvent } from "react";
import { useRef, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { WishlistButton } from "@modules/wishlist/components/wishlist-button";
import styles from "./best-picks.module.css";

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
        <h2 id="best-sellers-title" className={styles.heading}>
          Our Best Picks
        </h2>
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.productCard}>
      <WishlistButton
        productId={product.id}
        productTitle={product.name}
        variant="surface"
        inactiveTone="light"
        className={styles.wishlistButton}
      />

      <div className={styles.mediaWrap}>
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
        <p className={styles.priceRow}>
          <span>{product.price}</span>
          {product.compareAt && (
            <span className={styles.compareAt}>{product.compareAt}</span>
          )}
        </p>

        <Button
          href="/#cart"
          variant="mango"
          aria-label={`Add ${product.name} to cart`}
          className={styles.cartButton}
        >
          Add to cart
        </Button>
      </div>
    </article>
  );
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
      <span>({reviewCount} reviews)</span>
    </div>
  );
}
