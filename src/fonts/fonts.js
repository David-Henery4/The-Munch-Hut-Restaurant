import { Poppins, Pompiere } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const pompiere = Pompiere({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pompiere",
});

export {poppins, pompiere}