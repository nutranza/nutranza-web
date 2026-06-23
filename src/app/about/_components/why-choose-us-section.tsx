import type { LucideIcon } from "lucide-react";
import { Leaf, Recycle, ShieldCheck, Truck } from "lucide-react";

type WhyChooseUsItem = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const whyChooseUs = [
  {
    title: "Sustainable Sourcing",
    description:
      "We choose pantry-friendly ingredients with care, so better nutrition does not feel wasteful.",
    Icon: Recycle,
  },
  {
    title: "Quality Included",
    description:
      "Every recipe is checked for taste, texture, freshness, and everyday usability before it reaches you.",
    Icon: ShieldCheck,
  },
  {
    title: "Delivery & Shipping",
    description:
      "Your snacks are packed for reliable India-wide delivery and simple doorstep convenience.",
    Icon: Truck,
  },
  {
    title: "Clean Ingredients",
    description:
      "Made with familiar nuts, grains, seeds, and fruit-forward flavors instead of confusing shortcuts.",
    Icon: Leaf,
  },
] as const satisfies readonly WhyChooseUsItem[];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="Container">
        <h2 className="text-center text-4xl font-black leading-tight text-cocoa sm:text-5xl">
          Why Choose Us?
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="group max-w-72">
              <item.Icon
                aria-hidden="true"
                className="size-10 text-cocoa transition-transform duration-500 ease-out group-hover:rotate-y-180"
                strokeWidth={2}
              />
              <h3 className="mt-5 text-xl font-black leading-tight text-cocoa">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-cocoa/66">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
