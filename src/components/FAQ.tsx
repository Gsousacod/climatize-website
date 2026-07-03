"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faq } from "@/data/faq";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-climatize-softGray py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Perguntas frequentes sobre climatização e manutenção de ar-condicionado" align="center" />
        <div className="mt-12 grid gap-3">
          {faq.map((item, index) => {
            const isOpen = active === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={item.question} className="rounded-md border border-slate-100 bg-white shadow-soft">
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-slate-950"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  {item.question}
                  <ChevronDown className={`shrink-0 text-climatize-blue transition ${isOpen ? "rotate-180" : ""}`} size={20} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div id={panelId} role="region" aria-labelledby={buttonId} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 leading-7 text-slate-600">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
