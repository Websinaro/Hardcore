"use client";
import { Check } from "lucide-react";
import { reasons } from "@/lib/business";
import { useBooking } from "./BookingModal";

export default function WhyHardCore() {
  const { open } = useBooking();
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative isolate overflow-hidden rounded-[var(--radius)] border border-[var(--edge)] bg-[var(--panel)]">
        <img src="/images/truck.svg" alt="Demo image: green collection truck" loading="lazy" className="absolute inset-y-0 right-0 -z-10 hidden h-full w-3/5 object-cover opacity-90 md:block" />
        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[var(--panel)] via-[var(--panel)] to-transparent md:block" />
        <div className="p-6 sm:p-10 md:max-w-lg">
          <h2 className="display text-4xl sm:text-5xl">Why HARD CORE?</h2>
          <ul className="mt-6 space-y-3 text-lg">
            {reasons.map((r) => <li key={r} className="flex items-center gap-3"><Check className="text-[var(--accent)]" strokeWidth={3} size={20} />{r}</li>)}
          </ul>
          <button onClick={open} className="mt-8 rounded-[var(--radius-sm)] bg-[var(--accent)] px-7 py-3.5 font-bold text-[var(--accent-fg)]">Book Pickup Now</button>
        </div>
        <img src="/images/truck.svg" alt="" aria-hidden className="aspect-[16/9] w-full object-cover md:hidden" />
      </div>
    </section>
  );
}
