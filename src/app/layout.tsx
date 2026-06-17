import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { rubik, ubuntu } from "@/styles/fonts";
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
      className={`${rubik.variable} ${ubuntu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
