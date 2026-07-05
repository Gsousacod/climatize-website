import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { InternalHero } from "@/components/InternalHero";
import { SectionHeader } from "@/components/SectionHeader";
import { getServiceBySlug, services } from "@/data/services";
import { getServiceIcon } from "@/lib/service-icons";

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: service.href },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription
    }
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const Icon = getServiceIcon(service.icon);

  return (
    <main>
      <InternalHero eyebrow="Serviço" title={`${service.shortTitle} em Teófilo Otoni`} description={service.details} />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="rounded-2xl bg-climatize-lightBlue p-8">
            <Icon className="mb-5 text-climatize-blue" size={38} />
            <h2 className="font-heading text-2xl font-bold text-slate-950">{service.title}</h2>
            <p className="mt-4 leading-8 text-slate-700">{service.description}</p>
          </div>
          <div>
            <SectionHeader eyebrow="Benefícios" title="Por que contratar este serviço?" />
            <div className="mt-8 grid gap-3">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-soft">
                  <CheckCircle2 className="mt-1 shrink-0 text-climatize-blue" size={20} />
                  <p className="font-medium text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-climatize-softGray py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader eyebrow="Indicação" title="Para quem é indicado" />
            <div className="mt-8 flex flex-wrap gap-3">
              {service.indicatedFor.map((item) => (
                <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-climatize-darkBlue shadow-soft">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Atendimento" title="Como funciona" />
            <div className="mt-8 grid gap-3">
              {service.steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-xl bg-white p-4 shadow-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-climatize-blue text-sm font-bold text-white">{index + 1}</span>
                  <p className="font-medium text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ items={service.faq} title={`Perguntas frequentes sobre ${service.shortTitle.toLowerCase()}`} />
      <CTA title={`Precisa de ${service.shortTitle.toLowerCase()}?`} text="Fale com a Climatize e solicite uma proposta personalizada para sua empresa." primaryLabel={service.cta} secondaryLabel="Ver todos os serviços" secondaryHref="/servicos" />
    </main>
  );
}
