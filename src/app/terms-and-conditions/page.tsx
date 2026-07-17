import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nutranza Foods",
  description:
    "Read the terms that apply when you browse, shop, place an order, or submit content on the Nutranza Foods website.",
};

const sections: readonly LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance and eligibility",
    content: (
      <>
        <p>
          These Terms & Conditions govern your access to and use of the Nutranza
          Foods website, including browsing products, creating or using an
          account, submitting reviews, and placing an order. By using the
          website, you agree to these terms and our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
        <p>
          You must be legally capable of entering into a contract. If you are
          under 18, you may use the website only with the involvement and
          consent of a parent or legal guardian.
        </p>
      </>
    ),
  },
  {
    id: "business-information",
    title: "About Nutranza Foods",
    content: (
      <>
        <p>
          This website is operated for <strong>Nutranza Foods</strong>. Our
          customer-service address is 361, Times Trade Center, Punagam, Surat,
          Gujarat, India - 395010.
        </p>
        <p>
          You can contact us at{" "}
          <a href="mailto:support@nutranzafoods.com">
            support@nutranzafoods.com
          </a>{" "}
          or <a href="tel:+919876543210">+91 98765 43210</a>.
        </p>
      </>
    ),
  },
  {
    id: "products",
    title: "Products and food information",
    content: (
      <>
        <p>
          We aim to present product names, images, ingredients, nutritional
          information, pack sizes and descriptions accurately. Minor
          differences in colour or packaging may occur because of screen
          settings or packaging updates. Material changes will not be used to
          misrepresent a product.
        </p>
        <p>
          Always read the label supplied with the product before consumption,
          particularly ingredient, allergen, storage, best-before and usage
          information. Product descriptions are general information and are not
          medical or dietary advice. Consult a qualified professional where you
          have an allergy, medical condition or specialised dietary need.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    title: "Pricing, taxes and payment",
    content: (
      <>
        <p>
          Prices are displayed in Indian Rupees (INR). The checkout summary
          shows the applicable product total, shipping charge and taxes before
          you place an order. We may correct an obvious pricing or description
          error and will contact you if it affects an order already submitted.
        </p>
        <p>
          <strong>Cash on Delivery is currently the only available payment
          method.</strong> We do not collect online card or banking credentials
          through the current checkout. Any future payment method will be shown
          clearly before you confirm an order.
        </p>
      </>
    ),
  },
  {
    id: "orders",
    title: "Orders and availability",
    content: (
      <>
        <p>
          Submitting an order is an offer to buy the selected products. The
          on-screen or email confirmation records that we received your order;
          acceptance remains subject to stock availability, serviceability,
          address verification and our ability to fulfil it.
        </p>
        <p>
          We may contact you to verify an order or cancel it before dispatch if
          a product is unavailable, the delivery address is not serviceable,
          the information supplied is incomplete, or fraud or misuse is
          reasonably suspected. No online refund is due for a cancelled Cash on
          Delivery order where no payment was collected.
        </p>
      </>
    ),
  },
  {
    id: "shipping",
    title: "Shipping and delivery",
    content: (
      <>
        <p>
          Shipping is currently shown as free on the website. Delivery remains
          subject to the destination being serviceable and successful contact
          with the recipient. Any estimated delivery date is an estimate rather
          than a guaranteed appointment unless we expressly state otherwise.
        </p>
        <p>
          You are responsible for providing a complete and accurate delivery
          address and reachable phone number. Delays caused by weather, public
          restrictions, courier disruption or other events outside reasonable
          control may extend delivery time.
        </p>
      </>
    ),
  },
  {
    id: "returns",
    title: "Cancellations, returns and refunds",
    content: (
      <>
        <p>
          To request cancellation, contact us as soon as possible with your
          order number. Cancellation may not be possible after dispatch. For
          hygiene and food-safety reasons, a correctly supplied food product
          that has been opened or used may not be eligible for return merely
          because of a change of mind.
        </p>
        <p>
          This does not limit your rights under applicable consumer law. Contact
          us promptly if an item is defective, damaged, spurious, incorrect,
          materially different from its description, or delivered after the
          stated schedule for reasons other than force majeure. We may request
          order details and clear photographs so that we can investigate and
          provide an appropriate replacement, return or refund remedy.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "Accounts and verification",
    content: (
      <>
        <p>
          Some features may use mobile-number or WhatsApp OTP verification. You
          must provide information that belongs to you or that you are
          authorised to use, keep verification codes confidential and notify us
          if you suspect unauthorised account activity.
        </p>
        <p>
          We may restrict access where reasonably necessary to protect users,
          orders, the website or our systems from misuse.
        </p>
      </>
    ),
  },
  {
    id: "user-content",
    title: "Reviews and user content",
    content: (
      <>
        <p>
          Reviews and uploaded text, images, video or voice content must be
          honest, relevant and based on genuine experience. You must not submit
          unlawful, abusive, misleading, confidential or infringing material.
        </p>
        <p>
          You retain ownership of your content. By submitting it, you give
          Nutranza Foods a non-exclusive permission to store, moderate and
          display it for operating and promoting the website and products. We
          may remove content that violates these terms or applicable law.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use and intellectual property",
    content: (
      <>
        <p>
          You must not interfere with the website, attempt unauthorised access,
          introduce malicious code, scrape the service at unreasonable scale,
          impersonate another person or use the website for unlawful activity.
        </p>
        <p>
          The Nutranza name, logos, website design, product presentation and
          original website content are protected by applicable intellectual
          property laws. No rights are transferred to you except the limited
          right to use the website for personal shopping and information.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services",
    content: (
      <p>
        The website may rely on third parties for hosting, communications,
        fulfilment, media storage and delivery, or link to external services.
        Their own terms may apply when you interact directly with them. We are
        not responsible for an external website that we do not control, but we
        remain responsible for our obligations under applicable law.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Disclaimers and limitation of liability",
    content: (
      <>
        <p>
          We take reasonable care to keep the website available and accurate,
          but uninterrupted or error-free operation cannot be guaranteed. To
          the maximum extent permitted by law, Nutranza Foods is not liable for
          indirect or consequential loss arising solely from use of the
          website.
        </p>
        <p>
          Nothing in these terms excludes liability or consumer rights that
          cannot legally be excluded, including rights relating to unsafe,
          defective, incorrectly supplied or misrepresented products.
        </p>
      </>
    ),
  },
  {
    id: "general",
    title: "General terms and governing law",
    content: (
      <>
        <p>
          We are not responsible for a failure caused by an event outside our
          reasonable control. If part of these terms is found unenforceable,
          the remaining terms continue to apply. A delay in enforcing a right
          is not a waiver of that right.
        </p>
        <p>
          These terms are governed by the laws of India. Subject to mandatory
          consumer-law forums and other non-excludable rights, disputes are
          subject to the jurisdiction of the competent courts in Gujarat,
          India.
        </p>
      </>
    ),
  },
  {
    id: "changes-contact",
    title: "Changes, support and grievances",
    content: (
      <>
        <p>
          We may update these terms when our services, operations or legal
          obligations change. The latest version and its update date will be
          posted on this page. Changes do not retrospectively remove rights
          that have already accrued under applicable law.
        </p>
        <p>
          For an order issue, complaint or grievance, email{" "}
          <a href="mailto:support@nutranzafoods.com">
            support@nutranzafoods.com
          </a>{" "}
          or call <a href="tel:+919876543210">+91 98765 43210</a>. Please
          include your order number and a clear description. We aim to
          acknowledge consumer complaints within 48 hours and resolve them
          within one month, subject to the nature of the matter and applicable
          law.
        </p>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Website terms"
      title="Terms & Conditions"
      description="These terms explain the rules that apply when you browse Nutranza Foods, place an order, use an account, or share content with us."
      lastUpdated="17 July 2026"
      sections={sections}
    />
  );
}
