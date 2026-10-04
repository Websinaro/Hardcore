"use client";
import { Clock, Leaf, ShieldCheck, Tag, type LucideIcon } from "lucide-react";
import { useBooking } from "./BookingModal";

const perks: { icon: LucideIcon; title: string; sub: string }[] = [
  { icon: Clock, title: "Fast pickup", sub: "On time" },
  { icon: Tag, title: "Fair pricing", sub: "For your scrap" },
  { icon: Leaf, title: "Eco-friendly", sub: "Recycling" },
  { icon: ShieldCheck, title: "Trusted team", sub: "Professional" },
];

export default function Hero() {
  const { open } = useBooking();
  return (
    <section id="top">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-8 sm:px-6 md:grid-cols-2 md:py-16">
        <div>
          <p className="text-sm font-semibold text-[var(--accent)]">Recycle today for a cleaner tomorrow</p>
          <h1 className="mt-3 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">HARD CORE<span className="mt-1 block text-3xl font-bold sm:text-4xl lg:text-5xl">Scrap collection made easy</span></h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--ink)]/75">We collect metal, plastic, paper and e-waste from homes, offices and industrial sites.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button onClick={open} className="rounded-full bg-[var(--accent)] px-7 py-4 text-base font-bold text-white hover:brightness-95">Book Scrap Pickup</button>
            <a href="#how" className="rounded-full border-2 border-[var(--accent)] px-7 py-4 text-center text-base font-bold text-[var(--accent)] hover:bg-[var(--mint)]">Learn More</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-[var(--mint)]">
          <img src="/images/hero.svg" alt="Demo image: hand holding a green globe with a recycling symbol" className="aspect-[4/3] w-full object-cover md:aspect-square" />
        </div>
      </div>
      <div className="border-y border-[var(--line)] bg-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-5 sm:px-6 md:grid-cols-4">
          {perks.map(({ icon: I, title, sub }) => (
            <li key={title} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--mint)] text-[var(--accent)]"><I size={22} /></span>
              <span><b className="block text-sm">{title}</b><span className="text-xs text-[var(--ink)]/60">{sub}</span></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
