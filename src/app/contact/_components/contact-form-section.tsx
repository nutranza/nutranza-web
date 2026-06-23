"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactCards = [
  {
    title: "support@nutranzafoods.com",
    subtitle: "Have a question in mind? Send a message.",
    href: "mailto:support@nutranzafoods.com",
    Icon: Mail,
  },
  {
    title: "+91 98765 43210",
    subtitle: "Have a project in mind? Call us.",
    href: "tel:+919876543210",
    Icon: Phone,
  },
  {
    title: "361, Times Trade Center, Punagam, Surat",
    subtitle: "Gujarat, India - 395010",
    href: "https://maps.google.com/?q=361%2C%20Times%20Trade%20Center%2C%20Punagam%2C%20Surat%2C%20Gujarat%2C%20India%20-%20395010",
    Icon: MapPin,
  },
] as const;

const fieldClassName =
  "h-12 w-full rounded-lg border-2 border-brand-cocoa px-4 font-semibold text-brand-cocoa outline-none transition-colors duration-200";

export function ContactFormSection() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Thanks for reaching out. Our team will get back to you soon.");
  }

  return (
    <section
      aria-labelledby="contact-form-title"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="Container">
          <div className="max-w-xl">
            <h2
              id="contact-form-title"
              className="font-heading text-4xl font-black leading-tight tracking-normal text-brand-cocoa-deep sm:text-5xl"
            >
              Need to Talk? Contact Us Today
            </h2>
            <p className="mt-4 max-w-xl font-semibold leading-6 text-brand-cocoa/80 sm:text-base sm:leading-7">
              Have questions or need assistance? Our team is here to help.
              Reach out to us anytime, and we&apos;ll provide the support and
              information you need.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group flex min-h-24 items-center gap-4 rounded-lg bg-brand-cocoa-deep p-5 text-brand-surface transition-transform duration-300 ease-in"
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http") ? "noreferrer" : undefined
                }
              >
                <card.Icon
                  aria-hidden="true"
                  className="size-6 shrink-0 text-brand-mango transition-transform duration-500 ease-out group-hover:rotate-y-180"
                  strokeWidth={2}
                />
                <span>
                  <span className="block text-base font-extrabold leading-tight text-brand-mango">
                    {card.title}
                  </span>
                  <span className="mt-1 block font-bold leading-5 text-brand-surface/82">
                    {card.subtitle}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-semibold text-brand-cocoa"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-semibold text-brand-cocoa"
                >
                  Email*
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className={fieldClassName}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-phone"
                className="mb-1.5 block font-semibold text-brand-cocoa"
              >
                Phone
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone"
                className={fieldClassName}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-comment"
                className="mb-1.5 block font-semibold text-brand-cocoa"
              >
                Comment
              </label>
              <textarea
                id="contact-comment"
                name="comment"
                rows={7}
                placeholder="Comment"
                className="min-h-44 w-full resize-y rounded-lg border-2 border-brand-cocoa px-4 py-3 font-semibold text-brand-cocoa outline-none transition-colors duration-200 placeholder:text-brand-muted/70"
              />
            </div>

            <Button
              type="submit"
              variant="mango"
              className="mt-6 w-full px-8 py-3 font-extrabold transition-[box-shadow] duration-300"
            >
              Submit
            </Button>
            <p
              aria-live="polite"
              className="mt-3 min-h-5 font-semibold text-brand-cocoa"
            >
              {message}
            </p>
          </form>
        </div>
    </section>
  );
}
