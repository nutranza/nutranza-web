export type HeaderLink = {
  label: string;
  href: string;
};

export type HeaderNavItem = HeaderLink & {
  children?: readonly HeaderNavItem[];
};

export type ShopDropdownGroup = {
  title: string;
  href: string;
  products: readonly HeaderLink[];
};

export const shopDropdownGroups = [
  {
    title: "Peanut Butter",
    href: "/#peanut-butter",
    products: [
      { label: "Organic Peanut Butter", href: "/#best-sellers" },
      { label: "Natural Peanut Crunch", href: "/#best-sellers" },
    ],
  },
  {
    title: "Oats",
    href: "/#protein-oats",
    products: [
      { label: "Chocolate Protein Oats", href: "/#best-sellers" },
      { label: "Strawberry Protein Oats", href: "/about" },
    ],
  },
] as const satisfies readonly ShopDropdownGroup[];

export const mainNavigation: readonly HeaderNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  {
    label: "Shop",
    href: "/#shop",
    children: shopDropdownGroups.map((group) => ({
      label: group.title,
      href: group.href,
      children: group.products,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const headerActions = {
  account: { label: "Account", href: "/#account" },
  wishlist: { label: "Wishlist", href: "/#wishlist" },
  cart: { label: "Cart", href: "/#cart" },
} as const satisfies Record<string, HeaderLink>;
