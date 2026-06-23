import Image from "next/image";

const collectionProducts = [
  {
    name: "Chocolate Almond",
    image: "/assets/images/products/5.png",
    imageAlt: "Nutranza chocolate almond peanut butter jar",
    background: "bg-[#eef4ff]",
    titleColor: "text-[#1c3298]",
  },
  {
    name: "Strawberry Protein Oats",
    image: "/assets/images/3.png",
    imageAlt: "Nutranza strawberry high protein oats pack",
    background: "bg-[#ffe0ee]",
    titleColor: "text-brand-berry",
  },
] as const;

export function CollectionsProductSection() {
  return (
    <section
      aria-labelledby="collections-products-title"
      className="bg-white px-4 pb-16 pt-4 sm:pb-20 lg:pb-24"
    >
      <div className="Container">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-base font-extrabold leading-none text-brand-muted">
            Explore Products
          </p>
          <h2
            id="collections-products-title"
            className="mx-auto mt-3 max-w-3xl font-heading text-4xl font-black leading-tight tracking-normal text-brand-cocoa-deep sm:text-5xl"
          >
            Choose Your Favorite
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:gap-8">
          {collectionProducts.map((product) => (
            <article
              key={product.name}
              className={`${product.background} group overflow-hidden rounded-lg p-5 text-center transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-6`}
            >
              <div className="relative mx-auto flex aspect-[1.02/1] w-full max-w-96 items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 42vw, 420px"
                  className="object-contain px-8 py-5 transition-transform duration-500 ease-out group-hover:scale-105 sm:px-10"
                />
              </div>

              <h3
                className={`mt-4 font-heading text-3xl font-black leading-tight tracking-normal ${product.titleColor} sm:text-4xl`}
              >
                {product.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
