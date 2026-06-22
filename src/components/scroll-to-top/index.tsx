"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { IconButton } from "@/components/ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      function updateFallbackVisibility() {
        setIsVisible(window.scrollY > window.innerHeight);
      }

      updateFallbackVisibility();
      window.addEventListener("scroll", updateFallbackVisibility, {
        passive: true,
      });

      return () => {
        window.removeEventListener("scroll", updateFallbackVisibility);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(
          !entry.isIntersecting && entry.boundingClientRect.bottom <= 0,
        );
      },
      { threshold: 0 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <IconButton
      type="button"
      variant="mango"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 z-50 size-10 transition-[opacity,transform,box-shadow] duration-300 sm:bottom-5 sm:right-5 sm:size-11 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ChevronUp aria-hidden="true" className="size-4" strokeWidth={3} />
    </IconButton>
  );
}
