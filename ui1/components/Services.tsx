import { ArrowRight } from "lucide-react";
import { services } from "@/lib/business";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h2 className="text-3xl font-extrabold">Our scrap collection services</h2>
      <p className="mt-2 text-[var(--ink)]/70">We collect a wide range of recyclable materials.</p>
      <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {services.map((s) => (
          <li key={s.id} className="overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-white">
            <img src={s.image} alt={`Demo image: ${s.title}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="flex items-center justify-between gap-2 p-4">
              <div><h3 className="font-bold">{s.title}</h3><p className="text-xs text-[var(--ink)]/60 sm:text-sm">{s.desc}</p></div>
              <ArrowRight size={18} className="shrink-0 text-[var(--accent)]" aria-hidden />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
