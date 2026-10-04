"use client";
import { useBooking } from "./BookingModal";

export default function BookingCTA() {
  const { open } = useBooking();
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid items-center overflow-hidden rounded-[2rem] bg-[var(--mint)] md:grid-cols-[1fr_1.2fr]">
        <img src="/images/truck.svg" alt="Demo image: green scrap collection truck" loading="lazy" className="aspect-[16/9] w-full object-cover md:h-full md:aspect-auto" />
        <div className="p-6 sm:p-10">
          <h2 className="text-3xl font-extrabold">Need a scrap pickup?</h2>
          <p className="mt-2 max-w-sm text-[var(--ink)]/75">Book now and our team will contact you as soon as possible.</p>
          <button onClick={open} className="mt-6 w-full rounded-full bg-[var(--accent)] px-7 py-4 font-bold text-white hover:brightness-95 sm:w-auto">Book Now</button>
        </div>
      </div>
    </section>
  );
}
