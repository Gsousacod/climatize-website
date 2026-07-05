"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { company } from "@/data/company";

type PrivacyPolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

const paragraphs = [
  "A Climatize Soluções em Ar Condicionado valoriza a privacidade dos visitantes do nosso site e se compromete a proteger os dados pessoais coletados durante a navegação, contato e solicitação de orçamento.",
  "Podemos coletar informações fornecidas diretamente pelo usuário, como nome, telefone, e-mail, cidade, endereço e mensagem enviada por formulário ou WhatsApp.",
  "Também podemos coletar dados de navegação, como páginas acessadas, data e horário da visita, tipo de navegador, endereço IP e cookies, com o objetivo de melhorar a experiência do usuário e analisar o desempenho do site.",
  "Os dados coletados poderão ser utilizados para responder solicitações de contato, enviar orçamentos, agendar visitas técnicas, prestar atendimento, melhorar o site e cumprir obrigações legais.",
  "A Climatize não vende, aluga ou comercializa dados pessoais dos usuários.",
  "Nosso site pode utilizar cookies necessários, cookies de análise e cookies de marketing. Os cookies necessários são essenciais para o funcionamento do site. Os cookies de análise ajudam a entender como os visitantes utilizam o site. Os cookies de marketing podem ser usados para melhorar campanhas e anúncios.",
  "O usuário pode aceitar, recusar ou gerenciar suas preferências de cookies a qualquer momento, conforme as opções disponíveis no banner.",
  "Quando houver botão de WhatsApp, mapa, formulário de contato, Google Analytics, Meta Pixel, Microsoft Clarity ou outras ferramentas externas, alguns dados poderão ser tratados por essas plataformas, conforme suas próprias políticas de privacidade.",
  "O usuário poderá solicitar acesso, correção ou exclusão de seus dados pessoais entrando em contato com a Climatize pelos canais oficiais de atendimento.",
  "Esta política poderá ser atualizada a qualquer momento para refletir melhorias no site, mudanças nos serviços ou exigências legais.",
  `Em caso de dúvidas, entre em contato com a Climatize Soluções em Ar Condicionado pelo WhatsApp: ${company.phone}.`,
];

export function PrivacyPolicyModal({ open, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-policy-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-premium"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 sm:px-8">
              <h2 id="privacy-policy-title" className="font-heading text-xl font-bold text-slate-950 sm:text-2xl">
                Política de Privacidade
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar política de privacidade"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-climatize-softGray hover:text-slate-950"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              <div className="grid gap-4">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
