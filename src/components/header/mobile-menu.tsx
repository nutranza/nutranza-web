"use client";

import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Minus,
  Plus,
  X,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { mainNavigation, type HeaderNavItem } from "./nav-data";

const panelId = "mobile-site-navigation";

function itemId(item: HeaderNavItem) {
  return `${item.label}-${item.href}`;
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerMounted, setIsDrawerMounted] = useState(false);
  const [activePanel, setActivePanel] = useState<HeaderNavItem | null>(null);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const portalRoot =
    isDrawerMounted && typeof document !== "undefined" ? document.body : null;

  const resetMenuState = useCallback(() => {
    setActivePanel(null);
    setExpandedItemId(null);
  }, []);

  const closeMenu = useCallback(() => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    setIsOpen(false);
    resetMenuState();
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsDrawerMounted(false);
      closeTimeoutRef.current = null;
    }, 300);
  }, [resetMenuState]);

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

  function openPanel(item: HeaderNavItem) {
    setActivePanel(item);
    setExpandedItemId(null);
  }

  function goBack() {
    setActivePanel(null);
    setExpandedItemId(null);
  }

  function toggleNested(item: HeaderNavItem) {
    const id = itemId(item);
    setExpandedItemId((currentId) => (currentId === id ? null : id));
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
  }, [closeMenu, isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const drawerItems = activePanel?.children ?? mainNavigation;

  const drawer = (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-70 bg-brand-cocoa/45 transition-opacity duration-300 ${
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
        className={`fixed inset-y-0 left-0 z-80 flex w-[calc(100vw-1.25rem)] max-w-[23.125rem] flex-col bg-brand-surface text-brand-cocoa shadow-[28px_0_80px_rgba(58,33,20,0.22)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex min-h-14 items-center justify-between px-4">
          {activePanel ? (
            <div className="w-full">
              <button
                type="button"
                aria-label="Back to main menu"
                onClick={goBack}
                className="flex items-center gap-3 text-brand-cocoa transition hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
              >
                <ChevronLeft
                  aria-hidden="true"
                  className="size-5"
                  strokeWidth={2}
                />
                <p className="font-heading text-xl font-bold">
                  {activePanel.label}
                </p>
              </button>
            </div>
          ) : (
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="inline-flex size-8 items-center justify-center text-brand-cocoa transition hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
            >
              <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </button>
          )}

          {activePanel ? (
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="inline-flex size-8 items-center justify-center text-brand-cocoa transition hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
            >
              <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </button>
          ) : null}
        </div>

        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto">
          <ul className="px-5">
            {drawerItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isExpanded = expandedItemId === itemId(item);

              return (
                <li key={`${item.href}-${item.label}`} className="border-b border-brand-line">
                  {hasChildren ? (
                    activePanel ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() => toggleNested(item)}
                          className="flex min-h-12 w-full items-center justify-between gap-4 py-2 text-left font-heading text-lg font-bold text-brand-cocoa transition hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
                        >
                          <span>{item.label}</span>
                          {isExpanded ? (
                            <Minus
                              aria-hidden="true"
                              className="size-4"
                              strokeWidth={2}
                            />
                          ) : (
                            <Plus
                              aria-hidden="true"
                              className="size-4"
                              strokeWidth={2}
                            />
                          )}
                        </button>
                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                            isExpanded
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <ul className="pb-2">
                              {item.children?.map((child) => (
                                <li key={`${child.href}-${child.label}`}>
                                  <Link
                                    href={child.href}
                                    onClick={closeMenu}
                                    className="flex min-h-9 items-center font-sans text-base font-semibold text-brand-cocoa/85 transition hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
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
                      <button
                        type="button"
                        onClick={() => openPanel(item)}
                        className="flex min-h-12 w-full items-center justify-between gap-4 py-2 text-left font-heading text-lg font-bold text-brand-cocoa transition hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
                      >
                        <span>{item.label}</span>
                        <ChevronRight
                          aria-hidden="true"
                          className="size-4"
                          strokeWidth={2}
                        />
                      </button>
                    )
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex min-h-12 items-center py-2 font-heading text-lg font-bold text-brand-cocoa transition hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={isOpen ? closeMenu : openMenu}
        className="group inline-flex size-10 items-center justify-center text-brand-surface transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-surface"
      >
        <Menu aria-hidden="true" className="size-5 transition-transform duration-500 group-hover:rotate-y-180" strokeWidth={2} />
      </button>

      {portalRoot ? createPortal(drawer, portalRoot) : null}
    </div>
  );
}
