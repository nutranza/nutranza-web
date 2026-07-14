import "server-only"

import { hasFixedAdminSession } from "@/lib/auth/fixed-admin"
import { createAuthorizedAdminDataClient } from "@/lib/supabase/admin-data"
import { createClient } from "@/lib/supabase/server"

export async function getAuthorizedAdminApiContext() {
  if (await hasFixedAdminSession()) {
    return {
      supabase: await createAuthorizedAdminDataClient(),
      userId: null,
    }
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle()

  if (error || profile?.role !== "admin") return null

  return { supabase, userId: user.id }
}
