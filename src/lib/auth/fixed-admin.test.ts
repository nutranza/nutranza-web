import { afterEach, describe, expect, it, vi } from "vitest"
import {
  FIXED_ADMIN_OTP,
  FIXED_ADMIN_PHONE,
  createFixedAdminSession,
  getFixedAdminEmail,
  isConfiguredProductionFixedAdminProfile,
  isFixedAdminAuthEnabled,
  isFixedAdminOtp,
  isFixedAdminPhone,
  isProductionFixedAdminAuthEnabled,
} from "./fixed-admin"

afterEach(() => {
  vi.unstubAllEnvs()
})

describe("fixed development admin login", () => {
  it("accepts the configured national and +91 phone formats", () => {
    expect(FIXED_ADMIN_PHONE).toBe("8849498140")
    expect(isFixedAdminPhone("8849498140")).toBe(true)
    expect(isFixedAdminPhone("+91 8849498140")).toBe(true)
  })

  it("only accepts OTP 1234", () => {
    expect(FIXED_ADMIN_OTP).toBe("1234")
    expect(isFixedAdminOtp("1234")).toBe(true)
    expect(isFixedAdminOtp("4321")).toBe(false)
  })

  it("enables the configured fixed owner in production only with complete configuration", () => {
    vi.stubEnv("NODE_ENV", "production")
    vi.stubEnv("ENABLE_MOCK_ADMIN_AUTH", "true")
    vi.stubEnv("MOCK_ADMIN_MOBILE", "8849498140")
    vi.stubEnv("MOCK_ADMIN_OTP", "1234")
    vi.stubEnv("MOCK_ADMIN_EMAIL", "owner@nutranza.test")

    expect(isFixedAdminAuthEnabled()).toBe(true)
    expect(isProductionFixedAdminAuthEnabled()).toBe(true)
    expect(isFixedAdminPhone("+91 8849498140")).toBe(true)
    expect(isFixedAdminOtp("1234")).toBe(true)
    expect(getFixedAdminEmail()).toBe("owner@nutranza.test")
    expect(
      isConfiguredProductionFixedAdminProfile({
        email: "OWNER@NUTRANZA.TEST",
        role: "admin",
        admin_role_id: "owner-role",
      })
    ).toBe(true)
  })

  it("rejects a production fixed-login profile that is not the configured Owner", () => {
    vi.stubEnv("NODE_ENV", "production")
    vi.stubEnv("ENABLE_MOCK_ADMIN_AUTH", "true")
    vi.stubEnv("MOCK_ADMIN_MOBILE", "8849498140")
    vi.stubEnv("MOCK_ADMIN_OTP", "1234")
    vi.stubEnv("MOCK_ADMIN_EMAIL", "owner@nutranza.test")

    expect(
      isConfiguredProductionFixedAdminProfile({
        email: "customer@nutranza.test",
        role: "admin",
        admin_role_id: "owner-role",
      })
    ).toBe(false)
    expect(
      isConfiguredProductionFixedAdminProfile({
        email: "owner@nutranza.test",
        role: "customer",
        admin_role_id: null,
      })
    ).toBe(false)
  })

  it("fails closed when production fixed-admin configuration is disabled or incomplete", () => {
    vi.stubEnv("NODE_ENV", "production")
    vi.stubEnv("ENABLE_MOCK_ADMIN_AUTH", "true")
    vi.stubEnv("MOCK_ADMIN_MOBILE", "8849498140")
    vi.stubEnv("MOCK_ADMIN_OTP", "1234")
    vi.stubEnv("MOCK_ADMIN_EMAIL", "")

    expect(isFixedAdminAuthEnabled()).toBe(false)
    expect(isFixedAdminPhone("8849498140")).toBe(false)
    expect(isFixedAdminOtp("1234")).toBe(false)
  })

  it("never creates the predictable legacy cookie in production", async () => {
    vi.stubEnv("NODE_ENV", "production")

    await expect(createFixedAdminSession()).rejects.toThrow(
      "Legacy fixed-admin sessions are disabled in production"
    )
  })
})
