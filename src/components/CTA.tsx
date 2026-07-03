import { ArrowRight, MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function CTA() {
  return (
    <section className="bg-climatize-softGray px-5 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-md bg-gradient-to-br from-climatize-darkBlue to-climatize-blue px-6 py-14 text-center shadow-premium sm:px-10">
        <MessageCircle className="mx-auto mb-5 text-white" size={38} />
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">Sua empresa precisa de um plano de climatização confiável?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-50">
          Fale com a Climatize e solicite uma proposta personalizada para manutenção, instalação, higienização ou PMOC.
        </p>
        <a href={company.whatsappUrl} className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-4 text-sm font-bold text-climatize-darkBlue shadow-soft transition hover:-translate-y-0.5">
          Solicitar orçamento pelo WhatsApp
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
