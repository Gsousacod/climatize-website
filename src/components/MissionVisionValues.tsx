"use client";

import { motion } from "framer-motion";
import { valueHighlights, values } from "@/data/values";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

export function MissionVisionValues() {
  return (
    <section id="valores" className="bg-climatize-lightBlue py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Essência" title="Missão, visão e valores" align="center" description="Uma atuação técnica guiada por responsabilidade, organização e cuidado real com cada ambiente atendido." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="mt-12 grid gap-5 lg:grid-cols-3">
          {valueHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} variants={fadeUp} className="rounded-md bg-white p-7 shadow-soft ring-1 ring-white transition hover:-translate-y-1">
                <Icon className="mb-5 text-climatize-blue" size={32} />
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {values.map((value) => (
            <span key={value} className="rounded-md border border-climatize-blue/15 bg-white px-4 py-2 text-sm font-semibold text-climatize-darkBlue shadow-soft">
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
