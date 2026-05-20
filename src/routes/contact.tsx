import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — QUANTUM LEAP" },
      { name: "description", content: "Get in touch with our OEM beverage manufacturing team in Yangon, Myanmar." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();
  return (
    <Layout>
      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        subtitle={t("contact.hero.subtitle")}
      />

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <ContactCard icon={Building2} title={t("contact.card.company.title")} lines={[t("contact.card.company.line1")]} />
          <ContactCard
            icon={MapPin}
            title={t("contact.card.visit.title")}
            lines={[
              t("contact.card.visit.line1"),
              t("contact.card.visit.line2"),
              t("contact.card.visit.line3"),
              t("contact.card.visit.line4"),
            ]}
          />
          <ContactCard icon={Phone} title={t("contact.card.call.title")} lines={["0942458350", "09424548351"]} />
          <ContactCard icon={Mail} title={t("contact.card.email.title")} lines={["info@quantumleap.com.mm"]} />
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
        >
          <h2 className="font-display text-2xl font-bold mb-1">{t("contact.form.title")}</h2>
          <p className="text-muted-foreground text-sm mb-6">{t("contact.form.subtitle")}</p>
          {sent ? (
            <div className="rounded-2xl bg-accent/20 text-foreground p-6 text-center">
              {t("contact.form.thanks")}
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label={t("contact.form.name")}><input required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></Field>
                <Field label={t("contact.form.company")}><input className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></Field>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label={t("contact.form.email")}><input type="email" required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></Field>
                <Field label={t("contact.form.phone")}><input className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></Field>
              </div>
              <Field label={t("contact.form.service")}>
                <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>{t("contact.service.oem")}</option>
                  <option>{t("contact.service.odm")}</option>
                  <option>{t("contact.service.production")}</option>
                  <option>{t("contact.service.other")}</option>
                </select>
              </Field>
              <Field label={t("contact.form.message")}><textarea rows={5} required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" /></Field>
              <button type="submit" className="mt-2 rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition">
                {t("contact.form.submit")}
              </button>
            </div>
          )}
        </form>
      </section>

      <section className="pb-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
          <iframe
            title={t("contact.map.title")}
            src="https://www.google.com/maps?q=Quantum+Leap+Co.,+Ltd.,+No.351/352+11th+Road,+Yangon+11021&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}

function ContactCard({ icon: Icon, title, lines }: { icon: React.ElementType; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
      <div className="h-11 w-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="font-display font-bold mb-1">{title}</div>
        {lines.map((l, i) => <div key={i} className="text-sm text-muted-foreground leading-relaxed">{l}</div>)}
      </div>
    </div>
  );
}
