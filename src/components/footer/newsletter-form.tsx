"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import styles from "./footer.module.css";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Newsletter signup is coming soon.");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex min-h-15 items-center rounded-full border border-brand-cocoa/16 bg-white p-1.5 shadow-[0_8px_24px_rgba(58,33,20,0.06)] transition-[border-color,box-shadow] duration-200 focus-within:border-brand-mango focus-within:shadow-[0_10px_28px_rgba(58,33,20,0.1)]">
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
          className={`${styles.emailInput} h-12 min-w-0 flex-1 bg-transparent px-4 text-base font-medium text-brand-cocoa outline-none placeholder:text-brand-muted/65 sm:px-5`}
        />
        <button
          type="submit"
          aria-label="Sign up for newsletter"
          className="grid size-12 shrink-0 place-items-center rounded-full border border-brand-mango bg-brand-mango text-brand-cocoa shadow-[0_3px_0_#a76800] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_0_#a76800] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-cocoa active:translate-y-0"
        >
          <ArrowRight aria-hidden="true" className="size-5" strokeWidth={2.5} />
        </button>
      </div>
      <p
        aria-live="polite"
        className="mt-2 min-h-4 px-4 text-xs font-semibold text-brand-cocoa/70"
      >
        {message}
      </p>
    </form>
  );
}
