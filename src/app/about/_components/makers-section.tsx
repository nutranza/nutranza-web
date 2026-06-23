import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

type Maker = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  background: string;
};

const makers = [
  {
    name: "Rohan Mehta",
    role: "Founder & CEO",
    image: "/assets/images/founder.avif",
    imageAlt: "Nutranza team member holding mango peanut butter",
    imagePosition: "48% 45%",
    background: "bg-[#fff1b8]",
  },
  {
    name: "Ananya Kapoor",
    role: "Operations Manager",
    image: "/assets/images/manager.jpg",
    imageAlt: "Nutranza team member holding chocolate almond peanut butter",
    imagePosition: "48% 38%",
    background: "bg-brand-cream",
  },
  {
    name: "Priya Shah",
    role: "Product Lead",
    image: "/assets/images/product-lead.jpg",
    imageAlt: "Nutranza dark chocolate high protein oats product feature",
    imagePosition: "63% 52%",
    background: "bg-brand-mango",
  },
  {
    name: "Vikram Desai",
    role: "Creative Head",
    image: "/assets/images/creative-head.jpg",
    imageAlt: "Nutranza mango high protein oats pouch",
    imagePosition: "50% 35%",
    background: "bg-brand-mango-soft",
  },
] as const satisfies readonly Maker[];

const socialLinks = [
  {
    label: "Instagram",
    href: "/#instagram",
    Icon: FaInstagram,
    delayClassName: "sm:delay-0",
  },
  {
    label: "Facebook",
    href: "/#facebook",
    Icon: FaFacebookF,
    delayClassName: "sm:delay-75",
  },
  {
    label: "LinkedIn",
    href: "/#linkedin",
    Icon: FaLinkedinIn,
    delayClassName: "sm:delay-100",
  },
  {
    label: "X",
    href: "/#x",
    Icon: FaXTwitter,
    delayClassName: "sm:delay-150",
  },
] as const;

export function MakersSection() {
  return (
    <section
      aria-labelledby="makers-title"
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="Container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-extrabold leading-none text-brand-muted sm:text-base">
            Meet the Makers
          </p>
          <h2
            id="makers-title"
            className="mt-5 font-heading text-4xl font-black leading-tight tracking-normal text-brand-cocoa-deep sm:text-5xl"
          >
            The Creative Minds Behind Nutranza
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {makers.map((maker) => (
            <article
              key={maker.name}
              tabIndex={0}
              className="group relative isolate aspect-[0.74] min-h-105 overflow-hidden rounded-lg bg-brand-surface shadow-sm outline-none ring-1 ring-brand-cocoa/5 transition-transform duration-500 ease-out hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-brand-mango"
            >
              <div className={`absolute inset-0 ${maker.background}`} />
              <Image
                src={maker.image}
                alt={maker.imageAlt}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                className="z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus:scale-105"
                style={{ objectPosition: maker.imagePosition }}
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-brand-cocoa-deep/45 via-transparent to-transparent opacity-45 transition-opacity duration-500 group-hover:opacity-70 group-focus:opacity-70" />

              <div className="absolute right-3 top-3 z-30 grid gap-2 sm:invisible sm:translate-x-4 sm:opacity-0 sm:transition-all sm:duration-500 sm:ease-out sm:group-hover:visible sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-focus:visible sm:group-focus:translate-x-0 sm:group-focus:opacity-100 sm:group-focus-within:visible sm:group-focus-within:translate-x-0 sm:group-focus-within:opacity-100">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={`${maker.name} on ${social.label}`}
                    className={`icon-button icon-button-mango size-10 text-base transition-transform duration-500 hover:rotate-y-180 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-mango ${social.delayClassName}`}
                  >
                    <social.Icon aria-hidden="true" className="size-4" />
                  </Link>
                ))}
              </div>

              <div className="absolute inset-x-3 bottom-3 z-30 rounded-lg bg-brand-surface px-5 py-4 shadow-xl transition-all duration-500 ease-out sm:translate-y-8 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus:translate-y-0 sm:group-focus:opacity-100 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100">
                <h3 className="font-heading text-2xl font-black leading-tight text-brand-cocoa-deep sm:text-3xl">
                  {maker.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-brand-cocoa">
                  {maker.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
