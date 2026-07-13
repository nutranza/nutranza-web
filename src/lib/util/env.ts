export const getBaseURL = () => {
  // 1. Priority: Custom Environment Variable (e.g., set in Vercel Settings or .env.local)
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }

  // 2. Vercel System Variables (fallbacks for preview deployments)
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // 3. Local development. Production must set NEXT_PUBLIC_BASE_URL.
  return "http://localhost:3000"
}
