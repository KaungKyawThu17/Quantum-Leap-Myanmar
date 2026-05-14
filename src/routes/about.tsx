import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import factoryImg from "@/assets/factory-aerial.jpg";
import boardDirectorImg from "@/assets/board-director.jpg";
import { Target, Eye, Quote } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Quantum Leap Beverage Manufacturing" },
      { name: "description", content: "Quantum Leap is a next-generation OEM & ODM beverage manufacturer in Myanmar, formerly Kaung Htet Myanmar Manufacturing." },
    ],
  }),
  component: About,
});

const team = [
  { name: "Ko Alvin Aung Zin", role: "Managing Director" },
  { name: "Mr Goi Mui Yong", role: "Factory Director" },
  { name: "U Zaw Zaw", role: "Plant Manager" },
];

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title="Building Myanmar's premier beverage manufacturing platform."
        subtitle="From Kaung Htet Myanmar Manufacturing to Quantum Leap — a new chapter of scale, technology, and global ambition."
      />

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <img src={factoryImg} alt="Factory" className="rounded-3xl shadow-soft" loading="lazy" width={1600} height={1000} />
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Company Overview</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5 leading-tight">A next-generation beverage manufacturer.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quantum Leap is focused on OEM and ODM beverage production. Formerly operating as Kaung Htet Myanmar Manufacturing, the facility previously produced recognized beverage brands such as <strong>Pokka Orange</strong> and <strong>Sponsor Energy</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Following acquisition in 2025, Quantum Leap has expanded operations to support products including <strong>7go, Spider, ISO Plus,</strong> and <strong>Burma Club Whisky</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye, title: "Our Vision", body: "To be Myanmar's premier OEM Champion, offering comprehensive and scalable beverage manufacturing solutions for emerging and established brands." },
            { icon: Target, title: "Our Mission", body: "To provide high-quality beverage manufacturing solutions through advanced technology, operational excellence, and strong partnerships while maintaining international food safety and quality standards." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-3xl bg-card border border-border p-10 hover:shadow-glow transition">
              <Icon className="h-10 w-10 text-primary mb-5" />
              <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3 text-center">Message from the Board</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">A welcome from our Board of Directors</h2>
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center rounded-3xl bg-gradient-brand text-white p-10 md:p-14 shadow-glow">
          <div>
            <Quote className="h-12 w-12 text-white/40 mb-6" />
            <div className="space-y-5 text-white/90 leading-relaxed">
              <p>At Quantum Leap Co. Ltd, we are driven by a strong commitment to quality, innovation, and long-term sustainable growth. We strive to produce high-quality beverages that meet international standards while serving the evolving needs of consumers across diverse markets.</p>
              <p>Our vision extends beyond manufacturing. We aim to build trusted brands, develop meaningful partnerships, and create long-term value through continuous investment in modern technology, operational excellence, product development, and human capital.</p>
              <p>We firmly believe that sustainable success is built upon integrity, innovation, and strong relationships with our customers, employees, suppliers, and business partners. Together with our management team and employees, we will continue working passionately to deliver products that consumers can enjoy with confidence.</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={boardDirectorImg}
              alt="Ko Alvin Aung Zin, Managing Director"
              className="w-64 md:w-72 lg:w-80 aspect-[4/5] object-cover rounded-2xl shadow-soft border-4 border-white/20"
              loading="lazy"
            />
            <div className="mt-4 text-center lg:text-left">
              <div className="font-display text-lg font-bold">Ko Alvin Aung Zin</div>
              <div className="text-sm text-white/70">Managing Director</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Leadership</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Meet our key management team</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="rounded-3xl bg-card border border-border p-8 text-center hover:shadow-glow transition">
              <div className="mx-auto h-24 w-24 rounded-full bg-gradient-brand flex items-center justify-center text-white font-display text-3xl font-bold mb-5">
                {m.name.split(" ").map(p => p[0]).slice(0, 2).join("")}
              </div>
              <div className="font-display text-xl font-bold">{m.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.role}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
