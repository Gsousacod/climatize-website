"use client";

import { motion } from "framer-motion";
import { aboutCards } from "@/data/values";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeader
            eyebrow="Sobre"
            title="Sobre a Climatize Soluções em Ar Condicionado"
            description="A Climatize Soluções em Ar Condicionado nasceu com o propósito de oferecer soluções completas em climatização, unindo conhecimento técnico, responsabilidade e cuidado em cada atendimento. Atuamos com manutenção preventiva e corretiva, instalação de equipamentos, higienização, PMOC e acompanhamento técnico para empresas que precisam manter seus ambientes seguros, confortáveis e eficientes."
          />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} variants={fadeUp} className="rounded-md border border-slate-100 bg-climatize-softGray p-6 shadow-soft transition hover:-translate-y-1 hover:bg-climatize-lightBlue">
                  <Icon className="mb-5 text-climatize-blue" size={30} />
                  <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
