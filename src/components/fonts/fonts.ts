import { Inter, Noto_Serif, Roboto_Condensed  } from "next/font/google";


export const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
  });
  
export const notoSerif = Noto_Serif({
  subsets:['latin'],
  weight:['100','200','300','400','600','700','800','900']
})


export const robo = Roboto_Condensed({
  subsets:['latin'],
  weight:['100','200','300','400','600','700','800','900']
})