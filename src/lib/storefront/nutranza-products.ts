import { getProductByHandle, listProducts } from "@/lib/data/products"
import type { Product as WebsiteProduct } from "@/lib/products"
import { mapCommerceProduct } from "@/lib/storefront/product-mapper"

export async function listWebsiteProducts(limit = 100): Promise<WebsiteProduct[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return []
  }

  const { response } = await listProducts({ queryParams: { limit } })
  return response.products.map(mapCommerceProduct)
}

export async function getWebsiteProduct(handle: string): Promise<WebsiteProduct | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null
  }

  const product = await getProductByHandle(handle)
  return product ? mapCommerceProduct(product) : null
}
