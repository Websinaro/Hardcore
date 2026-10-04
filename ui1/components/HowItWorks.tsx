import { CalendarCheck, FileText, Phone, Wallet, type LucideIcon } from "lucide-react";
import { steps } from "@/lib/business";

const icons: LucideIcon[] = [FileText, Phone, CalendarCheck, Wallet];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-extrabold">How it works</h2>
      <p className="mt-2 text-[var(--ink)]/70">Getting rid of scrap is simple and hassle-free.</p>
      <ol className="relative mt-10 grid gap-8 md:grid-cols-4">
        <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-[var(--accent)]/40 md:block" aria-hidden />
        {steps.map((s, i) => {
          const I = icons[i];
          return (
            <li key={s.title} className="relative flex items-start gap-4 md:flex-col md:items-center md:text-center">
              <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[var(--mint)] text-[var(--accent)] ring-4 ring-[#f8fcf7]"><I size={26} /></span>
              <div><p className="text-xs font-bold text-[var(--accent)]">Step {i + 1}</p><h3 className="font-bold">{s.title}</h3><p className="text-sm text-[var(--ink)]/65">{s.desc}</p></div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
