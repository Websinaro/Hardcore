import { business, nav, services } from "@/lib/business";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--deep)] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div><p className="text-2xl font-extrabold text-[#4ade80]">{business.name}</p><p className="text-sm opacity-70">{business.tagline}</p></div>
        <div><h3 className="font-bold">Quick links</h3><ul className="mt-3 space-y-2 text-sm opacity-80">{nav.slice(0, 5).map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul></div>
        <div><h3 className="font-bold">Our services</h3><ul className="mt-3 space-y-2 text-sm opacity-80">{services.map((s) => <li key={s.id}>{s.title}</li>)}</ul></div>
        <div><h3 className="font-bold">Contact us</h3>
          <ul className="mt-3 space-y-2 text-sm">{business.phones.map((p) => <li key={p.href}><a href={p.href} className="inline-block py-1 font-semibold">{p.label}</a></li>)}</ul>
          <p className="mt-3 text-sm opacity-80">{business.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</p></div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs opacity-60">© {new Date().getFullYear()} {business.name}. UI prototype — demo content.</div>
    </footer>
  );
}
