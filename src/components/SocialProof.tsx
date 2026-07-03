"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { segments } from "@/data/differentials";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

export function SocialProof() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Segmentos atendidos"
          title="Empresas e instituições precisam de climatização confiável"
          description="A Climatize atende demandas de climatização em ambientes que exigem organização, segurança, conforto térmico e qualidade do ar. Esta área está preparada para receber logos de clientes futuramente."
          align="center"
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <motion.div key={segment} variants={fadeUp} className="flex items-center gap-3 rounded-md border border-slate-100 bg-climatize-softGray p-5 shadow-soft">
              <Building2 className="text-climatize-blue" size={23} />
              <span className="font-bold text-slate-800">{segment}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
