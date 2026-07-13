import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { retrieveOrderForConfirmation } from "@lib/data/orders";
import { OrderConfirmation } from "./order-confirmation";

export const metadata: Metadata = {
  title: "Order Confirmed | Nutranza Foods",
};

export default async function OrderConfirmedPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await retrieveOrderForConfirmation(id);
  if (!order) notFound();

  return <OrderConfirmation order={order} />;
}
