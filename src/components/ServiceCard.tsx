"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { company } from "@/data/company";
import { fadeUp } from "@/lib/animations";
import { getServiceIcon } from "@/lib/service-icons";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  detailed?: boolean;
};

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const Icon = getServiceIcon(service.icon);
  const isAccent = service.slug === "higienizacao" || service.slug === "pmoc";

  return (
    <motion.article variants={fadeUp} whileHover={{ y: -6 }} className="group rounded-2xl border border-slate-100 bg-white p-6 transition hover:shadow-premium">
      <span
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition ${
          isAccent
            ? "bg-climatize-accentLight text-climatize-accentDark group-hover:bg-climatize-accent group-hover:text-white"
            : "bg-climatize-lightBlue text-climatize-blue group-hover:bg-climatize-blue group-hover:text-white"
        }`}
      >
        <Icon size={25} />
      </span>
      <h3 className="font-heading text-xl font-bold leading-snug text-slate-950">{service.shortTitle}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>

      {detailed ? (
        <ul className="mt-5 grid gap-2">
          {service.benefits.slice(0, 5).map((benefit) => (
            <li key={benefit} className="flex gap-2 text-sm font-medium text-slate-700">
              <CheckCircle2 className="mt-0.5 shrink-0 text-climatize-blue" size={16} />
              {benefit}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href={service.href} className="inline-flex items-center justify-center gap-2 rounded-md border border-climatize-blue/20 px-4 py-3 text-sm font-bold text-climatize-darkBlue transition hover:border-climatize-blue hover:bg-climatize-lightBlue">
          Saiba mais
          <ArrowRight size={16} />
        </Link>
        {detailed ? (
          <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-climatize-blue px-4 py-3 text-sm font-bold text-white transition hover:bg-climatize-darkBlue">
            Solicitar orçamento
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
