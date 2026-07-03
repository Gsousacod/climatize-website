"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Wind } from "lucide-react";
import Image from "next/image";
import { company } from "@/data/company";
import { fadeUp } from "@/lib/animations";

const floatingCards = [
  "Manutenção Preventiva",
  "PMOC",
  "Instalação",
  "Higienização",
  "Qualidade do Ar",
  "Suporte Técnico",
];

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 90]);
  const reverseY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-air-flow pt-28"
    >
      <motion.div
        style={{ y }}
        className="absolute left-[-8rem] top-32 h-72 w-72 rounded-full bg-climatize-blue/15 blur-3xl"
      />
      <motion.div
        style={{ y: reverseY }}
        className="absolute right-[-6rem] top-20 h-96 w-96 rounded-full bg-climatize-lightBlue blur-3xl"
      />
      <div className="air-line absolute left-0 top-40 h-px w-full rotate-[-3deg]" />
      <div className="air-line absolute bottom-24 left-0 h-px w-full rotate-[4deg]" />

      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-climatize-blue/15 bg-white/80 px-4 py-2 text-sm font-semibold text-climatize-darkBlue shadow-soft backdrop-blur"
          >
            <Wind size={17} />
            Climatização empresarial em Teófilo Otoni e região
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-3xl"
          >
            Climatização profissional em Teófilo Otoni para empresas que
            valorizam conforto, segurança e qualidade do ar.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
          >
            A Climatize Soluções em Ar Condicionado oferece manutenção
            preventiva e corretiva, instalação, higienização e PMOC para
            empresas, clínicas, hospitais, hotéis e comércios que precisam de
            ambientes mais seguros, eficientes e bem climatizados.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={company.whatsappUrl}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-climatize-blue px-6 py-4 text-sm font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-climatize-darkBlue"
            >
              Solicitar orçamento pelo WhatsApp
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-climatize-darkBlue shadow-soft transition hover:-translate-y-0.5 hover:border-climatize-blue/40"
            >
              Conhecer serviços
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="relative mx-auto aspect-square max-w-[540px]">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-climatize-blue to-climatize-darkBlue shadow-premium" />
            <div className="absolute inset-16 rounded-full border border-white/30" />
            <div className="absolute inset-0 rounded-full border border-climatize-blue/20" />
            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md  p-5 shadow-premium rounded-full">
              <Image
                src={company.logo}
                alt="Logo da Climatize Soluções em Ar Condicionado"
                width={160}
                height={160}
                className="h-full w-full object-contain rounded-full border border-white/30 "
                priority
              />
            </div>
            {floatingCards.map((card, index) => (
              <motion.div
                key={card}
                animate={{ y: [0, index % 2 ? -10 : 10, 0] }}
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute rounded-md border border-white/70 bg-white/90 px-4 py-3 text-sm font-bold text-climatize-darkBlue shadow-soft backdrop-blur"
                style={{
                  left: `${index % 2 === 0 ? 4 : 58}%`,
                  top: `${14 + index * 12}%`,
                }}
              >
                <span className="flex items-center gap-2">
                  {index % 2 === 0 ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <ShieldCheck size={16} />
                  )}
                  {card}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
