"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { business, nav } from "@/lib/business";
import { useBooking } from "./BookingModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { open: book } = useBooking();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-xl font-extrabold tracking-tight text-[var(--accent)]">{business.name}</a>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-[var(--accent)]">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={book} className="rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-bold text-white hover:brightness-95">Book Scrap Pickup</button>
          <button className="rounded-full p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-[var(--line)] bg-white px-4 pb-4 lg:hidden">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-[var(--line)] py-3.5 text-base font-medium">{n.label}</a>)}
        </nav>
      )}
    </header>
  );
}
