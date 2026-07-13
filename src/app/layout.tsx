import type { Metadata } from "next";
import { SiteChrome } from "@/components/site-chrome";
import { dmSans, youngSerif } from "@/styles/fonts";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutranza Foods",
  description:
    "Premium protein foods, peanut butter, protein oats, muesli, and rice cakes for modern everyday nutrition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${youngSerif.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-background"
      >
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
