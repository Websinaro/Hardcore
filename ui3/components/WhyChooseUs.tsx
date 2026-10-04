import { Clock, IndianRupee, Leaf, ShieldCheck } from "lucide-react";

const items = [
  { icon: IndianRupee, title: "Fair pricing", desc: "Clear and transparent." },
  { icon: Clock, title: "Fast service", desc: "Pickup on your schedule." },
  { icon: Leaf, title: "Eco friendly", desc: "Responsible recycling." },
  { icon: ShieldCheck, title: "Trusted team", desc: "Professional and reliable." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <h2 className="font-display text-4xl font-medium">Why choose us</h2>
      <ul className="mt-8 grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-[var(--line)]">
        {items.map(({ icon: I, title, desc }) => (
          <li key={title} className="md:px-6 md:first:pl-0">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--soft)] text-[var(--accent)]"><I size={22} /></span>
            <h3 className="mt-4 font-medium">{title}</h3><p className="mt-1 text-sm text-[var(--ink)]/60">{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
