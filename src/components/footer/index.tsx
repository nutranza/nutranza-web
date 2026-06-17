import {
  ArrowRight,
  Camera,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  RotateCcw,
  Send,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { categoryNavigation } from "@/components/header/nav-data";

const footerColumns = [
  {
    title: "Shop",
    links: [
      ...categoryNavigation,
      { label: "Best Sellers", href: "/#best-sellers" },
      { label: "Reviews", href: "/#reviews" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/#contact" },
      { label: "Shipping", href: "/#shipping" },
      { label: "Returns", href: "/#returns" },
      { label: "Track Order", href: "/#track-order" },
      { label: "FAQs", href: "/#faqs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Nutranza", href: "/#about" },
      { label: "Ingredients", href: "/#ingredients" },
      { label: "Privacy Policy", href: "/#privacy-policy" },
      { label: "Terms of Service", href: "/#terms-of-service" },
    ],
  },
] as const;

const trustItems = [
  { label: "Fast Delivery", Icon: Truck },
  { label: "Secure Checkout", Icon: ShieldCheck },
  { label: "Easy Returns", Icon: RotateCcw },
  { label: "Clean Label", Icon: Leaf },
] as const;

const socialLinks = [
  { label: "Instagram", href: "/#instagram", Icon: Camera },
  { label: "Facebook", href: "/#facebook", Icon: Send },
  { label: "WhatsApp", href: "/#whatsapp", Icon: MessageCircle },
] as const;

export function Footer() {
  return (
    <footer id="contact" className="bg-cocoa text-cream">
      <div className="Container">
        <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.85fr)] lg:gap-14 lg:py-16">
          <div className="max-w-lg">
            <Link
              href="/"
              aria-label="Nutranza home"
              className="inline-flex rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <Image
                src="/assets/images/Logo.png"
                alt="Nutranza foods"
                width={221}
                height={100}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm font-medium leading-6 text-cream/72 sm:text-base sm:leading-7">
              Everyday nutrition made simple with peanut butter, protein oats,
              rice cakes, and muesli for busy homes, gym bags, and breakfast
              bowls.
            </p>

            <div className="mt-5 grid gap-3 text-sm font-medium text-cream/78">
              <Link
                href="mailto:support@nutranzafoods.com"
                className="inline-flex items-center gap-3 transition hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <Mail aria-hidden="true" className="size-4 shrink-0" />
                support@nutranzafoods.com
              </Link>
              <Link
                href="tel:+919876543210"
                className="inline-flex items-center gap-3 transition hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <Phone aria-hidden="true" className="size-4 shrink-0" />
                +91 98765 43210
              </Link>
              <p className="inline-flex items-center gap-3">
                <MapPin aria-hidden="true" className="size-4 shrink-0" />
                India wide delivery
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-black uppercase tracking-[0.12em] text-gold">
                  {column.title}
                </h2>
                <ul className="mt-4 grid gap-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-cream/72 transition hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-y border-cream/14 py-5">
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold text-cocoa">
                  <item.Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-sm font-semibold text-cream">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,500px)] lg:items-center">
          <div>
            <h2 className="text-2xl font-black leading-tight text-cream sm:text-3xl">
              Get new launches and clean snack offers first.
            </h2>
            <p className="mt-2 text-sm font-medium leading-6 text-cream/68">
              Product drops, bundle deals, and simple nutrition ideas in your
              inbox.
            </p>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full rounded-lg border border-cream/18 bg-white px-4 text-sm font-medium text-cocoa outline-none transition placeholder:text-cocoa/48 focus:border-gold"
            />
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-coral px-5 text-sm font-bold text-cream transition hover:bg-coral/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Subscribe
              <ArrowRight aria-hidden="true" className="size-4" />
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-5 border-t border-cream/14 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-cream/60">
            © 2026 Nutranza Foods. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-cream/60 text-cream/60 transition hover:border-gold hover:text-gold focus-visible:outline-0"
              >
                <link.Icon aria-hidden="true" className="size-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
