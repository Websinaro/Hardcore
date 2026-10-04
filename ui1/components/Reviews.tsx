"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import { reviews } from "@/lib/business";

export default function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-extrabold">What our customers say</h2>
      <p className="mt-1 text-sm text-[var(--ink)]/55">Demo content — to be replaced with real reviews.</p>
      <div className="mt-6 flex items-center gap-3">
        <button aria-label="Previous review" onClick={() => setI((i + reviews.length - 1) % reviews.length)} className="hidden rounded-full border border-[var(--line)] bg-white p-3 sm:block"><ChevronLeft size={18} /></button>
        <figure className="flex flex-1 items-center gap-5 rounded-[var(--radius)] border border-[var(--line)] bg-white p-5 sm:p-7" aria-live="polite">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[var(--mint)] text-[var(--accent)]"><User size={28} /></span>
          <div><blockquote className="text-base leading-relaxed">{r.text}</blockquote>
            <figcaption className="mt-3 flex items-center gap-3 text-sm font-bold">{r.name}
              <span className="flex text-amber-400" aria-label={`${r.rating} out of 5 stars`}>{Array.from({ length: r.rating }).map((_, k) => <Star key={k} size={15} fill="currentColor" />)}</span>
            </figcaption></div>
        </figure>
        <button aria-label="Next review" onClick={() => setI((i + 1) % reviews.length)} className="hidden rounded-full border border-[var(--line)] bg-white p-3 sm:block"><ChevronRight size={18} /></button>
      </div>
      <div className="mt-5 flex justify-center gap-2">
        {reviews.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Show review ${k + 1}`} className={`h-2.5 rounded-full transition-all ${k === i ? "w-8 bg-[var(--accent)]" : "w-2.5 bg-[var(--line)]"}`} />)}
      </div>
    </section>
  );
}
