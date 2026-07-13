"use server"

import { removeCartId } from "@lib/data/cookies"

export async function clearCheckoutCart() {
  await removeCartId()
}
