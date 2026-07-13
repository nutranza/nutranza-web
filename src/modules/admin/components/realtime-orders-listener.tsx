"use client"

import { useEffect, useMemo, useRef } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@lib/supabase/client"

export default function RealtimeOrdersListener({
  fixedAdminSession = false,
}: {
  fixedAdminSession?: boolean
}) {
  const router = useRouter()
  const supabase = useMemo(() => createClient(), [])
  const refreshTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const scheduleRefresh = () => {
      if (refreshTimerRef.current) {
        clearTimeout(refreshTimerRef.current)
      }

      refreshTimerRef.current = setTimeout(() => {
        router.refresh()
        refreshTimerRef.current = null
      }, 500)
    }

    if (fixedAdminSession) {
      const interval = window.setInterval(scheduleRefresh, 5000)
      return () => {
        window.clearInterval(interval)
        if (refreshTimerRef.current) {
          clearTimeout(refreshTimerRef.current)
          refreshTimerRef.current = null
        }
      }
    }

    const channel = supabase
      .channel("admin-orders-list")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "orders",
        },
        scheduleRefresh
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "orders",
        },
        scheduleRefresh
      )
      .subscribe()

    return () => {
      if (refreshTimerRef.current) {
        clearTimeout(refreshTimerRef.current)
        refreshTimerRef.current = null
      }
      supabase.removeChannel(channel)
    }
  }, [fixedAdminSession, router, supabase])

  return null
}

