import type { LucideIcon } from "lucide-react";
import { CreditCard, Headset, ShieldCheck, Truck } from "lucide-react";

type Benefit = {
  title: readonly [string, string];
  Icon: LucideIcon;
};

const benefits = [
  {
    title: ["Free Shipping for", "orders over $199"],
    Icon: Truck,
  },
  {
    title: ["24 Hours a Day, 7 Days", "a Week"],
    Icon: Headset,
  },
  {
    title: ["Pay with Multiple", "Credit & Debit Cards"],
    Icon: CreditCard,
  },
  {
    title: ["Secure Checkout", "Protected Payments"],
    Icon: ShieldCheck,
  },
] as const satisfies readonly Benefit[];

export function BenefitsTicker() {
  return (
    <section aria-label="Nutranza store benefits" className="bg-white py-10 sm:py-12 lg:py-14">
      <div className="Container">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-8 xl:gap-12">
          {benefits.map((benefit) => (
            <article
              key={benefit.title.join(" ")}
              className="group flex flex-col items-center text-center text-cocoa"
            >
              <benefit.Icon
                aria-hidden="true"
                className="size-12 shrink-0 text-cocoa transition-transform duration-500 ease-out group-hover:rotate-y-180"
                strokeWidth={1.45}
              />
              <h2 className="mt-5 font-heading text-[1.45rem] font-medium text-cocoa">
                {benefit.title[0]}
                <br />
                {benefit.title[1]}
              </h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
