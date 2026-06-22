import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { NewsletterForm } from "./newsletter-form";
import styles from "./footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Best Sellers", href: "/#best-sellers" },
  { label: "Reviews", href: "/#reviews" },
] as const;

const companyLinks = [
  { label: "Shop", href: "/#shop" },
  { label: "My Account", href: "/#account" },
  { label: "Wishlist", href: "/#wishlist" },
  { label: "Cart", href: "/#cart" },
] as const;

const footerLinkClassName =
  "w-fit text-sm font-semibold leading-6 text-brand-surface/85 transition-colors duration-200 hover:text-brand-mango focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mango";

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="whitespace-nowrap font-heading text-2xl font-black leading-tight text-brand-mango">
        {title}
      </h2>
      <ul className="mt-6 grid gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className={footerLinkClassName}>
              {link.label}
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
      <div aria-hidden="true" className={styles.shapeEdge} />

      <div className="Container relative z-10 py-10">
        <div className="grid gap-11 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-9 lg:pb-16 xl:gap-14">
          <div className="grid gap-10 sm:grid-cols-2 md:col-span-2 lg:col-span-1 lg:gap-8 xl:gap-12">
            <FooterLinkGroup title="Quick Links" links={quickLinks} />
            <FooterLinkGroup title="Our Company" links={companyLinks} />
          </div>

          <section aria-labelledby="footer-service-title">
            <h2
              id="footer-service-title"
              className="font-heading text-2xl font-black leading-tight text-brand-mango"
            >
              Customer Service
            </h2>
            <div className="mt-6 grid gap-2.5 text-sm font-semibold leading-6 text-brand-surface/85">
              <address className="not-italic">
                Address: 361, Times Trade Center, Punagam, Surat
                <br />
                Gujarat, India - 395010
              </address>
              <p>
                Call:{" "}
                <Link href="tel:+919876543210" className={styles.inlineLink}>
                  +91 98765 43210
                </Link>
              </p>
              <p className="break-words">
                Email:{" "}
                <Link
                  href="mailto:support@nutranzafoods.com"
                  className={styles.inlineLink}
                >
                  support@nutranzafoods.com
                </Link>
              </p>
            </div>
          </section>

          <section aria-labelledby="footer-newsletter-title">
            <h2
              id="footer-newsletter-title"
              className="font-heading text-2xl font-black leading-tight text-brand-mango"
            >
              Sign Up To Newsletter
            </h2>
            <p className="mt-6 max-w-xl text-sm font-semibold leading-6 text-brand-surface/85">
              Be first to hear about new Nutranza launches, bundle offers, and
              everyday nutrition ideas.
            </p>
            <NewsletterForm />
          </section>
        </div>

        <div className="sm:border-t border-brand-surface/60 pt-5">
          <div className="flex items-center justify-between gap-10 text-left">
            <p className="text-sm font-semibold text-brand-surface/80">
              &copy; 2026 Nutranza Foods. All rights reserved.
            </p>

            <div
              aria-label="Social media"
              className="flex items-center justify-center gap-5 lg:justify-end"
            >
              <Link
                href="/#facebook"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <FaFacebookF aria-hidden="true" className="size-5" />
              </Link>
              <Link
                href="/#instagram"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <FaInstagram aria-hidden="true" className="size-5" />
              </Link>
              <Link
                href="/#x"
                aria-label="X"
                className={styles.socialLink}
              >
                <FaXTwitter aria-hidden="true" className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
