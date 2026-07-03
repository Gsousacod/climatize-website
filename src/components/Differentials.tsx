"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useRef } from "react";
import { differentials } from "@/data/differentials";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

export function Differentials() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-gradient-to-br from-climatize-darkBlue via-climatize-blue to-sky-500 py-24">
      <motion.div style={{ y }} className="absolute -right-16 top-12 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
      <div className="air-line absolute left-0 top-20 h-px w-full rotate-2 opacity-70" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeader
            eyebrow="Diferenciais"
            title="Por que escolher a Climatize?"
            description="Empresas precisam de climatização confiável, atendimento organizado e soluções técnicas que tragam segurança para a operação. A Climatize une cuidado, responsabilidade e conhecimento técnico para entregar um serviço de qualidade."
            light
          />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-4 sm:grid-cols-2">
            {differentials.map((item, index) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 rounded-md border border-white/15 bg-white/10 p-5 text-white shadow-soft backdrop-blur">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-climatize-blue">
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
