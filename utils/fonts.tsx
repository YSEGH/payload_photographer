import { Exo, Kaisei_HarunoUmi, Josefin_Sans } from "next/font/google";

export const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const josefin = Josefin_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const kasei = Kaisei_HarunoUmi({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
