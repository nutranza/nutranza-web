"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/products";

export function ProductGallery({ product }: { product: Product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = product.gallery[selectedIndex] ?? product.image;

  return (
    <div>
      <div
        className="relative flex min-h-96 items-center justify-center overflow-hidden rounded-lg bg-brand-surface p-8 shadow-sm sm:min-h-140 lg:min-h-150"
        style={{ backgroundColor: product.themeBg }}
      >
        <Image
          src={selectedImage}
          alt={
            selectedIndex === 0
              ? product.imageAlt
              : `${product.name} gallery image ${selectedIndex + 1}`
          }
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 48vw"
          className="object-contain px-10 py-10"
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 sm:max-w-md">
        {product.gallery.map((image, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={`${product.slug}-gallery-${image}-${index}`}
              type="button"
              aria-label={`Show ${product.name} image ${index + 1}`}
              aria-pressed={isSelected}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-lg border bg-brand-surface transition ${
                isSelected ? "border-brand-cocoa" : "border-brand-line"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="120px"
                className="object-contain p-3"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
