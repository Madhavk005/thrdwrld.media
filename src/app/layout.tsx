import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const ginora = localFont({
  src: [
    {
      path: "./fonts/Ginora-Sans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Ginora-Sans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ginora",
});

const neue = localFont({
  src: [
    {
      path: "./fonts/neuehaasgrottext-55roman-trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neuehaasgrottext-75bold-trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue",
});

export const metadata: Metadata = {
  title: "THRDWRLD MEDIA | Built for the internet",
  description: "A culture-first creative media house focused on internet-native storytelling, visual identity, content systems, and modern digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ginora.variable} ${neue.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-primary-black text-off-white selection:bg-primary-red selection:text-white overflow-x-hidden w-full">
        <div className="bg-grain" />
        <div className="vignette" />
        <Cursor />
        <SmoothScroll>
          <Navigation />
          <StickyCTA />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
