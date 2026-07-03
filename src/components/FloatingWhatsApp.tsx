"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { company } from "@/data/company";

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7 fill-current">
      <path d="M16.02 3.2A12.67 12.67 0 0 0 5.25 22.55L3.6 28.8l6.39-1.63A12.67 12.67 0 1 0 16.02 3.2Zm0 22.94a10.25 10.25 0 0 1-5.22-1.43l-.37-.22-3.78.97.99-3.69-.24-.38a10.25 10.25 0 1 1 8.62 4.75Zm5.8-7.68c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.6-1.9-1.79-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.09-1.11 2.64 0 1.56 1.14 3.07 1.29 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.53 1.81.68.76.24 1.46.21 2.01.13.61-.09 1.88-.77 2.15-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [showHint, setShowHint] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const notificationHideTimers: number[] = [];
    const flashNotification = () => {
      setShowNotification(true);
      const hideTimer = window.setTimeout(() => setShowNotification(false), 5200);
      notificationHideTimers.push(hideTimer);
    };

    const hintTimer = window.setTimeout(() => setShowHint(true), 1800);
    const hideHintTimer = window.setTimeout(() => setShowHint(false), 6200);
    const firstNotification = window.setTimeout(flashNotification, 4200);

    const notificationInterval = window.setInterval(() => {
      flashNotification();
    }, 18000);

    return () => {
      window.clearTimeout(hintTimer);
      window.clearTimeout(hideHintTimer);
      window.clearTimeout(firstNotification);
      window.clearInterval(notificationInterval);
      notificationHideTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.35 }}
      className="fixed bottom-5 right-5 z-[70] sm:bottom-7 sm:right-7"
      onMouseEnter={() => setShowHint(true)}
      onMouseLeave={() => setShowHint(false)}
    >
      <AnimatePresence>
        {showHint ? (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[calc(100%+14px)] right-0 hidden w-56 rounded-md bg-white px-5 py-3 text-center text-sm font-bold text-climatize-darkBlue shadow-premium ring-1 ring-slate-100 sm:block"
          >
            Como posso te ajudar?
            <span className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-white ring-1 ring-slate-100" />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showHint ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[calc(100%+12px)] right-0 w-48 rounded-md bg-white px-4 py-2 text-center text-xs font-bold text-climatize-darkBlue shadow-soft ring-1 ring-slate-100 sm:hidden"
          >
            Como posso te ajudar?
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.a
        href={company.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Climatize pelo WhatsApp"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium outline-none ring-4 ring-[#25D366]/20 transition hover:bg-[#128C4A] focus-visible:ring-4 focus-visible:ring-[#25D366]/35"
        animate={{
          boxShadow: [
            "0 18px 45px rgba(18, 140, 74, 0.24)",
            "0 18px 55px rgba(37, 211, 102, 0.34)",
            "0 18px 45px rgba(18, 140, 74, 0.24)"
          ]
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ y: -3, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366]/25"
          animate={{ scale: [1, 1.32, 1], opacity: [0.38, 0, 0.38] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="relative z-10 transition group-hover:scale-105">
          <WhatsAppIcon />
        </span>

        <AnimatePresence>
          {showNotification ? (
            <motion.span
              initial={{ opacity: 0, scale: 0.5, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 4 }}
              transition={{ duration: 0.18 }}
              className="absolute -right-1 -top-1 z-20 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#DFFFEA] text-xs font-black text-[#128C4A] shadow-soft"
            >
              1
            </motion.span>
          ) : null}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
}
