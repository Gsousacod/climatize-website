"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { CookiePreferences } from "@/lib/cookie-consent";

type CookiePreferencesModalProps = {
  open: boolean;
  preferences: CookiePreferences;
  onClose: () => void;
  onSave: (preferences: Pick<CookiePreferences, "analytics" | "marketing">) => void;
};

type ToggleRowProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

function ToggleRow({ title, description, checked, disabled, onChange }: ToggleRowProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 px-5 py-4">
      <div>
        <p className="font-heading text-sm font-bold text-slate-950">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-1 h-7 w-12 shrink-0 rounded-full transition ${
          checked ? "bg-climatize-blue" : "bg-slate-300"
        } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-soft transition ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

export function CookiePreferencesModal({ open, preferences, onClose, onSave }: CookiePreferencesModalProps) {
  const [analytics, setAnalytics] = useState(preferences.analytics);
  const [marketing, setMarketing] = useState(preferences.marketing);

  useEffect(() => {
    if (open) {
      setAnalytics(preferences.analytics);
      setMarketing(preferences.marketing);
    }
  }, [open, preferences]);

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
            aria-labelledby="cookie-preferences-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-premium"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 sm:px-8">
              <h2 id="cookie-preferences-title" className="font-heading text-xl font-bold text-slate-950">
                Preferências de cookies
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar preferências de cookies"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-climatize-softGray hover:text-slate-950"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-6 sm:px-8">
              <p className="text-sm leading-6 text-slate-600">
                Escolha quais categorias de cookies você permite. Cookies necessários não podem ser desativados, pois
                garantem o funcionamento básico do site.
              </p>

              <div className="mt-5 grid gap-3">
                <ToggleRow
                  title="Cookies necessários"
                  description="Essenciais para o funcionamento do site. Sempre ativos."
                  checked
                  disabled
                />
                <ToggleRow
                  title="Cookies de análise"
                  description="Ajudam a entender como os visitantes utilizam o site para melhorarmos a experiência."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <ToggleRow
                  title="Cookies de marketing"
                  description="Usados para melhorar campanhas e anúncios da Climatize."
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>
            </div>

            <div className="border-t border-slate-100 px-6 py-5 sm:px-8">
              <button
                type="button"
                onClick={() => onSave({ analytics, marketing })}
                className="inline-flex w-full items-center justify-center rounded-md bg-climatize-blue px-6 py-3.5 text-sm font-bold text-white transition hover:bg-climatize-darkBlue sm:w-auto"
              >
                Salvar preferências
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
