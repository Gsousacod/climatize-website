"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  calculateEstimatedBtu,
  suggestCommercialBtu,
  sunExposureLabels,
  type SunExposure,
} from "@/lib/btu";
import { company } from "@/data/company";
import { fadeUp } from "@/lib/animations";
import { createWhatsAppLink } from "@/lib/whatsapp";
import {
  Field,
  FormError,
  inputClasses,
  ToolResultCard,
  WhatsAppSubmitButton,
} from "./shared";

const environmentOptions = [
  "Residência",
  "Quarto",
  "Sala",
  "Escritório",
  "Comércio",
  "Clínica",
  "Hotel",
  "Empresa",
  "Outro",
];

const sunOptions: { value: SunExposure; label: string }[] = [
  { value: "nao", label: sunExposureLabels.nao },
  { value: "manha", label: sunExposureLabels.manha },
  { value: "tarde", label: sunExposureLabels.tarde },
  { value: "dia_todo", label: sunExposureLabels.dia_todo },
];

type FormState = {
  nome: string;
  telefone: string;
  cidade: string;
  tipoAmbiente: string;
  largura: string;
  comprimento: string;
  pessoas: string;
  eletronicos: string;
  sol: SunExposure;
  observacoes: string;
};

const initialState: FormState = {
  nome: "",
  telefone: "",
  cidade: "",
  tipoAmbiente: environmentOptions[0],
  largura: "",
  comprimento: "",
  pessoas: "1",
  eletronicos: "0",
  sol: "nao",
  observacoes: "",
};

type Result = {
  area: number;
  estimatedBtu: number;
  commercialBtu: number;
};

