import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const buttonVariants = {
  primary: "button-primary",
  cream: "button-cream",
  surface: "button-surface",
  mango: "button-mango",
  mangoSoft: "button-mango-soft",
  orange: "button-orange",
  cocoa: "button-cocoa",
  cocoaDeep: "button-cocoa-deep",
  green: "button-green",
  greenDark: "button-green-dark",
  lime: "button-lime",
  slider: "button-slider",
  sliderLight: "button-slider-light",
  line: "button-line",
  muted: "button-muted",
} as const;

const iconButtonVariants = {
  primary: "icon-button-primary",
  cream: "icon-button-cream",
  surface: "icon-button-surface",
  mango: "icon-button-mango",
  mangoSoft: "icon-button-mango-soft",
  orange: "icon-button-orange",
  cocoa: "icon-button-cocoa",
  cocoaDeep: "icon-button-cocoa-deep",
  green: "icon-button-green",
  greenDark: "icon-button-green-dark",
  lime: "icon-button-lime",
  slider: "icon-button-slider",
  sliderLight: "icon-button-slider-light",
  line: "icon-button-line",
  muted: "icon-button-muted",
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

export type IconButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "className"
> & {
  className?: string;
  variant?: ButtonVariant;
};

function getButtonClassName(variant: ButtonVariant, className?: string) {
  return ["button", buttonVariants[variant], className].filter(Boolean).join(" ");
}

function getIconButtonClassName(variant: ButtonVariant, className?: string) {
  return ["icon-button", iconButtonVariants[variant], className]
    .filter(Boolean)
    .join(" ");
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

export function IconButton({
  children,
  className,
  variant = "primary",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={getIconButtonClassName(variant, className)}
      {...props}
    >
      {children}
    </button>
  );
}
