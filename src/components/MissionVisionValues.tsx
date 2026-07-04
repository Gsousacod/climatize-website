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
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="mt-12 grid gap-6 lg:grid-cols-3">
          {valueHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-soft"
            >
              <span className="pointer-events-none absolute -right-4 -top-6 font-heading text-8xl font-bold text-climatize-lightBlue">
                0{index + 1}
              </span>
              <div className="relative">
                <item.icon className="mb-5 text-climatize-blue" size={30} />
                <h3 className="font-heading text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
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
  );
}
