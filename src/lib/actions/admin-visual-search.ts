"use server"

import { PERMISSIONS } from "@/lib/permissions"
import { requirePermission } from "@/lib/permissions/server"
import { createAuthorizedAdminDataClient } from "@/lib/supabase/admin-data"

export type VisualSearchIndexStatus = {
  total: number
  pending: number
  processed: number
}

export async function getVisualSearchIndexStatus(): Promise<VisualSearchIndexStatus> {
  await requirePermission(PERMISSIONS.SETTINGS_READ)
  const supabase = await createAuthorizedAdminDataClient()

  const [totalResult, pendingResult] = await Promise.all([
    supabase.from("products").select("id", { count: "exact", head: true }),
    supabase
      .from("products")
      .select("id", { count: "exact", head: true })
      .is("image_embedding", null),
  ])

  if (totalResult.error || pendingResult.error) {
    throw new Error(
      `Failed to load visual-search status: ${
        totalResult.error?.message || pendingResult.error?.message
      }`
    )
  }

  const total = totalResult.count || 0
  const pending = pendingResult.count || 0
  return { total, pending, processed: total - pending }
}