export function BtuCalculator() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const largura = Number(form.largura.replace(",", "."));
    const comprimento = Number(form.comprimento.replace(",", "."));
    const pessoas = Math.max(0, Number(form.pessoas) || 0);
    const eletronicos = Math.max(0, Number(form.eletronicos) || 0);

    if (!form.nome.trim() || !form.telefone.trim() || !form.cidade.trim()) {
      setError("Preencha os campos obrigatórios para continuar.");
      return;
    }

    if (
      !form.largura ||
      !form.comprimento ||
      Number.isNaN(largura) ||
      Number.isNaN(comprimento) ||
      largura <= 0 ||
      comprimento <= 0
    ) {
      setError("Preencha os campos obrigatórios para continuar.");
      return;
    }

    setError(null);

    const area = largura * comprimento;
    const estimatedBtu = calculateEstimatedBtu({
      width: largura,
      length: comprimento,
      people: pessoas,
      electronics: eletronicos,
      sun: form.sol,
    });
    const commercialBtu = suggestCommercialBtu(estimatedBtu);

    setResult({ area, estimatedBtu, commercialBtu });

    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const whatsappHref = result
    ? createWhatsAppLink(
        company.whatsappNumber,
        `Olá, Climatize! Gostaria de uma avaliação para climatização.

*Dados da Calculadora de BTUs:*

Nome: ${form.nome}
Telefone: ${form.telefone}
Cidade: ${form.cidade}
Tipo de ambiente: ${form.tipoAmbiente}
Medidas: ${form.largura}m x ${form.comprimento}m
Área aproximada: ${result.area.toLocaleString("pt-BR")} m²
Quantidade de pessoas: ${form.pessoas || "0"}
Aparelhos eletrônicos: ${form.eletronicos || "0"}
Sol direto: ${sunExposureLabels[form.sol]}
Estimativa inicial: ${result.estimatedBtu.toLocaleString("pt-BR")} BTUs
Capacidade comercial sugerida: ${result.commercialBtu.toLocaleString("pt-BR")} BTUs

Observações:
${form.observacoes || "Nenhuma"}

Podem me ajudar com uma avaliação e orçamento?`,
      )
    : "";

  return (
    <div className="grid gap-8">
      <div>
        <h3 className="font-heading text-2xl font-bold text-slate-950">
          Calculadora de BTUs
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          Informe os dados do ambiente e receba uma estimativa inicial da
          capacidade indicada para climatização.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid gap-4 sm:grid-cols-2"
      >
        <Field label="Nome" htmlFor="btu-nome" required>
          <input
            id="btu-nome"
            className={inputClasses}
            value={form.nome}
            onChange={(event) => updateField("nome", event.target.value)}
            required
          />
        </Field>
        <Field label="Telefone" htmlFor="btu-telefone" required>
          <input
            id="btu-telefone"
            type="tel"
            className={inputClasses}
            value={form.telefone}
            onChange={(event) => updateField("telefone", event.target.value)}
            required
          />
        </Field>
        <Field label="Cidade" htmlFor="btu-cidade" required>
          <input
            id="btu-cidade"
            className={inputClasses}
            value={form.cidade}
            onChange={(event) => updateField("cidade", event.target.value)}
            required
          />
        </Field>
        <Field label="Tipo de ambiente" htmlFor="btu-tipo-ambiente">
          <select
            id="btu-tipo-ambiente"
            className={inputClasses}
            value={form.tipoAmbiente}
            onChange={(event) =>
              updateField("tipoAmbiente", event.target.value)
            }
          >
            {environmentOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Largura do ambiente (m)" htmlFor="btu-largura" required>
          <input
            id="btu-largura"
            type="number"
            min="0"
            step="0.1"
            inputMode="decimal"
            className={inputClasses}
            value={form.largura}
            onChange={(event) => updateField("largura", event.target.value)}
            required
          />
        </Field>
        <Field
          label="Comprimento do ambiente (m)"
          htmlFor="btu-comprimento"
          required
        >
          <input
            id="btu-comprimento"
            type="number"
            min="0"
            step="0.1"
            inputMode="decimal"
            className={inputClasses}
            value={form.comprimento}
            onChange={(event) => updateField("comprimento", event.target.value)}
            required
          />
        </Field>
        <Field label="Quantidade de pessoas no ambiente" htmlFor="btu-pessoas">
          <input
            id="btu-pessoas"
            type="number"
            min="0"
            inputMode="numeric"
            className={inputClasses}
            value={form.pessoas}
            onChange={(event) => updateField("pessoas", event.target.value)}
          />
        </Field>
        <Field
          label="Quantidade de aparelhos eletrônicos"
          htmlFor="btu-eletronicos"
        >
          <input
            id="btu-eletronicos"
            type="number"
            min="0"
            inputMode="numeric"
            className={inputClasses}
            value={form.eletronicos}
            onChange={(event) => updateField("eletronicos", event.target.value)}
          />
        </Field>
        <Field label="O ambiente recebe sol direto?" htmlFor="btu-sol">
          <select
            id="btu-sol"
            className={inputClasses}
            value={form.sol}
            onChange={(event) =>
              updateField("sol", event.target.value as SunExposure)
            }
          >
            {sunOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Observações"
          htmlFor="btu-observacoes"
          className="sm:col-span-2"
        >
          <textarea
            id="btu-observacoes"
            rows={4}
            className={`${inputClasses} resize-none`}
            value={form.observacoes}
            onChange={(event) => updateField("observacoes", event.target.value)}
          />
        </Field>

        <div className="sm:col-span-2">
          <FormError message={error} />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-climatize-blue px-6 py-4 text-sm font-bold text-white transition hover:bg-climatize-darkBlue sm:w-auto"
          >
            Calcular estimativa
          </button>
        </div>
      </form>

      {result ? (
        <motion.div
          ref={resultRef}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <ToolResultCard>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-climatize-blue">
                  Estimativa inicial
                </p>
                <p className="mt-1 font-heading text-3xl font-bold text-slate-950">
                  {result.estimatedBtu.toLocaleString("pt-BR")} BTUs
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-climatize-blue">
                  Capacidade comercial sugerida
                </p>
                <p className="mt-1 font-heading text-3xl font-bold text-slate-950">
                  {result.commercialBtu.toLocaleString("pt-BR")} BTUs
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Essa é apenas uma estimativa inicial. Para indicar corretamente o
              equipamento ideal, é importante avaliar o ambiente, incidência
              solar, isolamento, quantidade de pessoas, equipamentos e
              características da instalação.
            </p>
            <div className="mt-6">
              <WhatsAppSubmitButton
                href={whatsappHref}
                label="Solicitar orçamento"
              />
            </div>
          </ToolResultCard>
        </motion.div>
      ) : null}
    </div>
  );
}
