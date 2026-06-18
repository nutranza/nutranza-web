import Image from "next/image";

export function ProductNutritionSection() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="Container">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/assets/images/4.jpg"
                alt="Nutranza high protein oats showing 26g protein, no refined sugar, and natural ingredients"
                width={1600}
                height={1600}
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="h-auto w-full rounded-md object-contain"
              />
            </div>
          </div>

          <div className="order-1 max-w-2xl space-y-4 lg:order-2">
            <h2 className="text-3xl font-black leading-tight text-cocoa sm:text-4xl lg:text-5xl">
              Clean nutrition for fast, real-life breakfast bowls.
            </h2>
            <p className="text-sm font-medium leading-7 text-cocoa/72 sm:text-base sm:leading-8">
              Nutranza high protein oats are made for mornings that need to move
              quickly without feeling ordinary. With visible nutrition cues like
              protein, fibre, no refined sugar, and natural ingredients, the
              product keeps better eating simple, practical, and easy to repeat.
            </p>
            <p className="text-sm font-medium leading-7 text-cocoa/70 sm:text-base sm:leading-8">
              Made for busy routines, post-workout cravings, and quick breakfast
              bowls, it gives customers a clear reason to choose better food
              without adding extra prep time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
