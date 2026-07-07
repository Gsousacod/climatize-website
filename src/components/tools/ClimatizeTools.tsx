"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calculator, ListChecks, MessageSquareText } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { BtuCalculator } from "./BtuCalculator";
import { ServiceQuiz } from "./ServiceQuiz";
import { WhatsAppMessageGenerator } from "./WhatsAppMessageGenerator";

type ToolId = "btu" | "quiz" | "mensagem";

const tabs: { id: ToolId; label: string; icon: typeof Calculator }[] = [
  { id: "btu", label: "Calculadora de BTUs", icon: Calculator },
  { id: "quiz", label: "Qual serviço eu preciso?", icon: ListChecks },
  { id: "mensagem", label: "Gerar mensagem para WhatsApp", icon: MessageSquareText }
];

export function ClimatizeTools() {
  const [activeTab, setActiveTab] = useState<ToolId>("btu");

  return (
    <section id="ferramentas" className="bg-climatize-lightBlue py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Ferramentas"
          title="Ferramentas rápidas para sua climatização"
          description="Use nossas ferramentas para estimar a capacidade ideal do ar-condicionado, identificar o serviço mais indicado e enviar uma solicitação completa para a Climatize pelo WhatsApp."
          align="center"
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-slate-600">
          Oferecemos ferramentas rápidas para ajudar você a entender melhor sua necessidade em climatização, manutenção de
          ar-condicionado, instalação, higienização e PMOC em Teófilo Otoni e região.
        </p>

        <div
          role="tablist"
          aria-label="Ferramentas da Climatize"
          className="mt-10 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-climatize-blue/20 ${
                  isActive
                    ? "border-climatize-blue bg-climatize-blue text-white shadow-soft"
                    : "border-climatize-blue/15 bg-white text-climatize-darkBlue hover:border-climatize-blue/40"
                }`}
              >
                <Icon size={18} aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-soft sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "btu" ? <BtuCalculator /> : null}
              {activeTab === "quiz" ? <ServiceQuiz /> : null}
              {activeTab === "mensagem" ? <WhatsAppMessageGenerator /> : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
