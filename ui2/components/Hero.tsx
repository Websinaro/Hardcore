"use client";
import { ArrowRight, Phone } from "lucide-react";
import { business } from "@/lib/business";
import { useBooking } from "./BookingModal";

export default function Hero() {
  const { open } = useBooking();
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img src="/images/scrap-dark.svg" alt="" aria-hidden className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/70 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-14 sm:px-6 md:pb-36 md:pt-24">
        <p className="font-semibold text-[var(--accent)]">Scrap collection &amp; recycling</p>
        <h1 className="display mt-3 max-w-2xl text-6xl sm:text-7xl lg:text-8xl">Turn your scrap into <span className="text-[var(--accent)]">value</span></h1>
        <p className="mt-6 max-w-md text-lg text-white/80">HARD CORE collects scrap from homes, offices and industrial sites. Fast, safe and straightforward.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button onClick={open} className="flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--accent)] px-7 py-4 text-lg font-bold text-[var(--accent-fg)]">Book Pickup Now <ArrowRight size={20} /></button>
          <a href={business.phones[0].href} className="flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border-2 border-white/70 px-7 py-4 text-lg font-bold hover:bg-white/10"><Phone size={19} />Call Now</a>
        </div>
        <p className="mt-4 text-sm text-white/60">{business.phones[0].label} · Mon–Sat, 9 AM – 6 PM</p>
      </div>
    </section>
  );
}
