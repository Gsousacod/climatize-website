"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clients } from "@/data/clients";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

export function ClientsGrid() {
  return (
    <section className="bg-climatize-softGray py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Clientes"
          title="Empresas que confiam no nosso trabalho"
          description="Atendemos empresas e instituições de diferentes segmentos que contam com a Climatize para manter seus ambientes climatizados com segurança e eficiência."
          align="center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={fadeUp}
              className="flex aspect-[3/2] items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                width={200}
                height={100}
                className="h-12 w-auto max-w-full object-contain sm:h-14"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
