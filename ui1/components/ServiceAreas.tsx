"use client";
import { MapPin } from "lucide-react";
import { areas } from "@/lib/business";
import { useBooking } from "./BookingModal";

export default function ServiceAreas() {
  const { open } = useBooking();
  return (
    <section id="areas" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <h2 className="text-3xl font-extrabold">Service areas</h2>
      <p className="mt-2 text-[var(--ink)]/70">Check if we are available in your location.</p>
      <div className="mt-6 flex flex-col gap-4 rounded-[var(--radius)] border border-[var(--line)] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3 text-lg font-bold"><MapPin className="text-[var(--accent)]" />{areas[0]} <span className="text-xs font-medium opacity-50">(demo)</span></p>
        <button onClick={open} className="rounded-full border-2 border-[var(--accent)] px-6 py-3 font-bold text-[var(--accent)] hover:bg-[var(--mint)]">Check availability</button>
      </div>
    </section>
  );
}
