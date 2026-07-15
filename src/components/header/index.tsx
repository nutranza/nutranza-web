import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, User } from "lucide-react";
import { AnnouncementBar } from "@/components/announcement-bar";
import { MobileMenu } from "./mobile-menu";
import { WishlistHeaderAction } from "./wishlist-header-action";
import { CartHeaderAction } from "./cart-header-action";
import {
  headerActions,
  mainNavigation,
  shopDropdownGroups,
  type HeaderNavItem,
} from "./nav-data";

function ShopMegaDropdown() {
  return (
    <div className="invisible absolute left-1/2 top-full z-20 w-2xl -translate-x-1/2 translate-y-3 rounded-xl bg-background p-7 opacity-0 shadow transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="grid max-w-3xl grid-cols-2 gap-16">
        {shopDropdownGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-xl leading-tight text-brand-cocoa">
              {group.title}
            </h2>
            <ul className="mt-4 grid gap-3">
              {group.products.map((product) => (
                <li key={product.label}>
                  <Link
                    href={product.href}
                    className="text-base font-medium text-brand-cocoa/80 transition hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeaderNavItems({
  items,
}: {
  items: readonly HeaderNavItem[];
}) {
  return (
    <>
      {items.map((item) => (
        <li key={`${item.href}-${item.label}`} className="group">
          <Link
            href={item.href}
            aria-haspopup={item.children ? "true" : undefined}
            className="relative inline-flex items-center gap-1.5 py-5 text-base transition after:absolute after:bottom-4 after:left-0 after:h-0.5 after:w-0 after:bg-brand-cocoa after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa group-hover:after:w-full"
          >
            {item.label}
            {item.children ? (
              <ChevronDown
                aria-hidden="true"
                size={18}
                className="transition-all duration-500 ease-out group-hover:rotate-180 group-focus-within:rotate-180"
                strokeWidth={2}
              />
            ) : null}
          </Link> 

          {item.children ? <ShopMegaDropdown /> : null}
        </li>
      ))}
    </>
  );
}

export function Header() {
  return (
    <header>
      <AnnouncementBar />
      <div className="px-2.5 pb-4">
        <div className="relative rounded-lg border border-brand-cocoa/10 bg-background text-brand-cocoa md:min-h-[5rem]">
          <div className="grid min-h-[4.375rem] grid-cols-[1fr_auto_1fr] items-center px-3 md:min-h-[5.0625rem] md:px-[8vw] xl:px-[7vw]">
            <div className="flex items-center justify-start gap-1">
              <MobileMenu />
              <Link
                href="/#search"
                aria-label="Search"
                className="group inline-flex size-10 items-center justify-center transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa md:size-11"
              >
                <Search
                  aria-hidden="true"
                  className="size-5 md:size-6 transition-transform duration-500 group-hover:rotate-y-180"
                  strokeWidth={2}
                />
              </Link>
            </div>

            <Link
              href="/"
              aria-label="Nutranza home"
              className="flex shrink-0 items-center rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa"
            >
              <Image
                src="/assets/images/Logo.png"
                alt="Nutranza foods"
                width={221}
                height={100}
                priority
                className="h-[3.75rem] w-auto object-contain md:h-14 lg:h-16"
              />
            </Link>

            <div className="hidden items-center justify-end gap-2 md:flex">
              {/* <Link
                href={headerActions.account.href}
                aria-label={headerActions.account.label}
                className="group inline-flex size-11 items-center justify-center transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
              >
                <User aria-hidden="true" className="size-6 transition-transform duration-500 group-hover:rotate-y-180" strokeWidth={2} />
              </Link> */}
              <WishlistHeaderAction />
              <CartHeaderAction />
            </div>

            <div className="flex items-center justify-end gap-1 md:hidden">
              {/* <Link
                href={headerActions.account.href}
                aria-label={headerActions.account.label}
                className="group inline-flex size-10 items-center justify-center transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
              >
                <User aria-hidden="true" className="size-5 transition-transform duration-500 group-hover:rotate-y-180" strokeWidth={2} />
              </Link> */}
              <WishlistHeaderAction mobile />
              <CartHeaderAction mobile />
            </div>
          </div>

          <div className="hidden border-t border-brand-cocoa/15 md:block">
            <nav aria-label="Main navigation">
              <ul className="flex min-h-16 items-center justify-center gap-7 lg:gap-10 xl:gap-12">
                <HeaderNavItems items={mainNavigation} />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
