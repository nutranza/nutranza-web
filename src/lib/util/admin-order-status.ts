export const ADMIN_REVENUE_ORDER_STATUSES = [
    "order_placed",
    "accepted",
    "shipped",
    "delivered",
] as const

export type AdminRevenueOrderStatus = (typeof ADMIN_REVENUE_ORDER_STATUSES)[number]

export function isAdminRevenueOrderStatus(status: string): status is AdminRevenueOrderStatus {
    return (ADMIN_REVENUE_ORDER_STATUSES as readonly string[]).includes(status)
}
