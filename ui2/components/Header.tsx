"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { business, nav } from "@/lib/business";
import { useBooking } from "./BookingModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { open: book } = useBooking();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--edge)] bg-[var(--bg)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="display text-3xl leading-none">{business.name}</a>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-white/75 hover:text-[var(--accent)]">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={book} className="hidden rounded-[var(--radius-sm)] bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-[var(--accent-fg)] sm:block">Book Pickup</button>
          <button className="p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-[var(--edge)] bg-[var(--bg)] px-4 pb-4 lg:hidden">
          {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="display block border-b border-[var(--edge)] py-4 text-2xl">{n.label}</a>)}
        </nav>
      )}
    </header>
  );
}
