"use server"

import { createClient } from "@/lib/supabase/server"
import { createAuthorizedAdminDataClient } from "@/lib/supabase/admin-data"
import { GlobalSettings } from "@/lib/supabase/types"
import { revalidateTag, unstable_cache } from "next/cache"
import { ensureAdmin } from "@/lib/data/admin"
import { requirePermission } from "@/lib/permissions/server"
import { PERMISSIONS } from "@/lib/permissions"

const getGlobalSettingsInternal = async (): Promise<GlobalSettings> => {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("global_settings")
        .select("id, gift_wrap_fee, is_gift_wrap_enabled, updated_at")
        .eq("id", "default")
        .single()

    if (error || !data) {
        return {
            id: "default",
            gift_wrap_fee: 50,
            is_gift_wrap_enabled: true,
            updated_at: new Date().toISOString()
        }
    }

    return data as GlobalSettings
}

export const getGlobalSettings = async () =>
    unstable_cache(
        getGlobalSettingsInternal,
        ["global-settings"],
        { revalidate: 3600, tags: ["global_settings"] }
    )()

export async function getAdminGlobalSettings(): Promise<GlobalSettings> {
    await ensureAdmin()
    await requirePermission(PERMISSIONS.SETTINGS_READ)
    const supabase = await createAuthorizedAdminDataClient()

    const { data, error } = await supabase
        .from("global_settings")
        .select("id, gift_wrap_fee, is_gift_wrap_enabled, updated_at")
        .eq("id", "default")
        .single()

    if (error || !data) {
        throw new Error(`Failed to load global settings: ${error?.message || "Not found"}`)
    }

    return data as GlobalSettings
}

export async function updateGlobalSettings(settings: Partial<GlobalSettings>) {
    await ensureAdmin()
    await requirePermission(PERMISSIONS.SETTINGS_UPDATE)
    const supabase = await createAuthorizedAdminDataClient()

    const { error } = await supabase
        .from("global_settings")
        .upsert({
            id: "default",
            ...settings,
            updated_at: new Date().toISOString()
        }, { onConflict: "id" })

    if (error) {
        throw new Error(`Failed to update settings: ${error.message}`)
    }

    revalidateTag("global_settings", "max")
}
