-- Seed the four original Nutranza "Our Best Picks" products.
-- Handles and variant IDs are deterministic so this migration is idempotent.

insert into public.products (
  id,
  handle,
  name,
  description,
  short_description,
  price,
  image_url,
  thumbnail,
  images,
  stock_count,
  metadata,
  status,
  currency_code,
  seo_title,
  seo_description,
  seo_metadata,
  created_at,
  updated_at
)
values
  (
    'prod_nutranza_chocolate_almond',
    'chocolate-almond',
    'Chocolate Almond',
    'Chocolate Almond brings together roasted peanut depth, almond-style richness, and a chocolatey finish that feels indulgent without making your daily routine complicated. Spread it on toast, pair it with fruit, blend it into smoothies, or enjoy it by the spoon when you need a satisfying snack with dependable flavor.',
    'A creamy chocolate almond peanut butter made for rich flavor, smooth spreads, and everyday protein-forward snacking.',
    20.00,
    '/assets/images/products/5.png',
    '/assets/images/products/5.png',
    array[
      '/assets/images/products/5.png',
      '/assets/images/products/4.png',
      '/assets/images/products/7.png'
    ]::text[],
    100,
    $json${
      "category_name": "Peanut Butter",
      "image_alt": "Nutranza chocolate almond peanut butter jar",
      "theme_bg": "#dfe8f0",
      "page_bg": "#fff9ed",
      "badge": "-33%",
      "rating": 5,
      "review_count": 128,
      "description_sections": [
        "Chocolate Almond brings together roasted peanut depth, almond-style richness, and a chocolatey finish that feels indulgent without making your daily routine complicated.",
        "Spread it on toast, pair it with fruit, blend it into smoothies, or enjoy it by the spoon when you need a satisfying snack with dependable flavor."
      ],
      "stats": [
        {"value": "26%", "label": "Protein"},
        {"value": "100%", "label": "Vegetarian"},
        {"value": "0g", "label": "Trans Fat"},
        {"value": "5g", "label": "Sugar"},
        {"value": "Rich", "label": "Taste"}
      ],
      "love_list": [
        "Creamy peanut butter texture with a chocolate almond flavor profile.",
        "Works well for breakfast bowls, toast, smoothies, and quick snacks.",
        "Protein-forward choice for busy routines and everyday cravings.",
        "Balanced sweetness that pairs easily with fruit and grains."
      ],
      "product_details": [
        "Flavor: Chocolate Almond",
        "Texture: Creamy and spreadable",
        "Best Served: With toast, fruit, oats, or smoothies",
        "Pack Type: Peanut butter jar"
      ]
    }$json$::jsonb,
    'active',
    'usd',
    'Chocolate Almond Peanut Butter | Nutranza Foods',
    'Creamy chocolate almond peanut butter for protein-forward breakfasts, smoothies, and everyday snacking.',
    '{"keywords":"chocolate almond peanut butter, protein peanut butter, Nutranza","no_index":false}'::jsonb,
    '2026-07-13 13:04:00+00',
    now()
  ),
  (
    'prod_nutranza_mango_peanut_butter',
    'mango-peanut-butter',
    'Mango Peanut Butter',
    'Mango Peanut Butter is made for snack moments that need something bright, creamy, and easy to enjoy. Its tropical note pairs naturally with breads, oats, fruit bowls, and post-workout snacks without feeling heavy.',
    'A sunny mango peanut butter with creamy texture, familiar nutty comfort, and a fruit-forward finish.',
    25.00,
    '/assets/images/products/4.png',
    '/assets/images/products/4.png',
    array[
      '/assets/images/products/4.png',
      '/assets/images/products/5.png',
      '/assets/images/products/6.png'
    ]::text[],
    100,
    $json${
      "category_name": "Peanut Butter",
      "image_alt": "Nutranza mango peanut butter jar",
      "theme_bg": "#fff1b8",
      "page_bg": "#fff6cf",
      "badge": "-16%",
      "rating": 4,
      "review_count": 96,
      "description_sections": [
        "Mango Peanut Butter is made for snack moments that need something bright, creamy, and easy to enjoy.",
        "Its tropical note pairs naturally with breads, oats, fruit bowls, and post-workout snacks without feeling heavy."
      ],
      "stats": [
        {"value": "27%", "label": "Protein"},
        {"value": "Mango", "label": "Flavor"},
        {"value": "Smooth", "label": "Texture"},
        {"value": "Vegan", "label": "Choice"},
        {"value": "Daily", "label": "Use"}
      ],
      "love_list": [
        "Bright mango flavor layered with classic peanut butter richness.",
        "Easy to pair with toast, oats, pancakes, and smoothies.",
        "A satisfying snack option for active everyday routines.",
        "Creamy consistency that spreads cleanly and tastes balanced."
      ],
      "product_details": [
        "Flavor: Mango Peanut Butter",
        "Texture: Smooth and creamy",
        "Best Served: Breakfast, snacks, or smoothie bowls",
        "Pack Type: Peanut butter jar"
      ]
    }$json$::jsonb,
    'active',
    'usd',
    'Mango Peanut Butter | Nutranza Foods',
    'Creamy mango peanut butter with a bright fruit-forward finish for breakfast and everyday snacks.',
    '{"keywords":"mango peanut butter, protein peanut butter, Nutranza","no_index":false}'::jsonb,
    '2026-07-13 13:03:00+00',
    now()
  ),
  (
    'prod_nutranza_dark_chocolate_oats',
    'dark-chocolate-oats',
    'Dark Chocolate Oats',
    'Dark Chocolate Oats brings cocoa-rich flavor into a practical high-protein breakfast format. It is built for mornings, workout routines, and quick meals where taste and convenience both matter.',
    'High-protein dark chocolate oats for quick breakfasts, better snack bowls, and chocolate-forward everyday nutrition.',
    19.00,
    '/assets/images/product-3-cropped.png',
    '/assets/images/product-3-cropped.png',
    array[
      '/assets/images/product-3-cropped.png',
      '/assets/images/product-04.png',
      '/assets/images/products/product-1.png'
    ]::text[],
    100,
    $json${
      "category_name": "Protein Oats",
      "image_alt": "Nutranza dark chocolate high protein oats pack",
      "theme_bg": "#dfe8ff",
      "page_bg": "#eef4ff",
      "badge": "-24%",
      "rating": 5,
      "review_count": 214,
      "description_sections": [
        "Dark Chocolate Oats brings cocoa-rich flavor into a practical high-protein breakfast format.",
        "It is built for mornings, workout routines, and quick meals where taste and convenience both matter."
      ],
      "stats": [
        {"value": "26g", "label": "Protein"},
        {"value": "1kg", "label": "Pack"},
        {"value": "No", "label": "Refined Sugar"},
        {"value": "High", "label": "Fibre"},
        {"value": "Quick", "label": "Prep"}
      ],
      "love_list": [
        "Chocolate-forward flavor that still feels breakfast-friendly.",
        "High-protein format for filling morning bowls and snack meals.",
        "Convenient oats that fit busy routines without complex prep.",
        "Pairs well with fruit, nuts, milk, curd, or peanut butter."
      ],
      "product_details": [
        "Flavor: Dark Chocolate",
        "Texture: Oat-based breakfast mix",
        "Best Served: Warm, chilled, or as an overnight oats bowl",
        "Pack Type: High protein oats pouch"
      ]
    }$json$::jsonb,
    'active',
    'usd',
    'Dark Chocolate High Protein Oats | Nutranza Foods',
    'Cocoa-rich high-protein oats for convenient breakfasts, workout routines, and quick meals.',
    '{"keywords":"dark chocolate oats, high protein oats, Nutranza","no_index":false}'::jsonb,
    '2026-07-13 13:02:00+00',
    now()
  ),
  (
    'prod_nutranza_strawberry_oats',
    'strawberry-oats',
    'Strawberry Oats',
    'Strawberry Oats is made for breakfast bowls that feel bright, filling, and easy to repeat. Its fruit-forward taste works well with milk, curd, fresh fruit, nuts, and quick everyday toppings.',
    'Strawberry high-protein oats with berry-style flavor, simple prep, and everyday breakfast convenience.',
    29.00,
    '/assets/images/product-04.png',
    '/assets/images/product-04.png',
    array[
      '/assets/images/product-04.png',
      '/assets/images/product-3-cropped.png',
      '/assets/images/products/product-2.png'
    ]::text[],
    100,
    $json${
      "category_name": "Protein Oats",
      "image_alt": "Nutranza strawberry high protein oats pack",
      "theme_bg": "#ffe0ee",
      "page_bg": "#fff0f6",
      "badge": "-26%",
      "rating": 4,
      "review_count": 87,
      "description_sections": [
        "Strawberry Oats is made for breakfast bowls that feel bright, filling, and easy to repeat.",
        "Its fruit-forward taste works well with milk, curd, fresh fruit, nuts, and quick everyday toppings."
      ],
      "stats": [
        {"value": "26g", "label": "Protein"},
        {"value": "1kg", "label": "Pack"},
        {"value": "Berry", "label": "Flavor"},
        {"value": "High", "label": "Fibre"},
        {"value": "Easy", "label": "Prep"}
      ],
      "love_list": [
        "Strawberry flavor that makes breakfast feel fresher and easier.",
        "Protein-rich oats for a fuller start to the day.",
        "Simple to prepare as hot oats, chilled oats, or smoothie bowls.",
        "Pairs naturally with fruit, seeds, nuts, and peanut butter."
      ],
      "product_details": [
        "Flavor: Strawberry",
        "Texture: Oat-based breakfast mix",
        "Best Served: Warm, chilled, or with fresh fruit",
        "Pack Type: High protein oats pouch"
      ]
    }$json$::jsonb,
    'active',
    'usd',
    'Strawberry High Protein Oats | Nutranza Foods',
    'Fruit-forward strawberry high-protein oats for simple, filling, and convenient breakfasts.',
    '{"keywords":"strawberry oats, high protein oats, Nutranza","no_index":false}'::jsonb,
    '2026-07-13 13:01:00+00',
    now()
  )
