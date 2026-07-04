"use client";

import { motion } from "framer-motion";
import { objectives } from "@/data/objectives";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

export function Objectives() {
  return (
    <section id="objetivos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader eyebrow="Objetivos" title="Nossos objetivos" description="Nosso objetivo é entregar soluções de climatização que ajudem empresas a manterem seus ambientes mais confortáveis, seguros, saudáveis e eficientes." />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative grid gap-0"
          >
            <div className="absolute bottom-3 left-[15px] top-3 w-px bg-gradient-to-b from-climatize-blue/40 via-climatize-blue/15 to-transparent sm:left-[19px]" />
            {objectives.map((objective, index) => (
              <motion.div key={objective} variants={fadeUp} className="relative flex gap-5 py-4">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-climatize-blue font-heading text-sm font-bold text-white sm:h-10 sm:w-10">
                  {index + 1}
                </span>
                <p className="pt-1 font-medium leading-7 text-slate-700">{objective}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
