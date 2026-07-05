import type { Metadata } from "next";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { InternalHero } from "@/components/InternalHero";
import { MapSection } from "@/components/MapSection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Orçamento de Ar-Condicionado em Teófilo Otoni | Climatize",
  description: "Solicite orçamento de manutenção, instalação, higienização ou PMOC com a Climatize. Atendimento em Teófilo Otoni, Vale do Jequitinhonha e Vale do Mucuri.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Orçamento de Ar-Condicionado em Teófilo Otoni | Climatize",
    description: "Fale com a Climatize e solicite uma proposta personalizada para sua empresa."
  }
};

const contactCards = [
  { label: "WhatsApp", value: "Solicitar orçamento", icon: MessageCircle },
  { label: "Telefone", value: company.phone || "A definir", icon: Phone },
  { label: "E-mail", value: company.email || "A definir", icon: Mail },
  { label: "Instagram", value: company.instagram, icon: Instagram },
  { label: "Cidade", value: `${company.city} - ${company.state}`, icon: MapPin },
  { label: "Área de atendimento", value: company.serviceArea, icon: MapPin }
];

export default function ContatoPage() {
  return (
    <main>
      <InternalHero
        eyebrow="Contato"
        title="Entre em contato com a Climatize"
        description="Solicite um orçamento para manutenção, instalação, higienização, PMOC ou suporte técnico em climatização."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              const isAccent = index % 3 === 1;
              return (
                <div key={card.label} className="rounded-2xl border border-slate-100 bg-climatize-softGray p-6">
                  <span
                    className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${
                      isAccent ? "bg-climatize-accentLight text-climatize-accentDark" : "bg-climatize-lightBlue text-climatize-blue"
                    }`}
                  >
                    <Icon size={22} />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-climatize-blue">{card.label}</p>
                  <p className="mt-2 font-heading font-bold text-slate-950">{card.value}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-md bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-[#128C4A]">
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ContactForm />
      <MapSection />
    </main>
  );
}
