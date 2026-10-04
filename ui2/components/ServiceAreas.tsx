"use client";
import { MapPin } from "lucide-react";
import { areas } from "@/lib/business";
import { useBooking } from "./BookingModal";

export default function ServiceAreas() {
  const { open } = useBooking();
  return (
    <section id="areas" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <h2 className="display text-4xl sm:text-5xl">Areas we serve</h2>
      <div className="mt-6 flex flex-col gap-4 rounded-[var(--radius)] border border-[var(--edge)] bg-[var(--panel)] p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3 text-xl font-semibold"><MapPin className="text-[var(--accent)]" />{areas[0]} <span className="text-xs font-normal opacity-50">(demo)</span></p>
        <button onClick={open} className="rounded-[var(--radius-sm)] border-2 border-[var(--accent)] px-6 py-3 font-bold text-[var(--accent)] hover:bg-[var(--accent)]/10">Check areas</button>
      </div>
    </section>
  );
}
