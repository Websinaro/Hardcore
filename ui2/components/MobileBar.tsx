"use client";
import { Phone } from "lucide-react";
import { business } from "@/lib/business";
import { useBooking } from "./BookingModal";

// Sticky call/book bar, mobile only.
export default function MobileBar() {
  const { open } = useBooking();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-[var(--edge)] bg-[var(--bg)] p-3 md:hidden">
      <a href={business.phones[0].href} className="flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-white/40 py-3.5 font-bold"><Phone size={18} />Call Now</a>
      <button onClick={open} className="rounded-[var(--radius-sm)] bg-[var(--accent)] py-3.5 font-bold text-[var(--accent-fg)]">Book Pickup Now</button>
    </div>
  );
}
