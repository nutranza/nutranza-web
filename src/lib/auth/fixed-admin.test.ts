import { describe, expect, it } from "vitest"
import {
  FIXED_ADMIN_OTP,
  FIXED_ADMIN_PHONE,
  isFixedAdminOtp,
  isFixedAdminPhone,
} from "./fixed-admin"

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
})
