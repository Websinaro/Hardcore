"use client";
import { createContext, useContext, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, X } from "lucide-react";
import { scrapTypes } from "@/lib/business";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });
export const useBooking = () => useContext(Ctx);

// Frontend-only demo: nothing is sent anywhere. Colors come from CSS variables in globals.css.
export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const close = () => { setOpen(false); setDone(false); };
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [isOpen]);

  const submit = (e: FormEvent) => { e.preventDefault(); setDone(true); };
  const field = "mt-1.5 w-full rounded-[var(--radius-sm)] border border-[var(--line)] bg-[var(--surface)] px-3.5 py-3 text-base text-[var(--ink)] outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30";

  return (
    <Ctx.Provider value={{ open: () => setOpen(true) }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4" onClick={close}>
          <div role="dialog" aria-modal="true" aria-labelledby="book-title" onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full overflow-y-auto rounded-t-[var(--radius)] bg-[var(--surface)] p-6 text-[var(--ink)] shadow-2xl sm:max-w-lg sm:rounded-[var(--radius)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h2 id="book-title" className="font-display text-2xl font-bold">{done ? "Request received" : "Book a pickup"}</h2>
              <button onClick={close} aria-label="Close" className="rounded-full p-2 hover:bg-black/5"><X size={22} /></button>
            </div>
            {done ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto text-[var(--accent)]" size={56} />
                <p className="mt-4 text-lg font-semibold">Thank you! Your pickup request has been received.</p>
                <p className="mt-2 text-sm opacity-70">Prototype demo only — no data was sent or saved.</p>
                <button onClick={close} className="mt-6 rounded-[var(--radius-sm)] bg-[var(--accent)] px-6 py-3 font-semibold text-[var(--accent-fg)]">Close</button>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-5 space-y-4">
                <label className="block text-sm font-medium">Name<input required name="name" autoComplete="name" className={field} /></label>
                <label className="block text-sm font-medium">Phone<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" className={field} /></label>
                <label className="block text-sm font-medium">Scrap type
                  <select required name="type" defaultValue="" className={field}>
                    <option value="" disabled>Select a type</option>
                    {scrapTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </label>
                <label className="block text-sm font-medium">Pickup location<input required name="location" autoComplete="street-address" className={field} /></label>
                <label className="block text-sm font-medium">Preferred pickup time<input required name="time" type="datetime-local" className={field} /></label>
                <label className="block text-sm font-medium">Photo (optional)<input name="photo" type="file" accept="image/*" className={field + " file:mr-3 file:rounded file:border-0 file:bg-[var(--accent)] file:px-3 file:py-1.5 file:text-[var(--accent-fg)]"} /></label>
                <button type="submit" className="w-full rounded-[var(--radius-sm)] bg-[var(--accent)] px-6 py-3.5 text-base font-bold text-[var(--accent-fg)] hover:brightness-95">Send pickup request</button>
                <p className="text-center text-xs opacity-60">Demo form — for presentation only.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
