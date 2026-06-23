import Image from "next/image";

export function ContactHeroSection() {
  return (
    <section aria-labelledby="contact-hero-title" className="bg-white px-3 py-2">
      <div className="grid gap-2 md:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-80 overflow-hidden rounded-2xl bg-brand-mango lg:min-h-120">
          <Image
            src="/assets/images/event-banner.png"
            alt="Nutranza mango protein oats product banner"
            fill
            priority
            sizes="(min-width: 1440px) 704px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-[72%_50%]"
          />
        </div>

        <div className="flex min-h-100 items-center rounded-2xl bg-brand-cocoa/90 p-6 text-brand-surface sm:min-h-105 sm:p-8 lg:min-h-108 lg:p-12 xl:p-14">
          <div className="w-full max-w-2xl">
            <h1
              id="contact-hero-title"
              className="font-heading text-4xl font-black leading-tight tracking-normal sm:text-5xl xl:text-6xl"
            >
              Contact Us
            </h1>
            <p className="mt-4 text-base font-semibold leading-7 sm:text-lg sm:leading-8">
              Have questions, feedback, or just want to say hello? We&apos;re
              always happy to hear from you. Reach out to us anytime. Our team 
              is here to help with orders, support, or anything else you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
