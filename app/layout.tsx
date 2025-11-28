import type { Metadata } from "next";
import {
  Baloo_2,
  Geist,
  Geist_Mono,
  Rubik_Dirt,
  Tangerine,
} from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tangerine",
  display: "swap",
});

const RubikDirt = Rubik_Dirt({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-dirt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "B erl Cosmtics - Beautiful | Confident | You",
  description: "B erl Personal Color",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${baloo2.variable} ${tangerine.variable} ${RubikDirt.variable}   antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
