import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const fontMs = localFont({
  src: "../public/fonts/Montserrat-Medium.ttf",
  variable: "--font-ms",
});

const fontQalisso = localFont({
  src: "../public/fonts/Qalisso.otf",
  variable: "--font-qalisso",
});

const fontZllight = localFont({
  src: "../public/fonts/ZalandoSansExpanded-Light.ttf",
  variable: "--font-zllight",
});

const fontZlBold = localFont({
  src: "../public/fonts/ZalandoSansExpanded-Bold.ttf",
  variable: "--font-zlbold",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "900", "400", "500"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul's Portfolio",
  description: "Expressing my abilities in a modern way.",
  icons: {
    icon: "/ic_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${fontMs.variable} ${fontZllight.variable} ${fontZlBold.variable} ${fontQalisso.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
