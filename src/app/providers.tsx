"use client"

import { ReactNode } from "react"

import { ToastProvider } from "@modules/common/context/toast-context"
import ToastDisplay from "@modules/common/components/toast-display"
import { WishlistProvider } from "@modules/wishlist/context/wishlist-context"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ToastProvider>
      <ToastDisplay />
      <WishlistProvider>{children}</WishlistProvider>
    </ToastProvider>
  )
}

export default Providers


