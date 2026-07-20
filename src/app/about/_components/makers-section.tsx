import Image from "next/image";
import { SectionBadge } from "./section-badge";

type Maker = {
  name: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
};

const makers = [
  {
    name: "Nikunj Kachhadiya",
    title: "Founder",
    description:
      "Shaping Nutranza's vision for trusted nutrition and better everyday choices.",
    image: "/assets/images/founder.jpeg",
    imageAlt: "Nutranza founder holding high-protein oats and peanut butter",
    imagePosition: "50% 44%",
  },
  {
    name: "Pavan Kachhadiya",
    title: "Co-Founder",
    description:
      "Turning the brand vision into quality products and meaningful customer experiences.",
    image: "/assets/images/co-founder.jpeg",
    imageAlt: "Nutranza co-founder holding high-protein oats and peanut butter",
    imagePosition: "50% 43%",
  },
] as const satisfies readonly Maker[];

export function MakersSection() {
  return (
    <section
      aria-labelledby="makers-title"
      className="bg-background py-12 sm:py-16 lg:py-20"
    >
      <div className="Container">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex justify-center">
            <SectionBadge number="03">Meet the makers</SectionBadge>
          </div>
          <h2
            id="makers-title"
            className="mt-5 font-heading text-4xl font-black leading-tight tracking-normal text-brand-cocoa-deep sm:text-5xl"
          >
            The Creative Minds Behind Nutranza
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:mt-12 sm:grid-cols-2 lg:gap-8">
          {makers.map((maker) => (
            <article
              key={maker.title}
              tabIndex={0}
              className="group relative isolate aspect-[0.72] min-h-105 overflow-hidden rounded-2xl bg-brand-surface shadow-sm outline-none ring-1 ring-brand-cocoa/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-brand-mango"
            >
              <Image
                src={maker.image}
                alt={maker.imageAlt}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 92vw"
                className="z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] group-focus:scale-[1.05]"
                style={{ objectPosition: maker.imagePosition }}
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-brand-cocoa-deep/70 via-brand-cocoa-deep/5 to-transparent opacity-70 transition-opacity duration-500 ease-out sm:opacity-35 sm:group-hover:opacity-100 sm:group-focus:opacity-100" />
              <div className="absolute inset-x-4 bottom-4 z-30 rounded-2xl border border-brand-cream/70 bg-brand-surface/95 px-5 py-4 text-left shadow-xl backdrop-blur-sm transition-all duration-500 ease-out">
                <p className="font-heading text-2xl font-black leading-tight text-brand-cocoa-deep sm:text-3xl">
                  {maker.name}
                </p>
                <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-orange sm:text-sm">
                  {maker.title}
                </p>
                <p className="mt-2 max-h-20 overflow-hidden text-sm font-semibold leading-5 text-brand-cocoa/80 opacity-100 transition-all duration-500 ease-out sm:mt-0 sm:max-h-0 sm:text-base sm:leading-6 sm:opacity-0 sm:group-hover:mt-2 sm:group-hover:max-h-20 sm:group-hover:opacity-100 sm:group-focus:mt-2 sm:group-focus:max-h-20 sm:group-focus:opacity-100">
                  {maker.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
