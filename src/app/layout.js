import "./globals.css";
import { DM_Sans } from 'next/font/google';
import { Providers } from "./providers";
import Navbar from "@/components/system/Navbar";
import FooterBlock from "@/components/system/FooterBlock";
import AnimatedCursor from "react-animated-cursor";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "NEO GREAT LINE - Design Phase",
  description: "Digitally Crafted By Professionals Of CodeCashFlow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Providers>
          <Navbar />
          {children}
          <FooterBlock />
          <AnimatedCursor
            innerSize={10}
            outerSize={50}
            color='83, 83, 255'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={2}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
          />
        </Providers>
      </body>
    </html>
  );
}