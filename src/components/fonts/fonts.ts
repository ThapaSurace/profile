import { Lustria, Lato } from "next/font/google";



export const lustria = Lustria({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lustria",
});


export const lato = Lato({
  subsets: ["latin"],
  weight: ["100","300","400","700","900"],
  variable: "--font-lato",
});