on conflict (handle) do update set
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  price = excluded.price,
  image_url = excluded.image_url,
  thumbnail = excluded.thumbnail,
  images = excluded.images,
  stock_count = excluded.stock_count,
  metadata = excluded.metadata,
  status = excluded.status,
  currency_code = excluded.currency_code,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description,
  seo_metadata = excluded.seo_metadata,
  updated_at = now();

insert into public.product_variants (
  id,
  product_id,
  title,
  sku,
  price,
  compare_at_price,
  inventory_quantity,
  manage_inventory,
  allow_backorder,
  metadata
)
select
  seed.variant_id,
  product.id,
  'Default Variant',
  seed.sku,
  seed.price,
  seed.compare_at_price,
  100,
  true,
  false,
  '{}'::jsonb
from (
  values
    ('var_nutranza_chocolate_almond', 'chocolate-almond', 'NUT-CA-001', 20.00::numeric, 30.00::numeric),
    ('var_nutranza_mango_peanut_butter', 'mango-peanut-butter', 'NUT-MPB-001', 25.00::numeric, 30.00::numeric),
    ('var_nutranza_dark_chocolate_oats', 'dark-chocolate-oats', 'NUT-DCO-001', 19.00::numeric, 25.00::numeric),
    ('var_nutranza_strawberry_oats', 'strawberry-oats', 'NUT-SO-001', 29.00::numeric, 35.00::numeric)
) as seed(variant_id, handle, sku, price, compare_at_price)
join public.products as product on product.handle = seed.handle
on conflict (id) do update set
  product_id = excluded.product_id,
  title = excluded.title,
  sku = excluded.sku,
  price = excluded.price,
  compare_at_price = excluded.compare_at_price,
  inventory_quantity = excluded.inventory_quantity,
  manage_inventory = excluded.manage_inventory,
  allow_backorder = excluded.allow_backorder,
  metadata = excluded.metadata,
  updated_at = now();
