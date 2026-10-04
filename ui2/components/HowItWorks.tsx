import { steps } from "@/lib/business";

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="display text-4xl sm:text-5xl">How it works</h2>
      <ol className="mt-8 grid gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--edge)] bg-[var(--edge)] sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="bg-[var(--panel)] p-6">
            <span className="display text-6xl text-[var(--accent)]">{i + 1}</span>
            <h3 className="display mt-4 text-2xl">{s.title}</h3>
            <p className="mt-1 text-sm text-white/60">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
