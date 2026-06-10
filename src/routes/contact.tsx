import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { useCallback, useState, type FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type InquiryCategory = "beverage" | "packaging";
type SubmitStatus = "idle" | "submitting" | "sent" | "error";
type ContactLine =
  | string
  | {
      label: string;
      value: string;
      href?: string;
    };

type ContactSearch = {
  category?: InquiryCategory;
  product?: string;
};

const generalInquiriesEmail = "info@quantumleap-mm.com";
const quotationsEmail = "cs@quantumleap-mm.com";
const turnstileSiteKey =
  import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ||
  (import.meta.env.DEV ? "1x00000000000000000000AA" : "");

const serviceValues = {
  general: "General Inquiry",
  oem: "OEM Manufacturing",
  development: "Product Development",
  production: "Production Capabilities",
  career: "Career",
  other: "Other",
} as const;

function parseInquiryCategory(value: unknown): InquiryCategory | undefined {
  return value === "beverage" || value === "packaging" ? value : undefined;
}

function parseSearchText(value: unknown) {
  if (typeof value !== "string") return undefined;

  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, 80) : undefined;
}

export const Route = createFileRoute("/contact")({
  validateSearch: (search): ContactSearch => ({
    category: parseInquiryCategory(search.category),
    product: parseSearchText(search.product),
  }),
  head: () => ({
    meta: [
      { title: "Contact Us — QUANTUM LEAP" },
      {
        name: "description",
        content: "Get in touch with our OEM beverage manufacturing team in Yangon, Myanmar.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const search = Route.useSearch();
  const { content } = useLanguage();
  const copy = content.contact;
  const categoryLabel = search.category
    ? copy.inquiry.categoryLabels[search.category]
    : copy.inquiry.categoryLabels.product;
  const defaultMessage = search.product
    ? copy.inquiry.defaultMessage(search.product, categoryLabel)
    : undefined;
  const sent = submitStatus === "sent";
  const submitting = submitStatus === "submitting";
  const handleTurnstileToken = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!turnstileToken) return;

    setSubmitStatus("submitting");

    try {
      const formData = new FormData(event.currentTarget);
      formData.set("cf-turnstile-response", turnstileToken);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Contact form failed with status ${response.status}`);
      }

      setSubmitStatus("sent");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setTurnstileToken("");
      setTurnstileResetKey((key) => key + 1);
    }
  };

  return (
    <Layout>
      <PageHero eyebrow={copy.hero.eyebrow} title={copy.hero.title} subtitle={copy.hero.subtitle} />

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <ContactCard
            icon={Building2}
            title={copy.cards.company.title}
            lines={[...copy.cards.company.lines]}
          />
          <ContactCard
            icon={MapPin}
            title={copy.cards.visit.title}
            lines={[...copy.cards.visit.lines]}
          />
          <ContactCard
            icon={Phone}
            title={copy.cards.call.title}
            lines={[...copy.cards.call.lines]}
          />
          <ContactCard
            icon={Mail}
            title={copy.cards.email.title}
            lines={[
              {
                label: copy.cards.email.general,
                value: generalInquiriesEmail,
                href: `mailto:${generalInquiriesEmail}`,
              },
              {
                label: copy.cards.email.quotations,
                value: quotationsEmail,
                href: `mailto:${quotationsEmail}`,
              },
            ]}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
        >
          <h2 className="font-display text-2xl font-bold mb-1">{copy.form.title}</h2>
          <p className="text-muted-foreground text-sm mb-6">{copy.form.subtitle}</p>
          {sent ? (
            <div
              className="rounded-2xl bg-accent/20 text-foreground p-6 text-center"
              role="status"
              aria-live="polite"
            >
              {copy.form.thanks}
            </div>
          ) : (
            <div className="grid gap-4">
              {submitStatus === "error" && (
                <div
                  className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-foreground"
                  role="alert"
                >
                  {copy.form.error}
                </div>
              )}
              {search.product && (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {copy.inquiry.context}
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-foreground">
                    {search.product}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {copy.inquiry.selected(categoryLabel)}
                  </p>
                </div>
              )}
              <input type="hidden" name="inquiry_product" value={search.product ?? ""} />
              <input type="hidden" name="inquiry_category" value={search.category ?? ""} />
              <div
                className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label={copy.form.name}>
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    className="focus-ring w-full rounded-xl border border-input bg-background px-4 py-3 text-sm"
                  />
                </Field>
                <Field label={copy.form.company}>
                  <input
                    name="company"
                    autoComplete="organization"
                    className="focus-ring w-full rounded-xl border border-input bg-background px-4 py-3 text-sm"
                  />
                </Field>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label={copy.form.email}>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="focus-ring w-full rounded-xl border border-input bg-background px-4 py-3 text-sm"
                  />
                </Field>
                <Field label={copy.form.phone}>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    className="focus-ring w-full rounded-xl border border-input bg-background px-4 py-3 text-sm"
                  />
                </Field>
              </div>
              <Field label={copy.form.service}>
                <select
                  name="service_interest"
                  defaultValue={serviceValues.oem}
                  className="focus-ring w-full rounded-xl border border-input bg-background px-4 py-3 text-sm"
                >
                  <option value={serviceValues.general}>{copy.services.general}</option>
                  <option value={serviceValues.oem}>{copy.services.oem}</option>
                  <option value={serviceValues.development}>{copy.services.development}</option>
                  <option value={serviceValues.production}>{copy.services.production}</option>
                  <option value={serviceValues.career}>{copy.services.career}</option>
                  <option value={serviceValues.other}>{copy.services.other}</option>
                </select>
              </Field>
              <Field label={copy.form.message}>
                <textarea
                  key={defaultMessage ?? "blank-message"}
                  name="message"
                  rows={5}
                  required
                  defaultValue={defaultMessage}
                  className="focus-ring w-full rounded-xl border border-input bg-background px-4 py-3 text-sm resize-none"
                />
              </Field>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {copy.form.security}
                </p>
                <TurnstileWidget
                  key={turnstileResetKey}
                  siteKey={turnstileSiteKey}
                  errorMessage={copy.form.securityError}
                  onTokenChange={handleTurnstileToken}
                />
              </div>
              <button
                type="submit"
                disabled={submitting || !turnstileToken}
                className="focus-ring mt-2 rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-glow motion-safe:hover:scale-[1.02] transition-transform duration-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:motion-safe:hover:scale-100"
              >
                {submitting ? copy.form.sending : copy.form.submit}
              </button>
            </div>
          )}
        </form>
      </section>

      <section className="pb-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-border shadow-soft">
          <iframe
            title={copy.map.title}
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
      <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ElementType;
  title: string;
  lines: ContactLine[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
      <div className="h-11 w-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="font-display font-bold mb-1">{title}</div>
        {lines.map((line, i) => (
          <div key={i} className="text-sm text-muted-foreground leading-relaxed">
            {typeof line === "string" ? (
              line
            ) : (
              <>
                <span className="font-medium text-foreground/80">{line.label}: </span>
                {line.href ? (
                  <a className="focus-ring rounded-sm hover:text-accent" href={line.href}>
                    {line.value}
                  </a>
                ) : (
                  line.value
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
