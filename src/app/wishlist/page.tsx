import type { Metadata } from "next";
import Link from "next/link";
import { WishlistContent } from "./_components/wishlist-content";

export const metadata: Metadata = {
  title: "Wishlist | Nutranza Foods",
  description: "Review and manage your saved Nutranza products.",
};

export default function WishlistPage() {
  return (
    <main className="flex-1 bg-background px-4 py-10 text-brand-cocoa sm:py-14 lg:py-16">
      <div className="Container">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-sm font-semibold text-brand-cocoa/75"
        >
          <Link href="/" className="transition hover:text-brand-orange">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span>Wishlist</span>
        </nav>

        <div className="flex flex-col gap-5 border-b border-brand-cocoa/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-orange">
              Your Favorites
            </p>
            <h1 className="mt-2 font-heading text-4xl font-black leading-tight text-brand-cocoa-deep sm:text-5xl">
              My Wishlist
            </h1>
            <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-brand-cocoa/75">
              Every Nutranza product you heart is saved here for your next
              visit.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border-2 border-brand-cocoa bg-brand-mango px-6 text-sm font-black text-brand-cocoa shadow-[3px_4px_0_#200d07] transition hover:-translate-y-0.5 hover:shadow-[4px_6px_0_#200d07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa"
          >
            Continue Shopping
          </Link>
        </div>

        <WishlistContent />
      </div>
    </main>
  );
}
