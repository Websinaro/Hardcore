import { business, nav, services } from "@/lib/business";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--edge)] bg-[#060a08]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div><p className="display text-4xl text-[var(--accent)]">{business.name}</p><p className="mt-1 text-sm text-white/60">{business.tagline}</p></div>
        <div><h3 className="font-bold">Quick links</h3><ul className="mt-3 space-y-2 text-sm text-white/70">{nav.slice(0, 5).map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul></div>
        <div><h3 className="font-bold">Our services</h3><ul className="mt-3 space-y-2 text-sm text-white/70">{services.map((s) => <li key={s.id}>{s.title}</li>)}</ul></div>
        <div><h3 className="font-bold">Contact us</h3>
          <ul className="mt-3 space-y-1 text-sm">{business.phones.map((p) => <li key={p.href}><a href={p.href} className="inline-block py-1 font-semibold">{p.label}</a></li>)}</ul>
          <p className="mt-3 text-sm text-white/70">{business.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</p></div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} {business.name}. UI prototype — demo content.</div>
    </footer>
  );
}
