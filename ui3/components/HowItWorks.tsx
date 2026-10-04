import { steps } from "@/lib/business";

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-4xl font-medium">How it works</h2>
      <ol className="mt-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t border-[var(--ink)] py-6 pr-6">
            <span className="font-display text-sm text-[var(--accent)]">Step {i + 1}</span>
            <h3 className="font-display mt-2 text-2xl font-medium">{s.title}</h3>
            <p className="mt-1 text-sm text-[var(--ink)]/65">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
