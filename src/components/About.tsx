"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutCards } from "@/data/values";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-3 -z-10 rounded-2xl border border-climatize-blue/15" />
            <Image
              src="/images/about-tecnico-inspecao.jpg"
              alt="Técnico da Climatize inspecionando unidade de ar condicionado"
              width={720}
              height={860}
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[5/6] w-full rounded-2xl object-cover shadow-soft"
            />
          </motion.div>

          <div>
            <SectionHeader
              eyebrow="Sobre"
              title="Sobre a Climatize Soluções em Ar Condicionado"
              description="A Climatize Soluções em Ar Condicionado nasceu com o propósito de oferecer soluções completas em climatização, unindo conhecimento técnico, responsabilidade e cuidado em cada atendimento. Atuamos com manutenção preventiva e corretiva, instalação de equipamentos, higienização, PMOC e acompanhamento técnico para empresas que precisam manter seus ambientes seguros, confortáveis e eficientes."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {aboutCards.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-climatize-softGray p-4"
                  >
                    <Icon className="mt-0.5 shrink-0 text-climatize-blue" size={20} />
                    <p className="text-sm font-semibold leading-snug text-slate-800">{item.title}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
