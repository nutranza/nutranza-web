import type { Metadata } from "next";
import { ContactHeroSection } from "./_components/contact-hero-section";

export const metadata: Metadata = {
  title: "Contact Nutranza Foods",
  description:
    "Contact Nutranza Foods for product questions, order support, feedback, and customer service help.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 overflow-hidden bg-white">
      <ContactHeroSection />
    </main>
  );
}
