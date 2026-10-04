import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/business";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-4xl font-medium">Our services</h2>
      <p className="mt-2 text-[var(--ink)]/65">We handle all types of recyclable materials.</p>
      <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {services.map((s) => (
          <li key={s.id} className="rounded-3xl bg-[var(--soft)] p-2.5">
            <img src={s.image} alt={`Demo image: ${s.title}`} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />
            <div className="flex items-center justify-between gap-2 px-2 pb-2 pt-4">
              <h3 className="font-medium">{s.title}</h3>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white" aria-hidden><ArrowUpRight size={16} /></span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
