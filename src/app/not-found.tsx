import {
  ArrowRight,
  Home,
  MessageCircleMore,
  SearchX,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] flex-1 items-center bg-background py-10 text-brand-cocoa sm:py-14 lg:py-18">
      <div className="Container">
        <section className="mx-auto flex min-h-[35rem] max-w-6xl items-center justify-center rounded-lg bg-brand-mango/80 px-6 py-10 text-center shadow-[0_18px_48px_rgba(58,33,20,0.08)] sm:rounded-[2.5rem]">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
            <p
              aria-hidden="true"
              className="mt-5 font-heading text-[6.5rem] font-black leading-[0.82] tracking-[-0.08em] text-brand-cocoa sm:text-[8.5rem] lg:text-[9.5rem]"
            >
              404
            </p>

            <h4 className="mt-10 text-xl  font-semibold text-center">Page not found</h4>
            
            <h1 className="mt-3 max-w-2xl font-heading text-4xl font-black leading-[1.05] text-brand-cocoa sm:text-5xl lg:text-[3.5rem]">
              Oops! This page took a snack break.
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-brand-cocoa/70 sm:text-lg sm:leading-8">
              The page you are looking for may have moved, expired, or the link
              might be incorrect. Let&apos;s get you back to something
              delicious.
            </p>
            <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href="/"
                variant="mango"
                className="min-h-12 w-full gap-2.5 px-6 text-sm font-black sm:w-auto"
              >
                <Home
                  aria-hidden="true"
                  className="size-4.5"
                  strokeWidth={2.3}
                />
                Back to Home
                <ArrowRight
                  aria-hidden="true"
                  className="size-4.5"
                  strokeWidth={2.3}
                />
              </Button>
              <Button
                href="/products"
                variant="surface"
                className="min-h-12 w-full gap-2.5 px-6 text-sm font-black sm:w-auto"
              >
                <ShoppingBag
                  aria-hidden="true"
                  className="size-4.5"
                  strokeWidth={2.3}
                />
                Shop Products
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
