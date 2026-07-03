"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="servicos" className="bg-climatize-softGray py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Serviços"
          title="Serviços de climatização para empresas, comércios e instituições"
          description="A Climatize oferece soluções completas para manter ambientes climatizados, seguros e eficientes, com serviços técnicos voltados para empresas, clínicas, hospitais, hotéis, comércios e instituições."
          align="center"
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.title} variants={fadeUp} whileHover={{ y: -8 }} className="group rounded-md border border-white bg-white p-6 shadow-soft transition">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-climatize-lightBlue text-climatize-blue transition group-hover:bg-climatize-blue group-hover:text-white">
                  <Icon size={25} />
                </span>
                <h3 className="text-lg font-bold leading-snug text-slate-950">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
