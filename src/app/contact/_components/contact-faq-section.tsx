"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes Nutranza products different?",
    answer:
      "Nutranza products are made for real daily routines: protein-forward, easy to enjoy, and built around familiar flavors like peanut butter, oats, muesli, and rice cakes without making nutrition feel complicated.",
  },
  {
    question: "Are your products made with quality ingredients?",
    answer:
      "Yes. Every product is developed with everyday usability, taste, texture, and quality in mind so you can choose better food without giving up flavor.",
  },
  {
    question: "How should I store Nutranza products?",
    answer:
      "Store products in a cool, dry place away from direct sunlight. After opening, keep the pack or jar tightly closed and follow the storage guidance printed on the product label.",
  },
  {
    question: "Do you offer high-protein options?",
    answer:
      "Yes. Nutranza includes protein-rich choices such as peanut butter and high-protein oats designed for breakfast, workouts, busy routines, and everyday snacking.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on your location and courier availability. Once your order is processed, our team will share the available shipping updates for your order.",
  },
  {
    question: "What if my order arrives damaged?",
    answer:
      "If your order arrives damaged, contact us with your order details and clear product photos. Our support team will review it and help with the next steps.",
  },
] as const;

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      aria-labelledby="contact-faq-title"
      className="bg-white pb-18"
    >
      <div className="Container">
        <div className="max-w-4xl space-y-5">
          <p className="text-base font-extrabold leading-none text-brand-cocoa sm:text-base">
            Need Help?
          </p>
          <h2
            id="contact-faq-title"
            className="font-heading text-4xl font-black leading-tight tracking-normal text-brand-cocoa-deep sm:text-5xl"
          >
            Frequently Asked Questions
          </h2>

          <div className="grid gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `contact-faq-answer-${index}`;

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-lg border-2 border-brand-cocoa bg-brand-mango-soft text-brand-cocoa shadow-[0_5px_0_var(--brand-cocoa-deep)]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-lg leading-tight sm:px-4 sm:text-xl"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 shrink-0 text-brand-cocoa transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={2.3}
                    />
                  </button>

                  <div className="border-t-2 border-brand-cocoa" />

                  <div
                    id={answerId}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-4 pb-5 pt-3 text-base font-semibold leading-7 sm:pb-6 sm:text-lg sm:leading-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
