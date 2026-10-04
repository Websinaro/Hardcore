"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviews } from "@/lib/business";

export default function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-4xl font-medium">Customer reviews</h2>
      <p className="mt-2 text-sm text-[var(--ink)]/50">Demo content — to be replaced with real reviews.</p>
      <div className="mt-8 rounded-[var(--radius)] bg-[var(--soft)] p-6 sm:p-10">
        <figure aria-live="polite">
          <span className="flex text-amber-500" aria-label={`${r.rating} out of 5 stars`}>{Array.from({ length: r.rating }).map((_, k) => <Star key={k} size={18} fill="currentColor" />)}</span>
          <blockquote className="font-display mt-4 max-w-2xl text-2xl leading-snug sm:text-3xl">“{r.text}”</blockquote>
          <figcaption className="mt-4 text-sm font-medium">{r.name}</figcaption>
        </figure>
        <div className="mt-6 flex gap-2">
          <button aria-label="Previous review" onClick={() => setI((i + reviews.length - 1) % reviews.length)} className="rounded-full border border-[var(--ink)]/20 bg-white p-3"><ChevronLeft size={18} /></button>
          <button aria-label="Next review" onClick={() => setI((i + 1) % reviews.length)} className="rounded-full border border-[var(--ink)]/20 bg-white p-3"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}
