"use client";

import { ChevronDown, Menu, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { headerActions, mainNavigation } from "./nav-data";

const panelId = "mobile-site-navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerMounted, setIsDrawerMounted] = useState(false);
  const [openDropdownHref, setOpenDropdownHref] = useState<string | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const portalRoot =
    isDrawerMounted && typeof document !== "undefined" ? document.body : null;

  function closeMenu() {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    setIsOpen(false);
    setOpenDropdownHref(null);
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsDrawerMounted(false);
      closeTimeoutRef.current = null;
    }, 300);
  }

  function openMenu() {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setIsDrawerMounted(true);
    window.requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }

  function toggleDropdown(href: string) {
    setOpenDropdownHref((currentHref) =>
      currentHref === href ? null : href,
    );
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const drawer = (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[70] bg-cocoa/45 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <aside
        id={panelId}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-y-0 left-0 z-[80] flex w-[min(22rem,88vw)] flex-col border-r border-line bg-cream shadow-[28px_0_80px_rgba(43,19,12,0.22)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cocoa">
            Menu
          </p>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-cocoa shadow-sm transition hover:border-coral/60 hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto p-4"
        >
          <ul className="grid gap-2">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openDropdownHref === item.href}
                      aria-controls={`mobile-submenu-${item.href.replace(/[^a-z0-9]/gi, "")}`}
                      onClick={() => toggleDropdown(item.href)}
                      className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-base font-semibold text-cocoa transition hover:bg-white hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-5 transition-transform duration-200 ${
                          openDropdownHref === item.href ? "rotate-180" : ""
                        }`}
                        strokeWidth={1.8}
                      />
                    </button>
                    <div
                      id={`mobile-submenu-${item.href.replace(/[^a-z0-9]/gi, "")}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                        openDropdownHref === item.href
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="grid gap-1 pl-5 my-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeMenu}
                                className="flex min-h-10 items-center rounded-xl px-3 py-2 text-sm font-semibold text-cocoa/68 transition hover:bg-white hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center rounded-2xl px-3 py-3 text-base font-semibold text-cocoa transition hover:bg-white hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid gap-3 border-t border-line">
          <div className="grid grid-cols-2 gap-3 px-4 py-4">
            <Link
              href={headerActions.account.href}
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-semibold text-cocoa transition hover:border-coral/60 hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              <User aria-hidden="true" className="size-4" strokeWidth={1.8} />
              {headerActions.account.label}
            </Link>
            <Link
              href={headerActions.cart.href}
              onClick={closeMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cocoa px-4 text-sm font-semibold text-cream shadow-sm transition hover:bg-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              <ShoppingCart
                aria-hidden="true"
                className="size-4"
                strokeWidth={1.8}
              />
              {headerActions.cart.label}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={isOpen ? closeMenu : openMenu}
        className="inline-flex size-11 items-center justify-center rounded-full border border-line/80 bg-white/85 text-cocoa shadow-sm transition hover:border-coral/60 hover:text-coral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
        ) : (
          <Menu aria-hidden="true" className="size-5" strokeWidth={1.8} />
        )}
      </button>

      {portalRoot ? createPortal(drawer, portalRoot) : null}
    </div>
  );
}
