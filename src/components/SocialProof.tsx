"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building,
  Building2,
  Landmark,
  Stethoscope,
  Store,
  type LucideIcon
} from "lucide-react";
import { segments } from "@/data/differentials";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

const segmentIcons: Record<string, LucideIcon> = {
  Clínicas: Stethoscope,
  Hospitais: Stethoscope,
  Hotéis: Building,
  Comércios: Store,
  Escritórios: Briefcase,
  Empresas: Building2,
  Instituições: Landmark,
  "Ambientes corporativos": Building2
};

export function SocialProof() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Segmentos atendidos"
          title="Empresas e instituições que precisam de climatização confiável"
          description="A Climatize atende demandas de climatização em ambientes que exigem organização, segurança, conforto térmico e qualidade do ar."
          align="center"
        />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => {
            const Icon = segmentIcons[segment] ?? Building2;
            return (
              <motion.div key={segment} variants={fadeUp} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-climatize-softGray p-5">
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
