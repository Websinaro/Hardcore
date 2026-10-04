"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { business, nav } from "@/lib/business";
import { useBooking } from "./BookingModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { open: book } = useBooking();
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-2xl font-semibold">{business.name}</a>
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm lg:flex">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-[var(--ink)]/70 hover:text-[var(--ink)]">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={book} className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-medium text-white">Book Pickup</button>
          <button className="p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="mx-4 mb-3 rounded-3xl bg-[var(--soft)] p-3 lg:hidden">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3.5 text-base hover:bg-white">{n.label}</a>)}
        </nav>
      )}
    </header>
  );
}
