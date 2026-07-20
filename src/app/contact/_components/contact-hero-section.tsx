import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactHeroSection() {
  return (
    <section
      aria-labelledby="contact-hero-title"
      className="bg-background px-2.5 pb-4"
    >
      <div className="grid overflow-hidden rounded-[1.75rem] border border-brand-line bg-brand-surface shadow-[0_18px_50px_rgba(58,33,20,0.07)] lg:min-h-[31rem] lg:grid-cols-[minmax(0,1.4fr)_minmax(25rem,1fr)] xl:min-h-[34rem]">
        <div className="relative aspect-[3/2] overflow-hidden bg-brand-mango lg:aspect-auto">
          <Image
            src="/assets/images/contect.png"
            alt="A Nutranza family enjoying breakfast with high-protein oats and chocolate peanut butter"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[52%_center]"
          />
        </div>

        <div className="flex items-center bg-brand-surface p-6 text-brand-cocoa sm:p-8 lg:p-10 xl:p-14">
          <div className="w-full max-w-[32rem]">
            <p className="text-sm font-bold tracking-wide text-brand-orange sm:text-base">
              Contact Nutranza Foods
            </p>

            <h1
              id="contact-hero-title"
              className="mt-5 font-heading text-[2.55rem] font-black leading-[1.03] tracking-normal text-brand-cocoa-deep sm:text-5xl lg:text-[2.85rem] xl:text-[3.35rem]"
            >
              We&apos;d Love to Hear From You.
            </h1>

            <p className="mt-5 max-w-[29rem] text-base font-semibold leading-7 text-brand-cocoa/75 sm:text-lg sm:leading-8">
              Questions about our products, your order, or anything else?
              Send us a message and our team will be happy to help.
            </p>

            <Button
              href="#contact-form-title"
              variant="mango"
              className="mt-7 w-full gap-2 px-8 py-3 text-base font-extrabold sm:w-fit sm:px-9"
            >
              Send a Message
              <ArrowDown className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
