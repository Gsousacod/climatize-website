import { Star } from "lucide-react";
import {
  averageGoogleRating,
  reviews,
  totalGoogleReviews,
  type Review,
} from "@/data/reviews";
import { SectionHeader } from "./SectionHeader";

function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const second = parts.length > 1 ? parts[1][0] : "";
  return (first + second).toUpperCase();
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[300px] shrink-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft sm:w-[360px]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-climatize-blue text-sm font-bold text-white">
          {initialsFor(review.nome)}
        </div>
        <div className="min-w-0">
          <p className="truncate font-heading text-sm font-bold text-slate-950">
            {review.nome}
          </p>
        </div>
      </div>

      <div
        className="mt-4 flex gap-0.5"
        role="img"
        aria-label={`${review.estrelas} de 5 estrelas`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < review.estrelas
                ? "fill-amber-400 text-amber-400"
                : "fill-slate-200 text-slate-200"
            }
          />
        ))}
      </div>

      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
        {review.comentario}
      </p>

      {/* <p className="mt-4 text-xs text-slate-400">
        
      </p> */}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Avaliações"
          title="O que dizem nossos clientes"
          description="Depoimentos reais de clientes que avaliaram a Climatize no Google."
          align="center"
        />
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <div className="sr-only">
          Avaliações reais de clientes da Climatize no Google, nota{" "}
          {averageGoogleRating.toFixed(1)} de 5 em {totalGoogleReviews}{" "}
          avaliações.
        </div>

        <div className="flex w-max gap-5 animate-marquee" aria-hidden="true">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={`${review.nome}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
