import { cookies } from "next/headers"

export const FIXED_ADMIN_PHONE = "8849498140"
export const FIXED_ADMIN_OTP = "1234"

const FIXED_ADMIN_COOKIE = "nutranza_fixed_admin"
const FIXED_ADMIN_COOKIE_VALUE = "authenticated"

function normalizeNationalPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "")
  return digits.startsWith("91") && digits.length === 12
    ? digits.slice(2)
    : digits
}

function isProductionMockConfigComplete(): boolean {
  return Boolean(
    process.env.MOCK_ADMIN_MOBILE?.trim() &&
      process.env.MOCK_ADMIN_OTP?.trim() &&
      process.env.MOCK_ADMIN_EMAIL?.trim()
  )
}

export function isFixedAdminAuthEnabled(): boolean {
  if (process.env.NODE_ENV !== "production") return true

  return (
    process.env.ENABLE_MOCK_ADMIN_AUTH?.trim().toLowerCase() === "true" &&
    isProductionMockConfigComplete()
  )
}

export function isProductionFixedAdminAuthEnabled(): boolean {
  return process.env.NODE_ENV === "production" && isFixedAdminAuthEnabled()
}

export function getFixedAdminOtp(): string {
  if (process.env.NODE_ENV !== "production") return FIXED_ADMIN_OTP
  return process.env.MOCK_ADMIN_OTP?.trim() || ""
}

export function getFixedAdminEmail(): string | null {
  const email = process.env.MOCK_ADMIN_EMAIL?.trim().toLowerCase()
  return email || null
}

export function isConfiguredProductionFixedAdminProfile(profile: {
  email: string | null
  role: string | null
  admin_role_id: string | null
} | null): boolean {
  const configuredEmail = getFixedAdminEmail()

  return Boolean(
    isProductionFixedAdminAuthEnabled() &&
      configuredEmail &&
      profile?.email?.trim().toLowerCase() === configuredEmail &&
      profile.role === "admin" &&
      profile.admin_role_id
  )
}

export function isFixedAdminPhone(phone: string): boolean {
  const configuredPhone =
    process.env.NODE_ENV === "production"
      ? process.env.MOCK_ADMIN_MOBILE?.trim() || ""
      : FIXED_ADMIN_PHONE

  return (
    isFixedAdminAuthEnabled() &&
    normalizeNationalPhone(phone) === normalizeNationalPhone(configuredPhone)
  )
}

export function isFixedAdminOtp(code: string): boolean {
  return isFixedAdminAuthEnabled() && code === getFixedAdminOtp()
}

export async function createFixedAdminSession(): Promise<void> {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Legacy fixed-admin sessions are disabled in production")
  }

  const cookieStore = await cookies()
  cookieStore.set(FIXED_ADMIN_COOKIE, FIXED_ADMIN_COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 12,
  })
}

export async function hasFixedAdminSession(): Promise<boolean> {
  // Production fixed login always receives a real Supabase JWT. Never trust
  // the legacy predictable development cookie in production.
  if (process.env.NODE_ENV === "production" || !isFixedAdminAuthEnabled()) {
    return false
  }
  const cookieStore = await cookies()
  return cookieStore.get(FIXED_ADMIN_COOKIE)?.value === FIXED_ADMIN_COOKIE_VALUE
}

export async function clearFixedAdminSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(FIXED_ADMIN_COOKIE)
}
