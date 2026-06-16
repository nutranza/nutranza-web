import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ShoppingCart, User } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { headerActions, mainNavigation } from "./nav-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-xl">
      <div className="Container">
        <div className="relative flex items-center justify-between gap-4 lg:py-0 py-4">
          <Link
            href="/"
            aria-label="Nutranza home"
            className="flex shrink-0 items-center rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
          >
            <Image
              src="/assets/images/Logo.png"
              alt="Nutranza foods"
              width={221}
              height={100}
              priority
              className="h-12 w-auto object-contain lg:h-14"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden justify-self-center lg:block"
          >
            <ul className="flex items-center justify-center gap-8 xl:gap-10">
              {mainNavigation.map((item) => (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-haspopup={item.children ? "true" : undefined}
                    className="inline-flex items-center gap-1.5 py-8 text-cocoa transition hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
                  >
                    {item.label}
                    {item.children ? (
                      <ChevronDown
                        aria-hidden="true"
                        className="size-4 transition group-hover:rotate-180 group-focus-within:rotate-180"
                        strokeWidth={1.8}
                      />
                    ) : null}
                  </Link>

                  {item.children ? (
                    <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-2 rounded-2xl border border-line bg-cream p-4 opacity-0 shadow-[0_22px_60px_rgba(43,19,12,0.16)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <ul className="grid gap-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="flex items-center rounded-xl text-cocoa transition hover:bg-white hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden justify-end gap-3 lg:flex">
            <Link
              href={headerActions.account.href}
              aria-label={headerActions.account.label}
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-line/80 bg-white/82 text-cocoa shadow-sm transition hover:border-coral/60 hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              <User aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </Link>

            <Link
              href={headerActions.cart.href}
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-cocoa px-5 text-sm font-semibold text-cream shadow-[0_14px_32px_rgba(43,19,12,0.18)] transition hover:bg-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              <ShoppingCart
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.8}
              />
              {headerActions.cart.label}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href={headerActions.cart.href}
              aria-label={headerActions.cart.label}
              className="inline-flex size-11 items-center justify-center rounded-full bg-cocoa text-cream shadow-sm transition hover:bg-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              <ShoppingCart
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.8}
              />
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
