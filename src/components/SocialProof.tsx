"use client";

import { motion } from "framer-motion";
import { segments } from "@/data/differentials";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { getSegmentIcon } from "@/lib/segment-icons";
import { SectionHeader } from "./SectionHeader";

export function SocialProof() {
  return (
    <section className="bg-climatize-softGray py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Segmentos atendidos"
          title="Empresas e instituições que precisam de climatização confiável"
          description="A Climatize atende demandas de climatização em ambientes que exigem organização, segurança, conforto térmico e qualidade do ar."
          align="center"
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => {
            const Icon = getSegmentIcon(segment);
            return (
              <motion.div key={segment} variants={fadeUp} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-5">
                <Icon className="text-climatize-blue" size={23} />
                <span className="font-bold text-slate-800">{segment}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
