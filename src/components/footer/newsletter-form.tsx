"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Newsletter signup is coming soon.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex min-h-10 items-center border-b border-brand-cocoa/25">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your Email"
          className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold text-brand-cocoa outline-none placeholder:text-brand-muted/70"
        />
        <button
          type="submit"
          aria-label="Sign up for newsletter"
          className="grid size-10 shrink-0 place-items-center text-brand-cocoa transition-colors duration-200 hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
        >
          <ArrowRight aria-hidden="true" className="size-5" strokeWidth={2.5} />
        </button>
      </div>
      <p
        aria-live="polite"
        className="min-h-3 text-xs font-semibold text-brand-cocoa/70"
      >
        {message}
      </p>
    </form>
  );
}
