"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { company } from "@/data/company";
import { fadeUp } from "@/lib/animations";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Field, FormError, inputClasses, RadioGroup, ToolResultCard, WhatsAppSubmitButton } from "./shared";

const clientTypeOptions = [
  { value: "Residencial", label: "Residencial" },
  { value: "Empresa", label: "Empresa" }
];

const q1Options = ["Sim, está funcionando", "Funciona, mas não está bom", "Não está funcionando", "Ainda vou instalar"].map((label) => ({
  value: label,
  label
}));

const q2Options = [
  "Não está gelando bem",
  "Está pingando água",
  "Está com mau cheiro",
  "Está fazendo barulho",
  "Está sujo ou sem higienização",
  "Quero instalar um equipamento",
  "Quero manutenção preventiva",
  "Minha empresa precisa organizar manutenção/PMOC"
].map((label) => ({ value: label, label }));

const q3Options = ["Menos de 3 meses", "Entre 3 e 6 meses", "Mais de 6 meses", "Mais de 1 ano", "Não sei"].map((label) => ({
  value: label,
  label
}));

const q4Options = ["Sim", "Não", "Não tenho certeza"].map((label) => ({ value: label, label }));

const q5Options = ["Sim", "Não", "Talvez"].map((label) => ({ value: label, label }));

type FormState = {
  nome: string;
  telefone: string;
  cidade: string;
  tipoCliente: string;
  quantidadeAparelhos: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
};

const initialState: FormState = {
  nome: "",
  telefone: "",
  cidade: "",
  tipoCliente: "Residencial",
  quantidadeAparelhos: "",
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: ""
};

type Result = {
  principal: string;
  complementar: string | null;
};

function resolveRecommendation(q1: string, q2: string, q3: string, q4: string, q5: string): Result {
  let principal = "Manutenção preventiva";

  if (q1 === "Ainda vou instalar" || q2 === "Quero instalar um equipamento") {
    principal = "Instalação de ar-condicionado";
  } else if (q1 === "Não está funcionando" || ["Não está gelando bem", "Está pingando água", "Está fazendo barulho"].includes(q2)) {
    principal = "Manutenção corretiva";
  } else if (
    ["Está sujo ou sem higienização", "Está com mau cheiro"].includes(q2) ||
    ["Mais de 6 meses", "Mais de 1 ano", "Não sei"].includes(q3)
  ) {
    principal = "Higienização e manutenção preventiva";
  } else if (q2 === "Quero manutenção preventiva") {
    principal = "Manutenção preventiva";
  }

  const complementar = q4 === "Sim" && (q5 === "Sim" || q5 === "Talvez") ? "PMOC ou plano de manutenção empresarial" : null;

  return { principal, complementar };
}

