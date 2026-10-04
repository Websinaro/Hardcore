"use client";
import { ArrowRight, Recycle } from "lucide-react";
import { useBooking } from "./BookingModal";

export default function Hero() {
  const { open } = useBooking();
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-4 sm:px-6 md:grid-cols-[1fr_1.05fr] md:gap-12 md:pb-20">
      <div className="order-2 md:order-1">
        <p className="text-sm font-medium text-[var(--accent)]">Cleaner. Greener. Together.</p>
        <h1 className="font-display mt-3 text-5xl font-medium leading-[1.05] sm:text-6xl">Your trusted scrap collection partner</h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--ink)]/65">We collect, recycle and give new life to your scrap. Fast, convenient and eco-friendly.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button onClick={open} className="flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-7 py-4 font-medium text-white">Book Pickup <ArrowRight size={18} /></button>
          <a href="#how" className="rounded-full border border-[var(--ink)]/25 px-7 py-4 text-center font-medium hover:bg-[var(--soft)]">Learn More</a>
        </div>
      </div>
      <div className="relative order-1 md:order-2">
        <img src="/images/hero.svg" alt="Demo image: plant growing from recycled materials" className="aspect-[5/4] w-full rounded-[2.5rem] object-cover md:aspect-[4/4.2]" />
        <span className="absolute bottom-4 left-4 grid h-14 w-14 place-items-center rounded-2xl bg-white text-[var(--accent)] shadow-lg" aria-hidden><Recycle /></span>
      </div>
    </section>
  );
}
