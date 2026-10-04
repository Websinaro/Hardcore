import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingModal";
import { business } from "@/lib/business";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
export const metadata: Metadata = { title: business.pageTitle, description: "Scrap collection made easy — UI prototype 1." };
export const viewport: Viewport = { themeColor: business.themeColor };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body><BookingProvider>{children}</BookingProvider></body>
    </html>
  );
}
