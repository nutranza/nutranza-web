import { Button } from "@/components/ui/button";

export function AboutCtaSection() {
  return (
    <section className="bg-white mb-16">
      <div className="Container">
        <div className="mx-auto flex max-w-6xl flex-col items-center rounded-xl bg-brand-berry px-4 py-18 text-center text-brand-surface sm:px-8 lg:px-14">
          <p className="text-sm font-extrabold leading-none sm:text-base">
            Ready to Sip?
          </p>
          <h2 className="mt-7 font-heading text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Don&apos;t Wait - Purchase Now!
          </h2>
          <p className="mt-6 max-w-2xl text-base font-bold leading-7 sm:text-lg">
            Experience the perfect mix of bold flavors and wholesome nutrition
            with every Nutranza favorite. Whether you&apos;re starting your
            morning or refueling your day, there&apos;s a better bite waiting
            to brighten your moment.
          </p>
          <Button
            href="/#best-sellers"
            variant="mango"
            className="mt-7 px-9 py-2.5 text-base font-medium transition-[box-shadow] duration-300 sm:px-10 sm:py-3"
          >
            View Products
          </Button>
        </div>
      </div>
    </section>
  );
}
