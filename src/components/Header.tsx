"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { company, navItems } from "@/data/company";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(251,251,251,0.72)", "rgba(251,251,251,0.96)"],
  );
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 18px 50px rgba(15,23,42,0.10)"],
  );

  return (
    <motion.header
      style={{ background, boxShadow: shadow }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/60 backdrop-blur-xl"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8"
        aria-label="Navegação principal"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Ir para o início"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-slate-100">
            <Image
              src={company.logo}
              alt="Logo da Climatize Soluções em Ar Condicionado"
              width={42}
              height={42}
              className="h-10 w-10 object-contain rounded-full"
              priority
            />
          </span>
          <span className="hidden font-heading text-sm font-bold leading-tight text-slate-950 sm:block">
            Climatize
            <span className="block font-sans text-xs font-medium text-climatize-gray">
              Soluções em Ar Condicionado
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${active ? "text-climatize-blue" : "text-slate-700 hover:text-climatize-blue"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-climatize-blue px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-climatize-darkBlue"
          >
            Solicitar orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-900 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-slate-100 bg-white px-5 py-4 shadow-soft lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-3 text-sm font-semibold ${active ? "bg-climatize-lightBlue text-climatize-darkBlue" : "text-slate-700 hover:bg-climatize-lightBlue hover:text-climatize-darkBlue"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-md bg-climatize-blue px-4 py-3 text-center text-sm font-bold text-white"
              >
                Solicitar orçamento
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
