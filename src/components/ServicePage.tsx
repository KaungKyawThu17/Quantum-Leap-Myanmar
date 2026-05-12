import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

export function ServicePage({
  eyebrow, title, subtitle, intro, sections,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  intro?: string;
  sections: { heading: string; body?: string; bullets?: string[]; items?: { title: string; body: string }[] }[];
}) {
  return (
    <Layout>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="py-20 mx-auto max-w-5xl px-4 lg:px-8">
        {intro && <p className="text-lg text-muted-foreground leading-relaxed mb-12">{intro}</p>}
        <div className="space-y-12">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{s.heading}</h2>
              {s.body && <p className="text-muted-foreground leading-relaxed mb-5">{s.body}</p>}
              {s.bullets && (
                <ul className="grid md:grid-cols-2 gap-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-xl bg-muted/40 px-4 py-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.items && (
                <div className="grid md:grid-cols-2 gap-4">
                  {s.items.map((it, j) => (
                    <div key={j} className="rounded-2xl border border-border bg-card p-6">
                      <div className="font-display text-lg font-bold mb-2 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-white text-sm">{j + 1}</span>
                        {it.title}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{it.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-brand p-10 text-white text-center shadow-glow">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Ready to discuss your project?</h3>
          <p className="text-white/80 mb-6">Our team will guide you from initial enquiry to scaled production.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-foreground px-6 py-3 font-semibold hover:scale-105 transition">
            Contact our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
