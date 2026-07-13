import { Product } from "@/lib/supabase/types/index"
import { buildPublicMediaUrl, getPublicMediaBaseUrl } from "./media-url"

export const CDN_URL = getPublicMediaBaseUrl()

export const fixUrl = (url: string | null | undefined) => {
  if (!url) return null
  const trimmed = url.trim()

  // Files bundled in /public must stay root-relative. Converting them to an
  // absolute localhost URL makes Next/Image treat localhost as an unapproved
  // remote host and breaks server rendering in development.
  if (trimmed.startsWith("/assets/")) return trimmed

  if (trimmed.startsWith("http")) return buildPublicMediaUrl(trimmed)

  // Remove all leading slashes to prevent relative path bugs (/uploads/... -> cdn.com/uploads/...)
  let cleanPath = trimmed
  while (cleanPath.startsWith("/")) {
    cleanPath = cleanPath.substring(1)
  }

  if (!cleanPath) return null

  return buildPublicMediaUrl(cleanPath)
}

export const normalizeProductImage = (product: Product): Product => {
  const rawImages: string[] = []
  if (Array.isArray(product.images)) {
    product.images.forEach((img: string | { url: string }) => {
      if (typeof img === "string") rawImages.push(img)
      else if (typeof img === "object" && img?.url) rawImages.push(img.url)
    })
  }

  if (product.image_url && !rawImages.includes(product.image_url)) {
    rawImages.unshift(product.image_url)
  }

  const cleanedImages = rawImages
    .map((url) => fixUrl(url))
    .filter((url): url is string => !!url)

  const uniqueImages = Array.from(new Set(cleanedImages))
  const mainImage = fixUrl(product.image_url) || uniqueImages[0] || null

  return {
    ...product,
    title: product.name, // Ensure UI can use .title or .name
    image_url: mainImage,
    thumbnail: mainImage || fixUrl(product.thumbnail),
    images: uniqueImages,
  }
}
