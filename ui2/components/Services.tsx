import { services } from "@/lib/business";
import { serviceIcons } from "@/lib/serviceIcons";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h2 className="display text-4xl sm:text-5xl">Our services</h2>
      <p className="mt-2 text-white/65">We collect and recycle a wide range of materials.</p>
      <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {services.map((s) => {
          const I = serviceIcons[s.id];
          return (
            <li key={s.id} className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--edge)] bg-[var(--panel)] p-5 md:p-6">
              <I className="text-[var(--accent)]" size={40} strokeWidth={1.6} aria-hidden />
              <h3 className="display mt-10 text-2xl sm:text-3xl">{s.title}</h3>
              <p className="mt-1 text-sm text-white/60">{s.desc}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-[var(--accent)]" aria-hidden />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
