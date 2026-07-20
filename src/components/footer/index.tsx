import {
  Heart,
  House,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ScrollText,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Star,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { NewsletterForm } from "./newsletter-form";
import styles from "./footer.module.css";

type FooterLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const quickLinks: readonly FooterLink[] = [
  { label: "Home", href: "/", icon: House },
  { label: "About Us", href: "/about", icon: UserRound },
  { label: "Best Sellers", href: "/#best-sellers", icon: Star },
  { label: "Reviews", href: "/#reviews", icon: MessageCircle },
];

const companyLinks: readonly FooterLink[] = [
  { label: "Shop", href: "/products", icon: ShoppingBag },
  { label: "My Account", href: "/login", icon: UserRound },
  { label: "Wishlist", href: "/wishlist", icon: Heart },
  { label: "Cart", href: "/cart", icon: ShoppingCart },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
    icon: ScrollText,
  },
  { label: "Privacy Policy", href: "/privacy-policy", icon: ShieldCheck },
];

const footerLinkClassName =
  "group inline-flex min-h-9 w-fit items-center gap-3 text-base font-medium leading-6 text-brand-cocoa/82 transition-colors duration-200 hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa";

function FooterHeading({ id, children }: { id?: string; children: string }) {
  return (
    <h2
      id={id}
      className="font-heading text-[1.7rem] font-black leading-tight text-brand-cocoa sm:text-[1.9rem]"
    >
      {children}
    </h2>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: readonly FooterLink[];
}) {
  return (
    <nav aria-label={title}>
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-7 grid gap-3.5">
        {links.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <Link href={href} className={footerLinkClassName}>
              <Icon
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.8}
              />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="Container relative z-10 py-14 sm:py-16 lg:pb-10 lg:pt-22">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-[0.8fr_0.85fr_1.2fr_1.35fr] lg:gap-x-8 xl:gap-x-14">
          <FooterLinkGroup title="Quick Links" links={quickLinks} />
          <FooterLinkGroup title="Our Company" links={companyLinks} />

          <section aria-labelledby="footer-service-title">
            <FooterHeading id="footer-service-title">
              Customer Service
            </FooterHeading>
            <address className="mt-7 grid gap-5 not-italic text-base font-medium leading-7 text-brand-cocoa/82">
              <div className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-brand-cocoa"
                  strokeWidth={1.8}
                />
                <p>
                  Address: 361, Times Trade Center,
                  <br className="hidden xl:block" /> Punagam, Surat Gujarat,
                  India - 395010
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  aria-hidden="true"
                  className="size-5 shrink-0 text-brand-cocoa"
                  strokeWidth={1.8}
                />
                <p>
                  Call:{" "}
                  <Link href="tel:+918487036026" className={styles.inlineLink}>
                    +91 8487036026
                  </Link>
                </p>
              </div>

              <div className="flex min-w-0 items-start gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-brand-cocoa"
                  strokeWidth={1.8}
                />
                <p className="min-w-0 break-words">
                  Email:{" "}
                  <Link
                    href="mailto:support@nutranzafoods.com"
                    className={styles.inlineLink}
                  >
                    support@nutranzafoods.com
                  </Link>
                </p>
              </div>
            </address>
          </section>

          <section aria-labelledby="footer-newsletter-title">
            <FooterHeading id="footer-newsletter-title">
              Sign Up To Newsletter
            </FooterHeading>
            <p className="mt-7 max-w-xl text-base font-medium leading-7 text-brand-cocoa/82">
              Be first to hear about new Nutranza launches, bundle offers, and
              everyday nutrition ideas.
            </p>
            <NewsletterForm />
          </section>
        </div>

        <div className="mt-14 border-t border-brand-cocoa/12 pt-7 sm:mt-16 lg:mt-18">
          <div className="flex flex-col items-center gap-7 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:justify-self-start">
              <Link
                href="/"
                aria-label="Nutranza home"
                className="rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa"
              >
                <Image
                  src="/assets/images/Logo.png"
                  alt="Nutranza Foods"
                  width={221}
                  height={100}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <span
                aria-hidden="true"
                className="hidden h-7 w-px bg-brand-cocoa/30 sm:block"
              />
              <p className="text-center text-sm font-medium text-brand-cocoa/75 sm:text-left sm:text-base">
                &copy; 2026 Nutranza Foods. All rights reserved.
              </p>
            </div>

            <p className="text-center text-sm font-medium text-brand-cocoa/70 sm:text-base lg:justify-self-center">
              Designed &amp; Developed by{" "}
              <Link
                href="https://apexture.in/"
                target="_blank"
                rel="noreferrer"
                className="rounded-sm font-extrabold text-brand-orange transition-colors hover:text-brand-cocoa focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa"
              >
                Apexture
              </Link>
            </p>

            <div
              aria-label="Social media"
              className="flex items-center justify-center gap-6 lg:justify-self-end"
            >
              <Link
                href="/#facebook"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <FaFacebookF aria-hidden="true" className="size-6.5" />
              </Link>
              <Link
                href="/#instagram"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <FaInstagram aria-hidden="true" className="size-6.5" />
              </Link>
              <Link
                href="/#youtube"
                aria-label="YouTube"
                className={styles.socialLink}
              >
                <FaYoutube aria-hidden="true" className="size-6.5" />
              </Link>
              <Link href="/#x" aria-label="X" className={styles.socialLink}>
                <FaXTwitter aria-hidden="true" className="size-6.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
