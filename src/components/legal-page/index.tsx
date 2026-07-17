import { ChevronRight, Home, Scale } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { SmoothLegalLink } from "./smooth-legal-link";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <main className="flex-1 bg-background text-brand-cocoa">
      <header className="relative overflow-hidden border-b border-brand-cocoa/10 bg-[radial-gradient(circle_at_top_left,rgba(255,191,0,0.24),transparent_38%),linear-gradient(135deg,#fffaf0_0%,#fff4d8_100%)]">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 size-64 rounded-full border-[38px] border-brand-yellow/15"
        />
        <div className="Container relative py-14 sm:py-18 lg:py-22">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm font-bold text-brand-cocoa/65"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-md transition-colors hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cocoa"
            >
              <Home aria-hidden="true" className="size-4" />
              Home
            </Link>
            <ChevronRight aria-hidden="true" className="size-4" />
            <span aria-current="page">{title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-cocoa/15 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-orange shadow-sm">
              <Scale aria-hidden="true" className="size-4" />
              {eyebrow}
            </div>
            <h1 className="max-w-3xl font-heading text-4xl font-black leading-[1.05] text-brand-cocoa sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-brand-cocoa/75 sm:text-lg sm:leading-8">
              {description}
            </p>
            <p className="mt-5 text-sm font-bold text-brand-cocoa/60">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </header>

      <div className="Container py-12 sm:py-16 lg:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[21rem_minmax(0,1fr)] xl:gap-12">
          <aside className="rounded-3xl border border-brand-cocoa/12 bg-white p-5 shadow-[0_14px_40px_rgba(58,33,20,0.06)] lg:sticky lg:top-6 lg:max-h-[calc(100dvh-3rem)] lg:overflow-y-auto">
            <h2 className="font-heading text-xl font-black">On this page</h2>
            <nav aria-label={`${title} sections`} className="mt-4">
              <ol className="grid gap-1.5">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <SmoothLegalLink
                      sectionId={section.id}
                      className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm font-bold leading-5 text-brand-cocoa/68 transition-colors hover:bg-brand-yellow/15 hover:text-brand-cocoa focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cocoa"
                    >
                      <span className="mt-0.5 text-xs font-black text-brand-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </SmoothLegalLink>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="overflow-hidden rounded-3xl border border-brand-cocoa/12 bg-white px-5 shadow-[0_18px_55px_rgba(58,33,20,0.07)] sm:px-8 lg:px-11">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-32 border-b border-brand-cocoa/10 py-9 last:border-b-0 sm:py-11 [&_a]:font-bold [&_a]:text-brand-orange [&_a]:underline [&_a]:decoration-brand-orange/30 [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:text-brand-cocoa [&_li]:pl-1 [&_p]:text-[0.98rem] [&_p]:font-medium [&_p]:leading-7 [&_p]:text-brand-cocoa/76 [&_strong]:font-black [&_strong]:text-brand-cocoa [&_ul]:ml-5 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2.5 [&_ul]:text-[0.98rem] [&_ul]:font-medium [&_ul]:leading-7 [&_ul]:text-brand-cocoa/76"
              >
                <h2 className="mb-5 font-heading text-2xl font-black leading-tight text-brand-cocoa sm:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-4">{section.content}</div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
