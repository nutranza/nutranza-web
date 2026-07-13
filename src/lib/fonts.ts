import localFont from "next/font/local"

// Self-hosted fonts keep admin builds deterministic and avoid a Google Fonts
// network dependency in CI or restricted deployment environments.
export const inter = localFont({
  src: [
    {
      path: "../../public/assets/fonts/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
})

export const grandstander = localFont({
  src: "../../public/assets/fonts/YoungSerif-Regular.ttf",
  variable: "--font-Grandstander",
  display: "swap",
})
