import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Category = {
  name: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  mediaClassName: string;
};

const categories = [
  {
    name: "Peanut Butter",
    description: "Creamy spreads made for quick snacks and breakfast bowls.",
    href: "/#best-sellers",
    image: "/assets/images/Peanut-Butter.webp",
    imageAlt: "Peanut butter toast on a white plate",
    mediaClassName: "bg-[#fde6ef]",
  },
  {
    name: "Oats",
    description: "Wholesome, high-protein starts for everyday energy.",
    href: "/#best-sellers",
    image: "/assets/images/Oats.webp",
    imageAlt: "Bowl of oats with almonds and blueberries",
    mediaClassName: "bg-[#e6f1ff]",
  },
  {
    name: "Muesli",
    description: "Fruit, grains, and crunch in one ready-to-mix bowl.",
    href: "/#best-sellers",
    image: "/assets/images/museli-img.webp",
    imageAlt: "Muesli bowl with strawberries and blueberries",
    mediaClassName: "bg-[#e3f8d8]",
  },
  {
    name: "Rice Cakes",
    description: "Light, crisp bites for clean snacking between meals.",
    href: "/#best-sellers",
    image: "/assets/images/rice_cake-img.webp",
    imageAlt: "Rice cakes stacked on a pale blue napkin",
    mediaClassName: "bg-[#ffe7cb]",
  },
] as const satisfies readonly Category[];

export function ShopByCategory() {
  return (
    <section
      id="shop-by-category"
      className="bg-[#fff8ed] py-12 sm:py-14 lg:py-16"
    >
      <div className="Container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-widest text-coral">
              Browse the range
            </p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-cocoa sm:text-5xl lg:text-6xl">
              Shop by Category
            </h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-cocoa/70 sm:text-base">
              Choose your everyday pantry favorite and jump straight into the
              products that match your routine.
            </p>
          </div>

          <Link
            href="/#best-sellers"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-cocoa bg-white px-5 py-3 text-sm font-extrabold uppercase text-cocoa shadow-sm transition hover:border-coral hover:bg-coral hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
          >
            Explore all
            <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={3} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              aria-label={`Shop ${category.name}`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-cocoa/10 bg-white transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
            >
              <span className={`relative flex aspect-square items-center justify-center ${category.mediaClassName}`}>
                <span className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-white text-cocoa shadow-sm transition group-hover:rotate-45 group-hover:bg-cocoa group-hover:text-white">
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={2.6}
                  />
                </span>

                <span className="relative block size-4/5 transition duration-300 group-hover:scale-105">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 330px"
                    className="object-contain drop-shadow-lg"
                  />
                </span>
              </span>

              <span className="flex flex-1 flex-col p-5">
                <span className="font-heading text-2xl font-extrabold leading-tight text-cocoa">
                  {category.name}
                </span>
                <span className="mt-3 text-sm font-semibold leading-6 text-cocoa/70">
                  {category.description}
                </span>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-extrabold uppercase text-coral">
                  Shop now
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={2.5}
                  />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
