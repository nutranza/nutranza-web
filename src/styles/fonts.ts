import localFont from "next/font/local";

export const rubik = localFont({
  variable: "--font-rubik",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  src: [
    {
      path: "../../public/assets/fonts/Rubik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Rubik-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Rubik-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Rubik-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Rubik-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Rubik-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export const ubuntu = localFont({
  variable: "--font-ubuntu",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  src: [
    {
      path: "../../public/assets/fonts/Ubuntu-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Ubuntu-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Ubuntu-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});
