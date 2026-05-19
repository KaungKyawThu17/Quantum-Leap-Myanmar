import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { useState } from "react";

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
  return (
    <Layout>
      <PageHero eyebrow="Contact" title="Let's build your next beverage brand." subtitle="For OEM beverage partnerships and manufacturing enquiries, contact our business development team." />

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <ContactCard icon={Building2} title="QUANTUM LEAP Beverage Mfg." lines={["A next-generation OEM & ODM beverage manufacturer based in Yangon."]} />
          <ContactCard icon={MapPin} title="Visit our factory" lines={["No.351–352, No.3 High Road,", "R-11 Mingalardon Garden City,", "Yangon Industrial Zone (3),", "Mingalardon Township, Yangon, Myanmar"]} />
          <ContactCard icon={Phone} title="Call us" lines={["+95 95001439", "+95 9972115209"]} />
          <ContactCard icon={Mail} title="Email" lines={["info@quantumleap.com.mm"]} />
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
        >
          <h2 className="font-display text-2xl font-bold mb-1">Send us a message</h2>
          <p className="text-muted-foreground text-sm mb-6">We typically respond within 1 business day.</p>
          {sent ? (
            <div className="rounded-2xl bg-accent/20 text-foreground p-6 text-center">
              Thank you — your message has been received. Our team will be in touch shortly.
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Name"><input required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></Field>
                <Field label="Company"><input className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></Field>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Email"><input type="email" required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></Field>
                <Field label="Phone"><input className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" /></Field>
              </div>
              <Field label="Service interest">
                <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>OEM Manufacturing</option>
                  <option>ODM Solutions</option>
                  <option>Production Capabilities</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Message"><textarea rows={5} required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" /></Field>
              <button type="submit" className="mt-2 rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition">
                Send Message
              </button>
            </div>
          )}
        </form>
      </section>

      <section className="pb-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
          <iframe
            title="QUANTUM LEAP factory location"
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
