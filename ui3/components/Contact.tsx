import { Phone } from "lucide-react";
import { business } from "@/lib/business";

// Only confirmed phone numbers are used. No WhatsApp button until the number is confirmed.
export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col gap-6 rounded-[var(--radius)] bg-[var(--ink)] p-6 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
        <div><h2 className="font-display text-3xl font-medium sm:text-4xl">Need help?</h2><p className="mt-2 max-w-sm text-white/70">Call us now or book online. We’ll get back to you quickly.</p></div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {business.phones.map((p, i) => (
            <a key={p.href} href={p.href} className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium ${i === 0 ? "bg-white text-[var(--ink)]" : "border border-white/40"}`}><Phone size={17} />{p.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
