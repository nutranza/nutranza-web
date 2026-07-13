import { cookies } from "next/headers"

export const FIXED_ADMIN_PHONE = "8849498140"
export const FIXED_ADMIN_OTP = "1234"

const FIXED_ADMIN_COOKIE = "nutranza_fixed_admin"
const FIXED_ADMIN_COOKIE_VALUE = "authenticated"

export function isFixedAdminAuthEnabled(): boolean {
  // A fixed OTP is intentionally limited to local development. Production
  // must use the real WhatsApp/Supabase authentication flow.
  return process.env.NODE_ENV !== "production"
}

export function isFixedAdminPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "")
  const nationalNumber = digits.startsWith("91") && digits.length === 12
    ? digits.slice(2)
    : digits

  return isFixedAdminAuthEnabled() && nationalNumber === FIXED_ADMIN_PHONE
}

export function isFixedAdminOtp(code: string): boolean {
  return isFixedAdminAuthEnabled() && code === FIXED_ADMIN_OTP
}

export async function createFixedAdminSession(): Promise<void> {
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
  if (!isFixedAdminAuthEnabled()) return false
  const cookieStore = await cookies()
  return cookieStore.get(FIXED_ADMIN_COOKIE)?.value === FIXED_ADMIN_COOKIE_VALUE
}

export async function clearFixedAdminSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(FIXED_ADMIN_COOKIE)
}
