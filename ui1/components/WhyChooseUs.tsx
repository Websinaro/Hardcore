"use client";
import { Check } from "lucide-react";
import { reasons } from "@/lib/business";
import { useBooking } from "./BookingModal";

export default function WhyChooseUs() {
  const { open } = useBooking();
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid overflow-hidden rounded-[2rem] bg-[var(--mint)] md:grid-cols-2">
        <img src="/images/metal.svg" alt="Demo image: pile of scrap metal" loading="lazy" className="aspect-[16/10] w-full object-cover md:aspect-auto md:h-full" />
        <div className="p-6 sm:p-10">
          <h2 className="text-3xl font-extrabold">Why choose HARD CORE?</h2>
          <ul className="mt-5 space-y-3">
            {reasons.map((r) => (
              <li key={r} className="flex items-center gap-3 font-medium"><span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--accent)] text-white"><Check size={14} strokeWidth={3} /></span>{r}</li>
            ))}
          </ul>
          <button onClick={open} className="mt-7 rounded-full bg-[var(--accent)] px-6 py-3.5 font-bold text-white">Book Scrap Pickup</button>
        </div>
      </div>
    </section>
  );
}
