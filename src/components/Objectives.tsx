"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { objectives } from "@/data/objectives";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

export function Objectives() {
  return (
    <section id="objetivos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader eyebrow="Objetivos" title="Nossos objetivos" description="Nosso objetivo é entregar soluções de climatização que ajudem empresas a manterem seus ambientes mais confortáveis, seguros, saudáveis e eficientes." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-4 sm:grid-cols-2">
            {objectives.map((objective) => (
              <motion.div key={objective} variants={fadeUp} className="flex gap-4 rounded-md border border-slate-100 bg-white p-5 shadow-soft">
                <CheckCircle2 className="mt-1 shrink-0 text-climatize-blue" size={22} />
                <p className="font-medium leading-7 text-slate-700">{objective}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
