"use client";
import { useEffect, useState } from "react";
import { Check, Monitor, Smartphone, Tablet, X } from "lucide-react";

// Each template runs independently. Override the URLs with NEXT_PUBLIC_UI1_URL etc. if deployed elsewhere.
const templates = [
  { id: 1, name: "UI TEMPLATE 1", title: "Clean & Friendly", desc: "Light, rounded and approachable with soft green accents and a large booking call to action.", url: process.env.NEXT_PUBLIC_UI1_URL ?? "http://localhost:3001" },
  { id: 2, name: "UI TEMPLATE 2", title: "Bold & Industrial", desc: "Dark, high-contrast and powerful with condensed type and a bright green accent.", url: process.env.NEXT_PUBLIC_UI2_URL ?? "http://localhost:3002" },
  { id: 3, name: "UI TEMPLATE 3", title: "Premium & Minimal", desc: "Calm, editorial and sophisticated with serif headlines and large rounded imagery.", url: process.env.NEXT_PUBLIC_UI3_URL ?? "http://localhost:3003" },
];

const widths = { desktop: "100%", tablet: "820px", mobile: "390px" } as const;

function Mini({ id }: { id: number }) {
  if (id === 1) return (
    <div className="h-full bg-[#f8fcf7] p-3"><div className="flex h-3 items-center justify-between"><i className="h-2 w-10 rounded bg-green-600" /><i className="h-2 w-8 rounded-full bg-green-600" /></div>
      <div className="mt-4 grid grid-cols-2 gap-2"><div><i className="block h-3 w-20 rounded bg-[#12301f]" /><i className="mt-1 block h-3 w-16 rounded bg-[#12301f]" /><i className="mt-3 block h-3 w-12 rounded-full bg-green-600" /></div><i className="block h-20 rounded-2xl bg-green-100" /></div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">{[0,1,2,3].map(k => <i key={k} className="block h-10 rounded-lg bg-white ring-1 ring-green-100" />)}</div></div>);
  if (id === 2) return (
    <div className="h-full bg-[#090e0c] p-3"><div className="flex h-3 items-center justify-between"><i className="h-2 w-10 rounded bg-white" /><i className="h-2 w-8 rounded bg-[#2ee86b]" /></div>
      <div className="mt-3 h-24 rounded bg-gradient-to-r from-[#090e0c] to-[#3a4046] p-3"><i className="block h-4 w-24 rounded-sm bg-white" /><i className="mt-1 block h-4 w-16 rounded-sm bg-[#2ee86b]" /></div>
      <div className="mt-2 grid grid-cols-4 gap-1.5">{[0,1,2,3].map(k => <i key={k} className="block h-9 rounded-sm border-b-2 border-[#2ee86b] bg-[#131c18]" />)}</div></div>);
  return (
    <div className="h-full bg-white p-3"><div className="flex h-3 items-center justify-between"><i className="h-2 w-10 rounded bg-neutral-800" /><i className="h-2 w-8 rounded-full bg-neutral-800" /></div>
      <div className="mt-4 grid grid-cols-[1fr_1.1fr] gap-2"><div><i className="block h-3 w-16 rounded bg-neutral-800" /><i className="mt-1 block h-3 w-20 rounded bg-neutral-800" /><i className="mt-3 block h-3 w-12 rounded-full bg-neutral-800" /></div><i className="block h-20 rounded-3xl bg-green-100" /></div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">{[0,1,2,3].map(k => <i key={k} className="block h-10 rounded-xl bg-neutral-100" />)}</div></div>);
}

export default function Selector() {
  const [preview, setPreview] = useState<number | null>(null);
  const [chosen, setChosen] = useState<number | null>(null);
  const [device, setDevice] = useState<keyof typeof widths>("desktop");
  const active = templates.find((t) => t.id === preview);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">HARD CORE website designs</h1>
      <p className="mt-4 max-w-xl text-lg text-white/65">Three design directions for the same business. Preview each one, then choose the direction we develop into the full website.</p>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {templates.map((t) => (
          <li key={t.id} className={`flex flex-col rounded-3xl border p-4 ${chosen === t.id ? "border-green-400 bg-green-400/10" : "border-white/10 bg-white/[0.03]"}`}>
            <div className="h-52 overflow-hidden rounded-2xl ring-1 ring-white/10" aria-hidden><Mini id={t.id} /></div>
            <p className="mt-5 text-xs font-semibold tracking-wide text-green-400">{t.name}</p>
            <h2 className="mt-1 text-xl font-bold">{t.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{t.desc}</p>
            <div className="mt-5 flex gap-2">
              <button onClick={() => { setDevice("desktop"); setPreview(t.id); }} className="flex-1 rounded-full bg-white px-5 py-3 text-sm font-bold text-black hover:bg-white/90">Preview</button>
              {chosen === t.id && <span className="grid place-items-center rounded-full bg-green-400 px-3 text-black" aria-label="Selected"><Check size={18} /></span>}
            </div>
          </li>
        ))}
      </ul>
      {chosen && <p className="mt-6 text-sm text-green-300" role="status">Selected: UI Template {chosen}. Continue development in the /ui{chosen} folder.</p>}

      {active && (
        <div role="dialog" aria-modal="true" aria-label={`${active.name} preview`} className="fixed inset-0 z-50 flex flex-col bg-[#0a0e0c]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div className="font-bold">{active.name} <span className="font-normal text-white/50">· {active.title}</span></div>
            <div className="flex items-center gap-1" role="group" aria-label="Preview size">
              {([["desktop", Monitor], ["tablet", Tablet], ["mobile", Smartphone]] as const).map(([k, I]) => (
                <button key={k} onClick={() => setDevice(k)} aria-label={`${k} width`} aria-pressed={device === k} className={`rounded-lg p-2.5 ${device === k ? "bg-white text-black" : "text-white/70 hover:bg-white/10"}`}><I size={18} /></button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => { setChosen(active.id); setPreview(null); }} className="rounded-full bg-green-400 px-5 py-2.5 text-sm font-bold text-black">Choose this design</button>
              <button onClick={() => setPreview(null)} aria-label="Close preview" className="rounded-full border border-white/20 p-2.5"><X size={18} /></button>
            </div>
          </div>
          <div className="flex flex-1 justify-center overflow-hidden bg-[#1a201d] p-0 sm:p-4">
            <iframe key={active.id} src={active.url} title={`${active.name} preview`} style={{ width: widths[device], maxWidth: "100%" }} className="h-full rounded-none bg-white sm:rounded-xl" />
          </div>
          <p className="px-4 py-2 text-center text-xs text-white/40">Preview needs the template running at {active.url} (npm run dev from the project root starts all four).</p>
        </div>
      )}
    </main>
  );
}
