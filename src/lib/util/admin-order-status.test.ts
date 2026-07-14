import { describe, expect, it } from "vitest"
import {
    ADMIN_REVENUE_ORDER_STATUSES,
    isAdminRevenueOrderStatus,
} from "./admin-order-status"

describe("admin revenue order statuses", () => {
    it("counts a newly placed COD order immediately", () => {
        expect(isAdminRevenueOrderStatus("order_placed")).toBe(true)
        expect(ADMIN_REVENUE_ORDER_STATUSES).toContain("order_placed")
    })

    it("does not count incomplete or cancelled orders as revenue", () => {
        expect(isAdminRevenueOrderStatus("pending")).toBe(false)
        expect(isAdminRevenueOrderStatus("cancelled")).toBe(false)
        expect(isAdminRevenueOrderStatus("failed")).toBe(false)
    })
})
