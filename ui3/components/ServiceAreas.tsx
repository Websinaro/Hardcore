"use client";
import { MapPin } from "lucide-react";
import { areas } from "@/lib/business";
import { useBooking } from "./BookingModal";

export default function ServiceAreas() {
  const { open } = useBooking();
  return (
    <section id="areas" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <h2 className="font-display text-4xl font-medium">Service areas</h2>
      <p className="mt-2 text-[var(--ink)]/65">Check if we’re available in your location.</p>
      <div className="mt-6 flex items-center justify-between gap-4 border-y border-[var(--line)] py-5">
        <p className="flex items-center gap-3 font-medium"><MapPin className="text-[var(--accent)]" />{areas[0]} <span className="text-xs font-normal opacity-50">(demo)</span></p>
        <button onClick={open} className="rounded-full border border-[var(--ink)]/25 px-5 py-2.5 text-sm font-medium hover:bg-[var(--soft)]">Check availability</button>
      </div>
    </section>
  );
}
