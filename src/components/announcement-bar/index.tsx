"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const announcementMessages = [
  "Free Shipping On Orders Above \u20B9499 \u{1F69A}",
  "New Flavor Just Dropped: Try Freshi Kiwi \u{1F95D}",
  "Limited Time Offer - Buy 2, Get 1 Free! \u{1F964}",
  "Summer Special: Cool Down With Every Sip \u{1F34A} \u{1F9CA}",
] as const;

const marqueeItems = Array.from({ length: 4 }, (_, repeatIndex) =>
  announcementMessages.map((message) => ({ message, repeatIndex })),
).flat();

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  function closeAnnouncement() {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    setIsClosing(true);
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
      closeTimeoutRef.current = null;
    }, 600);
  }

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`overflow-hidden transition-[max-height,padding,opacity] duration-[600ms] ease-in-out ${
        isClosing
          ? "max-h-0 px-2.5 py-0 opacity-0"
          : "max-h-[4.375rem] p-2.5 opacity-100"
      }`}
      aria-hidden={isClosing}
    >
      <div
        className="relative flex min-h-12 items-center overflow-hidden rounded-lg bg-brand-mango text-brand-cocoa"
        role="region"
        aria-label="Store announcements"
      >
        <div className="announcement-marquee">
          <div className="announcement-marquee__track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="announcement-marquee__group"
                aria-hidden={groupIndex === 1}
              >
                {marqueeItems.map((item) => (
                  <span
                    key={`${groupIndex}-${item.repeatIndex}-${item.message}`}
                    className="whitespace-nowrap text-sm font-semibold sm:text-base"
                  >
                    {item.message}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          title="Close"
          aria-label="Close announcement"
          onClick={closeAnnouncement}
          disabled={isClosing}
          className="group absolute right-0 top-0 z-10 inline-flex h-full w-12 items-center justify-center rounded-r-lg bg-brand-mango text-brand-cocoa transition focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-brand-lime sm:w-14"
        >
          <X
            aria-hidden="true"
            className="size-5 transition-transform duration-[400ms] ease-in-out group-hover:rotate-180 md:size-6"
            strokeWidth={2.5}
          />
        </button>
      </div>
    </div>
  );
}
