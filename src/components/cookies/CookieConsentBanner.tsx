"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  defaultPreferences,
  getStoredConsent,
  OPEN_COOKIE_PREFERENCES_EVENT,
  saveConsent,
  type CookiePreferences,
} from "@/lib/cookie-consent";
import { CookiePreferencesModal } from "./CookiePreferencesModal";
import { PrivacyPolicyModal } from "./PrivacyPolicyModal";

export function CookieConsentBanner() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setPreferences(stored.preferences);
    } else {
      setBannerVisible(true);
    }

    function handleOpenPreferences() {
      const current = getStoredConsent();
      if (current) setPreferences(current.preferences);
      setPreferencesOpen(true);
    }

    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  function handleAccept() {
    const consent = saveConsent({ analytics: true, marketing: true });
    setPreferences(consent.preferences);
    setBannerVisible(false);
  }

  function handleReject() {
    const consent = saveConsent({ analytics: false, marketing: false });
    setPreferences(consent.preferences);
    setBannerVisible(false);
  }

  function handleSavePreferences(next: Pick<CookiePreferences, "analytics" | "marketing">) {
    const consent = saveConsent(next);
    setPreferences(consent.preferences);
    setPreferencesOpen(false);
    setBannerVisible(false);
  }

  return (
    <>
      <AnimatePresence>
        {bannerVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="region"
            aria-label="Aviso de cookies"
            className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6"
          >
            <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-premium sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
              <p className="text-sm leading-6 text-climatize-gray">
                Utilizamos cookies para melhorar sua experiência, analisar acessos e oferecer um atendimento mais
                eficiente. Ao continuar navegando, você concorda com o uso de cookies. Saiba mais em nossa{" "}
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="font-semibold text-climatize-blue underline-offset-2 hover:underline"
                >
                  Política de Privacidade
                </button>
                .
              </p>

              <div className="flex flex-col gap-2 sm:flex-shrink-0 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setPreferencesOpen(true)}
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2.5 text-sm font-bold text-climatize-gray transition hover:border-climatize-blue hover:text-climatize-blue"
                >
                  Gerenciar preferências
                </button>
                <button
                  type="button"
                  onClick={handleReject}
                  className="inline-flex items-center justify-center rounded-md bg-climatize-softGray px-4 py-2.5 text-sm font-bold text-climatize-gray transition hover:bg-slate-200"
                >
                  Recusar
                </button>
                <button
                  type="button"
                  onClick={handleAccept}
                  className="inline-flex items-center justify-center rounded-md bg-climatize-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-climatize-darkBlue"
                >
                  Aceitar cookies
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <CookiePreferencesModal
        open={preferencesOpen}
        preferences={preferences}
        onClose={() => setPreferencesOpen(false)}
        onSave={handleSavePreferences}
      />

      <PrivacyPolicyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
