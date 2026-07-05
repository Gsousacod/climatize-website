import Image from "next/image";

type InternalHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function InternalHero({ eyebrow, title, description }: InternalHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-climatize-darkBlue via-climatize-blue to-climatize-darkBlue pt-32">
      <Image
        src="/images/differentials-manutencao.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-climatize-darkBlue/90 via-climatize-blue/80 to-climatize-darkBlue/95" />
      <div className="air-line absolute left-0 top-36 h-px w-full rotate-[-2deg] opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 lg:px-8">
        <div className="max-w-4xl">
          {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-climatize-accentLight">{eyebrow}</p> : null}
          <h1 className="text-balance font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">{description}</p>
        </div>
      </div>
    </section>
  );
}
