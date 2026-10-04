"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { reviews } from "@/lib/business";

export default function Reviews() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="display text-4xl sm:text-5xl">Trusted by many</h2>
      <p className="mt-2 text-sm text-white/50">Demo content — replace with real reviews.</p>
      <figure className="mt-6 rounded-[var(--radius)] border border-[var(--edge)] bg-[var(--panel)] p-6 sm:p-10" aria-live="polite">
        <blockquote className="display max-w-3xl text-2xl !leading-tight sm:text-4xl !normal-case">“{r.text}”</blockquote>
        <figcaption className="mt-5 flex items-center gap-3 font-semibold">{r.name}
          <span className="flex text-[var(--accent)]" aria-label={`${r.rating} out of 5 stars`}>{Array.from({ length: r.rating }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}</span>
        </figcaption>
      </figure>
      <div className="mt-4 flex gap-2">
        {reviews.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Show review ${k + 1}`} className={`h-1.5 w-10 rounded-full ${k === i ? "bg-[var(--accent)]" : "bg-[var(--edge)]"}`} />)}
      </div>
    </section>
  );
}
