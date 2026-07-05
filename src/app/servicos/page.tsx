import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { InternalHero } from "@/components/InternalHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ClimatizeTools } from "@/components/tools/ClimatizeTools";
import { serviceSegments, services } from "@/data/services";
import { getSegmentIcon } from "@/lib/segment-icons";

export const metadata: Metadata = {
  title: "Serviços de Ar-Condicionado em Teófilo Otoni | Climatize",
  description: "Manutenção preventiva, manutenção corretiva, instalação, higienização e PMOC: veja os serviços de climatização da Climatize para empresas no Vale do Jequitinhonha e no Vale do Mucuri.",
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: "Serviços de Ar-Condicionado em Teófilo Otoni | Climatize",
    description: "Manutenção, instalação, higienização e PMOC para empresas, clínicas, hospitais e comércios."
  }
};

export default function ServicosPage() {
  return (
    <main>
      <InternalHero
        eyebrow="Serviços"
        title="Serviços de climatização para empresas, comércios e instituições"
        description="Soluções completas em ar-condicionado para manter ambientes mais seguros, confortáveis e eficientes."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 -z-10 rounded-2xl border border-climatize-blue/15" />
              <Image
                src="/images/servicos-tecnico-detalhe.jpg"
                alt="Detalhe técnico de manutenção em unidade de ar condicionado"
                width={800}
                height={1200}
                sizes="(min-width: 1024px) 420px, 90vw"
                className="aspect-[2/3] w-full rounded-2xl object-cover shadow-soft"
              />
            </div>
            <SectionHeader eyebrow="Soluções" title="Conheça nossos serviços" description="Cada serviço foi estruturado para apoiar empresas que precisam de organização técnica, segurança e qualidade do ar." />
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} detailed />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-climatize-softGray py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Atendemos" title="Climatização para diferentes segmentos" align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceSegments.map((segment) => {
              const Icon = getSegmentIcon(segment);
              return (
                <div key={segment} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-5 font-bold text-slate-800">
                  <Icon className="text-climatize-blue" size={23} />
                  {segment}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ClimatizeTools />

      <CTA title="Quer organizar a climatização da sua empresa?" text="Fale com a Climatize e solicite uma proposta para manutenção, instalação, higienização ou PMOC." />
    </main>
  );
}
