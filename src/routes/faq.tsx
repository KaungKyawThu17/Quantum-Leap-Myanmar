import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — QUANTUM LEAP" },
      {
        name: "description",
        content: "Frequently asked questions about OEM and ODM beverage manufacturing services.",
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  const { content } = useLanguage();
  const copy = content.faq;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />
      <section className="py-20 mx-auto max-w-3xl px-4 lg:px-8">
        <div className="space-y-3">
          {copy.items.map((f, i) => {
            const isOpen = open === i;
            const triggerId = `faq-trigger-${i}`;
            const panelId = `faq-panel-${i}`;

            return (
              <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
                <button
                  id={triggerId}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="focus-ring w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg font-bold">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
                  )}
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className="px-6 pb-6 text-muted-foreground leading-relaxed"
                >
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
