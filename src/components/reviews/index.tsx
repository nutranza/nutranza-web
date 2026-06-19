"use client";

import { Pause, Play, Star } from "lucide-react";
import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import styles from "./reviews.module.css";

type ReviewCard = {
  name: string;
  product: string;
  rating: number;
  background: string;
  videoSrc: string;
};

const reviews: readonly ReviewCard[] = [
  {
    name: "Aanya Mehra",
    product: "Mango Peanut Butter",
    rating: 5,
    background: "#eef7db",
    videoSrc: "/assets/videos/video-1.mp4",
  },
  {
    name: "Riya Kapoor",
    product: "Chocolate Almond",
    rating: 5,
    background: "#edf5df",
    videoSrc: "/assets/videos/video-2.mp4",
  },
  {
    name: "Sneha Sharma",
    product: "Mango Protein Oats",
    rating: 5,
    background: "#fff2bf",
    videoSrc: "/assets/videos/video-3.mp4",
  },
  {
    name: "Karan Desai",
    product: "Strawberry Protein Oats",
    rating: 4,
    background: "#ffdbe8",
    videoSrc: "/assets/videos/video-4.mp4",
  },
  {
    name: "Neel Verma",
    product: "Dark Chocolate Oats",
    rating: 5,
    background: "#dde6ff",
    videoSrc: "/assets/videos/video-5.mp4",
  },
];

export function Reviews() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [pausedCards, setPausedCards] = useState<Record<number, boolean>>({});

  function toggleVideo(index: number) {
    const video = videoRefs.current[index];

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
      setPausedCards((current) => ({ ...current, [index]: false }));
      return;
    }

    video.pause();
    setPausedCards((current) => ({ ...current, [index]: true }));
  }

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="scroll-mt-24 bg-white py-12 sm:py-14 lg:scroll-mt-28 lg:py-16"
    >
      <div className="Container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold leading-none text-brand-green sm:text-base">
            Loved by Customers
          </p>
          <h2
            id="reviews-title"
            className="mx-auto mt-4 max-w-3xl font-heading text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.08] tracking-normal text-brand-cocoa-deep"
          >
            What Customers Say
          </h2>
        </div>

        <div className="mt-8">
          <div className={styles.track}>
            {reviews.map((review, index) => (
              <article
                key={review.name}
                className={`${styles.card} group`}
                style={{ "--review-bg": review.background } as CSSProperties}
              >
                <div className="relative overflow-hidden rounded-2xl bg-[var(--review-bg)] shadow-[0_18px_40px_rgba(32,13,7,0.08)]">
                  <div className="relative aspect-[0.78/1] min-h-[400px] overflow-hidden rounded-[1.15rem]">
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element;
                      }}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={review.videoSrc} type="video/mp4" />
                    </video>

                    <button
                      type="button"
                      onClick={() => toggleVideo(index)}
                      aria-label={
                        pausedCards[index]
                          ? `Play ${review.name} review video`
                          : `Pause ${review.name} review video`
                      }
                      className="absolute right-10 top-3 inline-flex size-10 items-center justify-center rounded-full border-2 border-brand-green-dark bg-brand-lime text-brand-green-dark shadow-[3px_4px_0_#0b4d33] transition hover:bg-[#d9ff3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime lg:right-14"
                    >
                      {pausedCards[index] ? (
                        <Play className="size-4 fill-current" strokeWidth={2.5} />
                      ) : (
                        <Pause className="size-4" strokeWidth={3} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="px-1 pt-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate font-heading text-[1.2rem] font-black leading-tight text-brand-cocoa-deep">
                        {review.name}
                      </h3>
                      <p className="mt-1 truncate text-xs font-medium text-brand-cocoa/70">
                        {review.product}
                      </p>
                    </div>

                    <div
                      className="mt-1 flex shrink-0 items-center gap-0.5 text-brand-green"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          aria-hidden="true"
                          className={`size-4 ${
                            starIndex < review.rating ? "fill-current" : ""
                          }`}
                          strokeWidth={2.5}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