export function ServiceQuiz() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
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

    if (!form.q1 || !form.q2 || !form.q3 || !form.q4 || !form.q5) {
      setError("Preencha os campos obrigatórios para continuar.");
      return;
    }

    setError(null);
    const recommendation = resolveRecommendation(form.q1, form.q2, form.q3, form.q4, form.q5);
    setResult(recommendation);

    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const whatsappHref = result
    ? createWhatsAppLink(
        company.whatsappNumber,
        `Olá, Climatize! Fiz o quiz no site e gostaria de uma orientação.

*Resultado do Quiz: Qual serviço eu preciso?*

Nome: ${form.nome}
Telefone: ${form.telefone}
Cidade: ${form.cidade}
Tipo de cliente: ${form.tipoCliente}
Quantidade de aparelhos: ${form.quantidadeAparelhos || "0"}

Respostas:
1. Funcionamento: ${form.q1}
2. Principal necessidade: ${form.q2}
3. Última manutenção/higienização: ${form.q3}
4. Ambiente comercial/empresa: ${form.q4}
5. Precisa de relatório ou controle: ${form.q5}

Serviço mais indicado: ${result.principal}
Recomendação complementar: ${result.complementar ?? "Nenhuma"}

Podem me ajudar com uma avaliação e orçamento?`
      )
    : "";

  return (
    <div className="grid gap-8">
      <div>
        <h3 className="font-heading text-2xl font-bold text-slate-950">Qual serviço você precisa?</h3>
        <p className="mt-2 leading-7 text-slate-600">
          Responda algumas perguntas rápidas e veja qual serviço pode ser mais indicado para o seu caso.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nome" htmlFor="quiz-nome" required>
            <input id="quiz-nome" className={inputClasses} value={form.nome} onChange={(event) => updateField("nome", event.target.value)} required />
          </Field>
          <Field label="Telefone" htmlFor="quiz-telefone" required>
            <input
              id="quiz-telefone"
              type="tel"
              className={inputClasses}
              value={form.telefone}
              onChange={(event) => updateField("telefone", event.target.value)}
              required
            />
          </Field>
          <Field label="Cidade" htmlFor="quiz-cidade" required>
            <input id="quiz-cidade" className={inputClasses} value={form.cidade} onChange={(event) => updateField("cidade", event.target.value)} required />
          </Field>
          <Field label="Quantidade de aparelhos" htmlFor="quiz-aparelhos">
            <input
              id="quiz-aparelhos"
              type="number"
              min="0"
              inputMode="numeric"
              className={inputClasses}
              value={form.quantidadeAparelhos}
              onChange={(event) => updateField("quantidadeAparelhos", event.target.value)}
            />
          </Field>
        </div>

        <RadioGroup legend="Tipo de cliente" name="quiz-tipo-cliente" options={clientTypeOptions} value={form.tipoCliente} onChange={(value) => updateField("tipoCliente", value)} />
        <RadioGroup legend="1. O ar-condicionado está funcionando?" name="quiz-q1" options={q1Options} value={form.q1} onChange={(value) => updateField("q1", value)} required />
        <RadioGroup legend="2. Qual é o principal problema ou necessidade?" name="quiz-q2" options={q2Options} value={form.q2} onChange={(value) => updateField("q2", value)} required />
        <RadioGroup
          legend="3. Há quanto tempo foi feita a última manutenção ou higienização?"
          name="quiz-q3"
          options={q3Options}
          value={form.q3}
          onChange={(value) => updateField("q3", value)}
          required
        />
        <RadioGroup
          legend="4. O ambiente é de uso comercial, clínico, hospitalar, hotelaria ou empresa?"
          name="quiz-q4"
          options={q4Options}
          value={form.q4}
          onChange={(value) => updateField("q4", value)}
          required
        />
        <RadioGroup
          legend="5. Você precisa de relatório técnico ou controle de manutenção?"
          name="quiz-q5"
          options={q5Options}
          value={form.q5}
          onChange={(value) => updateField("q5", value)}
          required
        />

        <FormError message={error} />

        <div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-climatize-blue px-6 py-4 text-sm font-bold text-white transition hover:bg-climatize-darkBlue sm:w-auto"
          >
            Ver resultado
          </button>
        </div>
      </form>

      {result ? (
        <motion.div ref={resultRef} variants={fadeUp} initial="hidden" animate="visible">
          <ToolResultCard>
            <div className="grid gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-climatize-blue">Serviço mais indicado</p>
                <p className="mt-1 font-heading text-2xl font-bold text-slate-950">{result.principal}</p>
              </div>
              {result.complementar ? (
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-climatize-blue">Também pode ser recomendado</p>
                  <p className="mt-1 font-heading text-xl font-bold text-slate-950">{result.complementar}</p>
                </div>
              ) : null}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Esse resultado é uma orientação inicial. A equipe da Climatize pode avaliar melhor seu caso e indicar a solução mais
              adequada.
            </p>
            <div className="mt-6">
              <WhatsAppSubmitButton href={whatsappHref} label="Enviar resultado para a Climatize" />
            </div>
          </ToolResultCard>
        </motion.div>
      ) : null}
    </div>
  );
}
