import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { InternalHero } from "@/components/InternalHero";
import { SectionHeader } from "@/components/SectionHeader";
import { objectives } from "@/data/objectives";
import { valueHighlights, values } from "@/data/values";

export const metadata: Metadata = {
  title: "Empresa de Ar-Condicionado em Teófilo Otoni | Climatize",
  description: "Conheça a história, a missão e os valores da Climatize, empresa de climatização que atende Teófilo Otoni, o Vale do Jequitinhonha e o Vale do Mucuri com responsabilidade e excelência técnica.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Empresa de Ar-Condicionado em Teófilo Otoni | Climatize",
    description: "Conheça a história, a missão e os valores da Climatize Soluções em Ar Condicionado."
  }
};

export default function SobrePage() {
  return (
    <main>
      <InternalHero
        eyebrow="Sobre"
        title="Sobre a Climatize Soluções em Ar Condicionado"
        description="Uma empresa criada para oferecer soluções em climatização com responsabilidade, organização, cuidado e excelência técnica."
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 -z-10 rounded-2xl border border-climatize-blue/15" />
            <Image
              src="/images/ambiente-climatizado.jpg"
              alt="Ambiente climatizado com conforto térmico"
              width={800}
              height={960}
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[5/6] w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
          <SectionHeader
            eyebrow="História"
            title="Conhecimento técnico, compromisso e atenção à qualidade do ar"
            description="Nossa empresa nasceu com o propósito de oferecer soluções completas em climatização para empresas, comércios e instituições. Nosso trabalho une conhecimento técnico, compromisso com o cliente e atenção à qualidade do ar em cada ambiente atendido."
          />
        </div>
      </section>

      <section className="bg-climatize-lightBlue py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Essência" title="Missão, visão e valores" align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {valueHighlights.map((item, index) => (
              <article key={item.title} className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-soft">
                <span className="pointer-events-none absolute -right-4 -top-6 font-heading text-8xl font-bold text-climatize-lightBlue">
                  0{index + 1}
                </span>
                <div className="relative">
                  <item.icon className="mb-5 text-climatize-blue" size={30} />
                  <h2 className="font-heading text-xl font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {values.map((value, index) => (
              <span
                key={value}
                className={`rounded-full border px-4 py-2 text-sm font-semibold shadow-soft ${
                  index % 3 === 0
                    ? "border-climatize-accent/25 bg-climatize-accentLight text-climatize-accentDark"
                    : "border-climatize-blue/15 bg-white text-climatize-darkBlue"
                }`}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Objetivos" title="Objetivos da empresa" description="Trabalhamos para que empresas mantenham seus ambientes climatizados com organização, segurança e eficiência." align="center" />
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div className="absolute bottom-3 left-[19px] top-3 w-px bg-gradient-to-b from-climatize-blue/40 via-climatize-blue/15 to-transparent" />
            {objectives.map((objective, index) => (
              <div key={objective} className="relative flex gap-5 py-4">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-climatize-blue font-heading text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-2 font-medium leading-7 text-slate-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Conte com a Climatize para cuidar da climatização da sua empresa" text="Solicite uma proposta personalizada com uma equipe técnica organizada e comprometida." primaryLabel="Solicitar orçamento" />
    </main>
  );
}
