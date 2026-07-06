import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClientsGrid } from "@/components/ClientsGrid";
import { CTA } from "@/components/CTA";
import { Differentials } from "@/components/Differentials";
import { HomeHero } from "@/components/HomeHero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SocialProof } from "@/components/SocialProof";
import { ClimatizeTools } from "@/components/tools/ClimatizeTools";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Climatize Soluções em Ar Condicionado em Teófilo Otoni",
  description:
    "Manutenção, instalação, higienização e PMOC de ar-condicionado para empresas, clínicas, hospitais e hotéis em Teófilo Otoni, Vale do Jequitinhonha e Vale do Mucuri.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Climatize Soluções em Ar Condicionado em Teófilo Otoni",
    description:
      "Manutenção preventiva e corretiva, instalação, higienização e PMOC para empresas e instituições em Teófilo Otoni e região.",
  },
};

export default function Home() {
  const featuredServices = services.slice(0, 6);

  return (
    <main>
      <HomeHero />
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative mx-auto w-full max-w-md lg:order-2">
            <div className="absolute -inset-3 -z-10 rounded-2xl border border-climatize-blue/15" />
            <Image
              src="/images/about-tecnico-inspecao.jpg"
              alt="Técnico da Climatize inspecionando unidade de ar condicionado"
              width={720}
              height={860}
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[5/6] w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
          <div className="lg:order-1">
            <SectionHeader
              eyebrow="Quem somos"
              title="Soluções completas em climatização"
              description="A Climatize Soluções em Ar Condicionado une conhecimento técnico, organização e responsabilidade para entregar serviços confiáveis em climatização empresarial e comercial."
            />
            <div className="mt-8 rounded-2xl bg-climatize-lightBlue p-8">
              <p className="text-lg leading-8 text-slate-700">
                Atuamos com foco em empresas e instituições que precisam de
                ambientes confortáveis, seguros e bem acompanhados tecnicamente.
              </p>
              <Link
                href="/sobre"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-climatize-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-climatize-darkBlue"
              >
                Saiba mais sobre a Climatize
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-climatize-softGray py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Serviços"
            title="Nossos principais serviços"
            description="Soluções essenciais para manter a climatização da sua empresa organizada, eficiente e segura."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 rounded-md bg-climatize-blue px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-climatize-darkBlue"
            >
              Ver todos os serviços
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <ClimatizeTools />
      {/* <ClientsGrid /> */}
      <SocialProof />s
      <Differentials />
      <CTA
        title="Precisa de manutenção, instalação, higienização ou PMOC?"
        text="Fale com a Climatize e solicite uma proposta personalizada para sua empresa."
        secondaryLabel="Ir para contato"
        secondaryHref="/contato"
      />
    </main>
  );
}
