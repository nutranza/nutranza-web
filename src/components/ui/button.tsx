import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const buttonVariants = {
  primary: "button-primary",
  orange: "button-orange",
  cocoa: "button-cocoa",
  cream: "button-cream",
} as const;

type ButtonVariant = keyof typeof buttonVariants;

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonLinkProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "href"> & {
    href: ComponentPropsWithoutRef<typeof Link>["href"];
  };

type ButtonElementProps = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & {
    href?: never;
  };

export type ButtonProps = ButtonLinkProps | ButtonElementProps;

function getButtonClassName(variant: ButtonVariant, className?: string) {
  return ["button", buttonVariants[variant], className].filter(Boolean).join(" ");
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonClassName = getButtonClassName(variant, className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;

    return (
      <Link href={href} className={buttonClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonElementProps;

  return (
    <button type={type} className={buttonClassName} {...buttonProps}>
      {children}
    </button>
  );
}
