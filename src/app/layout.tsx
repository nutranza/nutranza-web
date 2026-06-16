import type { Metadata } from "next";
import { Header } from "@/components/header";
import { rubik, ubuntu } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutranza",
  description: "Conscious nut butter crafted with pure ingredients.",
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
      </body>
    </html>
  );
}
