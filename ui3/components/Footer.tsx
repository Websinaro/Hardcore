import { business, nav } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1.4fr]">
        <div><p className="font-display text-2xl font-semibold">{business.name}</p><p className="text-sm text-[var(--ink)]/60">{business.tagline}</p></div>
        <div><h3 className="text-sm font-medium">Quick links</h3><ul className="mt-3 space-y-2 text-sm text-[var(--ink)]/65">{nav.slice(0, 4).map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul></div>
        <div><h3 className="text-sm font-medium">Contact info</h3>
          <ul className="mt-3 text-sm">{business.phones.map((p) => <li key={p.href}><a href={p.href} className="inline-block py-1">{p.label}</a></li>)}</ul>
          <p className="mt-2 text-sm text-[var(--ink)]/65">{business.hours.map((h) => <span key={h.days} className="block">{h.days}: {h.time}</span>)}</p></div>
      </div>
      <div className="border-t border-[var(--line)] px-4 py-4 text-center text-xs text-[var(--ink)]/50">© {new Date().getFullYear()} {business.name}. UI prototype — demo content.</div>
    </footer>
  );
}
