import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — QUANTUM LEAP" },
      { name: "description", content: "Common questions about our OEM and ODM beverage manufacturing services." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "What beverage categories can QUANTUM LEAP manufacture?", a: "We manufacture energy drinks, juices, flavored beverages, electrolyte drinks, soft drinks, and upcoming UHT, CSD and Canning products." },
  { q: "Do you provide OEM and ODM beverage services?", a: "Yes. We provide both OEM and ODM beverage manufacturing solutions tailored to client requirements." },
  { q: "What packaging formats are available?", a: "PET bottles, standing pouches, and future glass bottle packaging options are available." },
  { q: "Can QUANTUM LEAP support export production?", a: "Yes. Our facility is designed to support scalable production for both local and international markets." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <PageHero eyebrow="FAQ" title="Answers to the questions we hear most." subtitle="Don't see what you're looking for? Reach out to our team — we're happy to help." />
      <section className="py-20 mx-auto max-w-3xl px-4 lg:px-8">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left">
                <span className="font-display text-lg font-bold">{f.q}</span>
                {open === i ? <Minus className="h-5 w-5 text-primary shrink-0" /> : <Plus className="h-5 w-5 text-primary shrink-0" />}
              </button>
              {open === i && <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
