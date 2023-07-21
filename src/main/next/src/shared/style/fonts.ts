import { Montserrat, Noto_Serif } from "next/font/google"

export const montserrat = Montserrat({
  style: "normal",
  weight: ["300", "400", "700"],
  display: "swap",
  subsets: ["cyrillic"],
  fallback: ["verdana"],
})

export const notoSerif = Noto_Serif({
  style: "normal",
  weight: ["400", "700"],
  display: "swap",
  subsets: ["cyrillic"],
  fallback: ["serif"],
})
