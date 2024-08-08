import { Inter as FontSans, Dosis,Nunito_Sans } from "next/font/google";


export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
  });
  
 export const nuto = Nunito_Sans({
    subsets: ["latin"],
    variable: "--nuto",
    weight:['1000','200','300','400','500','600','700','800','900']
  });
  