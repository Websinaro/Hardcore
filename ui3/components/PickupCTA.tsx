"use client";
import { useBooking } from "./BookingModal";

export default function PickupCTA() {
  const { open } = useBooking();
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid items-center gap-6 rounded-[var(--radius)] border border-[var(--line)] p-3 md:grid-cols-[1fr_1fr] md:p-4">
        <img src="/images/map.svg" alt="Demo image: map with a pickup location pin" loading="lazy" className="aspect-[16/10] w-full rounded-[1.25rem] object-cover" />
        <div className="px-3 pb-4 md:px-8 md:pb-0">
          <h2 className="font-display text-4xl font-medium">Book a pickup</h2>
          <p className="mt-3 max-w-sm text-[var(--ink)]/65">Fill in your details and we’ll contact you shortly.</p>
          <button onClick={open} className="mt-6 w-full rounded-full bg-[var(--ink)] px-8 py-4 font-medium text-white sm:w-auto">Book Now</button>
        </div>
      </div>
    </section>
  );
}
