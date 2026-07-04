"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Wind } from "lucide-react";
import Image from "next/image";
import { company } from "@/data/company";
import { fadeUp } from "@/lib/animations";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 40]);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-air-flow pt-28"
    >
      <div className="air-line absolute left-0 top-40 h-px w-full rotate-[-3deg]" />
      <div className="air-line absolute bottom-24 left-0 h-px w-full rotate-[4deg]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:min-h-[720px] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-climatize-blue/15 bg-white/80 px-4 py-2 text-sm font-semibold text-climatize-darkBlue shadow-soft backdrop-blur"
          >
            <Wind size={17} />
            Climatização empresarial em Teófilo Otoni e região
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-balance font-heading text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-[2.65rem]"
          >
            Climatização profissional para empresas que valorizam{" "}
            <span className="text-climatize-blue">conforto</span>,{" "}
            <span className="text-climatize-blue">segurança</span> e{" "}
            <span className="text-climatize-blue">qualidade do ar</span>.
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
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-500"
          >
            {["Manutenção preventiva e corretiva", "Instalação e higienização", "PMOC completo"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-climatize-blue" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="relative mx-auto max-w-[480px]">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-climatize-blue to-climatize-darkBlue opacity-90" />
            <motion.div style={{ y }} className="relative overflow-hidden rounded-[1.75rem] shadow-premium">
              <Image
                src="/images/hero-tecnico-manutencao.jpg"
                alt="Técnico da Climatize realizando manutenção em unidade de ar condicionado"
                width={900}
                height={1000}
                className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-climatize-darkBlue/50 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 left-2 flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-premium sm:-bottom-6 sm:-left-10 sm:px-5 sm:py-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-climatize-accentLight text-climatize-accentDark">
                <ShieldCheck size={22} />
              </span>
              <span className="text-sm font-bold leading-tight text-slate-950">
                PMOC e laudos
                <span className="block text-xs font-medium text-climatize-gray">técnicos em dia</span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="absolute -top-5 -right-3 flex h-16 w-16 items-center justify-center rounded-full border border-white bg-white p-2 shadow-premium sm:-right-6"
            >
              <Image
                src={company.logo}
                alt="Logo da Climatize Soluções em Ar Condicionado"
                width={56}
                height={56}
                className="h-full w-full rounded-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
