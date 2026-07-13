import type { Metadata } from "next";
import LoginTemplate from "@modules/account/templates/login-template";

export const metadata: Metadata = {
  title: "Admin Login | Nutranza Foods",
  description: "Sign in to manage the Nutranza Foods store.",
};

type Props = {
  searchParams: Promise<{ next?: string; returnUrl?: string }>;
};

export default async function LoginPage({ searchParams }: Props) {
  const params = await searchParams;
  return <LoginTemplate next={params.next} returnUrl={params.returnUrl} />;
}
