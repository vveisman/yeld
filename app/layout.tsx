import type { Metadata } from "next";
import { Inter, Inria_Sans, Open_Sans, Abhaya_Libre } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/redux/provider";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const inter = Inria_Sans({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yeld",
  description: "Investment Package for the top class assets in all sectors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/y.svg' />
      </head>
      <body
        className={`bg-gradient-to-r relative from-white to-gray-100 ${inter.className}`}
      >
        <Providers>
          <Navbar />
          <div className='w-full bg-[#FEFAE0] pt-12 lg:pt-10'>
            {children}
            <Analytics />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const revalidate = 120; // revalidate at most every 2 mins
