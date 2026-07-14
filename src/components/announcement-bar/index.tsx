const announcementMessages = [
  "Free Shipping On Orders Above \u20B9499 \u{1F69A}",
  "New Flavor Just Dropped: Try Freshi Kiwi \u{1F95D}",
  "Limited Time Offer - Buy 2, Get 1 Free! \u{1F964}",
  "Summer Special: Cool Down With Every Sip \u{1F34A} \u{1F9CA}",
] as const;

const marqueeItems = Array.from({ length: 4 }, (_, repeatIndex) =>
  announcementMessages.map((message) => ({ message, repeatIndex })),
).flat();

export function AnnouncementBar() {
  return (
    <div className="overflow-hidden p-2.5">
      <div
        className="relative flex min-h-12 items-center overflow-hidden rounded-lg bg-brand-mango text-brand-cocoa"
        role="region"
        aria-label="Store announcements"
      >
        <div className="announcement-marquee">
          <div className="announcement-marquee__track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="announcement-marquee__group"
                aria-hidden={groupIndex === 1}
              >
                {marqueeItems.map((item) => (
                  <span
                    key={`${groupIndex}-${item.repeatIndex}-${item.message}`}
                    className="whitespace-nowrap text-sm font-semibold sm:text-base"
                  >
                    {item.message}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
