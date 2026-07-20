const announcementMessages = [
  "Free shipping on every order \u{1F69A}",
  "High-protein oats, no cooking needed \u{1F963}",
  "Creamy peanut butter, everyday goodness \u{1F95C}",
  "Cash on delivery available \u{1F4B5}",
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
