"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Image from "next/image";
import { differentials } from "@/data/differentials";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

export function Differentials() {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <Image
        src="/images/differentials-manutencao.jpg"
        alt="Equipe técnica da Climatize realizando manutenção em ar condicionado"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-climatize-darkBlue/95 via-climatize-blue/90 to-climatize-darkBlue/95" />
      <div className="air-line absolute left-0 top-20 h-px w-full rotate-2 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeader
            eyebrow="Diferenciais"
            title="Por que escolher a Climatize?"
            description="Empresas precisam de climatização confiável, atendimento organizado e soluções técnicas que tragam segurança para a operação. Nossa empresa une cuidado, responsabilidade e conhecimento técnico para entregar um serviço de qualidade."
            light
          />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-4 sm:grid-cols-2">
            {differentials.map((item, index) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-climatize-accent text-white">
                  {index === 0 ? <Sparkles size={16} /> : <Check size={16} />}
                </span>
                <p className="font-semibold leading-7">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
