export type HeaderLink = {
  label: string;
  href: string;
};

export type HeaderNavItem = HeaderLink & {
  children?: readonly HeaderLink[];
};

export const categoryNavigation = [
  { label: "Peanut Butter", href: "/#peanut-butter" },
  { label: "Protein Oats", href: "/#protein-oats" },
] as const satisfies readonly HeaderLink[];

export const mainNavigation: readonly HeaderNavItem[] = [
  { label: "Shop", href: "/#shop" },
  { label: "Categories", href: "/#categories", children: categoryNavigation },
  { label: "About", href: "/#about" },
  { label: "Recipes", href: "/#recipes" },
  { label: "Contact", href: "/#contact" },
];

export const headerActions = {
  account: { label: "Account", href: "/#account" },
  cart: { label: "Cart", href: "/#cart" },
} as const satisfies Record<string, HeaderLink>;
