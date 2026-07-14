"use client"

import { useEffect } from "react"

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Admin data load failed:", error)
  }, [error])

  return (
    <div className="flex min-h-[420px] items-center justify-center">
      <div className="w-full max-w-md rounded-xl border border-red-200 bg-white p-6 text-center shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Unable to load current admin data
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          The dashboard did not replace the failed request with empty values.
          Check the connection and try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
