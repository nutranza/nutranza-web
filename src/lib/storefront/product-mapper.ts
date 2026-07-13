import type { Product as CommerceProduct, ProductImage } from "@/lib/supabase/types";
import type { Product as WebsiteProduct } from "@/lib/products";

const DEFAULT_IMAGE = "/assets/images/products/product-1.png";

const stringValue = (value: unknown, fallback: string) =>
  typeof value === "string" && value.trim() ? value.trim() : fallback;

const stringList = (value: unknown, fallback: readonly string[]) =>
  Array.isArray(value) && value.every((item) => typeof item === "string")
    ? value
    : fallback;

const numberValue = (value: unknown, fallback: number) =>
  typeof value === "number" && Number.isFinite(value) ? value : fallback;

const imageUrl = (image: string | ProductImage) =>
  typeof image === "string" ? image : image.url;

function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount);
}

export function mapCommerceProduct(product: CommerceProduct): WebsiteProduct {
  const metadata = product.metadata || {};
  const variants = product.variants || [];
  const gallery = (product.images || []).map(imageUrl).filter(Boolean);
  const primaryImage =
    product.image_url || product.thumbnail || gallery[0] || DEFAULT_IMAGE;
  const prices = (
    variants.length ? variants.map((variant) => variant.price) : [product.price]
  ).filter(Number.isFinite);
  const price = prices.length ? Math.min(...prices) : 0;
  const comparePrices = variants
    .map((variant) => variant.compare_at_price)
    .filter(
      (value): value is number => typeof value === "number" && value > price,
    );
  const compareAt = comparePrices.length ? Math.min(...comparePrices) : null;
  const description =
    product.description?.trim() || product.short_description?.trim() || "";
  const statsValue = metadata.stats;
  const stats = Array.isArray(statsValue)
    ? statsValue.filter(
        (item): item is { value: string; label: string } =>
          Boolean(
            item &&
              typeof item === "object" &&
              typeof (item as { value?: unknown }).value === "string" &&
              typeof (item as { label?: unknown }).label === "string",
          ),
      )
    : [];

  return {
    id: product.id,
    slug: product.handle,
    name: product.name || product.title,
    category: stringValue(metadata.category_name, "Nutranza Foods"),
    href: `/products/${product.handle}`,
    image: primaryImage,
    imageAlt: stringValue(
      metadata.image_alt,
      `${product.name || product.title} product image`,
    ),
    themeBg: stringValue(metadata.theme_bg, "#fff1b8"),
    pageBg: stringValue(metadata.page_bg, "#fff9ed"),
    badge: typeof metadata.badge === "string" ? metadata.badge : undefined,
    soldOut: product.stock_count <= 0,
    rating: Math.max(
      0,
      Math.min(5, Math.round(numberValue(metadata.rating, 0))),
    ),
    reviewCount: Math.max(
      0,
      Math.round(numberValue(metadata.review_count, 0)),
    ),
    price: formatPrice(price),
    compareAt: compareAt ? formatPrice(compareAt) : undefined,
    swatches: gallery.length ? gallery.slice(0, 3) : [primaryImage],
    gallery: gallery.length ? gallery : [primaryImage],
    shortDescription: product.short_description || description,
    description: stringList(
      metadata.description_sections,
      description ? [description] : [],
    ),
    stats,
    loveList: stringList(metadata.love_list, []),
    details: stringList(metadata.product_details, []),
  };
}
