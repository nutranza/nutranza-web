import styles from "./newsletter-cta.module.css";

export function NewsletterCta() {
  return (
    <section id="newsletter" className="bg-white py-12 lg:py-14">
      <div
        className={`${styles.banner} relative overflow-hidden px-4 py-16 text-cream sm:px-6 lg:px-8`}
      >
        <div className="relative z-10 mx-auto flex min-h-128 max-w-7xl items-start justify-start pt-6 sm:items-center sm:pt-0">
          <div className="w-[52%] max-w-50 text-center sm:w-full sm:max-w-xl lg:ml-8">
            <h2 className="font-serif text-[1.85rem] font-bold leading-[1.04] tracking-wide text-[#f4f0e8] drop-shadow-[0_3px_12px_rgba(75,38,0,0.22)] sm:text-5xl lg:text-[4rem]">
              Get 30% off your first order! We&apos;re excited to have you with us!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
