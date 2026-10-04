import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingModal";
import { business } from "@/lib/business";

const cond = Barlow_Condensed({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-barlow-cond" });
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow" });
export const metadata: Metadata = { title: business.pageTitle, description: "Turn your scrap into value — UI prototype 2." };
export const viewport: Viewport = { themeColor: "#090e0c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cond.variable} ${body.variable}`}>
      <body><BookingProvider>{children}</BookingProvider></body>
    </html>
  );
}
