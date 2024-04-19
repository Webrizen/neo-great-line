import "./globals.css";
import { DM_Sans } from 'next/font/google';
import { Providers } from "./providers";
import Navbar from "@/components/system/Navbar";
import FooterBlock from "@/components/system/FooterBlock";

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
        </Providers>
      </body>
    </html>
  );
}