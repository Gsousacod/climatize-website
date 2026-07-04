"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { company } from "@/data/company";
import { fadeUp, viewport } from "@/lib/animations";
import { SectionHeader } from "./SectionHeader";

const serviceOptions = ["Manutenção preventiva", "Manutenção corretiva", "Instalação", "Higienização", "PMOC", "Relatórios técnicos", "Outro"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contato" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Contato"
            title="Solicite uma avaliação técnica"
            description="Envie sua necessidade de manutenção, instalação, higienização ou PMOC. O formulário está organizado para futura integração com backend."
          />
          <div className="mt-8 rounded-2xl bg-climatize-lightBlue p-6">
            <p className="font-heading font-bold text-slate-950">Atendimento em {company.city} - {company.state}</p>
            <p className="mt-2 leading-7 text-slate-600">Atendimento voltado para empresas, comércios, clínicas, hospitais, hotéis e instituições que precisam de suporte técnico confiável.</p>
          </div>
        </div>

        <motion.form onSubmit={handleSubmit} variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} className="grid gap-4 rounded-2xl border border-slate-100 bg-climatize-softGray p-6 shadow-soft sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Nome
            <input required name="name" className="rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-climatize-blue focus:ring-4 focus:ring-climatize-blue/10" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Empresa
            <input name="company" className="rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-climatize-blue focus:ring-4 focus:ring-climatize-blue/10" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Telefone
            <input required name="phone" type="tel" className="rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-climatize-blue focus:ring-4 focus:ring-climatize-blue/10" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            E-mail
            <input name="email" type="email" className="rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-climatize-blue focus:ring-4 focus:ring-climatize-blue/10" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
            Tipo de serviço desejado
            <select name="service" className="rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-climatize-blue focus:ring-4 focus:ring-climatize-blue/10">
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
            Mensagem
            <textarea required name="message" rows={5} className="resize-none rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-climatize-blue focus:ring-4 focus:ring-climatize-blue/10" />
          </label>
          <div className="sm:col-span-2">
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-climatize-blue px-6 py-4 text-sm font-bold text-white transition hover:bg-climatize-darkBlue sm:w-auto">
              <Send size={18} />
              Enviar solicitação
            </button>
            {sent ? <p className="mt-4 rounded-md bg-white px-4 py-3 text-sm font-semibold text-climatize-darkBlue">Solicitação enviada com sucesso. Em breve nossa equipe entrará em contato.</p> : null}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
