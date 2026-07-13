"use client"

import { ReactNode } from "react"

import { ToastProvider } from "@modules/common/context/toast-context"
import ToastDisplay from "@modules/common/components/toast-display"
import { WishlistProvider } from "@modules/wishlist/context/wishlist-context"
import { LayoutDataProvider } from "@modules/layout/context/layout-data-context"
import { CartStoreProvider } from "@modules/cart/context/cart-store-context"
import { ShippingPriceProvider } from "@modules/common/context/shipping-price-context"
import { CartSidebarProvider } from "@modules/layout/context/cart-sidebar-context"
import CartSidebar from "@modules/layout/components/cart-sidebar"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ToastProvider>
      <ToastDisplay />
      <LayoutDataProvider>
        <CartStoreProvider>
          <ShippingPriceProvider>
            <CartSidebarProvider>
              <WishlistProvider>
                {children}
                <CartSidebar />
              </WishlistProvider>
            </CartSidebarProvider>
          </ShippingPriceProvider>
        </CartStoreProvider>
      </LayoutDataProvider>
    </ToastProvider>
  )
}

export default Providers

