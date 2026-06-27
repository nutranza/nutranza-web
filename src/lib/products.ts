export type Product = {
  slug: string;
  name: string;
  category: string;
  href: string;
  image: string;
  imageAlt: string;
  themeBg: string;
  pageBg: string;
  badge?: string;
  soldOut?: boolean;
  rating: number;
  price: string;
  compareAt?: string;
  swatches: readonly string[];
  gallery: readonly string[];
  shortDescription: string;
  description: readonly string[];
  stats: readonly {
    value: string;
    label: string;
  }[];
  loveList: readonly string[];
  details: readonly string[];
};

export const products = [
  {
    slug: "chocolate-almond",
    name: "Chocolate Almond",
    category: "Peanut Butter",
    href: "/products/chocolate-almond",
    image: "/assets/images/products/5.png",
    imageAlt: "Nutranza chocolate almond peanut butter jar",
    themeBg: "#fffdf8",
    pageBg: "#fff9ed",
    badge: "-33%",
    rating: 5,
    price: "$20.00",
    compareAt: "$30.00",
    swatches: [
      "/assets/images/products/5.png",
      "/assets/images/products/4.png",
      "/assets/images/products/7.png",
    ],
    gallery: [
      "/assets/images/products/5.png",
      "/assets/images/products/4.png",
      "/assets/images/products/7.png",
    ],
    shortDescription:
      "A creamy chocolate almond peanut butter made for rich flavor, smooth spreads, and everyday protein-forward snacking.",
    description: [
      "Chocolate Almond brings together roasted peanut depth, almond-style richness, and a chocolatey finish that feels indulgent without making your daily routine complicated.",
      "Spread it on toast, pair it with fruit, blend it into smoothies, or enjoy it by the spoon when you need a satisfying snack with dependable flavor.",
    ],
    stats: [
      { value: "26%", label: "Protein" },
      { value: "100%", label: "Vegetarian" },
      { value: "0g", label: "Trans Fat" },
      { value: "5g", label: "Sugar" },
      { value: "Rich", label: "Taste" },
    ],
    loveList: [
      "Creamy peanut butter texture with a chocolate almond flavor profile.",
      "Works well for breakfast bowls, toast, smoothies, and quick snacks.",
      "Protein-forward choice for busy routines and everyday cravings.",
      "Balanced sweetness that pairs easily with fruit and grains.",
    ],
    details: [
      "Flavor: Chocolate Almond",
      "Texture: Creamy and spreadable",
      "Best Served: With toast, fruit, oats, or smoothies",
      "Pack Type: Peanut butter jar",
    ],
  },
  {
    slug: "mango-peanut-butter",
    name: "Mango Peanut Butter",
    category: "Peanut Butter",
    href: "/products/mango-peanut-butter",
    image: "/assets/images/products/4.png",
    imageAlt: "Nutranza mango peanut butter jar",
    themeBg: "#fff1b8",
    pageBg: "#fff6cf",
    badge: "-16%",
    rating: 4,
    price: "$25.00",
    compareAt: "$30.00",
    swatches: [
      "/assets/images/products/4.png",
      "/assets/images/products/5.png",
      "/assets/images/products/6.png",
    ],
    gallery: [
      "/assets/images/products/4.png",
      "/assets/images/products/5.png",
      "/assets/images/products/6.png",
    ],
    shortDescription:
      "A sunny mango peanut butter with creamy texture, familiar nutty comfort, and a fruit-forward finish.",
    description: [
      "Mango Peanut Butter is made for snack moments that need something bright, creamy, and easy to enjoy.",
      "Its tropical note pairs naturally with breads, oats, fruit bowls, and post-workout snacks without feeling heavy.",
    ],
    stats: [
      { value: "27%", label: "Protein" },
      { value: "Mango", label: "Flavor" },
      { value: "Smooth", label: "Texture" },
      { value: "Vegan", label: "Choice" },
      { value: "Daily", label: "Use" },
    ],
    loveList: [
      "Bright mango flavor layered with classic peanut butter richness.",
      "Easy to pair with toast, oats, pancakes, and smoothies.",
      "A satisfying snack option for active everyday routines.",
      "Creamy consistency that spreads cleanly and tastes balanced.",
    ],
    details: [
      "Flavor: Mango Peanut Butter",
      "Texture: Smooth and creamy",
      "Best Served: Breakfast, snacks, or smoothie bowls",
      "Pack Type: Peanut butter jar",
    ],
  },
  {
    slug: "dark-chocolate-oats",
    name: "Dark Chocolate Oats",
    category: "Protein Oats",
    href: "/products/dark-chocolate-oats",
    image: "/assets/images/product-3-cropped.png",
    imageAlt: "Nutranza dark chocolate high protein oats pack",
    themeBg: "#dfe8ff",
    pageBg: "#eef4ff",
    badge: "-24%",
    rating: 5,
    price: "$19.00",
    compareAt: "$25.00",
    swatches: [
      "/assets/images/product-3-cropped.png",
      "/assets/images/product-04.png",
      "/assets/images/products/product-1.png",
    ],
    gallery: [
      "/assets/images/product-3-cropped.png",
      "/assets/images/product-04.png",
      "/assets/images/products/product-1.png",
    ],
    shortDescription:
      "High-protein dark chocolate oats for quick breakfasts, better snack bowls, and chocolate-forward everyday nutrition.",
    description: [
      "Dark Chocolate Oats brings cocoa-rich flavor into a practical high-protein breakfast format.",
      "It is built for mornings, workout routines, and quick meals where taste and convenience both matter.",
    ],
    stats: [
      { value: "26g", label: "Protein" },
      { value: "1kg", label: "Pack" },
      { value: "No", label: "Refined Sugar" },
      { value: "High", label: "Fibre" },
      { value: "Quick", label: "Prep" },
    ],
    loveList: [
      "Chocolate-forward flavor that still feels breakfast-friendly.",
      "High-protein format for filling morning bowls and snack meals.",
      "Convenient oats that fit busy routines without complex prep.",
      "Pairs well with fruit, nuts, milk, curd, or peanut butter.",
    ],
    details: [
      "Flavor: Dark Chocolate",
      "Texture: Oat-based breakfast mix",
      "Best Served: Warm, chilled, or as an overnight oats bowl",
      "Pack Type: High protein oats pouch",
    ],
  },
  {
    slug: "strawberry-oats",
    name: "Strawberry Oats",
    category: "Protein Oats",
    href: "/products/strawberry-oats",
    image: "/assets/images/product-04.png",
    imageAlt: "Nutranza strawberry high protein oats pack",
    themeBg: "#ffe0ee",
    pageBg: "#fff0f6",
    badge: "-26%",
    rating: 4,
    price: "$29.00",
    compareAt: "$35.00",
    swatches: [
      "/assets/images/product-04.png",
      "/assets/images/product-3-cropped.png",
      "/assets/images/products/product-2.png",
    ],
    gallery: [
      "/assets/images/product-04.png",
      "/assets/images/product-3-cropped.png",
      "/assets/images/products/product-2.png",
    ],
    shortDescription:
      "Strawberry high-protein oats with berry-style flavor, simple prep, and everyday breakfast convenience.",
    description: [
      "Strawberry Oats is made for breakfast bowls that feel bright, filling, and easy to repeat.",
      "Its fruit-forward taste works well with milk, curd, fresh fruit, nuts, and quick everyday toppings.",
    ],
    stats: [
      { value: "26g", label: "Protein" },
      { value: "1kg", label: "Pack" },
      { value: "Berry", label: "Flavor" },
      { value: "High", label: "Fibre" },
      { value: "Easy", label: "Prep" },
    ],
    loveList: [
      "Strawberry flavor that makes breakfast feel fresher and easier.",
      "Protein-rich oats for a fuller start to the day.",
      "Simple to prepare as hot oats, chilled oats, or smoothie bowls.",
      "Pairs naturally with fruit, seeds, nuts, and peanut butter.",
    ],
    details: [
      "Flavor: Strawberry",
      "Texture: Oat-based breakfast mix",
      "Best Served: Warm, chilled, or with fresh fruit",
      "Pack Type: High protein oats pouch",
    ],
  },
] as const satisfies readonly Product[];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string) {
  return products.filter((product) => product.slug !== slug).slice(0, 3);
}
