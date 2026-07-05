import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { company } from "@/data/company";

type CTAProps = {
  title?: string;
  text?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  primaryLabel?: string;
};

export function CTA({
  title = "Sua empresa precisa de um plano de climatização confiável?",
  text = "Fale com a Climatize e solicite uma proposta personalizada para manutenção, instalação, higienização ou PMOC.",
  primaryLabel = "Solicitar orçamento pelo WhatsApp",
  secondaryLabel,
  secondaryHref
}: CTAProps) {
  return (
    <section className="bg-climatize-softGray px-5 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-climatize-darkBlue to-climatize-blue px-6 py-14 text-center shadow-premium sm:px-10">
        <MessageCircle className="mx-auto mb-5 text-white" size={38} />
        <h2 className="text-balance font-heading text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50">
          {text}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-bold text-climatize-darkBlue shadow-soft transition hover:-translate-y-0.5 sm:inline-flex sm:w-auto"
          >
            {primaryLabel}
            <ArrowRight size={18} />
          </a>
          {secondaryLabel && secondaryHref ? (
            <Link
              href={secondaryHref}
              className="flex w-full items-center justify-center rounded-md border border-white/30 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:inline-flex sm:w-auto"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
