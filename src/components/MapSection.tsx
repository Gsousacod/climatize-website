import { MapPin } from "lucide-react";
import { company } from "@/data/company";
import { SectionHeader } from "./SectionHeader";

function getMapEmbedSrc(mapsEmbedUrl: string) {
  const match = mapsEmbedUrl.match(/src="([^"]+)"/);
  return match ? match[1] : mapsEmbedUrl;
}

export function MapSection() {
  const mapSrc = company.mapsEmbedUrl ? getMapEmbedSrc(company.mapsEmbedUrl) : "";

  return (
    <section className="bg-climatize-softGray py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Localização" title="Nossa localização" description="Atendimento em Teófilo Otoni - MG e região." align="center" />
        <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-premium ring-1 ring-slate-100">
          {mapSrc ? (
            <iframe
              src={mapSrc}
              title="Mapa da Climatize Soluções em Ar Condicionado"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          ) : (
            <div className="flex h-[360px] flex-col items-center justify-center bg-white p-8 text-center">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-climatize-lightBlue text-climatize-blue">
                <MapPin size={28} />
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-950">Mapa em breve</h3>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">
                A localização completa será exibida aqui quando o endereço definitivo estiver configurado.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
