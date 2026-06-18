import Image from "next/image";

const missionVision = [
  {
    title: "Our Mission",
    description:
      "To make clean, protein-rich food simple enough for daily routines and flavorful enough for people to choose again. We focus on familiar ingredients, honest labels, and snack formats that fit real homes, workdays, workouts, and school bags.",
    image: "/assets/images/hero.png",
    alt: "Nutranza peanut butter jars",
  },
  {
    title: "Our Vision",
    description:
      "To become a trusted everyday nutrition brand for modern Indian families by building a pantry of clean snacks that feel practical, premium, and easy to understand. Better eating should feel natural, not complicated.",
    image: "/assets/images/main-product.png",
    alt: "Nutranza protein oats pack",
  },
] as const;

export function MissionVisionSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="Container">
        <div className="grid gap-16 lg:gap-24">
          {missionVision.map((item, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={item.title}
                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
              >
                <div
                  className={`relative min-h-[300px] overflow-hidden rounded-2xl bg-[#f8f0eb] sm:min-h-[380px] ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="absolute inset-x-12 bottom-8 h-24 rounded-full bg-cocoa/12 blur-2xl" />
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 560px, 92vw"
                    className="object-contain p-8 sm:p-10"
                  />
                </div>

                <div
                  className={`max-w-xl ${
                    imageFirst ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h2 className="text-3xl font-black leading-tight text-cocoa sm:text-4xl lg:text-5xl">
                    {item.title}
                  </h2>
                  <p className="mt-6 text-sm font-medium leading-7 text-cocoa/70 sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
