import "server-only"

import { hasFixedAdminSession } from "@/lib/auth/fixed-admin"
import { createAdminClient } from "@/lib/supabase/admin"
import { createClient } from "@/lib/supabase/server"

export type AdminLiveMode = "manual-refresh" | "supabase-realtime"

/**
 * Return the database client that matches the authenticated admin session.
 *
 * The fixed development login has no Supabase JWT, so its server-side reads
 * and writes must use the service-role client. Real admins retain the normal
 * request-scoped client and database RLS. Callers must authorize the request
 * with ensureAdmin/requirePermission before using this helper.
 */
export async function createAuthorizedAdminDataClient() {
  if (await hasFixedAdminSession()) {
    return createAdminClient()
  }

  return createClient()
}

export async function getAdminLiveMode(): Promise<AdminLiveMode> {
  return (await hasFixedAdminSession())
    ? "manual-refresh"
    : "supabase-realtime"
}
