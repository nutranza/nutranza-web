import localFont from "next/font/local";

export const dmSans = localFont({
  variable: "--font-dm",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  src: [
    {
      path: "../../public/assets/fonts/DMSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/DMSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/DMSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/DMSans-Medium.ttf",
      weight: "500",
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
    {
      path: "../../public/assets/fonts/DMSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/DMSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export const youngSerif = localFont({
  variable: "--font-young",
  display: "swap",
  fallback: ["Georgia", "serif"],
  src: [
    {
      path: "../../public/assets/fonts/YoungSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
