"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { company } from "@/data/company";
import { fadeUp } from "@/lib/animations";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Field, FormError, inputClasses, ToolResultCard, WhatsAppSubmitButton } from "./shared";

const clientTypeOptions = ["Residencial", "Empresa", "Clínica", "Hospital", "Hotel", "Comércio", "Escola", "Instituição", "Outro"];

const serviceOptions = [
  "Manutenção preventiva",
  "Manutenção corretiva",
  "Instalação",
  "Higienização",
  "PMOC",
  "Relatórios técnicos",
  "Plano de manutenção empresarial",
  "Ainda não sei"
];

const environmentOptions = [
  "Quarto",
  "Sala",
  "Escritório",
  "Loja",
  "Clínica",
  "Consultório",
  "Hotel",
  "Área administrativa",
  "Ambiente comercial",
  "Ambiente residencial",
  "Outro"
];

const periodOptions = ["Manhã", "Tarde", "Noite", "Horário comercial", "A combinar"];

type FormState = {
  nome: string;
  empresa: string;
  telefone: string;
  cidade: string;
  tipoCliente: string;
  servico: string;
  quantidadeAparelhos: string;
  tipoAmbiente: string;
  periodo: string;
  observacoes: string;
};

const initialState: FormState = {
  nome: "",
  empresa: "",
  telefone: "",
  cidade: "",
  tipoCliente: clientTypeOptions[0],
  servico: "",
  quantidadeAparelhos: "",
  tipoAmbiente: environmentOptions[0],
  periodo: periodOptions[0],
  observacoes: ""
};

export function WhatsAppMessageGenerator() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.nome.trim() || !form.telefone.trim() || !form.cidade.trim()) {
      setError("Preencha os campos obrigatórios para continuar.");
      return;
    }

    if (!form.servico || !form.quantidadeAparelhos.trim()) {
      setError("Preencha os campos obrigatórios para continuar.");
      return;
    }

    setError(null);
    setSubmitted(true);

    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const whatsappHref = submitted
    ? createWhatsAppLink(
        company.whatsappNumber,
        `Olá, Climatize! Gostaria de solicitar um orçamento.

*Dados da solicitação:*

Nome: ${form.nome}
Empresa: ${form.empresa || "Não informado"}
Telefone: ${form.telefone}
Cidade: ${form.cidade}
Tipo de cliente: ${form.tipoCliente}
Serviço desejado: ${form.servico}
Quantidade de aparelhos: ${form.quantidadeAparelhos}
Tipo de ambiente: ${form.tipoAmbiente}
Melhor período para atendimento: ${form.periodo}

Mensagem:
${form.observacoes || "Nenhuma observação adicional"}

Aguardo o retorno de vocês.`
      )
    : "";

  return (
    <div className="grid gap-8">
      <div>
        <h3 className="font-heading text-2xl font-bold text-slate-950">Gerador de mensagem para WhatsApp</h3>
        <p className="mt-2 leading-7 text-slate-600">
          Preencha as informações principais e envie uma solicitação completa para a equipe da Climatize.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome" htmlFor="gen-nome" required>
          <input id="gen-nome" className={inputClasses} value={form.nome} onChange={(event) => updateField("nome", event.target.value)} required />
        </Field>
        <Field label="Empresa" htmlFor="gen-empresa">
          <input id="gen-empresa" className={inputClasses} value={form.empresa} onChange={(event) => updateField("empresa", event.target.value)} />
        </Field>
        <Field label="Telefone" htmlFor="gen-telefone" required>
          <input
            id="gen-telefone"
            type="tel"
            className={inputClasses}
            value={form.telefone}
            onChange={(event) => updateField("telefone", event.target.value)}
            required
          />
        </Field>
        <Field label="Cidade" htmlFor="gen-cidade" required>
          <input id="gen-cidade" className={inputClasses} value={form.cidade} onChange={(event) => updateField("cidade", event.target.value)} required />
        </Field>
        <Field label="Tipo de cliente" htmlFor="gen-tipo-cliente">
          <select id="gen-tipo-cliente" className={inputClasses} value={form.tipoCliente} onChange={(event) => updateField("tipoCliente", event.target.value)}>
            {clientTypeOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Serviço desejado" htmlFor="gen-servico" required>
          <select id="gen-servico" className={inputClasses} value={form.servico} onChange={(event) => updateField("servico", event.target.value)} required>
            <option value="" disabled>
              Selecione um serviço
            </option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Quantidade de aparelhos" htmlFor="gen-aparelhos" required>
          <input
            id="gen-aparelhos"
            type="number"
            min="0"
            inputMode="numeric"
            className={inputClasses}
            value={form.quantidadeAparelhos}
            onChange={(event) => updateField("quantidadeAparelhos", event.target.value)}
            required
          />
        </Field>
        <Field label="Tipo de ambiente" htmlFor="gen-ambiente">
          <select id="gen-ambiente" className={inputClasses} value={form.tipoAmbiente} onChange={(event) => updateField("tipoAmbiente", event.target.value)}>
            {environmentOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Melhor período para atendimento" htmlFor="gen-periodo">
          <select id="gen-periodo" className={inputClasses} value={form.periodo} onChange={(event) => updateField("periodo", event.target.value)}>
            {periodOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Mensagem ou observações" htmlFor="gen-observacoes" className="sm:col-span-2">
          <textarea
            id="gen-observacoes"
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
            Gerar mensagem
          </button>
        </div>
      </form>

      {submitted ? (
        <motion.div ref={resultRef} variants={fadeUp} initial="hidden" animate="visible">
          <ToolResultCard>
            <p className="font-heading text-xl font-bold text-slate-950">Sua mensagem está pronta</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Confira os dados preenchidos e envie sua solicitação completa para a Climatize pelo WhatsApp.
            </p>
            <div className="mt-6">
              <WhatsAppSubmitButton href={whatsappHref} label="Enviar pelo WhatsApp" />
            </div>
          </ToolResultCard>
        </motion.div>
      ) : null}
    </div>
  );
}
