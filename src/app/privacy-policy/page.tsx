import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Nutranza Foods",
  description:
    "Learn what personal information Nutranza Foods collects, why it is used, how it is shared, and the choices available to you.",
};

const sections: readonly LegalSection[] = [
  {
    id: "scope",
    title: "Scope and who we are",
    content: (
      <>
        <p>
          This Privacy Policy explains how Nutranza Foods handles personal data
          when you use this website, contact us, verify a mobile number, place
          an order, manage a wishlist or cart, or submit a review.
        </p>
        <p>
          Nutranza Foods is responsible for deciding why and how personal data
          is used for these activities. Our customer-service address is 361,
          Times Trade Center, Punagam, Surat, Gujarat, India - 395010.
        </p>
      </>
    ),
  },
  {
    id: "data-collected",
    title: "Personal data we collect",
    content: (
      <>
        <p>Depending on how you use the website, we may collect:</p>
        <ul>
          <li>
            <strong>Identity and contact data:</strong> name, email address,
            mobile number and WhatsApp verification information.
          </li>
          <li>
            <strong>Order and delivery data:</strong> products, quantities,
            order status, delivery address, city, state, postal code and
            customer-support history.
          </li>
          <li>
            <strong>Account and preference data:</strong> account identifiers,
            cart contents, wishlist selections and saved preferences.
          </li>
          <li>
            <strong>Content you submit:</strong> enquiries, review text,
            ratings, images, video, voice recordings and related metadata.
          </li>
          <li>
            <strong>Technical data:</strong> standard request, device, browser,
            IP address, session, security and error information that may be
            received when the website is accessed.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "collection-sources",
    title: "How we collect data",
    content: (
      <p>
        We receive data directly from you when you complete a form, verify a
        number, place an order, contact support or upload content. We also
        receive limited technical and fulfilment information automatically from
        your browser and from service providers involved in hosting,
        communications, order processing and delivery.
      </p>
    ),
  },
  {
    id: "purposes",
    title: "Why we use personal data",
    content: (
      <>
        <p>We use personal data for specific operational purposes, including:</p>
        <ul>
          <li>Creating and verifying accounts or administrative access.</li>
          <li>Processing, confirming, fulfilling and delivering orders.</li>
          <li>Providing order updates and customer support.</li>
          <li>Displaying and moderating product reviews and uploaded media.</li>
          <li>Remembering carts, wishlists and website preferences.</li>
          <li>Protecting users, preventing misuse and diagnosing errors.</li>
          <li>Maintaining business, tax, consumer and legal records.</li>
          <li>
            Sending promotional communication only where you have requested or
            permitted it and allowing you to opt out.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "lawful-processing",
    title: "Consent and lawful processing",
    content: (
      <>
        <p>
          We process personal data for lawful purposes connected with a service
          you request, compliance with law, protection of the website, or your
          consent where consent is required. We request only data reasonably
          connected with the stated purpose.
        </p>
        <p>
          You may withdraw consent for consent-based processing by contacting
          us. Withdrawal does not affect processing already lawfully completed
          and may prevent us from providing a feature that needs the relevant
          data.
        </p>
      </>
    ),
  },
  {
    id: "browser-storage",
    title: "Cookies and browser storage",
    content: (
      <>
        <p>
          The website uses cookies or similar browser storage where needed to
          maintain sessions, remember cart items, keep wishlist preferences and
          support security or website operation. Cart and wishlist information
          can remain on your device so it is available on a later visit.
        </p>
        <p>
          You can clear or block browser storage through your browser settings,
          although account, cart, wishlist or other essential features may then
          stop working as expected. The current website does not use this
          storage to sell personal data.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "When we share data",
    content: (
      <>
        <p>
          We do not sell personal data. We share only what is reasonably needed
          with service providers acting for operational purposes, including:
        </p>
        <ul>
          <li>
            Database, authentication and hosting providers, including Supabase.
          </li>
          <li>
            Courier, shipping and logistics services, including Trivara where
            used for fulfilment.
          </li>
          <li>
            WhatsApp and messaging providers, including Interakt or AiSensy,
            where used for OTP or service messages.
          </li>
          <li>
            Email-delivery providers, including Brevo, for submitted enquiries
            or service communication.
          </li>
          <li>
            Secure media-storage infrastructure used for product or review
            uploads.
          </li>
          <li>
            Professional advisers, regulators or authorities where disclosure
            is required by law or necessary to establish or defend legal rights.
          </li>
        </ul>
        <p>
          Service-provider names may change, but each provider will be expected
          to use data only for the relevant service and subject to applicable
          safeguards.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payment information",
    content: (
      <p>
        Cash on Delivery is currently the only checkout payment method. The
        current checkout does not ask for or store online card, UPI or banking
        credentials. If online payments are enabled later, this policy and the
        checkout notice will be updated to identify the relevant payment
        processing arrangement before it is used.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    content: (
      <p>
        We retain personal data only while it is reasonably needed for the
        purpose for which it was collected, including order fulfilment,
        customer support, fraud prevention and legal, accounting or tax
        obligations. When data is no longer needed, we take reasonable steps to
        delete or anonymise it, unless retention is required or permitted by
        law.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        We use reasonable technical and organisational safeguards intended to
        protect personal data against unauthorised access, loss, alteration or
        disclosure. Access is limited according to operational need. No website
        or internet transmission can be guaranteed completely secure, so you
        should also protect your device and verification codes.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    content: (
      <p>
        The website is intended for shopping by adults and is not designed to
        knowingly collect personal data directly from children. A parent or
        legal guardian should place an order or provide information for a person
        under 18. Contact us if you believe a child has provided personal data
        without appropriate involvement so that we can review it.
      </p>
    ),
  },
  {
    id: "international-processing",
    title: "Processing in other locations",
    content: (
      <p>
        Some technology or communication providers may operate infrastructure
        in other jurisdictions. Where personal data is processed outside India,
        we use service arrangements and reasonable safeguards appropriate to
        the data and comply with applicable transfer restrictions.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your choices and rights",
    content: (
      <>
        <p>
          Subject to applicable law and appropriate identity verification, you
          may ask us to provide information about your personal data, correct
          inaccurate or incomplete data, erase data that is no longer required,
          withdraw consent, or review a privacy grievance.
        </p>
        <p>
          You can also remove browser-stored cart or wishlist data through the
          website or your browser and unsubscribe from optional promotional
          messages using the provided method. Some information may need to be
          retained to comply with law, resolve disputes or protect legal rights.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Policy updates",
    content: (
      <p>
        We may update this policy when website features, service providers or
        legal requirements change. The revised version will be posted here with
        a new update date. Where a material change requires a fresh notice or
        consent, we will provide it through an appropriate channel.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Privacy and grievance contact",
    content: (
      <>
        <p>
          For a privacy request, question or grievance, contact Nutranza Foods
          at{" "}
          <a href="mailto:support@nutranzafoods.com">
            support@nutranzafoods.com
          </a>{" "}
          or <a href="tel:+919876543210">+91 98765 43210</a>. Explain your
          request and provide enough information for us to verify the relevant
          account, order or interaction.
        </p>
        <p>
          For the contractual rules applying to website use and orders, see our{" "}
          <Link href="/terms-and-conditions">Terms & Conditions</Link>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Your privacy"
      title="Privacy Policy"
      description="This policy explains what personal data Nutranza Foods handles, why we use it, who may receive it, and the choices available to you."
      lastUpdated="17 July 2026"
      sections={sections}
    />
  );
}
