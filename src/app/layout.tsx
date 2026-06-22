import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollToTop } from "@/components/scroll-to-top";
import { dmSans, youngSerif } from "@/styles/fonts";
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
      <body className="flex min-h-full flex-col bg-white">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
