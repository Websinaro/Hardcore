"use client";
import { useBooking } from "./BookingModal";

export default function QuickBooking() {
  const { open } = useBooking();
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid overflow-hidden rounded-[var(--radius)] bg-white text-[var(--ink)] md:grid-cols-[1fr_1.3fr]">
        <img src="/images/metal.svg" alt="Demo image: sorted scrap metal" loading="lazy" className="aspect-[16/9] w-full object-cover md:aspect-auto md:h-full" />
        <div className="p-6 sm:p-10">
          <h2 className="display text-4xl sm:text-5xl">Quick &amp; easy pickup</h2>
          <p className="mt-3 max-w-sm text-lg text-[var(--ink)]/75">Fill in the booking form and we will contact you right away.</p>
          <button onClick={open} className="mt-6 w-full rounded-[var(--radius-sm)] bg-[var(--accent)] px-8 py-4 text-lg font-bold text-[var(--accent-fg)] sm:w-auto">Book Now</button>
        </div>
      </div>
    </section>
  );
}
