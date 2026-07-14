"use client"

import { useEffect, useMemo, useRef } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export const ADMIN_DATA_REFRESH_EVENT = "nutranza:admin-data-refresh"

type AdminLiveMode = "manual-refresh" | "supabase-realtime"

const REFRESH_DEBOUNCE_MS = 500

export function AdminLiveDataProvider({ mode }: { mode: AdminLiveMode }) {
  const router = useRouter()
  const supabase = useMemo(() => createClient(), [])
  const refreshTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const canRefresh = () => !document.hidden && navigator.onLine

    const runRefresh = () => {
      if (!canRefresh()) return
      window.dispatchEvent(new Event(ADMIN_DATA_REFRESH_EVENT))
      router.refresh()
    }

    const scheduleRefresh = () => {
      if (!canRefresh()) return
      if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current)

      refreshTimerRef.current = setTimeout(() => {
        refreshTimerRef.current = null
        runRefresh()
      }, REFRESH_DEBOUNCE_MS)
    }

    const channel =
      mode === "supabase-realtime"
        ? supabase
            .channel("admin:data", { config: { private: true } })
            .on("broadcast", { event: "*" }, scheduleRefresh)
            .subscribe()
        : null

    return () => {
      if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current)
      refreshTimerRef.current = null
      if (channel) void supabase.removeChannel(channel)
    }
  }, [mode, router, supabase])

  return null
}
